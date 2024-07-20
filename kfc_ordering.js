function printerr(idname,message){
  document.getElementById(idname).innerHTML=message;
}

function order_clicking(){
    var name = document.getElementById("username").value;
    var mobno =document.getElementById("mobile_no").value;
    if(name == ""){
        printerr("nameerr","Plese Enter Your name")
    }
    if(mobno == ""){
        printerr("moberr","Plese Enter Your Mobile Number")
    }
    document.getElementById("customer_name").innerHTML= name;
    document.getElementById("customer_mobile").innerHTML =mobno;
    /*declaring variable */
  var meal= [];
  var  meal_cost=0;
  var ad_on = [];
  var ad_on_cost =0;
  var total;

  /*meal values */
  var rolls = document.getElementById("Rolls");
  var chicken_bucket = document.getElementById("chicken_bucket"); 
  var Biriyani = document.getElementById("Biriyani");  
  if(rolls.checked == true){
    meal.push(rolls.value);
    meal_cost= meal_cost + 13.40; 
  }
  if(chicken_bucket.checked == true){
    meal.push(chicken_bucket.value);
    meal_cost= meal_cost + 35.40; 
  }
  if(Biriyani.checked == true){
    meal.push(Biriyani.value);
    meal_cost= meal_cost + 25.80; 
  }


  /* adon values*/ 
  var browneei= document.getElementById("Brownie");
  var cheese = document.getElementById("Cheese");
  var chicken_curry =document.getElementById("chicken_curry");
  var hot_wings =document.getElementById("hot_wings");
  if(browneei.checked == true){
    ad_on.push(browneei.value);
    ad_on_cost=ad_on_cost + 23.40; 
  }
  if(cheese.checked == true){
    ad_on.push(cheese.value);
    ad_on_cost= ad_on_cost+ 10.40; 
  }
  if(chicken_curry.checked == true){
    ad_on.push(chicken_curry.value);
    ad_on_cost= ad_on_cost + 48.40; 
  }
  if(hot_wings.checked == true){
    ad_on.push(hot_wings.value);
    ad_on_cost= ad_on_cost + 60.49; 
  }
  var meal_item="";
  var ad_on_items="";
for(i=0;i<meal.length;i++){
    if(i!=0){
        meal_item +=" + ";
    }
    meal_item +=meal[i]; 
}
for( i=0;i<ad_on.length;i++){
    if (i!=0){
        ad_on_items+=" + ";
    }
    ad_on_items +=ad_on[i]; 
}
total=meal_cost+ad_on_cost;
document.getElementById("customer_meal").innerHTML=meal_item;
document.getElementById("customer_adon").innerHTML=ad_on_items;
document.getElementById("customer_total").innerHTML ="$"+total;
}

