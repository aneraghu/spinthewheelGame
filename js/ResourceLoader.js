var alivenow = alivenow || {};
alivenow.ResourceLoader = (function () {
    function ResourceLoader() {
    }
    ResourceLoader.prototype.init = function () {
        this.game.load.onFileComplete.add(this.progress, this);
        this.g = this.add.graphics(0, 0);
        this.t = this.add.text(300, 455, "0 %", {
            fill: "#fffff"
        });
        this.setPercentage(0);
        this.v = this.add.graphics(0, 0);
    };
    ResourceLoader.prototype.progress = function (p) {
        this.setPercentage(p);
    };
    ResourceLoader.prototype.setPercentage = function (p) {
        this.t.text = String(p) + " %";
        var w = p / 100 * 410;
        this.g.clear();
        this.g.beginFill(0x2ecede, 1);
        this.g.lineStyle(1, 0x2ecede, 0.1);
        this.g.drawRect(130, 450, w, 38);
        this.g.endFill();
        this.g.lineStyle(5, 0x000, 1);
        this.g.drawRect(130, 450, 410, 38);
    };
    ResourceLoader.prototype.preload = function () {
        this.game.load.image('GameBG', 'assets/images/Background-2.jpg');
        this.game.load.image('ResultBG', 'assets/images/Background-3.jpg');
        this.game.load.image('Pointer', 'assets/images/Curser.png');
        this.game.load.image('Wheel', 'assets/images/newWheel.png');
        this.game.load.image('backBG', 'assets/images/newbackBG.png');
        this.game.load.image('CenterPin', 'assets/images/center.png');
        this.game.load.atlas('Bulb', 'assets/images/bulbanim6.png', 'assets/images/bulbanim6.json');

        /* Bitmap Fonts */
        this.game.load.bitmapFont("RegularDIN", 'assets/images/Regular_DIN.png', 'assets/images/Regular_DIN.xml');
        this.game.load.bitmapFont("MediumDIN", 'assets/images/Medium_DIN.png', 'assets/images/Medium_DIN.xml');

    };
    ResourceLoader.prototype.create = function () {     
            this.game.state.start("Game");
    };
    return ResourceLoader;
})();