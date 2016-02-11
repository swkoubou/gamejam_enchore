(function (global) {
    function Girl(type, enabled, mainSprite, uiSprite, gachaSprite) {
        this.type = type;
        this.enabled = enabled;
        this.mainSprite = mainSprite;
        this.uiSprite = uiSprite;
        this.gachaSprite = gachaSprite;
    }

    Girl.TYPE = {
        ONE_PIECE: 'ONE_PIECE',
        SUMMER_UNIFORM: 'SUMMER_UNIFORM',
        WINTER_UNIFORM: 'WINTER_UNIFORM',
        KIMONO_PURPLE: 'KIMONO_PURPLE',
        KIMONO_GRAY: 'KIMONO_GRAY',
        KIMONO_RED: 'KIMONO_RED',
        MAID_BLUE: 'MAID_BLUE',
        MAID_GREEN: 'MAID_GREEN',
        MAID_PINK: 'MAID_PINK',
        OLD_SWIMSUIT: 'OLD_SWIMSUIT',
        OLD_SWIMSUIT_R18: 'OLD_SWIMSUIT_R18'
    };

    global.Girl = Girl;
}(window));