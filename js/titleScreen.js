var alivenow = alivenow || {};
alivenow.Title = (function () {
    function Title() {}
    Title.prototype.preload = function () {};
    Title.prototype.create = function () {
        Title.gameObj = this;
        this.game.add.sprite(0, 0, "LandingBG");
        this.button = this.add.group();
        this.ClickH = this.game.add.sprite(0, 780, "ClickHereBtn");
        this.ClickH.align = 'center';
        this.ClickH.x = this.game.width / 2 - this.ClickH.width / 2;
        this.button.addChild(this.ClickH);
        this.ClickH.inputEnabled = true;
        this.ClickH.events.onInputDown.add(this.onButtonPress, {
            param1: "clickhere"
            , param2: ""
        });
    };
    Title.prototype.onSuccess = function (c) {};
    Title.prototype.onButtonPress = function () {
        switch (this.param1) {
        case "clickhere":
            Title.gameObj.game.state.start("Game");
            break;
        }
    }
    return Title;
})();