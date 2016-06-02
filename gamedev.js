
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


