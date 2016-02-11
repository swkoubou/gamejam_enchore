(function (global) {
    var GirlUISprite = Class.create(Sprite, {
        initialize: function (girlType, x, y) {
            Sprite.call(this, GIRL_UI_WIDTH, GIRL_UI_HEIGHT);
            this.image = assets[PATH.GIRL[girlType].UI];
            this.x = x;
            this.y = y;
            this.girlType = girlType;
        }
    });

    global.GirlUISprite = GirlUISprite;
}(window));