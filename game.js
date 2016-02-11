window.onload = function () {
    var game = new Core(WIDTH, HEIGHT);
    window.game = game;
    window.assets = game.assets;
    game.fps = 16;
    game.preload(PRELOAD);
    game.onload = function () {
        var scene = new Scene();    // シーン

        /* 画像初期化設定 */
        var maingirl = new Sprite(600, 1200);
        var wintergirl = new Sprite(600, 1200);
        var summergirl = new Sprite(600, 1200);
        var kimono_purplegirl = new Sprite(600, 1200);
        var kimono_graygirl = new Sprite(600, 1200);
        var kimono_redgirl = new Sprite(600, 1200);
        var maid_bluegirl = new Sprite(600, 1200);
        var maid_greengirl = new Sprite(600, 1200);
        var maid_pinkgirl = new Sprite(600, 1200);
        var oldswimgirl = new Sprite(600, 1200);
        var oldswimgirl_r18 = new Sprite(600, 1200);

        var hartgauge0 = new Sprite(300, 300);
        var hartgauge60 = new Sprite(300, 300);
        var hartgauge100 = new Sprite(300, 300);

        var gatya = new Sprite(300, 300);
        var sidebar = new Sprite(90, 1200);

        var defaultonepiece = new Sprite(64, 64);
        var normalsummer = new Sprite(64, 64);
        var normalwinter = new Sprite(64, 64);
        var kimono_purple = new Sprite(64, 64);
        var kimono_gray = new Sprite(64, 64);
        var kimono_red = new Sprite(64, 64);
        var maid_blue = new Sprite(64, 64);
        var maid_green = new Sprite(64, 64);
        var maid_pink = new Sprite(64, 64);
        var oldswimsuit = new Sprite(64, 64);
        var oldswimsuit_r18 = new Sprite(64, 64);

        var gacha_first = new Sprite(301, 300);
        var gacha_splight = new Sprite(4809, 301);
        var gacha_hart = new Sprite(155, 137);

        var girltalktext = new Label();

        maingirl.image = assets[MAIN_GIRL];
        maingirl.x = 200;

        wintergirl.image = assets[MAIN_GIRL_WINTER];
        wintergirl.x = 200;

        summergirl.image = assets[MAIN_GIRL_SUMMER];
        summergirl.x = 200;

        kimono_purplegirl.image = assets[MAIN_GIRL_KIMONO_PURPLE];
        kimono_purplegirl.x = 200;

        kimono_graygirl.image = assets[MAIN_GIRL_KIMONO_GRAY];
        kimono_graygirl.x = 200;

        kimono_redgirl.image = assets[MAIN_GIRL_KIMONO_RED];
        kimono_redgirl.x = 200;

        maid_bluegirl.images = assets[MAIN_GIRL_MAID_BLUE];
        maid_bluegirl.x = 200;

        maid_greengirl.image = assets[MAIN_GIRL_MAID_GREEN];
        maid_greengirl.x = 200;

        maid_pinkgirl.image = assets[MAIN_GIRL_MAID_PINK];
        maid_pinkgirl.x = 200;

        oldswimgirl.image = assets[MAIN_GIRL_OLD_SWIMSUIT];
        oldswimgirl.x = 200;

        oldswimgirl_r18 = assets[MAIN_GIRL_OLD_SWIMSUIT_R18];
        oldswimgirl_r18.x = 200;

        hartgauge0.image = assets[HART_GAUGE_0];
        hartgauge60.image = assets[HART_GAUGE_60];
        hartgauge100.image = assets[HART_GAUGE_100];

        gatya.image = assets[GATYA];
        gatya.y = 300;

        sidebar.image = assets[SIDE_BAR];
        sidebar.x = 800;

        defaultonepiece.image = assets[DEFAULT_ONEPIECE];
        defaultonepiece.x = 810;
        normalsummer.image = assets[NORMAL_SUMMER_UNIFORM];
        normalsummer.x = 810;
        normalsummer.y = 80;
        normalwinter.image = assets[NORMAL_WINTER_UNIFORM];
        normalwinter.x = 810;
        normalwinter.y = 160;
        kimono_purple.image = assets[KIMONO_PURPLE];
        kimono_purple.x = 810;
        kimono_purple.y = 240;
        kimono_gray.image = assets[KIMONO_GRAY];
        kimono_gray.x = 810;
        kimono_gray.y = 320;
        kimono_red.image = assets[KIMONO_RED];
        kimono_red.x = 810;
        kimono_red.y = 400;
        maid_blue.image = assets[MAID_BLUE];
        maid_blue.x = 810;
        maid_blue.y = 480;
        maid_green.image = assets[MAID_GREEN];
        maid_green.x = 810;
        maid_green.y = 560;
        maid_pink.image = assets[MAID_PINK];
        maid_pink.x = 810;
        maid_pink.y = 640;
        oldswimsuit.image = assets[SUPERRARE_OLD_SWIMSUIT];
        oldswimsuit.x = 810;
        oldswimsuit.y = 720;
        oldswimsuit_r18.image = assets[OLD_SWIMSIT_R18];
        oldswimsuit_r18.x = 810;
        oldswimsuit_r18.y = 800;


        girltalktext.x = 700;
        girltalktext.y = 500;
        girltalktext.color = 'black';
        girltalktext.font = '40px "Arial"';
        girltalktext.text = 'くすぐったいですよ';

        gacha_hart.image = assets[GATHA_HART];

        scene.addChild(maingirl);
        scene.addChild(hartgauge0);
        scene.addChild(gatya);
        scene.addChild(sidebar);
        
        // サイドバー表示切替
        scene.addEventListener('enterframe', function () {
            if(COSTUME_FLAGS.defaultonepiece == true) {
                scene.addChild(defaultonepiece);
                defaultonepiece.addEventListener('touchstart', function () {
                    scene.addChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.normalsummer == true) {
                scene.addChild(normalsummer);
                normalsummer.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.addChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.normalwinter == true) {
                scene.addChild(normalwinter);
                normalwinter.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.addChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.kimono_purple == true) {
                scene.addChild(kimono_purple);
                kimono_purple.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.addChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.kimono_gray == true) {
                scene.addChild(kimono_gray);
                kimono_gray.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.addChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.kimono_red == true) {
                scene.addChild(kimono_red);
                kimono_red.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.addChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.maid_blue == true) {
                scene.addChild(maid_blue);
                maid_blue.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.addChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.maid_green == true) {
                scene.addChild(maid_green);
                maid_green.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.addChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.maid_pink == true) {
                scene.addChild(maid_pink);
                maid_pink.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.addChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.oldswimsuit == true) {
                scene.addChild(oldswimsuit);
                oldswimsuit.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.addChild(oldswimgirl);
                    scene.removeChild(oldswimgirl_r18);
                });
            }
            if(COSTUME_FLAGS.oldswimsuit_r18 == true) {
                scene.addChild(oldswimsuit_r18);
                oldswimsuit_r18.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(summergirl);
                    scene.removeChild(kimono_purplegirl);
                    scene.removeChild(kimono_graygirl);
                    scene.removeChild(kimono_redgirl);
                    scene.removeChild(maid_bluegirl);
                    scene.removeChild(maid_greengirl);
                    scene.removeChild(maid_pinkgirl);
                    scene.removeChild(oldswimgirl);
                    scene.addChild(oldswimgirl_r18);
                });
            }
            /*
            if(COSTUME_FLAGS.normal_summer_uniform == true){
                scene.addChild(normalsummer);
                normalsummer.addEventListener('touchstart', function () {
                    scene.removeChild(wintergirl);
                    scene.removeChild(whitegirl);
                    scene.removeChild(kimonogirl);
                    scene.removeChild(oldswimgirl);
                    scene.addChild(maingirl);
                });
            }
            if(COSTUME_FLAGS.normal_winter_uniform == true){
                scene.addChild(normalwinter);
                normalwinter.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(whitegirl);
                    scene.removeChild(kimonogirl);
                    scene.removeChild(oldswimgirl);
                    scene.addChild(wintergirl)
                });
            }
            if(COSTUME_FLAGS.rare_kimono == true){
                scene.addChild(kimono);
                kimono.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(whitegirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(oldswimgirl);
                    scene.addChild(kimonogirl);
                });
            }
            if(COSTUME_FLAGS.superrare_old_swimsuit == true){
                scene.addChild(oldswimsuit);
                oldswimsuit.addEventListener('touchstart', function () {
                    scene.removeChild(maingirl);
                    scene.removeChild(kimonogirl);
                    scene.removeChild(wintergirl);
                    scene.removeChild(whitegirl);
                    scene.addChild(oldswimgirl);
                });
            }
            */
        });

        maingirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            maingirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        wintergirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            wintergirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        summergirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            summergirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        kimono_purplegirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            kimono_purplegirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        kimono_graygirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            kimono_graygirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        kimono_redgirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            kimono_redgirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        maid_bluegirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            maid_bluegirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        maid_greengirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            maid_greengirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        maid_pinkgirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            maid_pinkgirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        oldswimgirl_r18.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            oldswimgirl_r18.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        oldswimgirl.addEventListener('touchstart', function (e) {
            LOVE_POINT ++;
            if(LOVE_POINT == 33){
                var hartgauge30 = new Sprite(300, 300);
                hartgauge30.image = assets[HART_GAUGE_30];
                scene.addChild(hartgauge30);
                scene.removeChild(hartgauge0);
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 66){
                var hartgauge60 = new Sprite(300, 300);
                hartgauge60.image = assets[HART_GAUGE_60];
                scene.addChild(hartgauge60);
                scene.removeChild(hartgauge30);
                girltalktext.text = "も～、しょうがないですね";
                scene.addChild(girltalktext);
            }
            if(LOVE_POINT == 100){
                var hartgauge100 = new Sprite(300, 300);
                hartgauge100.image = assets[HART_GAUGE_100];
                scene.addChild(hartgauge100);
                scene.removeChild(hartgauge60);
                girltalktext.text = "ふふふっ";
                scene.addChild(girltalktext);
            }

            var minihart = new Sprite(54, 50);
            var bighart = new Sprite(80, 80);

            minihart.image = assets[REACTINO_MINI_HART_PINK];
            minihart.frame = 3;
            bighart.image = assets[REACTINO_BIG_HART_PINK];
            bighart.frame = 3;

            var x = e.localX;
            var y = e.localY;
            var vx = x - minihart.x;
            var vy = y - minihart.y;

            minihart.x = vx - Math.floor(Math.random() * (80 - 20) + 20);
            minihart.y = vy - Math.floor(Math.random() * (110 - 55) + 55);
            bighart.x = vx - Math.floor(Math.random() * (130 - 45) + 45);
            bighart.y = vy - Math.floor(Math.random() * (160 - 85) + 85);

            scene.addChild(minihart);
            scene.addChild(bighart);

            oldswimgirl.ontouchstart = function(){
                minihart.onenterframe = function(){
                    minihart.opacity  -= 0.25;
                    if(minihart.opacity <= 0){
                        this.parentNode.removeChild(minihart);
                    }
                };
                bighart.onenterframe = function(){
                    bighart.opacity  -= 0.25;
                    if(bighart.opacity <= 0){
                        this.parentNode.removeChild(bighart);
                    }
                };
            };
        });

        gatya.addEventListener('touchend', function () {
            if(LOVE_POINT >= 100) {
                gacha_init();
            }
        });

        function gacha_init() {
            LOVE_POINT = 0;
            game.pushScene(game.gachaScene());
            hartgauge0.image = assets[HART_GAUGE_0];
            scene.addChild(hartgauge0);
            scene.removeChild(hartgauge100);
            scene.removeChild(girltalktext);
        }




        //gatya.addEventListener('touchstart', function (e) {
        //    //var gachascene = new Scene();
        //    scene.backgroundColor = 'red';
        //    gacha_splight.x  = 210;
        //    gacha_splight.y = 210;
        //    gacha_splight.frame = 0;
        //    scene.addChild(gacha_splight);
        //
        //    gacha_hart.x = 282;
        //    gacha_hart.y = 291;
        //    gacha_hart.frame = 0;
        //    scene.addChild(gacha_hart);
        //});

        game.pushScene(scene);
    };

    game.gachaScene = function () {
        /**
         * ガチャ画面
         * プレイヤーからの入力を待つ
        **/
        var scene = Scene();    // initialize scene
        scene.backgroundColor = 'white';

        // gacha machine
        var gachaMachine = new Sprite(301, 301);
        gachaMachine.image = game.assets[GATHA_FIRST];
        gachaMachine.x = 210;
        gachaMachine.y = 210;
        gachaMachine.frame = 0;
        scene.addChild(gachaMachine);
        // gacha machine button
        var gachaMachineButton = new Sprite(155, 137);
        gachaMachineButton.image = game.assets[GATHA_HART];
        gachaMachineButton.x = 282;
        gachaMachineButton.y = 291;
        gachaMachineButton.frame = 0;
        scene.addChild(gachaMachineButton);

        var infoText = new Label('ハートのボタンをクリック！');
        scene.addChild(infoText);

        // ガチャマシーン実行ボタンイベント
        gachaMachineButton.addEventListener('touchend', function () {
            game.replaceScene(game.gachaScene2());
        });

        return scene;
    };

    game.gachaScene2 = function () {
        /**
         * ガチャ画面2
         * 入力後のアニメーション
        **/
        var scene = Scene();    // initialize scene
        scene.backgroundColor = 'white';

        // gacha machine
        var gachaMachine = new Sprite(301, 301);
        gachaMachine.image = game.assets[GATHA_FIRST];
        gachaMachine.x = 210;
        gachaMachine.y = 210;
        gachaMachine.frame = 0;
        scene.addChild(gachaMachine);
        // gacha machine button
        var gachaMachineButton = new Sprite(155, 137);
        gachaMachineButton.image = game.assets[GATHA_HART];
        gachaMachineButton.x = 282;
        gachaMachineButton.y = 291;
        gachaMachineButton.frame = 0;
        scene.addChild(gachaMachineButton);

        gachaMachine.tl.delay(10).rotateBy(360, 20);
        gachaMachineButton.tl.scaleTo(0, 30).and().fadeOut(10).then( function () {
            game.replaceScene(game.gachaResultScene());
        });

        return scene;
    };

    game.gachaResultScene = function () {
        /**
         * ガチャ結果表示画面
         * ガチャの結果を表示する
        **/
        var scene = Scene();    // initialize scene
        scene.backgroundColor = 'white';

        // 乱数でごにょごにょ 1/100
        var costume = '';
        var rand = Math.floor( Math.random() * 100) + 1;
        if(rand > 90) {         // 10% スク水
            costume = MAIN_GIRL_OLD_SWIMSUIT;
            COSTUME_FLAGS.oldswimsuit= true;
        }else if(rand > 80) {   // 20% 着物
            costume = MAIN_GIRL;
            COSTUME_FLAGS.defaultonepiece= true;
        }else if(rand > 70) {   // 20% 着物
            costume = MAIN_GIRL_SUMMER;
            COSTUME_FLAGS.normalsummer= true;
        }else if(rand > 60) {   // 20% 着物
            costume = MAIN_GIRL_WINTER;
            COSTUME_FLAGS.normalwinter= true;
        }else if(rand > 50) {   // 20% 着物
            costume = MAIN_GIRL_KIMONO_PURPLE;
            COSTUME_FLAGS.kimono_purple= true;
        }else if(rand > 40) {   // 20% 着物
            costume = MAIN_GIRL_KIMONO_GRAY;
            COSTUME_FLAGS.kimono_gray= true;
        }else if(rand > 30) {   // 20% 着物
            costume = MAIN_GIRL_KIMONO_RED;
            COSTUME_FLAGS.kimono_red= true;
        }else if(rand > 20) {   // 20% 着物
            costume = MAIN_GIRL_MAID_BLUE;
            COSTUME_FLAGS.maid_blue= true;
        }else if(rand > 10) {   // 20% 着物
            costume = MAIN_GIRL_MAID_GREEN;
            COSTUME_FLAGS.maid_green= true;
        }else if(rand > 5) {   // 20% 着物
            costume = MAIN_GIRL_MAID_PINK;
            COSTUME_FLAGS.maid_pink= true;
        }else{
            costume = MAIN_GIRL_OLD_SWIMSUIT_R18;
            COSTUME_FLAGS.oldswimsuit_r18= true;
        }


        // item
        var item = new Sprite(720, 720);
        item.image = game.assets[costume];
        scene.addChild(item);


        scene.addEventListener('touchend', function () {
            game.popScene();
        });
        return scene;
    };

    game.start();
};
