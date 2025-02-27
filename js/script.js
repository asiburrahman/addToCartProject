// const ringButtons = document.querySelectorAll(".ring-button");
// let productImageBase = "../images/";
// for (let i = 0; i < ringButtons.length; i++) {
//   const ringBtn = ringButtons[i];
//   ringBtn.addEventListener("click", function (event) {
//     const color = event.target.id.replace("-color", "");

//     for (let j = 0; j < ringButtons.length; j++) {
//       ringButtons[j].classList.remove("border-purple-600");
//       ringButtons[j].classList.add("border-gray-300");
//     }
//     //color add kortesi
//     event.target.classList.add("border-purple-600");
//     event.target.classList.remove("border-gray-300");

//     const productImage = document.getElementById("product-image");
//     // productImage.src = "../images/gray.png";
//     // productImage.src = `../images/${color}.png`;
//     productImage.src = productImageBase + color + ".png";
//   });
// }

// function selectWristSize(size) {
//   const sizes = ["S", "M", "L", "XL"];
//   for (let i = 0; i < sizes.length; i++) {
//     const button = document.getElementById("size-" + sizes[i]);
//     const elemnt = sizes[i];
//     if (size === elemnt) {
//       button.classList.add("border-purple-600");
//     } else {
//       button.classList.remove("border-purple-600");
//     }
//   }
// }

// const quantityElements = document.querySelectorAll(".quantity-button");
// for (let btn of quantityElements) {
//   btn.addEventListener("click", function (event) {
//     const amount = event.target.innerText === "+" ? 1 : -1; // 1 || -1
//     const quantityEelemnt = document.getElementById("quantity");
//     const currentQuantity = parseInt(quantityEelemnt.innerText);
//     const newQuantity = Math.max(0, currentQuantity + amount);
//     quantityEelemnt.innerText = newQuantity;
//   });
// }

// // add to cart
// let cartCount = 0;
// let cartItems = [];
// document.getElementById("add-to-cart").addEventListener("click", function () {
//   const quantity = parseInt(document.getElementById("quantity").innerText);

//   if (quantity > 0) {
//     document.getElementById("checkout-container").classList.remove("hidden");
//     cartCount = cartCount + quantity;
//     document.getElementById("cart-count").innerText = cartCount;

//     const selectedColorButton = document.querySelector(
//       "button.border-purple-600.w-6"
//     );
//     const selectedColor = selectedColorButton.id.split("-")[0];

//     const selectedSizeButtons = document.querySelector(
//       "button.border-purple-600:not(.w-6)"
//     );
//     const selectedSize = selectedSizeButtons.innerText.split(" ")[0];
//     const selectedPrice = selectedSizeButtons.innerText
//       .split(" ")[1]
//       .split("$")[1];

//     cartItems.push({
//       image: selectedColor + ".png",
//       title: " Classy Modern Smart Watch",
//       color: selectedColor,
//       size: selectedSize,
//       quantity: quantity,
//       price: quantity * parseInt(selectedPrice),
//     });

//     console.log(cartItems);
//   } else {
//     alert("Please select a quantity...");
//   }
// });

// document.getElementById("checkout-btn").addEventListener("click", function () {
//   const cartModal = document.getElementById("cart-modal");

//   const cartConatainer = document.getElementById("cart-items");

//   for (let i = 0; i < cartItems.length; i++) {
//     const item = cartItems[i];
//     console.log(item);
//     const row = document.createElement("tr");
//     row.classList.add("border-b");
//     row.innerHTML = `
//     <td class="py-2 px-4">
//       <div class="flex items-center space-x-2">
//         <img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${item.image}" alt="">
//         <span class="font-semibold">${item.title}</span>
//       </div>
//     </td>
//     <td class="py-2 px-4">${item.color}</td>
//     <td class="py-2 px-4">${item.size}</td>
//     <td class="py-2 px-4">${item.quantity}</td>
//     <td class="py-2 px-4">$${item.price}</td>
//     `;
//     cartConatainer.appendChild(row);
//   }

//   cartModal.classList.remove("hidden");
// });

// document
//   .getElementById("continue-shopping")
//   .addEventListener("click", function () {
//     document.getElementById("cart-modal").classList.add("hidden");
//   });


//My Code Start here..........................................................................

const ringButton = document.querySelectorAll(".ring-button");
// console.log(ringButton);
for (let i = 0; i < ringButton.length; i++) {
  const ringBtn = ringButton[i];
  ringBtn.addEventListener("click", function (event) {
    const ringBtn =event.target;
    const color = ringBtn.id.replace('-color', '');
    
    for (let j = 0; j < ringButton.length; j++) {
      ringButton[j].classList.remove("border-purple-600");
      ringButton[j].classList.add("border-gray-200");  
    }
    ringBtn.classList.add("border-purple-600");
    const productImage = document.getElementById("product-image");
    // console.log(productImage);
    productImage.src = `./images/${color}.png`;
    
  })
  
  
}

function selectWristSize(size){
  // console.log(size);
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    const element = sizes[i];
    const productSize = document.getElementById(`size-${sizes[i]}`)
    // console.log(element);
    if (sizes[i]===size) {
    // console.log(productSize);
    
      productSize.classList.add("border-purple-600");
  
      
    }else{
      
      productSize.classList.add("border-gray-200");
      productSize.classList.remove("border-purple-600");
    }
  }
  
}

const quantityButton = document.querySelectorAll('.quantity-button');

// console.log(quantityButton);
let sum = 0;
 
for (let btn of quantityButton){
  
    btn.addEventListener('click', function(event){
      // console.log(event.target.innerText);
      let quantityEelemnt  = document.getElementById('quantity');
     
      if (event.target.innerText === '+') {
        sum = Math.max(0, sum += 1 )
        quantityEelemnt.innerText = sum;
        // console.log(sum);
        
      }
      else if(event.target.innerText === '-'){
        sum =Math.max(0, sum -= 1 )
        quantityEelemnt.innerText = sum;
        // console.log(sum);
      }
    })
    
}

const addToCart = document.getElementById('add-to-cart');
const checkoutContainer = document.getElementById('checkout-container');
const checkoutBtn = document.getElementById('checkout-btn');
const cartCount = document.getElementById('cart-count');
console.log(quantity);


let cartItems = [];
let cartCountSum = 0;
addToCart.addEventListener('click', function(){
  const quantity = parseInt(document.getElementById("quantity").innerText);
  // console.log("hi");
  if (quantity > 0) {
    // console.log("hi");
    
    checkoutContainer.classList.remove('hidden')
    cartCountSum += quantity;
    cartCount.innerText = cartCountSum;


    const selectedColorButton = document.querySelector("button.border-purple-600.w-6");
     const selectedColor = selectedColorButton.id.split('-')[0];
    const selectedSizeButton = document.querySelector("button.border-purple-600:not(.w-6)").innerText.split('$');
     const productSize = selectedSizeButton[0];
     const productPrice = parseInt(selectedSizeButton[1]);
     
    // console.log(selectedSizeButton);
    cartItems.push({
            image: selectedColor + ".png",
            title: " Classy Modern Smart Watch",
            color: selectedColor,
            size: productSize,
            quantity: quantity,
            price: cartCountSum * productPrice,
          });
          // console.log(cartItems);
          
          
  }else{
    checkoutContainer.classList.add('hidden')
  
  }
  

})

const cartModal = document.getElementById('cart-modal')
const cartItemsContianer = document.getElementById('cart-items');
  
checkoutBtn.addEventListener('click', function(){
  cartModal.classList.remove('hidden')
  const row = document.createElement('tr');
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    
    
    row.innerHTML = `
  <td class="py-2 px-4">
      <div class="flex items-center space-x-2">
        <img class="h-12 w-12 object-cover rounded-md" src="./images/${item.image}" alt="">
        <span class="font-semibold">${item.title}</span>
      </div>
    </td>
    <td class="py-2 px-4">${item.color}</td>
    <td class="py-2 px-4">${item.size}</td>
    <td class="py-2 px-4">${item.quantity}</td>
    <td class="py-2 px-4">$${item.price}</td>
  `
  //  cartCount.innerText = 0;
  // quantity.innerText = 0;
  // sum = 0
  }

  cartItemsContianer.appendChild(row);
  
  
  
})

document.getElementById("continue-shopping").addEventListener("click", function () {
    document.getElementById("cart-modal").classList.add("hidden");
  });