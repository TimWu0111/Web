<?php
//�����S����Ʈ�warning
function _post($str){

    $val = !empty($_POST[$str]) ? $_POST[$str] : null;

    return $val;
}

function _get($str){

    $val = !empty($_GET[$str]) ? $_GET[$str] : null;

    return $val;
}

function _session($str){

    $val = !empty($_SESSION[$str]) ? $_SESSION[$str] : null;

    return $val;
}

/*function _files[$str1][$str2]{

    $val = isset($_FILES[$str1][$str2]) ? $_FILES[$str1][$str2] : null;

    return $val;
}*/
//���s�s��
function rearrangement(){

   $new1=("ALTER TABLE motorcycle DROP  �s��");
   $new2=("ALTER TABLE motorcycle ADD  �s�� MEDIUMINT( 8 ) NOT NULL FIRST");
   $new3=("ALTER TABLE motorcycle MODIFY COLUMN  �s��  MEDIUMINT( 8 ) NOT NULL AUTO_INCREMENT,ADD PRIMARY KEY(�s��)");
	 
   mysql_query($new1);
   mysql_query($new2);
   mysql_query($new3);
}
//��s
function update(){
    header('refresh: 0.5;url=""');
}

?>