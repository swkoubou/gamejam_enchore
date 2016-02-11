(function (global) {
    var TouchScene = Class.create(Scene, {
        initialize: function (status, girls) {
            Scene.call(this);

            this.status = status;
            this.girls = girls;

            // label
            this.girlTalkLabel = new GirlTalkLabel();

            // heart gauge
            var heartGaugeSprites = _.fromPairs(LOVE_TOUCH_SECTION.map(function (percentage) {
                return [percentage, new HeartGaugeSprite(percentage)];
            }));
            this.heartGaugeGroup = new HeartGaugeGroup(heartGaugeSprites);
            // 0%で初期化
            this.heartGaugeGroup.updatePercentage('p0');

            // touch hearts
            this.touchHeartGroup = new TouchHeartGroup();

            // gacha
            this.gacha = new Sprite(GAUGE_WIDTH, GAUGE_HEIGHT);
            this.gacha.image = assets[PATH.GACHA.MAIN];
            this.gacha.x = 0;
            this.gacha.y = 300;

            // lovePointが100%でガチャタッチ時にイベント発火
            var e = new enchant.Event('gachaSuccessTouchEnd');
            this.gacha.addEventListener('touchend', function () {
                if (this.status.lovePoint >= 100) {
                    this.dispatchEvent(e);
                }
            }.bind(this));

            // slider
            this.sidebar = new Sprite(SIDE_BAR_WIDTH, SIDE_BAR_HEIGHT);
            this.sidebar.image = assets[PATH.SIDE_BAR];
            this.sidebar.x = 800;

            // active girl の表示用グループ
            this.activeGirlGroup = new Group();
            this.activeGirlGroup.addChild(status.activeGirl.mainSprite);

            // 表示する順に追加
            this.addChild(this.sidebar);
            this.addChild(this.activeGirlGroup);
            this.addChild(this.heartGaugeGroup);
            this.addChild(this.gacha);
            this.addChild(this.girlTalkLabel);
            this.addChild(this.touchHeartGroup);

            // サイドバーに有効な女の子UI表示
            _.forEach(girls, function (girl) {
                //if (girl.enabled) {
                    this.addChild(girl.uiSprite);
                //}
            }.bind(this));

            // サイドバー表示切替
            _.forEach(girls, function (girl) {
                girl.uiSprite.addEventListener('touchend', this.replaceCostume.bind(this, girl));
            }.bind(this));

            // メインガールをタッチしたときのタッチ増加処理
            _.forEach(girls, function (girl) {
                girl.mainSprite.addEventListener('touchend', function (e) {
                    this.addLovePoint();

                    // リアクションハート処理
                    this.touchHeartGroup.bubbleHeart(e.localX, e.localY);
                }.bind(this));
            }.bind(this));
        },

        reinit: function () {
            this.girlTalkLabel.text = '';
            this.heartGaugeGroup.updatePercentage('p0');
            this.touchHeartGroup.clearHearts();
        },

        // 着せ替える
        replaceCostume: function (girl) {
            //if (!girl.enabled) { return; }
            if (girl === this.status.activeGirl) { return; }
            if (this.status.activeGirl) {
                this.activeGirlGroup.removeChild(this.status.activeGirl.mainSprite);
            }
            this.status.activeGirl = girl;
            this.activeGirlGroup.addChild(this.status.activeGirl.mainSprite);
        },

        // ラブポイント増加
        addLovePoint: function () {
            this.status.lovePoint += 1;
            var key = 'p' + this.status.lovePoint; // 33 -> 'p33'

            if (_.includes(LOVE_TOUCH_SECTION, key)) {
                // ハートゲージ処理
                this.heartGaugeGroup.updatePercentage(key);
                // 喋る
                this.girlTalkLabel.text = _.sample(LOVE_TOUCH_SAY_TEXT);
            }
        }
    });

    global.TouchScene = TouchScene;
}(window));