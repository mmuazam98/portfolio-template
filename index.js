$(window).load(function() {
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
  })

  function display(){
    alert("Currently unavailable!");
  }
  function myFunction(x){
      x.classList.toggle("fa-times");
  }
  AOS.init(); 
