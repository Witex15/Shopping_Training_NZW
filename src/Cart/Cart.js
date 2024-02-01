module.exports = class Cart {
    //region private attributes
    #items;
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.#items = items;
    }

    get total() {
        if (this.#items == null) throw new EmptyCartException();
        let total = 0;
        for (let item of this.#items) {
            total += item.total;
        }
        return total;
    }

    count() {
        if (this.#items == null) throw new EmptyCartException();
        let count = 0;
        for (let item of this.#items) {
            count += item.quantity;
        }
        return count;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}