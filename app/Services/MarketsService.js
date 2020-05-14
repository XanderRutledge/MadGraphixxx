import Card from "../Models/Card.js"
import _store from "../store.js";



//Public
class MarketsService {

    addToMarket(rawCard) {
        let card = new Card(rawCard)
        _store.State.markets.push(card)
    }


}

const marketService = new MarketsService();
export default marketService;
