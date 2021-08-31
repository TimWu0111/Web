function check() 
{ 
 //alert("test");
    var f=document.getElementsByName("family")[0].value;
	var d=document.getElementsByName("code")[0].value;
	var l=document.getElementsByName("lenght")[0].value;
	var w=document.getElementsByName("wide")[0].value;
	var h=document.getElementsByName("high")[0].value;
	var k=document.getElementsByName("kg")[0].value;
	var e=document.getElementsByName("engine")[0].value;
	var c=document.getElementsByName("cc")[0].value;
	//var s=document.getElementsByName("switch")[0].value;
	var g=document.getElementsByName("change")[0].value;
	var t=document.getElementsByName("liters")[0].value;
	
 if((f) && (d) && (l) && (w) && (h) && (k) && (e) && (c) && (g) && (t))
 {
    if(!(isNaN(f)))
	 {alert("家族請輸入字串");return (false);}
	else{
	   if(!(isNaN(d)))
	     {alert("車款代碼請輸入字串");return (false);}
		 else{
   		  if(isNaN(l))
	       {alert("全長度請輸入數字");return (false);}
		   else{
		    if(isNaN(w))
	          {alert("全寬度請輸入數字");return (false);}
			  else{
			    if(isNaN(h))
	             {alert("全高度請輸入數字");return (false);}
				 else{
				   if(isNaN(k))
	                {alert("重量請輸入數字");return (false);}
					else{
					  if(!(isNaN(e)))
	                   {alert("引擎請輸入字串");return (false);}
					   else{
					     if(isNaN(c))
	                      {alert("排氣量請輸入數字");return (false);}
						  else{
						    if(!(isNaN(g)))
	                          {alert("換檔方式請輸入字串");return (false);}
							  else{
							    if(isNaN(t))
	                              {alert("油箱容量請輸入數字");return (false);}	 
							  }	
						  }
					   }	 
					}	
				 }
			  }
		    }
	    }
	 }
  }
  else
  {
   alert("請輸入完整資料");
   return (false);
  }	
}

function test()
{
}

