<?php
include 'connect.php';
include 'function.php';
session_start();
?>
<html>
<head><link rel=stylesheet type="text/css" href="function.css"></head>
<body>
<?php  
    $sql='select �a�� from harleydavidson';
    $result=mysql_query($sql);
?>
<a href=first.php>�^�W�@��</a><br>
<input type="submit" value="�d��">
�a��:<select name="family" size="1">

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
  echo("�ɮפW�ǥ��ѡI");//�p�G�X�{���~�h����{��
  $_SESSION['flag']=0;
}
else if(isset($_FILES['file']['name']))
{ 
   if(file_exists("pic/".$_FILES['file']['name']))
   {echo "�ɦW����";$_SESSION['flag']=0;}
   else
    {move_uploaded_file($_FILES['file']['tmp_name'],"pic/".$_FILES['file']['name']);} 
}

//if($_SESSION['flag']==1){
$sql="INSERT INTO harleydavidson(�Ϥ�,�a��,���ڥN�X,������,���e��,������,���q,����,�`�Ʈ�q,�Ұʤ覡,���ɤ覡,�o�c�e�q)VALUES('$pic','$family','$code','$lenght','$wide','$high','$kg','$engine','$cc','ESPFI �q�l�U�o�Q�g�t��','���_��$change','$liters')";
mysql_query($sql);

$sql='select * from harleydavidson';
$result=mysql_query($sql);

if(_get('lenght')==2)
{
 $sql='select * from harleydavidson order by ������';
 $result=mysql_query($sql);
}
else if(_get('lenght')==1)
{
 $sql='select * from harleydavidson order by ������ desc';
 $result=mysql_query($sql);
}

if(_get('wide')==2)
{
 $sql='select * from harleydavidson order by ���e��';
 $result=mysql_query($sql);
}
else if(_get('wide')==1)
{
 $sql='select * from harleydavidson order by ���e�� desc';
 $result=mysql_query($sql);
}

if(_get('high')==2)
{
 $sql='select * from harleydavidson order by ������';
 $result=mysql_query($sql);
}
else if(_get('high')==1)
{
 $sql='select * from harleydavidson order by ������ desc';
 $result=mysql_query($sql);
}

if(_get('kg')==2)
{
 $sql='select * from harleydavidson order by ���q';
 $result=mysql_query($sql);
}
else if(_get('kg')==1)
{
 $sql='select * from harleydavidson order by ���q desc';
 $result=mysql_query($sql);
}

if(_get('liters')==2)
{
 $sql='select * from harleydavidson order by �o�c�e�q';
 $result=mysql_query($sql);
}
else if(_get('liters')==1)
{
 $sql='select * from harleydavidson order by �o�c�e�q desc';
 $result=mysql_query($sql);
}

if(_get('cc')==2)
{
 $sql='select * from harleydavidson order by �`�Ʈ�q';
 $result=mysql_query($sql);
}
else if(_get('cc')==1)
{
 $sql='select * from harleydavidson order by �`�Ʈ�q desc';
 $result=mysql_query($sql);
}
//-------------------------------------------������W��
echo "<table id=mt width=100% border=2>
      <tr align=center>";

  echo "<td>�Ϥ�</td>";
  echo "<td>�a��</td>";
  echo "<td>���ڥN�X</td>";
  if(_get('lenght')==2)
   {echo "<td><a href=main.php?lenght=1>������</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?lenght=2>������</a><span class=\"tri_down\"></span></td>";}
  if(_get('wide')==2) 
   {echo "<td><a href=main.php?wide=1>���e��</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?wide=2>���e��</a><span class=\"tri_down\"></span></td>";}
  if(_get('high')==2) 
   {echo "<td><a href=main.php?high=1>������</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?high=2>������</a><span class=\"tri_down\"></span></td>";}
  if(_get('kg')==2) 
   {echo "<td><a href=main.php?kg=1>���q</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?kg=2>���q</a><span class=\"tri_down\"></span></td>";}
  echo "<td>����</td>";
   if(_get('cc')==2) 
   {echo "<td><a href=main.php?cc=1>�`�Ʈ�q</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?cc=2>�`�Ʈ�q</a><span class=\"tri_down\"></span></td>";}
  echo "<td>�Ұʤ覡</td>";
  echo "<td>���ɤ覡</td>";
  if(_get('liters')==2)
   {echo "<td><a href=main.php?liters=1>�o�c�e�q</a><span class=\"tri_up\"></span></td>";}
  else
   {echo "<td><a href=main.php?liters=2>�o�c�e�q</a><span class=\"tri_down\"></span></td>";}
  
 echo "</tr>";
//-------------------------------------------��ܸ�Ƥ��e
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
{echo "�Э��s��J";}*/
?>
