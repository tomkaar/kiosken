


// when the user click on the cart
// when the user click on the devilery button
// update the total cost + moms
// when the user click on the numpad
// when the user click on the "Beställ" button





// when the user click on the cart
document.getElementById("cart")
.addEventListener("click", function(e){
  // if the user clicked on + or - button
  if(e.target.name == "item-add"){
    let amountDiv = e.target.parentElement.children[1];
    let amountNumber = amountDiv.innerHTML.replace("st", "");
    let newAmount = Number(amountNumber) + 1;

    amountDiv.innerHTML = newAmount + "st";
    // update total function
    updateTotal();
  }
  if(e.target.name == "item-remove"){
    let amountDiv = e.target.parentElement.children[1];
    let amountNumber = amountDiv.innerHTML.replace("st", "");
    let newAmount = Number(amountNumber) - 1;

    // we don't want negative values
    if(newAmount >= 0){
      amountDiv.innerHTML = newAmount + "st";
    }

    // update total function
    updateTotal();
  }
});

// When the user click on the delivery
document.getElementById("delivery")
.addEventListener("click", function(e){
  // if the user click on a checkbox
  if(e.target.name == "item-checkbox"){
    updateTotal();
  }
});


// update the total in the
function updateTotal(){
  let total = 0;

  // get all items in cart, loop and add to the total
  let items = document.getElementById("cart").children;
  for (var i = 0; i < items.length; i++) {
    // find amount
    let amountItem = items[i].getElementsByClassName("amount")[0].querySelector("p").innerHTML;
    let amount = amountItem.replace("st", "");

    // find price
    let priceItem = items[i].getElementsByClassName("price")[0].innerHTML;
    let price = priceItem.replace("kr", "");

    // update total
    total += Number(amount)*Number(price);
  }

  // find delivery type
  let checkedDevliveryType = document.querySelector("input[name='item-checkbox']:checked").value;
  total += Number(checkedDevliveryType);

  // new total is:
  let moms = Math.round(total * 0.2496940024);

  // print new numbers
  document.getElementById("total-text-final").innerHTML = total + "kr";
  document.getElementById("total-text-moms").innerHTML = moms + "kr";
}







// when the user click on the numpad
document.getElementById("numpad")
.addEventListener("click", function(e){

  // if the user click on a button
  if(e.target.nodeName == "BUTTON"){
    var personNumber = document.getElementById("input-person-number");
    var lastFour = document.getElementById("input-last-four");
    var mobileNumber = document.getElementById("input-mobile");

    // If the user click on a number
    if(e.target.value >= 0 || e.target.value <= 9){
      if (personNumber.value.length < 6) {
        let pVal = personNumber.value;
        personNumber.value = pVal + e.target.value;
      }
      else if (lastFour.value.length < 4) {
        let lVal = lastFour.value;
        lastFour.value = lVal + e.target.value;
      }
      else if (mobileNumber.value.length < 10) {
        let mVal = mobileNumber.value;
        mobileNumber.value = mVal + e.target.value;
      }
    }
    // If the user click on the delete button
    if(e.target.value == "delete"){
      if (personNumber.value.length <= 6 && lastFour.value.length == 0) {
        let pVal = personNumber.value;
        personNumber.value = pVal.slice(0, -1);
      }
      else if (lastFour.value.length <= 4 && mobileNumber.value.length == 0) {
        let lVal = lastFour.value;
        lastFour.value = lVal.slice(0, -1);
      }
      else if (mobileNumber.value.length <= 10) {
        let mVal = mobileNumber.value;
        mobileNumber.value = mVal.slice(0, -1);
      }
    }
    // If the user click on OK button
    if(e.target.value == "ok"){
      if(personNumber.value.length !== 6){
        console.log("personNumber");
        alert("Du måste fylla i ditt person nummer");
      }
      if(lastFour.value.length !== 4){
        console.log("lastFour");
        alert("Du måste fylla i ditt person nummer");
      }
      if(mobileNumber.value.length !== 10){
        console.log("mobileNumber");
        alert("Du måste fylla i ditt mobil nummer");
      }
      if(personNumber.value.length == 6 && lastFour.value.length == 4 && mobileNumber.value.length == 10){
        alert("Allt är ifyllt!");
      }
    }
  }

});




// When the user click on the "Beställ" button
document.getElementById("order")
.addEventListener("click", function(e){
  var personNumber = document.getElementById("input-person-number");
  var lastFour = document.getElementById("input-last-four");
  var mobileNumber = document.getElementById("input-mobile");
  // if everything is OK
  if(personNumber.value.length == 6 && lastFour.value.length == 4 && mobileNumber.value.length == 10){
    alert("Din order har lagts!");
  }
  else {
    alert("Du måste fylla i alla fält");
  }
});








// When the user click on the sidebar menu button
document.getElementById("sidebar-toggle")
.addEventListener("click", function(e){
  document.getElementById("sidebar-register").classList.toggle("open");
});
