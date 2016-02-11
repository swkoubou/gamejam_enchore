(function (global) {
    var util = {};

    // オブジェクトの持つ値をすべて取得する。
    // オブジェクトがオブジェクトを持っていた場合は再帰的に取り出す。
    // e.g. valuesDeep({a: 1, b: {ba: 2, bb: 3}}); // -> [1, 2, 3]
    util.valuesDeep = function (obj) {
        return _.values(obj).reduce(function (ary, v) {
            if (v instanceof Object) {
                return _.concat(ary, util.valuesDeep(v));
            } else {
                return _.concat(ary, [v]);
            }
        }, []);
    };

    global.util = util;
}(window));