let bagValue;

onload();

function onload(){
    let bagValuestr =  localStorage.getItem('bagValue');
    bagValue = bagValuestr ? JSON.parse(bagValuestr) : [] ;
   cartItems()
   displayProducts();
}

function addItems(item1){
    bagValue.push(item1);
    localStorage.setItem('bagValue',JSON.stringify(bagValue));
    cartItems();
}

function cartItems(){
    let bagCount = document.querySelector('.bag-count');
    if(bagValue.length > 0){
    bagCount.innerText = bagValue.length;
    bagCount.style.visibility = 'visible';
    }else{
        bagCount.style.visibility = 'hidden';
    }
}

function displayProducts() {
    let itemContainerElements = document.querySelector('.items-container');
    if(!itemContainerElements){
        return;
    }
    let newHTML = '';
    item1.forEach(item1 => {
        newHTML += `     
     <div class="item-container">
         <div class="item-img"><img src="${item1.item_image}" alt="item"> </div>
            <div class="product-info">
               <div class="item-rating"> ${item1.item_rating.noOfStars} ★ | ${item1.item_rating.noOfReviews} 
               </div>
                <div class="item-name"><h3>${item1.item_name}</h3></div>
                <div class="item-company"><h4>${item1.item_company}</h4></div>
                <div class="item-price">
                    <span class="current-price">Rs.${item1.current_price}</span>
                    <span class="original-price">Rs.${item1.original_price}</span>
                    <span class="item-discount">(Rs.${item1.item_discount} OFF)</span>
                </div>
                <div> <button class="add-btn" onclick="addItems(${item1.id})" > Add to bag </button> </div>
         </div>
      </div>`;
    });
    itemContainerElements.innerHTML = newHTML;
}

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});