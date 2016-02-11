(function (global) {
    var GirlGachaSprite = Class.create(Sprite, {
        initialize: function (girlType, x, y) {
            Sprite.call(this, GIRL_GACHA_WIDTH, GIRL_GACHA_HEIGHT);
            this.image = assets[PATH.GIRL[girlType].MAIN];
            this.x = x;
            this.y = y;
            this.girlType = girlType;
        }
    });

    global.GirlGachaSprite = GirlGachaSprite;
}(window));