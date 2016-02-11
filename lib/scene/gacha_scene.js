(function (global) {
    // 開始           : gachaStart
    // ガチャガチャ   : gachaAnimation
    // ガチャリザルト : gachaResult
    var GachaScene = Class.create(Scene, {
        initialize: function (status, girls) {
            Scene.call(this);

            this.status = status;
            this.girls = girls;
            this.backgroundColor = GACHA_BACKGROUND_COLOR;

            // gacha machine
            var gachaMachine = new Sprite(301, 301);
            gachaMachine.image = assets[PATH.GACHA.FIRST];
            gachaMachine.x = 210;
            gachaMachine.y = 210;
            gachaMachine.frame = 0;
            this.gachaMachine = gachaMachine;

            // gacha machine button
            var gachaMachineButton = new Sprite(155, 137);
            gachaMachineButton.image = assets[PATH.GACHA.HEART];
            gachaMachineButton.x = 282;
            gachaMachineButton.y = 291;
            gachaMachineButton.frame = 0;
            this.gachaMachineButton = gachaMachineButton;

            // ガチャマシーン実行ボタンイベント
            gachaMachineButton.addEventListener('touchend', function () {
                this.gachaAnimation();
            }.bind(this));

            // 終了イベントの生成
            this.gachaEndedEvent = new enchant.Event('gachaEnded');

            this.infoText = new Label('ハートのボタンをクリック！');

            this.gachaStart();
        },

        gachaStart: function () {
            this.allRemoveChild();
            this.addChild(this.gachaMachine);
            this.addChild(this.gachaMachineButton);
            this.addChild(this.infoText);
        },

        gachaAnimation: function () {
            this.allRemoveChild();
            this.addChild(this.gachaMachine);
            this.addChild(this.gachaMachineButton);

            this.gachaMachine.tl.delay(10).rotateBy(360, 20);
            this.gachaMachineButton.tl.scaleTo(0, 30).and().fadeOut(10).then(function () {
                this.gachaResult();
            }.bind(this));
        },

        gachaResult: function () {
            this.allRemoveChild();

            var resultCostume = _.sample(GACHA_BOX);
            this.addChild(this.girls[resultCostume].gachaSprite);
            this.girls[resultCostume].enabled = true;
            this.status.lovePoint = 0;

            this.addEventListener('touchend', function () {
                this.allRemoveChild();
                this.dispatchEvent(this.gachaEndedEvent);
            }.bind(this));
        },

        allRemoveChild: function () {
            while (this.childNodes.length) {
                this.removeChild(this.childNodes[0]);
            }
        }
    });

    global.GachaScene = GachaScene;
}(window));