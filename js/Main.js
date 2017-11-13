var alivenow = alivenow || {};
alivenow.Main = (function () {
            function Main() {}
            Main.prototype.init = function () {
                var g = new Phaser.Game(768, 1100, Phaser.AUTO, "game-area", {
                    create: this.create
                    , preload: this.preload
                    , rotateMe: this.rotateMe
                }, true);
                g.state.add('GLoader', alivenow.ResourceLoader);
                g.state.add('Title', alivenow.Title);
                g.state.add('Game', alivenow.Game);
                g.state.add('Form', alivenow.Form);
                g.state.add('Thank', alivenow.Thank);
            };
            Main.prototype.preload = function () {
                alivenow.Global.game = this.game;
                alivenow.Global.rotateHandler = this.rotateMe;
            };
            Main.prototype.create = function () {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.compatibility.orientationFallback = 'viewport';
                this.scale.pageAlignVertically = true;
                this.scale.pageAlignHorizontally = true;
                this.game.time.advancedTiming = true;
                this.game.state.start("GLoader");
            };
                return Main;
            })();