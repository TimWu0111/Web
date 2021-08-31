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
<p>家族:<input type="text" name="family" value=<?echo _session('family')?>></p>
<p>車款代碼:<input type="text" name="code" value=<?echo _session('code')?>></p>
<p>全長度:<input type="text" name="lenght" value=<?echo _session('lenght')?>></p>
<p>全寬度:<input type="text" name="wide" value=<?echo _session('wide')?>></p>
<p>全高度:<input type="text" name="high" value=<?echo _session('high')?>></p>
<p>重量:<input type="text" name="kg" value=<?echo _session('kg')?>></p>
<p>引擎:<input type="text" name="engine" value=<?echo _session('engine')?>></p>
<p>排氣量:<input type="text" name="cc" value=<?echo _session('cc')?>></p>
<p>換檔方式:<input type="text" name="change" value=<?echo _session('change')?>></p>
<p>油箱容量:<input type="text" name="liters" value=<?echo _session('liters')?>></p>
<input action="image/*" name="file" type="file"></p>
<input type="submit" value="新增" >
</form>
</body>
</html>