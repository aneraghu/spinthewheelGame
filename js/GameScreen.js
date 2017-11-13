var alivenow = alivenow || {};
alivenow.Game = (function () {
    function Game() {};
    Game.prototype.preload = function () {};
    Game.prototype.create = function () {
        this.deviceShown = false;
        Game.gameObj = this;
        slices = 12;
        slicePrizes = ["AED 500 voucher \n at Aseelah in Radisson Blu!", "a dinner for 2 \n at Key West Nikki beach!", "AED 200 \n voucher for Zaatar W Zeit!", "AED 250 \n voucher for Sugar Factory!", "a FOREO LUNA \n Play Plus!", "2 passes \n to Wadi Adventure!", "2 VOX \n Cinema tickets!", "a Culinary journeys for 2 \n @Tamba Abu Dhabi","an Anghami Plus \n subscription!","AED 250 voucher \n for SushiSan!","a free meal \n for two from Nando\'s!"," a free \n Careem ride!"];
       this.PagbgGrp=this.add.group();
       this.BackGrp=this.add.group();
       this.wheelGrp=this.add.group();
       this.BulbGrp=this.add.group();
       this.centerGrp=this.add.group();    
       
       this.pagebg=this.game.add.sprite(0, 0, "GameBG");
       this.wheelGrp.addChild(this.pagebg);
       	 this.backbg=this.game.add.sprite(this.game.width / 2, this.game.width / 2, "backBG");
        this.backbg.anchor.set(0.5);
         this.BackGrp.addChild(this.backbg); 
    	this.wheel = this.game.add.sprite(this.game.width / 2, this.game.width / 2, "Wheel");
          this.wheel.anchor.set(0.5);
          this.wheelGrp.addChild(this.wheel);
         
         
          var pin = this.game.add.sprite(this.game.width / 2, 680, "Pointer");
          pin.anchor.set(0.5);
          pin.scale.setTo(0.5);
          this.prizeText = this.game.add.text(this.game.world.centerX, 480, "");
          this.prizeText.anchor.set(0.5);
          this.prizeText.align = "center";
          this.canSpin = true;
          this.TextGrp=this.add.group();
          this.TextB = new Phaser.BitmapText(this.game, 0, 760, "MediumDIN", "Check out what you could win", 60);
          this.TextB.align = 'center';
          this.TextB.x = this.game.width / 2 - this.TextB.textWidth / 2;
          this.TextGrp.addChild(this.TextB);
          this.LogoGrp=this.add.group();
         this.bulb = this.game.add.sprite(this.game.width / 2, this.game.width / 2, "Bulb");
          this.bulb.anchor.set(0.5);
          this.BulbGrp.addChild(this.bulb);
          this.bulbanim = this.bulb.animations.add('bulbanims', Phaser.Animation.generateFrameNames('anim1',0,24,'', 4), 10, true);
     
          this.bulb.animations.play('bulbanims');
          this.centerpin = this.game.add.sprite(this.game.width / 2, this.game.width / 2, "CenterPin");
          this.centerpin.anchor.set(0.5);
          this.centerGrp.addChild(this.centerpin);
          this.game.input.onDown.add(this.spin, this);
          
    

    };
    Game.prototype.spin=function(data){
        
        if( Game.gameObj.canSpin){  
            Game.gameObj.prizeText.text = "";
            var rounds =  Game.gameObj.game.rnd.between(5, 10);
            var items=[30,60,90,120,150,180,210,240,270,300,330,360];
            var degrees =  items[Math.floor(Math.random()*items.length)];
            prize = slices - Math.floor(degrees / (360 / slices));
            Game.gameObj.canSpin = false;
            var spinTween =  Game.gameObj.game.add.tween(Game.gameObj.wheel).to({
                 angle: 360 * rounds + degrees
            }, 8000, Phaser.Easing.Quadratic.Out, true);
            spinTween.onComplete.add(Game.gameObj.animComplete, this);
            
       }
    }
    Game.prototype.animComplete = function(){
        	Game.gameObj.bulb.animations.stop();
    		setTimeout(Game.gameObj.winPrize,2000);
    }
    Game.prototype.winPrize = function () {
        Game.gameObj.canSpin = true;

        Game.gameObj.prize = slicePrizes[prize];
        Game.gameObj.game.add.sprite(0, 0, "ResultBG");
        Game.gameObj.TextrGrp=Game.gameObj.add.group();
        Game.gameObj.TextR = new Phaser.BitmapText( Game.gameObj.game, 0, 380, "MediumDIN", "You could \n have won "+  Game.gameObj.prize, 60);
        Game.gameObj.TextR.align = 'center';
        Game.gameObj.TextR.tint = '0xfef5a2a';
        Game.gameObj.TextR.x =  Game.gameObj.game.width / 2 -  Game.gameObj.TextR.textWidth / 2;
        Game.gameObj.TextrGrp.addChild(Game.gameObj.TextR);
    }

    Game.prototype.update = function () {
    }
    Game.prototype.onButtonPress = function () {

    }
    return Game;
})();