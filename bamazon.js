const mysql = require("mysql");
const inquire = require('inquirer')
const axios = require("axios")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
});

function queryAllProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("Hello Traveler! Let me show you my wares...");
    console.log("------------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
    }
    console.log("-----------------------------------");
  });
}


function userQuery() {
  inquire.prompt(
    {
      name: "shop",
      type: "number",
      message: "What product would you like to buy? (Please enter id#)",
    })
    .then(function (answer) {
      var query = "SELECT product_name, price FROM products WHERE ?";
      connection.query(query, { id: id.answer }, function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++)
          console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
      });
    })
};

function itemQuantity() {
  inquire.prompt(
    {
      name: "quantity",
      type: "number",
      message: "And how many can I put you down for? Please select from 1 to " + res[i].quantity + ".",
    })
    .then(function (howMany) {
      if (quantity < res[i].quantity) throw err;
      console.log("I just don't have enough right now. Perhaps you can buy " + res[i].quantity - 1 + "?");

    })


};
function checkOut() {
  inquire.prompt(
    {
      name: "continue",
      type: "list",
      message: "Would you like to checkout?",
      choices: ["Yes", "No", "Cancel"],
    })




  // Take User Quanity and multiply by Price for the Total.
    function checkOut() {
      userTotal = price * userQuanity;

        // Extra Credit: Add 5% sales tax.
    }

  console.log("It seems you would like to purchase " + userQuantity + " " + product_name + "'s at $" + price + ", which would bring your total to $" 
  + userTotal + ". What card would you like to use?");

  // logs the actual query being run
  console.log(query.sql);
  connection.end();