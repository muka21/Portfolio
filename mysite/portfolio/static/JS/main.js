$(document).ready(function() {
// when you mouseover the background-image,the button should be visible and the opacity should change.
  $(".mainView").mouseover(function () {
    $("#popup").css("visibility","visible");
 $(".mainView").css("opacity","0.5");
  });

  $(".parentDiv").mouseleave(function () {
    $("#popup").css("visibility","hidden");
 $(".mainView").css("opacity","1");
  });
  //when you click on button,added to cart should show
  $("#popup").mousedown(function() {
    $("#textside").css("visibility","visible");
    $("#popup").css("visibility","hidden");
    });

$("#popup").mouseleave(function() {
  $("#textside").css("visibility","hidden");
  $("#popup").css("visibility","visible");
});

// to change background-image when you clickon image

$("#img1").click(function () {
  $("#main").attr("class","images")
  $("#main").css(
    "background-image","url('assests/headphone1.jpeg')"
  )
  });
$("#img2").click(function () {
  $("#main").attr("class","images")
  $("#main").css(
    "background-image","url('assests/speaker1.jpeg')"
  )
  });
$("#img3").click(function () {
  $("#main").attr("class","images")
  $("#main").css(
    "background-image","url('assests/tab1.jpeg')"
  )
  });
$("#img4").click(function () {
  $("#main").attr("class","images")
  $("#main").css(
    "background-image","url('assests/s5.jpeg')"
  )
});

});
