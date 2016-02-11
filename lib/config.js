// ガチャの確立
// 指定した数だけガチャボックスに格納するイメージ
GACHA_PROBABILITY = {
    ONE_PIECE: 20,
    SUMMER_UNIFORM: 20,
    WINTER_UNIFORM: 20,
    KIMONO_PURPLE: 20,
    KIMONO_GRAY: 20,
    KIMONO_RED: 20,
    MAID_BLUE: 20,
    MAID_GREEN: 20,
    MAID_PINK: 20,
    OLD_SWIMSUIT: 10,
    OLD_SWIMSUIT_R18: 5
};

// 各コスチュームを上で指定した数だけガチャボックスに格納する
GACHA_BOX = _.chain(GACHA_PROBABILITY)
    .map(function (num, type) { return _.fill(Array(num), type); })
    .flatten()
    .shuffle()
    .value();

// ラブタッチ時に喋るテキスト
LOVE_TOUCH_SAY_TEXT = ['くすぐったいですよ', 'も～、しょうがないですね', 'ふふふっ'];

// ラブタッチ時にイベントが発火するタイミング e.g. p33
LOVE_TOUCH_SECTION = ['p0', 'p33', 'p66', 'p100'];

// ラブタッチハートの1フレームごとの増加透明度
LOVE_HEART_DECREMENT_OPACITY_RATE = 0.10;

// ラブタッチハートの透明化までの待機フレーム数
LOVE_HEART_DECREMENT_OPACITY_WAIT = 5;

// ガチャシーンの背景色
GACHA_BACKGROUND_COLOR = 'white';

// 座標とサイズ
TOP_WIDTH = 1100;
TOP_HEIGHT = 1400;

GIRL_MAIN_WIDTH = 600;
GIRL_MAIN_HEIGHT = 1200;
GIRL_MAIN_BASE_X = 200;
GIRL_MAIN_BASE_Y = 0;

GIRL_UI_WIDTH = 64;
GIRL_UI_HEIGHT = 64;
GIRL_UI_BASE_X = 810;
GIRL_UI_BASE_Y = 30;
GIRL_UI_BASE_Y_K = 80; // GIRL_UI_Y = GIRL_UI_BASE_Y + GIR_UI_BASE_Y_K * i

GIRL_GACHA_WIDTH = 720;
GIRL_GACHA_HEIGHT = 720;

GAUGE_WIDTH = 300;
GAUGE_HEIGHT = 300;

MINI_HEART_WIDTH = 54;
MINI_HEART_HEIGHT = 50;
BIG_HEART_WIDTH = 80;
BIG_HEART_HEIGHT = 80;

SIDE_BAR_WIDTH = 90;
SIDE_BAR_HEIGHT = 1200;

// 画像パス
PATH = {
    REACTION: {
        BIG: 'img/ui/big_hart_pink.png',
        MINI: 'img/ui/mini_hart_pink.png'
    },
    HEART_GAUGE: {
        p0: "img/ui/hart_par_0.png",
        p33: "img/ui/hart_par_30.png",
        p66: "img/ui/hart_par_60.png",
        p100: "img/ui/hart_par_100.png"
    },
    SIDE_BAR: "img/ui/sidebar.png",
    GACHA: {
        MAIN: "img/ui/gatya.png",
        FIRST: "img/ui/gamejam_gacha_first.png",
        SPLIGHT: "img/ui/gamejam_gacha_turn_splight.png",
        HEART: "img/ui/gamejam_gacha_hart_pink.png"
    },
    GIRL: {
        ONE_PIECE: {
            MAIN: 'img/girl/completeWhiteonepice.png',
            UI: "img/ui/onpiece.png"
        },
        SUMMER_UNIFORM: {
            MAIN: 'img/girl/completeSummerclothes.png',
            UI: "img/ui/natuhuku.png"
        },
        WINTER_UNIFORM: {
            MAIN: 'img/girl/completeWinterclothes.png',
            UI: "img/ui/huyuhuku.png"
        },
        KIMONO_PURPLE: {
            MAIN: 'img/girl/kimono_purple.png',
            UI: "img/ui/kimono.png"
        },
        KIMONO_GRAY: {
            MAIN: 'img/girl/kimono_gray.png',
            UI: "img/ui/kimono-\ 2.png"
        },
        KIMONO_RED: {
            MAIN: 'img/girl/kimono_red.png',
            UI: "img/ui/kimono-\ 3\ .png"
        },
        MAID_BLUE: {
            MAIN: 'img/girl/maid_blue.png',
            UI: "img/ui/meid.png"
        },
        MAID_GREEN: {
            MAIN: 'img/girl/maid_green.png',
            UI: "img/ui/meid\ -\ 2.png"
        },
        MAID_PINK: {
            MAIN: 'img/girl/maid_pink.png',
            UI: "img/ui/meid\ -\ 3.png"
        },
        OLD_SWIMSUIT: {
            MAIN: 'img/girl/completeoldswimsuit.png',
            UI: "img/ui/sukumizu.png"
        },
        OLD_SWIMSUIT_R18: {
            MAIN: 'img/girl/R18.png',
            UI: "img/ui/er18.png"
        }
    }
};

PRELOAD = util.valuesDeep(PATH);
