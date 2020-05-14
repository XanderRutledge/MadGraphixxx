import _marketsService from "../Services/MarketsService.js";
import _store from "../store.js";


function _draw() {
    let markets = _store.State.markets
    let template = ''
    markets.forEach(m => template += m.Template)
    document.getElementById("markets").innerHTML = template
}

//Public
export default class MarketsController {
    constructor() {
        _draw()
    }

    addToMarket(e) {
        e.preventDefault();
        let rawCard = {
            title: e.target.title.value,
            price: e.target.price.value,
            imgUrl: e.target.imgUrl.value,
        }
        _marketsService.addToMarket(rawCard)
        _draw()
    }


}
