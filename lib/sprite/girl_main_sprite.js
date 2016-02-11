(function (global) {
    var GirlMainSprite = Class.create(Sprite, {
        initialize: function (girlType, x, y) {
            Sprite.call(this, GIRL_MAIN_WIDTH, GIRL_MAIN_HEIGHT);
            this.image = assets[PATH.GIRL[girlType].MAIN];
            this.x = x;
            this.y = y;
            this.girlType = girlType;
        }
    });

    global.GirlMainSprite = GirlMainSprite;
}(window));