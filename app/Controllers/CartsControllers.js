import _cartsService from "../Services/CartsService.js";
import _store from "../store.js";


function _draw() {
    let carts = _store.State.carts
    let template = ''
    carts.forEach(c => template += c.removeTemplate)
    document.getElementById("carts").innerHTML = template
}

//Public
export default class CartsController {
    constructor() {
        _draw()
    }

    addToCart(id) {
        _cartsService.addToCart(id)
        _draw()
    }

    removeFromCart(id) {
        _cartsService.removeFromCart(id)
        _draw()
    }

}
