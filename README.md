# bamazon

This is Bamazon. It is a simple e-commerce app, or at least the backend for it.

Bamazon uses some third-party node modules, has it's own modules, and connects to a mysql database to store and retrieve product and department information.

## Third-party Node Modules

Bamazon uses these node modules: 

[`cli-table`](https://www.npmjs.com/package/cli-table) 
[`inquirer`](https://www.npmjs.com/package/inquirer) 
[`mysql`](https://www.npmjs.com/package/mysql).


## Customer Module

The customer module lets users select a product to purchase, enter the number of items they wish to purchase, and then complete the purchase.

The complete purchase process shows how much the total cost is (based on number of items).



To run this module in the terminal:

`node bamazonCustomer.js`

## GIF

<img src="/assets/poster.gif">