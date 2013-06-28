            function callWebService(){
                 //create url
                var url = "http://www.linaweb.ma/hotdog/dog/export.php";
                x$.data = {};
                x$("#search_tweet_button").xhr(url,{
                                               error: function(){alert("failed"+this.responseText)},
                                               callback: function(){
                                               //var //var jsonResponse = eval("("+this.responseText+")");
                                               // var jsonResponse= eval("("+this.responseText+")");                                               
                                               // alert(x$("#tweet").html(tweets););
                                               var mama =  this.responseText;
                                               //x$("#tweet").html(mama);
                                               /* var tweets =  jsonResponse.query;
                                                if(tweets.length>0){
                                                //x$("#tweet").html(tweets);  }*/ 
												}
                                               });//end of xhr            }//end of method
											   }
          //  callWebService();  