(function (global) {
    var HeartGaugeGroup = Class.create(Group, {
        initialize: function (heartSprites) {
            Group.call(this);
            this.heartSprites = heartSprites;
            this.displayedSprite = null;
        },

        updatePercentage: function (percentage) {
            if (this.displayedSprite) {
                this.removeChild(this.displayedSprite);
            }
            this.displayedSprite = this.heartSprites[percentage];
            this.addChild(this.displayedSprite);
        }
    });

    global.HeartGaugeGroup = HeartGaugeGroup;
}(window));