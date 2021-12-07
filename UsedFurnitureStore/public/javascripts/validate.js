$(function(){
        var userslist=[];
        $.ajax({
            method:'GET',
            url:'accounts',
            success: function(users){
                $.each(users, function(i,user){
                    userslist.push(user.username);
                   
                });
            },
            error: function(){
                alert("Error loading users");
            }
        });
        //console.log(userslist);

    var username = document.getElementById("username");
    var span1 = document.createElement("span");
    span1.style.display = "none"; //hide the span element
    span1.style.color = "red";
    username.parentNode.appendChild(span1);

    var pwd = document.getElementById("pwd");
    var span2 = document.createElement("span");
	span2.style.display = "none"; //hide the span element
    span2.style.color = "red";
    pwd.parentNode.appendChild(span2);

    var progress = document.getElementById("progress");

    var confirm = document.getElementById("confirm");
    var span3 = document.createElement("span");
	span3.style.display = "none"; //hide the span element
    span3.style.color = "red";
    confirm.parentNode.appendChild(span3);
    
    username.onfocus = function(){
        document.getElementById("username").className = "form-control";
    	span1.style.display = "block";
        span1.innerText="Input username";
    }
    username.onblur = function(){
        span1.style.display = "none";
    }

    pwd.onfocus = function(){
        document.getElementById("pwd").className = "form-control";
    	span2.style.display = "block";
        span2.innerText="At least six characters\nOne uppercase letter\nOne number\nOne special character";
    }
    pwd.onblur = function(){
        span2.style.display = "none";
    }

    confirm.onfocus = function(){
        document.getElementById("pwd").className = "form-control";
        document.getElementById("confirm").className = "form-control";
        span3.style.display = "block";
        span3.innerText="Type password again";
    }
    confirm.onblur = function(){
        span3.style.display = "none";
    }

    var form = document.getElementById("myForm");
    form.onsubmit = function(e){

        var inputname = $("#username").val();
        
        var username_val = document.getElementById("username").value;
        var pwd_val = document.getElementById("pwd").value;
        var confirm_val = document.getElementById("confirm").value;
        var check=0;

        if(username.onblur && pwd.onblur && confirm.onblur ){

            if(username_val != ""){
                for(var i=0;i<userslist.length;i++){
                    if(username_val==userslist[i]){
                         username_err(inputname+" has existed.");
                         e.preventDefault();
                         break;
                     } 
                 }
                 //console.log(i);
                 //console.log(userslist.length);
                /* if(i==(userslist.length)){
                    check=check+1;
                 }*/
            }
            else{
                username_err("Username is empty!");
                e.preventDefault();
            }
            

            if(pwd_val != ""){
                if(pwd_val.length < 6){
                    pwd_err("At least six characters!");
                    progress.style.width = "10%";
                    e.preventDefault();
                    
                }
                else if(pwd_val.search("[A-Z]") == -1){
                    pwd_err("At least one uppercase letter!");
                    progress.style.width = "50%";
                    e.preventDefault();
                    
                }
                else if(pwd_val.search("[0-9]") == -1){
                    pwd_err("At least one number!");
                    progress.style.width = "75%";
                    e.preventDefault();
                    
                }
                else if(pwd_val.search("[!@#$%^&*+-]") == -1){
                    pwd_err("At least one special character!");
                    progress.style.width = "90%";
                    e.preventDefault();
                    
                }
                else{
                    progress.style.width = "100%";
                }
            }
            else{
                pwd_err("Password is empty!");
                e.preventDefault();
            }

            if(confirm_val != ""){
                if(pwd_val !== confirm_val){
                    confirm_err();
                    e.preventDefault();
                }
                /*else{
                    check=check+1;
                }*/
            }
            else{
                confirm_err();
                e.preventDefault();
            }
        }
        
        
    };

    function username_err(String){
        document.getElementById("username").className="error";
        span1.style.display = "block";
        span1.innerText=String;
        
    }
    
    function pwd_err(String){
        document.getElementById("pwd").className="error";
        span2.style.display = "block";
        span2.innerText=String;
        
    }
    
    function confirm_err(){
        document.getElementById("pwd").className="error";
        document.getElementById("confirm").className="error";
        span3.style.display = "block";
        span3.innerText = "Passwords mismatch";
        
    }
});