/*------------------------------------------------------------- 
	index search and filter function
-------------------------------------------------------------*/
//search
function search(){
    var items = document.getElementsByName("items");
        var txt = [];
        var i;
        for (i = 0; i < items.length; i++) {
          if (items[i].checked) {
            txt.push(items[i].value);
          }
        }
  
    var title = $("#stitle").val();
    
    if(txt!=null)
      {var search = {stitle:title, genres:txt}}
    else
      {var search = {stitle:title}}
    
    if(title!=null){
      $.ajax({
              method:'GET',
              url:'/',
              data: search,
              success: function(items){
                $("#list").empty();
                
                  $.each(items, function(i,item){
                    //list
                      $("#list").append('<div class="sm-col-3"><img src="images/'+item.image +
                        '" style="width:200px; height:200px;" class="img-thumbnail"/><div class="caption"><a href="/'+ item._id +
                        '">'+ item.title +'</a></div></div>');
                    });
                    //pagination
                    $("#page").empty();
                    for(var i=0; i < (items.length/10); i++){
                      $("#page").append('<li class="page-item"><a class="page-link" href="#">'+(i+1) +'</a></li>');
                    }
                
                
                //console(data);
              },
              error: function(){
                alert("Error inserting");
              }
            });
    }else{
      //alert("test");
      /*var search = {stitle:null, genres:null}
      $.ajax({
              method:'GET',
              url:'/',
              data: search,
              success: function(data){
                alert("test");
                $("#list").empty();
                $.each(items, function(i,item){
                      
                      $("#list").append('<div class="sm-col-3"><img src="images/'+item.image +
                        '" style="width:200px; height:200px;" class="img-thumbnail"/><div class="caption"><a href="/'+ item._id +
                        '">'+ item.title +'</a></div></div>');
                    });
              },
              error: function(){
                alert("Error inserting");
              }
            });*/
    }
  
  }

  //checkbox
  function pick(){
        var items = document.getElementsByName("items");
        var txt = [];
        //var txt = "";
        var i;
        for (i = 0; i < items.length; i++) {
          if (items[i].checked) {
              //txt = txt + "genres[]=" + items[i].value
            txt.push(items[i].value);
          }
        }
        var checkboxs = {genres:txt}
        console.log(txt);
        if(txt.length!=0){
        $.ajax({
              method:'GET',
              url:'/',
              data: checkboxs,
              success: function(items){
                $("#list").empty();
                $.each(items, function(i,item){
                    //list
                      $("#list").append('<div class="sm-col-3"><img src="images/'+item.image +
                        '" style="width:200px; height:200px;" class="img-thumbnail"/><div class="caption"><a href="/'+ item._id +
                        '">'+ item.title +'</a></div></div>');
                    });
                    //pagination
                    $("#page").empty();
                    for(var i=0; i < (items.length/10); i++){
                      $("#page").append('<li class="page-item"><a class="page-link" href="#">'+(i+1) +'</a></li>');
                    }
                //console(data);
              },
              error: function(){
                alert("Error inserting");
              }
            });
        }else{
          window.location.reload();
        }
  }