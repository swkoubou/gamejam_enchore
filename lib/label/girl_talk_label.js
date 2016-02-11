(function (global) {
    var GirlTalkLabel = Class.create(Label, {
        initialize: function () {
            Label.call(this);
            this.x = 700;
            this.y = 500;
            this.color = 'black';
            this.font = '40px "Arial"';
            this.text = '';
        }
    });

    global.GirlTalkLabel = GirlTalkLabel;
}(window));