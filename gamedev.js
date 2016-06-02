
$( document ).ready(function() {
<<<<<<< HEAD
//start with the document.ready to make sure the images are loaded
  //tell JavaScript what div is the sprite - use the div id
  var myCar = $("#myCar");
  $("#alwaysPizza").hide();
  var win = $("#win");
  //this is the arrow key functionality. If you don't want this, delete the whole switch statement
  $(document).keydown(function(e) {
    $(myCar).keydown;
    switch (e.which) {

      //move left
      case 37:
        $(myCar).animate({
          left: "-=100px"
        }, 'fast');
        break;

        //move up
      case 38:
        $(myCar).animate({
          top: "-=100px"
        }, 'fast');
        break;

        //move right
      case 39:
        $(myCar).animate({
          left: "+=100px"
        }, 'fast');
        break;

        //move down
      case 40:
        $(myCar).animate({
          top: "+=100px"
        }, 'fast');
        break;
    };
  }); //this is where the arrow key functionality ends

  //this is where the JavaScript collision starts. First we define all the variables of how the collision will happen
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

    animateDiv();

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() ;
    var w = $(window).width() ;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
  //James change .a to .othercar
    $('.othercar').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};


//this is collision for the cars
  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    $('#result').text('False');
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.otherCar'), function() {
      if (collision($('#myCar'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        
        //if #myCar hits .othercar, then #results will say "TRUE"
        
        window.location.href = 'game.html';

        //all the actions that happen during a collision go here
200); //this is how often it checks for a collision
      }
    });
  }, 

//this is collision for the win box
 window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('#win'), function() {
      if (collision($('#myCar'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        
        //if #myCar hits .othercar, then #results will say "TRUE"
        
        window.location.href = 'youwin.html';

        //all the actions that happen during a collision go here

      }
    });
  }, 




}); //document.ready ends - do not delete!!!










});//end of game do not delete!!!!
=======
//Your jquery goes here
(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
 
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 500,
    height = 200,
    player = {
        x: width / 2,
        y: height - 15,
        width: 5,
        height: 5,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
    keys = [],
    friction = 0.8,
    gravity = 0.3;
 
var boxes = [];
 
// dimensions
boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});
boxes.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});
boxes.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});
 
boxes.push({
    x: 120,
    y: 10,
    width: 80,
    height: 80
});
boxes.push({
    x: 170,
    y: 50,
    width: 80,
    height: 80
});
boxes.push({
    x: 220,
    y: 100,
    width: 80,
    height: 80
});
boxes.push({
    x: 270,
    y: 150,
    width: 40,
    height: 40
});
 
canvas.width = width;
canvas.height = height;
 
function update() {
    // check keys
    if (keys[38] || keys[32]) {
        // up arrow or space
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2;
        }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {player.velX++;}} if (keys[37]){// left arrow 
            if (player.velX > -player.speed) {
            player.velX--;
        }
    }
 
    player.velX *= friction;
    player.velY += gravity;
 
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.beginPath();
 
    player.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
 
        var dir = colCheck(player, boxes[i]);
 
        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }
 
    }
 
    if(player.grounded){
         player.velY = 0;
    }
 
    player.x += player.velX;
    player.y += player.velY;
 
    ctx.fill();
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);
 
    requestAnimationFrame(update);
}
 document.getElementById
function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;
 
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < Heights) {         // figures out on which side we are colliding (top, bottom, left, or right)         var oX = hWidths - Math.abs(vX),             oY = hHeights - Math.abs(vY);         if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
});
 
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
 
window.addEventListener("load", function () {
    update();
});
>>>>>>> parent of dd7038d... Added you win screen
