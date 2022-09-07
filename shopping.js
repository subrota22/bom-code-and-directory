//function to get feild 
const getInputValueById = id => {
    const inputFeild = document.getElementById(id) ;
    const inputValue = inputFeild.value ;
    inputFeild.value = "" ;
    return inputValue ;   
}
const AddProduct = () => {
const product = getInputValueById("productFeild") ;
const quantity = getInputValueById("quantity") ;
saveItemToLocalStorage(product , quantity) ;
}

const getShoppingCartFromLocalStorage = () => {
    let saveCart = localStorage.getItem('cart') ;
    let cart = {} ;
    if(saveCart) { //not assign ===
        cart = JSON.parse(saveCart) ;
    }  
    return cart ;
}

const saveItemToLocalStorage = (product , quantity) => {
const cart = getShoppingCartFromLocalStorage() ;
cart[product] = quantity ; //>>===>> product name will be change every time 
const cartStringifeid = JSON.stringify(cart) ;
//save to local storage
localStorage.setItem('cart' , cartStringifeid) ;
}
const displayAddProduct = (product , quantity) => {
    const productList = document.getElementById("list") ;
    const listItem  = document.createElement("li") ;
    listItem.innerText = 
    `
    ${product} : ${quantity}
    ` ;
    productList.appendChild(listItem) ;
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalStorage() ;
    for(const product in cart) {
        const quantity = cart[product] ; //bracket notation  cause product have bracket notion 
        console.log(product , quantity);
    }
}

displayStoredProducts() ;