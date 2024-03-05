"use strict";
class Pizza {
    constructor(title, price) {
        this.base = 'classic';
        this.toppings = [];
        this.title = title;
        this.price = price;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza('Domino', 15);
pizza.addTopping('mushrooms');
pizza.addTopping('pepperoni');
pizza.addTopping('olives');
pizza.removeTopping('mushrooms');
pizza.selectBase('thin');
console.log(pizza);
//# sourceMappingURL=index.js.map