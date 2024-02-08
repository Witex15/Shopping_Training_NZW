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
        if (this.#items == null) {
            throw new EmptyCartException();
        }
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
    count(distinct = false) {
        if (distinct) return this.items.length;

        let count = 0;
        for (let i = 0; i < this.items.length; i++) {
            count += this.items[i].quantity;
        }
        if (count === 0) {
            throw new EmptyCartException();
        }
        return count;
    }
    add(items) {
        if (this.#items == null) this.#items = [];
        items.forEach(item => {
            this.#items.push(item);
        });
    }
    //endregion private methods
}