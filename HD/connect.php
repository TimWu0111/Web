<?php
header('Content-Type: text/html; charset=big5');
$dbSever="localhost";
$dbName="root";
$dbPass="root";

//�s�u�b���K�X
if( !@mysql_connect($dbSever, $dbName, $dbPass ))
 die("Connection failed");
else echo 'Connection Success' ;

mysql_query("SET NAMES big5");

//��ܸ�Ʈw
if (!mysql_select_db("peter"))
  die("database failed");
//else echo 'Success';

?>
