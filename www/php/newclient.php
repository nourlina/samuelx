<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /><?php 
	
			require_once ("scripts/connection.php");					
			require_once ("scripts/execrequete.php");	
			$connect = Connexion ();


$dateCreation=date("Y-m-d H:i:s");$time=time();
$pseudo= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['pseudo'])));
$email= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['email'])));
$passe= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['passe'])));
$map= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['map'])));
$latitude= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['latitude'])));
$longitude= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['longitude'])));
$naissance= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['naissance'])));
$monmaping= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['monmaping'])));
$monmaping= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['monmaping'])));
$monmaping= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['monmaping'])));
$cdt= preg_replace("/'/", "''", stripslashes(utf8_decode($_POST['cdt'])));
$photo= preg_replace("/'/", "''", stripslashes($_POST['photo']));
	
				$requete1wss3i="INSERT INTO `linaweb_samuel`.`client` (`id`, `pseudo`, `email`, `passe`, `map`, `latitude`, `longitude`, `naissance`, `dateCreation`, `cdt`, `photo`) VALUES (NULL, '".$pseudo."', '".$email."', '".$passe."', '".$map."', '".$latitude."', '".$longitude."', '".$naissance."', '".$dateCreation."', '".$cdt."', '".$photo."');";
				ExecRequete($requete1wss3i, $connect);
				
				
				//move_uploaded_file($nomFichier_tmp,$repertoirex."/".$nomFichier1);
				
			
     $to      = $email;
     $subject = 'APPLICATION MOBILE';
     $message = 'Pseudo : '.$pseudo.' - '.'Email : '.$email.' - '.'Passe : '.$passe.' - '.'Pseudo : '.$monmaping.' - '.'MAP : '.$map.' - '.'Latitude : '.$latitude.' - '.'Longitude : '.$longitude.' - '.'Date de naissance : '.$naissance.' - '.'Date : '.$dateCreation.' - '.
     $headers = 'From: s.barakat@linasolutions.ma' . "\r\n" .
     'Reply-To: s.barakat@linaweb.ma' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();

     mail($to, $subject, $message, $headers);

?>