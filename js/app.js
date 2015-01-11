// Enemies our player must avoid
var Enemy = function(x,y,s) {  //jf adding x,y 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = s;
    this.sprite = 'images/enemy-bug.png';
    this.height = Resources.get(this.sprite).height;
    this.width = Resources.get(this.sprite).width;
    console.log("speed " + this.speed);
    
  }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += ((this.speed*15) * dt)
    if (this.x > (5 *101)) { 
        this.x=0;
    }
   
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {  //jf adding x,y 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-pink-girl.png';
    this.height = Resources.get(this.sprite).height;
    this.width = Resources.get(this.sprite).width;

 }

// Keeping the Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyPress){
    //jf 
    console.log(keyPress);
    switch (keyPress) {
        case 'left'    :
            if ((this.x) != 0){   //jf lets not fall off the left side 
                this.x -=101;
            }
            break;
        case 'up'      : 
            if ((this.y) > 0){    //jf don't fall in the water or off the top of the screen
                this.y -=83;
            }
            break;
        case 'right'   : 
            if (this.x != 4*101){  //jf dont fall off the right
                this.x +=101;
            }
            break;
        case 'down'    : 
            if (this.y != 400 ){  //jf same here don't fall off the bottom.
                this.y +=83;
            }
            break;   
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
function randomNumberBetween(numlow,numhigh){
    return(((Math.floor(Math.random()*numhigh))+numlow));   
}

function newGame(){
    //col * 101, row * 83);  //jf pulled from engine.js
    allEnemies = [
    new Enemy((randomNumberBetween(1,5) * 101) , (randomNumberBetween(1,3) * 83)-20,randomNumberBetween(5,20)+1),  //jf I would have used a for loop but this is one line
    new Enemy((randomNumberBetween(1,5) * 101) , (randomNumberBetween(1,3) * 83)-20,randomNumberBetween(5,20)+1),
    new Enemy((randomNumberBetween(1,5) * 101) , (randomNumberBetween(1,3) * 83)-20,randomNumberBetween(5,20)+1)
    ];  //jf created an array of enemies
    player = new Player(2 * 101, 400); //5 * 83);      //jf our valient hero;

    console.log(" new game works 1") //jf test point
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
