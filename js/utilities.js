// add to total price
function addTotal(target) {
  const previousTotalPrice = document.getElementById("total-price");
  const previousTotaPriceValue = getElementInnerText("total-price");
  const cardPrice = target.childNodes[3].childNodes[5].innerText;
  const cardPriceValue = parseFloat(cardPrice)
  const newTotalPrice = previousTotaPriceValue + cardPriceValue;
  previousTotalPrice.innerText = newTotalPrice;
  setInnerText('total', newTotalPrice)
  if(newTotalPrice> 0){
    document.getElementById('purchase-btn').removeAttribute('disabled')
  }
  else{
    document.getElementById('purchase-btn').setAttribute('disabled')
  }

  // add item name on the ol list
  const olList = document.getElementById("ol-list");
  const li = document.createElement("li");
  li.innerText = target.childNodes[3].childNodes[3].innerText
  olList.appendChild(li)
}
//  get element value
function getElementInnerText(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

//
// set innertext
function setInnerText(elementId, innerText) {
  const element = document.getElementById(elementId);
  element.innerText = innerText;
}

// get discount by using coupon code
document.getElementById("coupon-field").addEventListener("keyup", function (event) {
    const couponCode = event.target.value;
    if (couponCode === "SELL200") {
      document.getElementById("coupon-btn").removeAttribute("disabled");
    } else {
      document.getElementById("coupon-btn").setAttribute("disabled", true);
    }
  });

document.getElementById("coupon-btn").addEventListener("click", function () {
  const totalPrice = getElementInnerText("total-price");
  if (totalPrice >= 200) {
    const newDiscount = totalPrice * (20 / 100);
    const newDicountTwoFixed = newDiscount.toFixed(2);
    setInnerText("discount", newDicountTwoFixed);
    const total = totalPrice - newDicountTwoFixed;
    setInnerText("total", total);
  } else {
    alert("you must need minimum purchase amount of 200");
  }
});

// reload page
function reloadPage(){
    window.location.reload()
}