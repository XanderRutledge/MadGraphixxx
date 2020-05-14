
import { generateId } from "../Utils.js"



export default class Card {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.price = data.price
        this.imgUrl = data.imgUrl || "//placehold.it/200x200"
    }

    get Template() {
        return /*html*/`
        <div class="col-6 my-3">
            <div class="card">
                <img height=300px class="card-img-top" src="${this.imgUrl}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${this.title}</h4>
                    <p class="card-text">$${this.price}</p>
                    <button class="btn btn-outline-success" onclick="app.cartsController.addToCart('${this.id}')">Add</button>
                </div>
            </div>
        </div>`
    }


    get removeTemplate() {
        return /*html*/`
        <div class="col-6 my-3">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${this.title}</h4>
                    <p class="card-text">$${this.price}</p>
                    <button class="btn btn-outline-danger" onclick="app.cartsController.removeFromCart('${this.id}')">Remove</button>
                </div>
            </div>
        </div>`
    }
}