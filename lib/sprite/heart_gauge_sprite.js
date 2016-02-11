(function (global) {
    var HeartGaugeSprite = Class.create(Sprite, {
        initialize: function (percentage) {
            Sprite.call(this, GAUGE_WIDTH, GAUGE_HEIGHT);
            this.image = assets[PATH.HEART_GAUGE[percentage]];
        }
    });

    global.HeartGaugeSprite = HeartGaugeSprite;
}(window));