$(window).load(function() {
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
  })

  function display(){
    alert("Currently unavailable!");
  }
  function myFunction(x){
      x.classList.toggleClass("fa-times");
  }


$(function () {
  var words = ["student", "programmer", "web developer", "student", "programmer"];
  var wordIndex = 0;
  var randTime = 1500; //how long each letter should shuffle
  var waitTime = 4000; //how long each word stay normal

  setInterval(function () {
    if (wordIndex > words.length - 1) {
      wordIndex = 0;
    }
    $('.Link1').html("").css({
      width: words[wordIndex].length / 2 * 45 + "px"
    });
    var letters = words[wordIndex].split("");

    letters.forEach(function (letter) {
      $('.Link1').append('<span class="letter">' + letter + "</span>");
    });

    $('.letter').each(function () {
      var l = $(this);

      setTimeout(function () {
        clearInterval(randomize);
        l.text(letters[l.index()]);

      }, randTime);

      var randomize = setInterval(function () {
        l.text(String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33));
      }, 50);
    });
    var w = Math.floor(Math.random() * (words.length - 1));
    while (w === wordIndex) {
      w = Math.floor(Math.random() * (words.length - 1));
    }
    wordIndex = w;
  }, waitTime);
});
