const EmptyCartException = require("./EmptyCartException");
module.exports = class Cart {
    //region private attributes
    #items;
    #total;
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.#items = items;
    }
    get items() {
        if (this.#items == null) {
            throw new EmptyCartException();
        }
        return this.#items;
    }
    get total() {
        return this.getSum();
    }
    //endregion public methods

    //region private methods
    getSum() {
        let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].total;
        }
        return sum;
    }
    //endregion private methods
}