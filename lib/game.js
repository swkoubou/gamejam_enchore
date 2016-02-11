window.onload = function () {
    var game = new Core(TOP_WIDTH, TOP_HEIGHT);
    window.game = game;
    window.assets = game.assets;
    game.fps = 16;
    game.preload(PRELOAD);

    game.onload = function () {
        var status = {
            lovePoint: 0,
            activeGirl: null
        };

        // 女の子オブジェクトの生成
        // girls[Girl.Type.ONE_PIECE] = one piece instance
        // girls[Girl.Type.ONE_PIECE].mainSprite
        // girls[Girl.Type.ONE_PIECE].uiSprite
        var girls = _.fromPairs(_.values(Girl.TYPE).map(function (girlType, i) {
            var mainSprite = new GirlMainSprite(girlType, GIRL_MAIN_BASE_X, GIRL_MAIN_BASE_Y);
            var uiSprite = new GirlUISprite(girlType, GIRL_UI_BASE_X, GIRL_UI_BASE_Y + GIRL_UI_BASE_Y_K * i);
            var gachaSprite = new GirlGachaSprite(girlType, 0, 0);
            return [girlType, new Girl(girlType, false, mainSprite, uiSprite, gachaSprite)];
        }));

        // one piece は初期状態で有効し、アクティブにする
        girls[Girl.TYPE.ONE_PIECE].enabled = true;
        status.activeGirl = girls[Girl.TYPE.ONE_PIECE].mainSprite;

        var gacha_first = new Sprite(301, 300);
        var gacha_splight = new Sprite(4809, 301);
        var gacha_hart = new Sprite(155, 137);

        //var touchScene = new TouchScene(status, girls);
        //game.pushScene(touchScene);
        var gachaScene = new GachaScene(status, girls);
        game.pushScene(gachaScene);
    };

    game.start();
};
