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
	 {alert("�a�ڽп�J�r��");return (false);}
	else{
	   if(!(isNaN(d)))
	     {alert("���ڥN�X�п�J�r��");return (false);}
		 else{
   		  if(isNaN(l))
	       {alert("�����׽п�J�Ʀr");return (false);}
		   else{
		    if(isNaN(w))
	          {alert("���e�׽п�J�Ʀr");return (false);}
			  else{
			    if(isNaN(h))
	             {alert("�����׽п�J�Ʀr");return (false);}
				 else{
				   if(isNaN(k))
	                {alert("���q�п�J�Ʀr");return (false);}
					else{
					  if(!(isNaN(e)))
	                   {alert("�����п�J�r��");return (false);}
					   else{
					     if(isNaN(c))
	                      {alert("�Ʈ�q�п�J�Ʀr");return (false);}
						  else{
						    if(!(isNaN(g)))
	                          {alert("���ɤ覡�п�J�r��");return (false);}
							  else{
							    if(isNaN(t))
	                              {alert("�o�c�e�q�п�J�Ʀr");return (false);}	 
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
   alert("�п�J������");
   return (false);
  }	
}

function test()
{
}

