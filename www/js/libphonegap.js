 var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

    // Wait for PhoneGap to connect with the device
// Le watchID r�f�rence l'�coute de l'acc�l�rom�tre courante
    var watchID = null;
    document.addEventListener("deviceready",onDeviceReady,false);    //
     
          
     
    function onDeviceReady() {    
        startWatch();
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }



// Lancement de l'�coute de l'acc�l�rom�tre
//
function startWatch() {
    
    // R�cup�ration toutes les 3 secondes
    var options = { frequency: 3000 };
    
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Arr�t de l'�coute gr�ce au watchID
//
function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

// onSuccess: Callback en cas de succ�s d'appel � l'acc�l�rom�tre
//
function onSuccess(acceleration) {
    var element = document.getElementById('accelerometer');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
    'Acceleration Y: ' + acceleration.y + '<br />' +
    'Acceleration Z: ' + acceleration.z + '<br />' +
    'Timestamp: '      + acceleration.timestamp + '<br />';
}

// onError: Callback en cas d'�chec d'appel � l'acc�l�rom�tre
//
function onError() {
    alert('onError!');
}


     // Called when a photo is successfully retrieved
     //
     function onPhotoDataSuccess(imageData) {
         // Uncomment to view the base64 encoded image data
         // console.log(imageData);
         
         // Get image handle
         //
         var smallImage = document.getElementById('smallImage');
         
         // Unhide image elements
         //
         smallImage.style.display = 'block';
         
         // Show the captured photo
         // The inline CSS rules are used to resize the image
         //
         smallImage.src = "data:image/jpeg;base64," + imageData;
     }
     
     // Called when a photo is successfully retrieved
     //
     function onPhotoURISuccess(imageURI) {
         // Uncomment to view the image file URI
         // console.log(imageURI);
         
         // Get image handle
         //
         var largeImage = document.getElementById('largeImage');
         
         // Unhide image elements
         //
         largeImage.style.display = 'block';
         
         // Show the captured photo
         // The inline CSS rules are used to resize the image
         //
         largeImage.src = imageURI;
     }
     
     // A button will call this function
     //
     function capturePhoto() {
         // Take picture using device camera and retrieve image as base64-encoded string
         navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50 });
     }
     
     // A button will call this function
     //
     function capturePhotoEdit() {
         // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
         navigator.camera.getPicture(uploadPhoto, onFail, { quality: 20, allowEdit: true });
     }
     
     // A button will call this function
     //
     function getPhoto(source) {
         // Retrieve image file location from specified source
         navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                                     destinationType: destinationType.FILE_URI,
                                     sourceType: source });
     }
     
     // Called if something bad happens.
     //
     function onFail(message) {
         alert('Failed because: ' + message);
     }




function uploadPhoto(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";
    
    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    options.chunkedMode = false;
    
    var ft = new FileTransfer();
    ft.upload(imageURI, "http://www.linaweb.ma/a/same/php/upload.php", win, fail, options);
}

function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
   // alert(r.response);
}

function fail(error) {
    alert("An error has occurred: Code = " = error.code);
}

            // Set an event to wait for Cordova to load
            //
      //      document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova is loaded and Ready
            //
          /*  function onDeviceReady() {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            }*/
            
            // Display `Position` properties from the geolocation
            //
           function onSuccess(position) {
                var div = document.getElementById('monmaping');
                document.getElementById('latitudes').value=position.coords.latitude;
                document.getElementById('longitudes').value=position.coords.longitude;
                div.innerHTML = 'Latitude: '             + position.coords.latitude  + '<br/>' +
                'Longitude: '            + position.coords.longitude + '<br/>' +
                'Altitude: '             + position.coords.altitude  + '<br/>' +
                'Accuracy: '             + position.coords.accuracy  + '<br/>' +
                'Altitude Accuracy: '    + position.coords.altitudeAccuracy  + '<br/>' +
                'Heading: '              + position.coords.heading   + '<br/>' +
                'Speed: '                + position.coords.speed     + '<br/>';
            }
            
            // Show an alert if there is a problem getting the geolocation
            //
            function onError() {
                alert('onError!');
            }
            
    
     
     
     // Wait for PhoneGap to load
            //
            // document.addEventListener("deviceready", onDeviceReady, false);
            
            // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
            //
            /* function onDeviceReady() {
             //checkConnection();
             // navigator.notification.alert('kkk');
             }*/
     function ajaxRequest(){
         var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]; //activeX versions to check for in IE
         if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
             for (var i=0; i<activexmodes.length; i++){
                 try{
                     return new ActiveXObject(activexmodes[i]);
                 }
                 catch(e){
                     //suppress error
                 }
             }
         }
         else if (window.XMLHttpRequest) // if Mozilla, Safari etc
         return new XMLHttpRequest();
         else
         return false;
     }
            function sendmap(){
                

                if(checkConnection()!='No network connection')
                {
                var mypostrequest=new ajaxRequest();
                    mypostrequest.onreadystatechange=function(){
                        if (mypostrequest.readyState==4){
                            if (mypostrequest.status==200 || window.location.href.indexOf("http")==-1){
                                document.getElementById("mapper").innerHTML = mypostrequest.responseText;
                                document.getElementById("loadi").innerHTML='Donn&eacute;es de g&eacute;olocalisation envoy&eacute;es avec succ&egrave;s';
                            }
                            else{
                                alert("An error has occured making the request");
                            }
                        }
                    }
                    
                var monmaping = encodeURIComponent(document.getElementById("monmaping").innerHTML);
                   var lieucharriot = 'lieu';
                    var userdog = encodeURIComponent(document.getElementById("login_username").value);
                    var magasindog = 'casa';
                    var latitudes = encodeURIComponent(document.getElementById("latitudes").value);
                    var longitudes = encodeURIComponent(document.getElementById("longitudes").value);
					 
                    var parameters = "userdog="+userdog+"&monmaping="+monmaping+"&lieucharriot="+lieucharriot+"&magasindog="+magasindog+"&latitudes="+latitudes+"&longitudes="+longitudess;
                  
                    document.getElementById("mapper").innerHTML="<img src='pictures/loadinglargeur.gif' style='border:0px;' />";
                    mypostrequest.open("POST", "http://www.linaweb.ma/hotdog/sendmaps.php", true);
                    mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    mypostrequest.send(parameters);
                } else navigator.notification.alert("Impossible d'envoyer les donn�es, probl�me de connexion!",null,"SAMUEL V1.0","OK") ;
                               
            }
			
			
			   function newclient(){
                

                if(checkConnection()!='No network connection')
                {
                var mypostrequest=new ajaxRequest();
                    mypostrequest.onreadystatechange=function(){
                        if (mypostrequest.readyState==4){
                            if (mypostrequest.status==200 || window.location.href.indexOf("http")==-1){
                                document.getElementById("loadi").innerHTML = mypostrequest.responseText;
                              //  document.getElementById("loadi").innerHTML='';
                            }
                            else{
                                alert("An error has occured making the request");
                            }
                        }
                    }
                    
					
					
					var monmaping = encodeURIComponent(document.getElementById("monmaping").innerHTML);
					var latitudes = encodeURIComponent(document.getElementById("latitudes").value);
                    var longitudes = encodeURIComponent(document.getElementById("longitudes").value);
                    var pseudo = encodeURIComponent(document.getElementById("pseudo").value);
					 var pseudo = encodeURIComponent(document.getElementById("pseudo").value);
					var email1 = document.getElementById("email1").value;
					var naissance1 = encodeURIComponent(document.getElementById("naissance1").value);
					var passe1 = encodeURIComponent(document.getElementById("passe1").value);
					var cdt = document.getElementById("cdt").value;
					var photo = document.getElementById('smallImage').src;
					var parameters = "map="+monmaping+"&latitude="+latitudes+"&longitude="+longitudes+"&pseudo="+pseudo+"&email="+email1+"&passe="+passe1+"&naissance="+naissance1+"&cdt="+cdt+"&photo="+photo;
					
					
					parames='';
if (pseudo.length < 2) 
{
parames +="Veuillez saisir votre Pseudo \n";
}

if( ! VerificationMail( email1) ) 
{
parames +="Veuillez saisir une Adresse Mail valide\n";
}

if (passe1.length < 2)  //login
{
parames +="Veuillez saisir votre mot de passe \n";
}

if(parames=='') { 
  document.getElementById("loadi").innerHTML="<img src='icones/ajax-loader1.gif' style='border:0px;' />";
                    mypostrequest.open("POST", "http://www.linaweb.ma/a/same/php/newclient.php", true);
                    mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    mypostrequest.send(parameters);
		}
else
{navigator.notification.alert(parames,null,"SAMUEL V1.0","OK") ;
	return false;
	}
	
	
	
                  
                  
                } 
				
			else navigator.notification.alert("Impossible d'envoyer les donn�es, probl�me de connexion!",null,"SAMUEL V1.0","OK") ;
                               
            }
            