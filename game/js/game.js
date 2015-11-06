$(document).ready(function() {

  $("#start").click(function() {
    $("#start").hide();
    $("#titleText").hide();
    $("#makerCredits").hide();
    $("#lordAdrian").hide();
    $("#dialogue1").css('display', 'block');
    $("#okayButton1").css('display', 'block');
  });

    $("#okayButton1").click(function() {
    	$("#dialogue1").css('display', 'none');
    	$("#dialogue2").css('display', 'block');
    	$("#lordAdrian2").css('display', 'block');
    	$("#okayButton2").css('display', 'block');
    	$("#okayButton1").css('display', 'none');
    });

    $("#okayButton2").click(function(){
    	$("#dialogue2").css('display', 'none');
    	$("#lordAdrian2").css('display', 'none');
    	$("#castle").css('display', 'none');
    	$("#okayButton2").css('display', 'none');
    	$("#okayButton1").css('display', 'none');
    	$("#lackeyBackground").css('display', 'block');
    	$("body").css('background-image', 'url("http://s.pro-gmedia.com/videogamer/media/images/xbox360/cod_mw3/screens/cod_mw3_8.jpg")')
    	$("#copyright").css('display', 'none');
    	$("#lackey1").css('display', 'block');

    });

    $("#lackey1").click(function(){
    	$("#lackey1").css('display', 'none');
    	$("#lackey2").css('display', 'block');
    	$("#scopeOverlay").css('display', 'block');
    	$("#scopeOverlay").css('display', 'none');

    });    

    $("#lackey2").click(function(){
    	$("#lackey2").css('display', 'none');
    	$("#lackey3").css('display', 'block');
    	$("#scopeOverlay").css('display', 'block');
    	$("#scopeOverlay").css('display', 'none');


    });    

    $("#lackey3").click(function(){
    	$("#lackey3").css('display', 'none');
    	$("#lackey4").css('display', 'block');
    	$("#scopeOverlay").css('display', 'block');
    	$("#scopeOverlay").css('display', 'none');

    	
    });    

    $("#lackey4").click(function(){
    	$("#lackey4").css('display', 'none');
    	$("#lackey5").css('display', 'block');
    	$("#scopeOverlay").css('display', 'block');
    	$("#scopeOverlay").css('display', 'none');

    	
    });    

    $("#lackey5").click(function(){
    	$("#lackey5").css('display', 'none');
    	$("#lackey6").css('display', 'block');
    	$("#scopeOverlay").css('display', 'block');
    	$("#scopeOverlay").css('display', 'none');
    	$("#wellDone").css('display', 'block');

    });    

    var herschelHealth = 30;
    var damage = 10;

    function damageHerschel1() {
    	herschelHealth - damage;
    }

    if (herschelHealth == 0) {
    	document.getElementById("herscehl").style.display = "none";
    }
});