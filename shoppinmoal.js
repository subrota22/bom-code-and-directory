const getInputFeildValue = (id) => {
const getInputFeildValue = document.getElementById(id) ;
const inputFeild = getInputFeildValue.value ;
getInputFeildValue.value = "" ;
return inputFeild ;
}

const BuyProduct = () =>{
const productItem = getInputFeildValue("productFeild") ;
const productQuantity = getInputFeildValue("productQuantity") ;
setProductToLocalStorage(productItem , productQuantity);
}



const getProductFromLocalStorage = () =>{
let productItem = localStorage.getItem("Products item") ; //key of object 
let products = {} ;
if(productItem) {
products = JSON.parse(productItem) ;
}
return products ;
}

const setProductToLocalStorage = (product , quantity) => {
let products = getProductFromLocalStorage() ;
products[product] = quantity ;
//products.product = quantity //
let stringifyData = JSON.stringify(products) ;
localStorage.setItem("Products item" , stringifyData ) ;
}

const displayAddProducts = (product , quantity) =>{
    const listConatiner = document.getElementById("productList") ;
    const listItems = document.createElement("li") ;
    listItems.innerHTML = `Product : ${product} Quantity : ${quantity}`;
    listConatiner.appendChild(listItems) ;
    }

const displayStoredProductItems = () => {
const cart = getProductFromLocalStorage() ;
for(const productItem in cart) {
    const quantity = cart[productItem]  ;
    //cart.productItem
    console.log(productItem , quantity);
    displayAddProducts(productItem , quantity)
}
}

displayStoredProductItems() ;


