"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId;
    #name;
    #quantity;
    #price;
    #cartItem;
    #total;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        if (articleId < 1) throw new InvalidArticleIdException();
        this.#articleId = articleId;
        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
        this.#total = quantity * price;
    }

    get articleId() {
        return this.#articleId;
    }

    get name() {
        return this.#name
    }

    get quantity() {
    return this.#quantity;
    }

    set quantity(value) {
        throw new Error();
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        throw new Error();
    }

    get total() {
        return this.#total;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



