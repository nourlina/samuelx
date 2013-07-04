$(function(){

  /*  $("#btn-reverse").on("click",function(e){
        $(".flipbox").flippyReverse();
        e.preventDefault();
    });*/
        
    $("#btn-left").on("click",function(e){
                      //alert('ok');
	if(document.getElementById('fliper').value==1) {
	document.getElementById('fliper').value=0;
        $(".flipbox").flippy({
            color_target: "white",
            direction: "right",
            duration: "750",
            verso: document.getElementById('flipbox1s').innerHTML,
         });
         e.preventDefault();
		 document.getElementById('fliper').value=0;
		
		   document.getElementById('btn-left').innerHTML='Sign up';
		  }
		 else {
		 document.getElementById('flipbox1s').innerHTML=document.getElementById('flipbox1').innerHTML;
        $(".flipbox").flippy({
            color_target: "white",
            direction: "left",
            duration: "750",
			verso: "<div style='width:100%;clear:both;padding-top:40px;text-align:center'><div class='usernames'><input type='email' id='pseudo' name='pseudo' placeholder='Pseudo' onclick='taco(6)' ></div><div class='usernamess'><input type='email' id='email1' name='email1' placeholder='Adresse E-mail' onclick='taco(7)' ></div><div class='usernamess'><input type='password' id='passe1' name='passe1' placeholder='Mot de passe' onclick='taco(8)'></div><div class='dates'><input type='date' id='naissance1' name='naissance1' placeholder='XX/MM/AAAA' onclick='taco(9)' ></div><div style='padding-left:10%;padding-right:10%;padding-top:5px;'><div class='button3' onclick='capturePhoto();'>Prendre une photo</div></div><img style='display:none;width:60px;height:60px;' id='smallImage' src='' /><div style='padding-left:10%;padding-right:10%;height:30px;padding-top:10px'><div style='text-align:left;font-family:arial;font-size:12px;'><input type='checkbox' name='cdt' id='cdt' checked>&nbsp;&nbsp;<a href='#' class='lien1'>J'acc&egrave;pte les conditions g&eacute;n&eacute;rales</a></div></div><div style='padding-left:10%;padding-right:10%'><div class='button1' onclick='newclient()'>S'inscrire</div></div></div>",
         });
		 document.getElementById('fliper').value=1;
		  document.getElementById('btn-left').innerHTML='Retour';
		 }
		 
		 
         e.preventDefault();
    });
      
    SyntaxHighlighter.all();
});