/*------------------------------------------------------------- 
	cart show, remove, purchase function
-------------------------------------------------------------*/
$(document).ready(function(){
  
	//create card with localStorage data
	if(localStorage.item!=null){
		var obj = JSON.parse(localStorage.item)
		//display 
		var total=0;
		for (let i = 0; i < obj.length; i++) {
		  if(obj[i]!=null){
			document.body.insertAdjacentHTML("beforeend",
		  `<div class="card mb-3" style="max-width: 540px;">
			<div class="row g-0">
			 <div class="col-md-4"><img src="${obj[i].image}" class="img-fluid rounded-start" alt="error"></div>
			  <div class="col-md-8">
				<div class="card-body">
				  <h5 class="card-title">${obj[i].title}</h5>
				  <p>Price:$ <span class="price">${obj[i].price}</span></p>
				  <input class="quantity" type="number" min="1" value=${obj[i].quantity} onclick=updatetotal(${i}) id=${i} style="width:60px; height:40px;">
				  <a class="btn btn-danger" href="/user/cart" onclick=removeitem(${i}) type="button">REMOVE</a>
				</div>
			  </div>
			</div>
		  </div>`)
		  //calculate total
		  total = total + obj[i].price*obj[i].quantity;
		  } 
		}
	 }  
	 $("#total").append(total);
	});
	
	function purchaseClicked() {//clear localStorage data and write into database
	
		var obj = JSON.parse(localStorage.item);
		//remove null data
		var newdata = obj.filter(el => el);
		var total=0;
		for (let i = 0; i < newdata.length; i++) {
			//calculate total
			total = total + newdata[i].price*newdata[i].quantity;
			//store id and quantity
			var target = newdata[i].id;
			var target_quantity = newdata[i].quantity;
			var data = {id:target}
			//search inventory by id
			$.ajax({
				method:'GET',
				url:'cart/retrieve',
				data: data,
				success: function(item){
					//calculate inventory
					var newquantity = item.quantity - target_quantity;
					if(newquantity>0){
						var data = {id:item._id, quantity:newquantity}
						//Store new value to quantity
						$.ajax({
							method:'POST',
							url:'cart/update',
							data: data,
							success: function(data){
							  //alert('Thank you for your purchase');
							},
							error: function(){
								alert("Error inserting");
							}
						});
					}
					else{
						alert(item.title + " sold out");
					}

				},
				error: function(){
					alert("Error inserting");
				}
			});

		}
		//Store purchase detail in order db
		var detail = {data:newdata, total:total}
		$.ajax({
				method:'POST',
				url:'cart/done',
				data: detail,
				success: function(data){
				  alert('Thank you for your purchase');
				},
				error: function(){
					alert("Error inserting");
				}
			});
		//clear localStorage
		localStorage.clear();
		//console.log(localStorage.valueOf());
	}
	
	
	function removeitem(i) {
		//remove html card
		$(".btn-danger").click = function(event){
			  var buttonClicked = event.target;
			  buttonClicked.parentsUntil(".mb-3").remove();
		};
		//remove localStorage data
		var obj = JSON.parse(localStorage.getItem("item"));
		delete obj[i];
		localStorage.setItem("item", JSON.stringify(obj));
		
		updatetotal();
	}
	
	function updatetotal(i) {
	
		var count = 0;
		var total=0;
	
		$(document).find('.card-body').each(function(){
		  let price = $(this).find('.price').text();
		  let quantity = $(this).find('.quantity').val();
		  //calculate total
		  total = total + price*quantity;     
		});
	
		var newquantity = document.getElementById(i).value;
	
		var obj = JSON.parse(localStorage.getItem("item"));
		//change data in localStorage
		obj[i].quantity=newquantity;
		
		localStorage.setItem("item", JSON.stringify(obj));
		
		$("#total").empty();
		$("#total").append(total);
	}


