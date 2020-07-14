let numberMonsterLive = 109;
let numberMonsterDead = 0;
let levelGame = document.getElementsByName('levelGame')[0];
let btnPlay = document.getElementById('play');
let monsterLive = document.getElementById('monsterLive');
let monsterDead = document.getElementById('monsterDead');
let game = document.getElementById('game');
let menuLevelGame = document.getElementById('levelGame');
let interval;

levelGame = get_level_game(levelGame);
monsterLive.innerHTML = numberMonsterLive;
monsterDead.innerHTML = numberMonsterDead;
create_monster(numberMonsterLive);

function get_level_game(obj) {
    let my_id = Number(obj.id);
    return my_id;
}

function create_monster(numberMonsterGenerate) {
    for (let i = 0; i < numberMonsterGenerate; i++) {
        let createMonster = document.createElement('img');
        createMonster.setAttribute('src', 'assets/img/monster_low.png');
        createMonster.setAttribute('id', 'monster' + i);
        createMonster.style.width = '56px';
        createMonster.onclick = function () {
            dead_monster(this);
        }
        game.appendChild(createMonster);
    }
    choice_timer(levelGame);
}

function dead_monster(obj) {
    let my_id = obj.id;
    let monster = document.getElementById(my_id);
    monster.setAttribute('src', 'assets/img/monster_dead_low.png')
    monster.setAttribute('id', 'dead');
    monster.style.width = '56px';
    if (my_id != 'dead') {
        set_point(1);
    }
    verify();
}

function verify() {
    if (numberMonsterLive == 0) {
        winner();
    }
}

function winner() {
    game.innerHTML = '<h1 class="win">VOCÊ VENCEU !</h1>';
    clearTimeout(interval);
}

function set_point(pts) {
    numberMonsterLive--;
    numberMonsterDead++;
    monsterLive.innerHTML = numberMonsterLive;
    monsterDead.innerHTML = numberMonsterDead;
    
}

function choice_timer(level) {
    menuLevelGame.innerHTML = '';
    let time;
    let text;
    switch (level) {
        case 0:
            time = 120;
            text = document.createTextNode('FÁCIL');
            break;
        case 1:
            time = 80;
            text = document.createTextNode('MÉDIO');
            break;
        case 2:
            time = 50;
            text = document.createTextNode('DIFÍCIL');
            break;
        case 3:
            time = 40;
            text = document.createTextNode('EXTREMO');
            break;
    }
    menuLevelGame.appendChild(text);
    set_time(time);
}

function set_time(time) {
    let clock = document.getElementById('timer');
    let min;
    let sec;
    min = parseInt(time / 60);
    sec = time % 60;

    if (min < 10) {
        min = '0' + min;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }

    clock.innerHTML = `${min} : ${sec}`;
    time--;
    if (time == -1) {
        clearTimeout(interval);
        game_over();
        return false;
    }
    interval = setTimeout(`set_time(${time})`, 1000)
}

function game_over() {
    game.innerHTML = '<h1 class="lose">VOCÊ PERDEU !</h1>';
}
