<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Derrotar Monstros</title>

    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    
        <div class="row">
                <div class="menu">
                    <div class="barrier">
                        <div class="monster">
                            <img src="assets/img/monster_high_2.png" alt="monster_lives" class="img-fluid">
                            <div class="numberMonster" id="monsterLive"></div>
                        </div>
                    </div>

                    <div id="levelGame">
                        
                    </div>

                    <div class="barrier">
                        <div class="monster">
                            <img src="assets/img/monster_dead_high.png" alt="monster_dead" class="img-fluid">
                            <div class="numberMonster" id="monsterDead"></div>
                        </div>
                    </div>   
                </div>

            <div id="scenary">
                <div id="timer">00:00</div>
                <div id="game"></div>
            </div>

            <div id="option">
                <div id="controllOption">
                    <h2><span class="titleOption">Dificuldade</span></h2>

                    <form action="game.php" method="post">
                        <select name="level" id="level">
                            <option value="0">Fácil</option>
                            <option value="1">Médio</option>
                            <option value="2">Difícil</option>
                            <option value="3">Extremo</option>
                        </select>

                        <button type="submit" id="play">PLAY</button>
                    </form>
            
                </div>
            </div>
        </div>

        <?php 
            $levelGame = $_POST['level'];
        ?>

        <div name="levelGame" id="<?= $levelGame ?>" style="display: none;"></div>
  
</body>
</html>