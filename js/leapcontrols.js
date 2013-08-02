
// detect swipes with the leap motion device
Leap.loop({enableGestures: true}, function(frame) {


  //Check status:
  if (frame.hands.length > 0 && $('.hand').is(":hidden")) {
    $('.hand').fadeIn();
  }else if(frame.hands.length <= 0 && $('.hand').is(":visible")){
    $('.hand').fadeOut();
  }

  if (frame.gestures && frame.gestures.length > 0) {
    

        //Swipes
        var swipes = compact(frame.gestures.map(function (gesture) {
          if (gesture.type === "swipe") return gesture;
        }));

        //Touches
        var click = compact(frame.gestures.map(function (gesture) {
          if (gesture.type === "screenTap" || gesture.type === "keyTap") return gesture;
        }));



        if (swipes.length > 0 && swipes[0].state === "stop") {
          //console.log(swipes[0].direction[0]);
          //slide(swipes[0].direction[0]);
          
          if(swipes[0].direction[0] > 0){
           k.prev(); //Prev page
          }else{
           k.next(); //Next page
          }
          
        }



        if (click.length > 0 && click[0].state === "stop") {
          $('div.show h2').effect("bounce", { distance: 80 });
        }

        

  }

});


// compact
//
// Compacts an array by removing unneeded values.
// By default it removes all falsy values, but it can be set to remove specific values such as undefined.
//
// @param arr Array the array to compact
// @param val Value any value to not include in the returned array.  The special flag "falsyExceptZero" may be used as well.
var compact = function (arr, val) {
  var len = arr.length,
    i = len - 1,
    valPresent = typeof val !== "undefined";
  for (; i >= 0; i--) {
    if (valPresent) {
      if (val === "falsyExceptZero" && (arr[i] !== 0 && !arr[i])) {
        arr.splice(i, 1);
      }
      else if (val === arr[i]) {
        arr.splice(i, 1);
      }
    }
    else if (!arr[i]) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

