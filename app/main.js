import CartsController from "./Controllers/CartsControllers.js";
import MarketsController from "./Controllers/MarketsControllers.js";


class App {
  cartsController = new CartsController();
  marketsController = new MarketsController();
}

window["app"] = new App();
