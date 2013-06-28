$(function(){

    $("#btn-reverse").on("click",function(e){
        $(".flipbox").flippyReverse();
        e.preventDefault();
    });
        
    $("#btn-left").on("click",function(e){
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
		
		   document.getElementById('btn-left').innerHTML="Sign up";
		  }
		 else {
		 document.getElementById('flipbox1s').innerHTML=document.getElementById('flipbox1').innerHTML;
        $(".flipbox").flippy({
            color_target: "white",
            direction: "left",
            duration: "750",
           // verso: "<div style='width:100%;clear:both;padding-top:200px;'><div id='login-form' class='x-plain-body'><div style='width:70%;float:left;'><div class='username'><input type='text' id='login_username' name='login_username' placeholder='Utilisateur' onclick='taco(1)' ></div><div class='passwd'><input type='password' id='login_passwd' name='login_passwd' placeholder='Mot de passe' onclick='taco(2)'></div></div><div style='width:30%;float:left;text-align:center;padding-top:15px' ><img src='img/go1.png' /></div></div></div><div style='clear:both;padding-left:30%;'><a href='#' class='lien1'>Forgot your password?</a></div><div style='clear:both;padding-top:10px;text-align:center;'><img src='img/twitter.png' /></div><div style='clear:both;padding-top:10px;text-align:center;'><img src='img/facebook.png' /></div>",
			verso: "<div style='width:100%;clear:both;padding-top:40px;text-align:center'><div class='usernames'><input type='email' id='pseudo' name='pseudo' placeholder='Pseudo' onclick='taco(6)' ></div><div class='usernamess'><input type='email' id='email1' name='email1' placeholder='Adresse E-mail' onclick='taco(7)' ></div><div class='usernamess'><input type='password' id='passe1' name='passe1' placeholder='Mot de passe' onclick='taco(8)'></div><div class='dates'><input type='date' id='naissance1' name='naissance1' placeholder='XX/MM/AAAA' onclick='taco(9)' ></div><div style='padding-left:10%;padding-right:10%;padding-top:5px;'><div class='button3' onclick='capturePhoto();'>Prendre une photo</div></div><div style='padding-left:10%;padding-right:10%;padding-top:5px;'><div class='button3' onclick='getPhoto(pictureSource.SAVEDPHOTOALBUM);'>Choisir dans la biblioth&egrave;que</div></div><div style='padding-left:10%;padding-right:10%;height:30px;padding-top:10px'><img style='display:none;width:60px;height:60px;' id='smallImage' src='' /></div><div style='padding-left:10%;padding-right:10%;height:30px;padding-top:10px'><div style='text-align:left;font-family:arial;font-size:12px;'><input type='checkbox' name='cdt' id='cdt' checked>&nbsp;&nbsp;<a href='#' class='lien1'>J'acc&egrave;pte les conditions g&eacute;n&eacute;rales</a></div></div><div style='padding-left:10%;padding-right:10%'><div class='button1' onclick='newclient()'>S'inscrire</div></div></div>",
         });
		 document.getElementById('fliper').value=1;
		  document.getElementById('btn-left').innerHTML="Retour";
		 }
		 
		 
         e.preventDefault();
    });
    
    $("#btn-right").on("click",function(e){
	if(document.getElementById('fliper').value==1) {
	document.getElementById('fliper').value=0;
        $(".flipbox").flippy({
            color_target: "white",
            direction: "right",
            duration: "750",
            verso: document.getElementById('flipbox1s').innerHTML,
         });
         e.preventDefault();}
    });
    
    $("#btn-top").on("click",function(e){
        $(".flipbox").flippy({
            color_target: "#b6d635",
            direction: "top",
            duration: "750",
            verso: "<span class=\"big\">Great !</span>",
         });
         e.preventDefault();
    });
    
    $("#btn-bottom").on("click",function(e){
        $(".flipbox").flippy({
            color_target: "#03588C",
            direction: "bottom",
            duration: "750",
            verso: "<span class=\"big\">Flip !</span>",
         });
         e.preventDefault();
    });
    
    SyntaxHighlighter.all();
});