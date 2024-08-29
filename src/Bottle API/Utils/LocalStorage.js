const getCartId = () => {
    const cartId = localStorage.getItem("cart")
    if (cartId) {
        return JSON.parse(cartId)
    }
    return []
}

const addCartId = (id) => {
    const cart = getCartId()
    if(cart.length){
        const removeDuplicate = cart.filter(cartId => cartId !== id)
        removeDuplicate.push(id)
        localStorage.setItem('cart', JSON.stringify(removeDuplicate))
    } else{
        cart.push(id)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}


export {
    addCartId,
    getCartId
}