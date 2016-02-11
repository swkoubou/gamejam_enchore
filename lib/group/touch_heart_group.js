(function (global) {
    var TouchHeartGroup = Class.create(Group, {
        initialize: function () {
            Group.call(this);
            this.hearts = [];
            this.addEventListener('enterframe', this.fadeOutHearts.bind(this))
        },

        bubbleHeart: function (x, y) {
            var newHearts = this.createReactionHeart(x, y);
            this.addChild(newHearts.big);
            this.addChild(newHearts.mini);
            this.hearts.push(newHearts.big);
            this.hearts.push(newHearts.mini);
        },

        fadeOutHearts: function () {
            // 保持するすべてのHeartSpriteに関して、透明化処理を行う
            // 不透明度0%になったら、グループから削除し、監視対象からも外す
            this.hearts = this.hearts.filter(function (heart) {
                if (--heart.waitDecrementOpacity <= 0) {
                    heart.opacity -= LOVE_HEART_DECREMENT_OPACITY_RATE;
                    if (heart.opacity <= 0) {
                        this.removeChild(heart);
                        return false;
                    }
                }
                return true;
            }.bind(this));
        },

        createReactionHeart: function (x, y) {
            var bigHeart = new Sprite(BIG_HEART_WIDTH, BIG_HEART_HEIGHT);
            bigHeart.image = assets[PATH.REACTION.BIG];
            bigHeart.frame = 3;
            bigHeart.x = x - Math.floor(Math.random() * (130 - 45) + 45);
            bigHeart.y = y - Math.floor(Math.random() * (160 - 85) + 85);
            bigHeart.waitDecrementOpacity = LOVE_HEART_DECREMENT_OPACITY_WAIT;

            var miniHeart = new Sprite(MINI_HEART_WIDTH, MINI_HEART_HEIGHT);
            miniHeart.image = assets[PATH.REACTION.MINI];
            miniHeart.frame = 3;
            miniHeart.x = x - Math.floor(Math.random() * (80 - 20) + 20);
            miniHeart.y = y - Math.floor(Math.random() * (110 - 55) + 55);
            miniHeart.waitDecrementOpacity = LOVE_HEART_DECREMENT_OPACITY_WAIT;

            return {big: bigHeart, mini: miniHeart};
        }
    });

    global.TouchHeartGroup = TouchHeartGroup;
}(window));