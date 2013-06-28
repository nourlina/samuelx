<?php session_start();
print_r($_FILES);
$new_image_name = session_id().".jpg";
move_uploaded_file($_FILES["file"]["tmp_name"], "/home/linaweb/public_html/a/same/php/upload/".$new_image_name);
?>