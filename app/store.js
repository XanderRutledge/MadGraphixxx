import Card from "./Models/Card.js";

let _state = {
  /** @type {Card[]} */
  markets: [
    new Card({ title: "GTX 970", price: "450", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81n4Wl%2BSP%2BL._AC_SX466_.jpg" }),
    new Card({ title: "GTX 1080Ti", price: "800", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/818R7E0341L._AC_SL1500_.jpg" }),
    new Card({ title: "Intel i7 7700k", price: "600", imgUrl: "https://c1.neweggimages.com/ProductImage/19-117-726-Z01.jpg" })
  ],



  /** @type {removeTemplate[]} */
  carts: []
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("cards"));
  if (data) {
    data.carts = data.carts.map(pojoCard => new Card(pojoCard))
    data.markets = data.markets.map(pojoCard => new Card(pojoCard))
    _state = data;
  }
}
_loadState();

class Store {
  get State() {
    return _state;
  }


  saveState() {
    localStorage.setItem("cards", JSON.stringify(_state))
  }

}

const STORE = new Store();
export default STORE;
