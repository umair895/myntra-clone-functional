
const CONVENIENCE_FEES = 99;
let BagItems;
onLoad();

function onLoad(){
    loadBagItems();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag-summary');
    let totalItem = BagItems.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    console.log("BagItems:", BagItems);
  
    BagItems.forEach(bagValue => {
      console.log("original_price:", bagValue.original_price);
      totalMRP += parseFloat(bagValue.original_price) || 0;
      totalDiscount += parseFloat(bagValue.item_discount) || 0;
    });
  
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    console.log("Total MRP:", totalMRP); 
    
    bagSummaryElement.innerHTML = `
      <div class="bag-details-container">
      <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totalMRP}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹99</span>
      </div>
      <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹${finalPayment}</span>
      </div>
    </div>
    <button class="btn-place-order">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button>
    `;
  }
  

function loadBagItems(){
    // console.log(bagValue);
    BagItems = bagValue.map(itemId =>{
        for ( let i = 0; i < item1.length; i++){
            if(itemId == item1[i].id){
                return item1[i];
            }
        }
       
    });
    // console.log(loadBagItems);
};


function displayBagItems(){
    let displayBagItem = document.querySelector('.bag-items-container');
    let newHTML = '';
    BagItems.forEach(BagItems => {
      newHTML += generateItemHtml(BagItems);
    }); 
    displayBagItem.innerHTML = newHTML;
}

function generateItemHtml(item1){
  return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item1.item_image}" alt="item">
    </div>
    <div class="item-right-part">
      <div class="company">${item1.item_company}</div>
      <div class="item-name">${item1.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item1.current_price}</span>
        <span class="original-price">Rs ${item1.original_price}</span>
        <span class="discount-percentage">(${item1.item_discount} OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item1.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item1.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item1.id})">X</div>
  </div>`;
}

function removeFromBag(itemId){
    bagValue = bagValue.filter(bagValueId => bagValueId !=  itemId);
    localStorage.setItem('bagValue',JSON.stringify(bagValue));
    onLoad();
    cartItems();
}