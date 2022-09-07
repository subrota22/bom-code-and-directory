const buy = () => {
    const productName = document.getElementById("productName").value ;
    const numberCount = document.getElementById("numberCount").value;

    const productList = document.getElementById("productList") ;
    const productListCreate = document.createElement("li") ;
    productListCreate.innerHTML =
        `
        ${productName} --> ${numberCount}
        `;
    localStorage.setItem("product name"  , productName) ;
    localStorage.setItem("product Count"  , numberCount) ;
    productList.appendChild(productListCreate) ; 
 }
const  remove=  () => {
    localStorage.removeItem("product name") ;
    localStorage.removeItem("product Count") ;
}

//>>-------->>------->> buyProduct

const setToLocaleStorage = (productItems) => {
const productItemsGet = document.getElementById(productItems) ;
const inputFeild = productItemsGet.value ;
productItemsGet.value =  "" ;
return inputFeild ;
}

const getItems = () => {
    const product = setToLocaleStorage("productName2") ;
    const quantity = setToLocaleStorage("numberCount2") ;
    saveItemToLocalStorage(product , quantity) ;
    displayProductFromLocalStorage() ;
}

const clearItem = () => {
    localStorage.clear()
}
clearItem() ;
//display prouduct

const displayProduct = (product , quantity) => {
const localStorageList = document.getElementById("localStorageList") ;
const localStorageListCreate  = document.createElement("li") ;
localStorageListCreate.innerHTML =
`
${product} , ${quantity}
` ;
localStorageList.appendChild(localStorageListCreate) ;
}

//---------> object set 
const getShoppingCartFromLocalStorage = () => {
    let saveCart = localStorage.getItem("cart") ;
    let cart = {} ;
    if(saveCart) {
    cart = JSON.parse(saveCart);
    }
    return cart ;
}
const saveItemToLocalStorage = (product , quantity) => {
  const cart =  getShoppingCartFromLocalStorage() ;
  cart[product]= quantity ;
  const cartStringFeid = JSON.stringify(cart) ;
  localStorage.setItem("cart" , cartStringFeid) ;
}
//get product 
const displayProductFromLocalStorage =  () => {
const cart = getShoppingCartFromLocalStorage() ;
for (const product in cart ) {
    const quantity  = cart[product] ;
    displayProduct(product , quantity ) ;
}
}

const confirmMessage = () => {
    const confirmCheck = confirm("Are you want to do it ?" )
    if(confirmCheck) {
        alert("Thanks to stay with us")
    } else{
        alert("I think you should join with us")
    }
}