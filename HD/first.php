<?
include 'function.php';
session_start();
$_SESSION['flag']=0;
?>
<html>
<head>
<SCRIPT language=JavaScript src="function.js"></SCRIPT>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
<title>HARLEY-DAVIDSON</title></head>
<body>
<form name="add" method="post" action="main.php" onsubmit="return check()" Enctype="Multipart/Form-Data">
<p>�a��:<input type="text" name="family" value=<?echo _session('family')?>></p>
<p>���ڥN�X:<input type="text" name="code" value=<?echo _session('code')?>></p>
<p>������:<input type="text" name="lenght" value=<?echo _session('lenght')?>></p>
<p>���e��:<input type="text" name="wide" value=<?echo _session('wide')?>></p>
<p>������:<input type="text" name="high" value=<?echo _session('high')?>></p>
<p>���q:<input type="text" name="kg" value=<?echo _session('kg')?>></p>
<p>����:<input type="text" name="engine" value=<?echo _session('engine')?>></p>
<p>�Ʈ�q:<input type="text" name="cc" value=<?echo _session('cc')?>></p>
<p>���ɤ覡:<input type="text" name="change" value=<?echo _session('change')?>></p>
<p>�o�c�e�q:<input type="text" name="liters" value=<?echo _session('liters')?>></p>
<input action="image/*" name="file" type="file"></p>
<input type="submit" value="�s�W" >
</form>
</body>
</html>