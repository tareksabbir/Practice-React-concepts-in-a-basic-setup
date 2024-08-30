const getCartId = () => {
    const cartId = localStorage.getItem("cart")
    if (cartId) {
        return JSON.parse(cartId)
    }
    return []
}

const getSavedData =(cart)=>{
    localStorage.setItem('cart', JSON.stringify(cart))
}

const addCartId = (id) => {
    // const cart = getCartId()
    // cart.push(id)
    // getSavedData(cart)
    const cart = getCartId()
    if(cart.length){
        const removeDuplicate = cart.filter(cartId => cartId !== id)
        removeDuplicate.push(id)
        getSavedData(removeDuplicate)
    } else{
        cart.push(id)
        getSavedData(cart)
    }

    
}

const removeCartFromLs =(id)=>{
    const cart = getCartId()
    const remaining = cart.filter(idx=>idx!==id)
    getSavedData(remaining)
}


export {
    addCartId,
    getCartId,
    removeCartFromLs

}