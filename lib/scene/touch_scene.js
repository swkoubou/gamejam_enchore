(function (global) {
    var TouchScene = Class.create(Scene, {
        initialize: function (status, girls) {
            Scene.call(this);

            var girlTalkLabel = new GirlTalkLabel();

            // heart gauge
            var heartGaugeSprites = _.fromPairs(LOVE_TOUCH_SECTION.map(function (percentage) {
                return [percentage, new HeartGaugeSprite(percentage)];
            }));
            var heartGaugeGroup = new HeartGaugeGroup(heartGaugeSprites);
            // 0%で初期化
            heartGaugeGroup.updatePercentage('p0');

            // touch hearts
            var touchHeartGroup = new TouchHeartGroup();

            // gacha
            var gacha = new Sprite(GAUGE_WIDTH, GAUGE_HEIGHT);
            gacha.image = assets[PATH.GACYA.MAIN];
            gacha.x = 0;
            gacha.y = 300;

            // lovePointが100%でガチャタッチ時にイベント発火
            var e = new enchant.Event('gachaSuccessTouchEnd');
            gacha.addEventListener('touchend', function () {
                if (status.lovePoint >= 100) {
                    this.dispatchEvent(e);
                }
            }.bind(this));

            // slider
            var sidebar = new Sprite(SIDE_BAR_WIDTH, SIDE_BAR_HEIGHT);
            sidebar.image = assets[PATH.SIDE_BAR];
            sidebar.x = 800;

            // 表示する順に追加
            this.addChild(sidebar);
            this.addChild(status.activeGirl);
            this.addChild(heartGaugeGroup);
            this.addChild(gacha);
            this.addChild(girlTalkLabel);
            this.addChild(touchHeartGroup);

            // サイドバーに有効な女の子UI表示
            _.forEach(girls, function (girl) {
                if (girl.enabled) {
                    this.addChild(girl.uiSprite);
                }
            }.bind(this));

            // サイドバー表示切替
            _.forEach(girls, function (girl) {
                girl.uiSprite.addEventListener('touchend', function () {
                    // 着せ替える
                    if (!girl.enabled) { return; }
                    if (status.activeGirl) {
                        this.removeChild(status.activeGirl)
                    }
                    status.activeGirl = girl.mainSprite;
                    this.addChild(status.activeGirl);
                }.bind(this));
            }.bind(this));

            // メインガールをタッチしたときのタッチ増加処理
            _.forEach(girls, function (girl) {
                girl.mainSprite.addEventListener('touchend', function (e) {
                    status.lovePoint++;
                    var key = 'p' + status.lovePoint; // 33 -> 'p33'

                    if (_.includes(LOVE_TOUCH_SECTION, key)) {
                        // ハートゲージ処理
                        heartGaugeGroup.updatePercentage(key);
                        // 喋る
                        girlTalkLabel.text = _.sample(LOVE_TOUCH_SAY_TEXT);
                    }

                    // リアクションハート処理
                    touchHeartGroup.bubbleHeart(e.localX, e.localY);
                });
            });
        }
    });

    global.TouchScene = TouchScene;
}(window));