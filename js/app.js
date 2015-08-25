// Enemies our player must avoid
var Enemy = function (row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // put randomly somewhere along the x-axis
    this.x = Math.round(Math.random() * 505);
    // select from 1 of the 3 rows (63px from top starts the first row, other rows are 82px apart)
    this.y = 63 + (row - 1) * 83;
    // set a minimum speed of 100 to avoid super slow bugs and a max of 336 - to pass canvas in 1.5 sec
    this.speed = 100 + Math.round(Math.random() * (216));

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // return to beginning after passing the right border
    if (this.x > 606) {
        this.x = -101;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    // set default sprite
    this.sprite = 'images/char-boy.png';

    // initial score, score multiplier and initial position from initialPosition method
    this.score = 0;
    this.scoreMultiplier = 1;
    this.initialPosition();
};

// initial position method to be reused in multiple places
Player.prototype.initialPosition = function () {
    // twice texture width for third tile from the left
    this.x = 202;
    // canvas height minus char height minus bottom texture padding
    this.y = 463;
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    // score text in the top right corner
    ctx.fillStyle = '#fff';
    ctx.font = '30px Arial';
    ctx.fillText('Your score: ' + this.score, 350, 100);
};

Player.prototype.update = function () {
    // check for collisions
    this.collisionCheck();

    // if reaches water, return to original position and increase the score
    if (this.y < 48) {
        this.score += 20 * this.scoreMultiplier;
        this.initialPosition();
    }
};

// function to check for collisions - return to initial position and subtract points if hit monster
Player.prototype.collisionCheck = function () {
    for (var i = 0; i < allEnemies.length; i++) {
        // y difference with enemy at each row is 15, x difference at which enemy touches character is 72,
        // make those collision points and return to beginning, subtracting points from player (don't go below 0 points)
        if (Math.abs(player.x - allEnemies[i].x) <= 72 && Math.abs(player.y - allEnemies[i].y) === 15) {
            this.initialPosition();
            if (this.score > 50) {
                this.score -= 50;
            } else {
                this.score = 0;
            }
        }
    }
};

// function to check whether collision with obstacles occured - prevent movement if did
Player.prototype.obstaclesBlocked = function (posX, posY) {
    for (var i = 0; i < obstacles.length; i++) {
        // values of x are same, y values are 15px apart (obstacle y value is 15 bigger)
        if (posX === obstacles[i].x && obstacles[i].y - posY === 15) {
            return;
        }
    }
    return true;
};

// use canvas boundaries and obstaclesBlocked method to see if movement in certain direction can be performed
Player.prototype.handleInput = function (key) {
    switch (key) {
    case 'left':
        if (this.x > 0) {
            if (this.obstaclesBlocked((this.x - 101), this.y)) {
                this.x -= 101;
            }
        }
        break;
    case 'up':
        if (this.y >= 48) {
            if (this.obstaclesBlocked(this.x, (this.y - 83))) {
                this.y -= 83;
            }
        }
        break;
    case 'right':
        if (this.x <= 404) {
            if (this.obstaclesBlocked((this.x + 101), this.y)) {
                this.x += 101;
            }
        }
        break;
    case 'down':
        if (this.y <= 380) {
            if (this.obstaclesBlocked(this.x, (this.y + 83))) {
                this.y += 83;
            }
        }
        break;
    }
};


// obstacles, which prevent movement
var Obstacle = function (row) {
    // place each obstacle in particular cell on the rows which have enemies
    this.x = Math.floor(Math.random() * 6) * 101;
    this.y = 63 + (row - 1) * 83;

    // use rock image for obstacles
    this.sprite = 'images/Rock.png';
};

// render obstacles
Obstacle.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();

var enemy1 = new Enemy(1),
    enemy2 = new Enemy(2),
    enemy3 = new Enemy(3),
    enemy4 = new Enemy(4),
    enemy5 = new Enemy(1),
    enemy6 = new Enemy(2),
    enemy7 = new Enemy(3),
    enemy8 = new Enemy(4),
    enemy9 = new Enemy(1),
    enemy10 = new Enemy(2),
    enemy11 = new Enemy(3),
    enemy12 = new Enemy(4),

    allEnemies = [];
// four bugs by default
allEnemies.push(enemy1, enemy2, enemy3, enemy4);

// create 1 obstacle per each row that has bugs
var obstacle1 = new Obstacle(1),
    obstacle2 = new Obstacle(2),
    obstacle3 = new Obstacle(3),
    obstacle4 = new Obstacle(4),

    // put obstacles in an array, to render them from engine.js
    obstacles = [];
obstacles.push(obstacle1, obstacle2, obstacle3, obstacle4);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// select different characters by selecting one from the character menu
$('.char-menu').on('click', 'a', function (e) {
    e.preventDefault();
    player.sprite = 'images/char-' + $(this).data('char') + '.png';
});

// select different difficulty levels
// each level has its own number of bugs per lane and bugs have different
// average speeds. As the difficulty increases, score is being multiplied
// to make harder levels more rewarding.
$('.difficulty-menu').on('click', 'a', function (e) {
    e.preventDefault();
    $('.difficulty-menu').find('a').removeClass('selected');
    $(this).addClass('selected');
    var selectedDifficulty = $(this).data('difficulty');
    switch(selectedDifficulty) {
    case 1:
        allEnemies = [enemy1, enemy2, enemy3, enemy4];
        for (var i = 0; i < allEnemies.length; i++) {
            allEnemies[i].speed = 100 + Math.round(Math.random() * (216));
        }
        player.scoreMultiplier = 1;
        break;
    case 2:
        allEnemies = [enemy1, enemy2, enemy3, enemy4];
        for (var i = 0; i < allEnemies.length; i++) {
            allEnemies[i].speed = 170 + Math.round(Math.random() * (335));
        }
        player.scoreMultiplier = 1.5;
        break;
    case 3:
        allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8];
        for (var i = 0; i < allEnemies.length; i++) {
            allEnemies[i].speed = 100 + Math.round(Math.random() * (216));
        }
        player.scoreMultiplier = 2;
        break;
    case 4:
        allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8];
        for (var i = 0; i < allEnemies.length; i++) {
            allEnemies[i].speed = 170 + Math.round(Math.random() * (335));
        }
        player.scoreMultiplier = 3;
        break;
    case 5:
        allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12];
        for (var i = 0; i < allEnemies.length; i++) {
            allEnemies[i].speed = 100 + Math.round(Math.random() * (216));
        }
        player.scoreMultiplier = 5;
        break;
    case 6:
        allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12];
        for (var i = 0; i < allEnemies.length; i++) {
            allEnemies[i].speed = 170 + Math.round(Math.random() * (335));
        }
        player.scoreMultiplier = 10;
        break;
    case 7:
        allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12];
        for (var i = 0; i < allEnemies.length; i++) {
            allEnemies[i].speed = 250 + Math.round(Math.random() * (400));
        }
        player.scoreMultiplier = 25;
        break;
    }
});

// turn obstacles on/off, keeping their previous positions, by pressing the on/off button
$('.obstacles-on-off').click(function (e) {
    e.preventDefault();
    if (obstacles.length > 0) {
        obstacles = [];
    } else {
        obstacles.push(obstacle1, obstacle2, obstacle3, obstacle4);
    }
});

// reset obstacles positions, by pressing reset button
$('.obstacles-reset').click(function (e) {
    e.preventDefault();
    obstacle1 = new Obstacle(1);
    obstacle2 = new Obstacle(2);
    obstacle3 = new Obstacle(3);
    obstacle4 = new Obstacle(4);
    obstacles = [];
    obstacles.push(obstacle1, obstacle2, obstacle3, obstacle4);
});
