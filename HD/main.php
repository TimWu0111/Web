<?php
include 'connect.php';
include 'function.php';
session_start();
?>
<html>
<head><link rel=stylesheet type="text/css" href="function.css"></head>
<body>
<?php  
    $sql='select 家族 from harleydavidson';
    $result=mysql_query($sql);
?>
<a href=first.php>回上一頁</a><br>
<input type="submit" value="查詢">
家族:<select name="family" size="1">

<?php
    while($row=mysql_fetch_array($result))
   {
    echo"<option value=$row[0]>$row[0]</option>";
   }
?>
</select>
</body>
</html>
<?php
header('Content-Type: text/html; charset=big5');

$family=_post('family');
if($family){
$_SESSION['flag']=1;
$_SESSION['family']=$family;
}

$code=_post('code');
if($code)
{$_SESSION['code']=$code;}

$lenght=_post('lenght');
if($lenght)
{$_SESSION['lenght']=$lenght;}

$wide=_post('wide');
if($wide)
{$_SESSION['wide']=$wide;}

$high=_post('high');
if($high)
{$_SESSION['high']=$high;}

$kg=_post('kg');
if($kg)
{$_SESSION['kg']=$kg;}

$engine=_post('engine');
if($engine)
{$_SESSION['engine']=$engine;}

$cc=_post('cc');
if($cc)
{$_SESSION['cc']=$cc;}

$change=_post('change');
if($change)
{$_SESSION['change']=$change;}

$liters=_post('liters');
if($liters)
{$_SESSION['liters']=$liters;}

if(isset($_FILES['file']['name']))
{$pic=$_FILES['file']['name'];}
else
{$pic=null;}

if(isset($_FILES['file']['error']))
{$error=($_FILES['file']['error']);}
else
{$error=null;}

if($error>0){
  echo("檔案上傳失敗！");//如果出現錯誤則停止程式
  $_SESSION['flag']=0;
}
else if(isset($_FILES['file']['name']))
{ 
   if(file_exists("pic/".$_FILES['file']['name']))
   {echo "檔名重複";$_SESSION['flag']=0;}
   else
    {move_uploaded_file($_FILES['file']['tmp_name'],"pic/".$_FILES['file']['name']);} 
}

//if($_SESSION['flag']==1){
$sql="INSERT INTO harleydavidson(圖片,家族,車款代碼,全長度,全寬度,全高度,重量,引擎,總排氣量,啟動方式,換檔方式,油箱容量)VALUES('$pic','$family','$code','$lenght','$wide','$high','$kg','$engine','$cc','ESPFI 電子燃油噴射系統','往復式$change','$liters')";
mysql_query($sql);

$sql='select * from harleydavidson';
$result=mysql_query($sql);

if(_get('lenght')==2)
{
 $sql='select * from harleydavidson order by 全長度';
 $result=mysql_query($sql);
}
else if(_get('lenght')==1)
{
 $sql='select * from harleydavidson order by 全長度 desc';
 $result=mysql_query($sql);
}

if(_get('wide')==2)
{
 $sql='select * from harleydavidson order by 全寬度';
 $result=mysql_query($sql);
}
else if(_get('wide')==1)
{
 $sql='select * from harleydavidson order by 全寬度 desc';
 $result=mysql_query($sql);
}

if(_get('high')==2)
{
 $sql='select * from harleydavidson order by 全高度';
 $result=mysql_query($sql);
}
else if(_get('high')==1)
{
 $sql='select * from harleydavidson order by 全高度 desc';
 $result=mysql_query($sql);
}

if(_get('kg')==2)
{
 $sql='select * from harleydavidson order by 重量';
 $result=mysql_query($sql);
}
else if(_get('kg')==1)
{
 $sql='select * from harleydavidson order by 重量 desc';
 $result=mysql_query($sql);
}

if(_get('liters')==2)
{
 $sql='select * from harleydavidson order by 油箱容量';
 $result=mysql_query($sql);
}
else if(_get('liters')==1)
{
 $sql='select * from harleydavidson order by 油箱容量 desc';
 $result=mysql_query($sql);
}

if(_get('cc')==2)
{
 $sql='select * from harleydavidson order by 總排氣量';
 $result=mysql_query($sql);
}
else if(_get('cc')==1)
{
 $sql='select * from harleydavidson order by 總排氣量 desc';
 $result=mysql_query($sql);
}
//-------------------------------------------顯示欄位名稱
echo "<table id=mt width=100% border=2>
      <tr align=center>";

  echo "<td>圖片</td>";
  echo "<td>家族</td>";
  echo "<td>車款代碼</td>";
  if(_get('lenght')==2)
   {echo "<td><a href=main.php?lenght=1>全長度</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?lenght=2>全長度</a><span class=\"tri_down\"></span></td>";}
  if(_get('wide')==2) 
   {echo "<td><a href=main.php?wide=1>全寬度</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?wide=2>全寬度</a><span class=\"tri_down\"></span></td>";}
  if(_get('high')==2) 
   {echo "<td><a href=main.php?high=1>全高度</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?high=2>全高度</a><span class=\"tri_down\"></span></td>";}
  if(_get('kg')==2) 
   {echo "<td><a href=main.php?kg=1>重量</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?kg=2>重量</a><span class=\"tri_down\"></span></td>";}
  echo "<td>引擎</td>";
   if(_get('cc')==2) 
   {echo "<td><a href=main.php?cc=1>總排氣量</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?cc=2>總排氣量</a><span class=\"tri_down\"></span></td>";}
  echo "<td>啟動方式</td>";
  echo "<td>換檔方式</td>";
  if(_get('liters')==2)
   {echo "<td><a href=main.php?liters=1>油箱容量</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?liters=2>油箱容量</a><span class=\"tri_down\"></span></td>";}
  
 echo "</tr>";
//-------------------------------------------顯示資料內容
 while($display=mysql_fetch_row($result))
{
 echo "<tr align=center>  
      <td><img src=./pic/$display[0] width='100' henight='120'/></td>";
 for($i=1;$i<count($display);$i++)
 {
  echo "<td>$display[$i]</td>";
 }
   echo "</tr>";
}
echo "</table>";
/*}
else
{echo "請重新輸入";}*/
?>
