  <?php
  $t=time();
  ?>
  <!doctype html>
    <html>

    <head>
        <title>Spin The Wheel</title>
        <script src="lib/phaser.min.js"></script>
        <!-- Resource JS -->
        <script src="js/Main.js?v=<?php echo $t; ?>"></script>
        <script src="js/Global.js?v=<?php echo $t; ?>"></script>
        <script src="js/ResourceLoader.js?v=<?php echo $t; ?>"></script>
        <script src="js/titleScreen.js?v=<?php echo $t; ?>"></script>
        <script src="js/GameScreen.js?v=<?php echo $t; ?>"></script>
        <script>
            var obj = new alivenow.Main();
            obj.init();
            //_server = new alivenow.SERVER();
        </script>
    </head>

    <body>
</body>

    </html>
