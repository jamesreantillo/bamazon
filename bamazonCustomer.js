//Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

//Connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "josanjames0402", 
    database: "bamazon"
});

//Functions
function displayTable() {
    
    connection.query('SELECT * FROM Products', function(error, response) {
        // console.log(response)
        if (error) { console.log(error) };
        
        var theDisplayTable = new Table({
            
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            
            colWidths: [10, 20, 25, 10, 10]
        });
        
        for (i = 0; i < response.length; i++) {
            
            theDisplayTable.push(
                [response[i].item_id, response[i].product_name, response[i].department_name, response[i].price, response[i].stock_quantity]
            );
        }
        
        console.log(theDisplayTable.toString());
        inquiry();
    });
};




function inquiry() {
    
    inquirer.prompt([

        {
            name: "id",
            type: "input",
            message: "Select the item number of the product you wish to purchase?"
        }, {
            name: 'quantity',
            type: 'input',
            message: "How many would you like to buy?"
        },

    ]).then(function(answers) {
        
        var quantityDesired = answers.quantity;
        var IDDesired = answers.id;
        purchase(IDDesired, quantityDesired);
    });

}; 


function purchase(ID, quantityNeeded) {
     
    connection.query('SELECT * FROM Products WHERE item_id = ' + ID, function(error, response) {
        if (error) { console.log(error) };

       
        if (quantityNeeded <= response[0].stock_quantity) {
            
            var totalCost = response[0].price * quantityNeeded;
            
            console.log("We have what you need! I'll have your order right out!");
            console.log("Your total cost for " + quantityNeeded + " " + response[0].product_name + " is " + totalCost + ". Thank you for your Business!");
            
            connection.query('UPDATE Products SET stock_quantity = stock_quantity - ' + quantityNeeded + ' WHERE item_id = ' + ID);
        } else {
            console.log("Our apologies. We don't have enough " + response[0].product_name + " to fulfill your order.");
        };
        displayTable();
    });

}; 

displayTable()










