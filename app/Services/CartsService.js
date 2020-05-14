import removeTemplate from "../Models/Card.js";
import _store from "../store.js";

//Public
class CartsService {

    addToCart(id) {
        let cart = _store.State.markets.find(m => m.id == id)
        _store.State.carts.push(cart)
        _store.saveState();
    }
    removeFromCart(id) {
        _store.State.carts = _store.State.carts.filter(c => c.id !== id)
        _store.saveState();
    }

}

const cartsService = new CartsService();
export default cartsService;
