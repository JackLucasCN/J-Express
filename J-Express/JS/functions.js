// JavaScript Document


$(function () {
	//dropdown menu hover
  $(".dropdown").mouseover(function(){
    $(this).addClass("open");
  });
                                                              	
  $(".dropdown").mouseleave(function(){
    $(this).removeClass("open");
  });
  //Check your browser-->
  if (navigator.userAgent.indexOf("MSIE") >= 0) {
  $('#browsercheck').modal({
	show:true,
	backdrop:true
  });
  }
  //Remindes orders-->
  $('#submit_remindes').modal({
	show:true,
	backdrop:true,
  });
});


      