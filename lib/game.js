window.onload = function () {
    var game = new Core(TOP_WIDTH, TOP_HEIGHT);
    window.game = game;
    window.assets = game.assets;
    game.fps = 16;
    game.preload(PRELOAD);

    game.onload = function () {
        var scene = new Scene();

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

        //function gacha_init() {
        //    LOVE_POINT = 0;
        //    game.pushScene(game.gachaScene());
        //    hartgauge0.image = assets[HART_GAUGE_0];
        //    scene.addChild(hartgauge0);
        //    scene.removeChild(hartgauge100);
        //    scene.removeChild(girltalktext);
        //}

        var touchScene = new TouchScene(status, girls);
        game.pushScene(touchScene);
    };

    //game.gachaScene = function () {
    //    /**
    //     * ガチャ画面
    //     * プレイヤーからの入力を待つ
    //    **/
    //    var scene = Scene();    // initialize scene
    //    scene.backgroundColor = 'white';
    //
    //    // gacha machine
    //    var gachaMachine = new Sprite(301, 301);
    //    gachaMachine.image = game.assets[GATHA_FIRST];
    //    gachaMachine.x = 210;
    //    gachaMachine.y = 210;
    //    gachaMachine.frame = 0;
    //    scene.addChild(gachaMachine);
    //    // gacha machine button
    //    var gachaMachineButton = new Sprite(155, 137);
    //    gachaMachineButton.image = game.assets[GATHA_HART];
    //    gachaMachineButton.x = 282;
    //    gachaMachineButton.y = 291;
    //    gachaMachineButton.frame = 0;
    //    scene.addChild(gachaMachineButton);
    //
    //    var infoText = new Label('ハートのボタンをクリック！');
    //    scene.addChild(infoText);
    //
    //    // ガチャマシーン実行ボタンイベント
    //    gachaMachineButton.addEventListener('touchend', function () {
    //        game.replaceScene(game.gachaScene2());
    //    });
    //
    //    return scene;
    //};
    //
    //game.gachaScene2 = function () {
    //    /**
    //     * ガチャ画面2
    //     * 入力後のアニメーション
    //    **/
    //    var scene = Scene();    // initialize scene
    //    scene.backgroundColor = 'white';
    //
    //    // gacha machine
    //    var gachaMachine = new Sprite(301, 301);
    //    gachaMachine.image = game.assets[GATHA_FIRST];
    //    gachaMachine.x = 210;
    //    gachaMachine.y = 210;
    //    gachaMachine.frame = 0;
    //    scene.addChild(gachaMachine);
    //    // gacha machine button
    //    var gachaMachineButton = new Sprite(155, 137);
    //    gachaMachineButton.image = game.assets[GATHA_HART];
    //    gachaMachineButton.x = 282;
    //    gachaMachineButton.y = 291;
    //    gachaMachineButton.frame = 0;
    //    scene.addChild(gachaMachineButton);
    //
    //    gachaMachine.tl.delay(10).rotateBy(360, 20);
    //    gachaMachineButton.tl.scaleTo(0, 30).and().fadeOut(10).then( function () {
    //        game.replaceScene(game.gachaResultScene());
    //    });
    //
    //    return scene;
    //};
    //
    //game.gachaResultScene = function (girls) {
    //    /**
    //     * ガチャ結果表示画面
    //     * ガチャの結果を表示する
    //    **/
    //    var scene = Scene();    // initialize scene
    //    scene.backgroundColor = 'white';
    //
    //    var type = _.sample(GACHA_BOX);
    //    scene.addChild(girls[type].gachaSprite);
    //
    //    scene.addEventListener('touchend', function () {
    //        game.popScene();
    //    });
    //    return scene;
    //};

    game.start();
};
