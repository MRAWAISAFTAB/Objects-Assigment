"use strict";
// Define an object named people containing an empty array called friends.
const people = {
    friends: []
};
// Create three separate objects, each representing a friend.
const friend1 = { firstName: "Aman", lastName: "Ullah" };
const friend2 = { firstName: "Usman", lastName: "Khan" };
const friend3 = { firstName: "Ahmed", lastName: "Ali", id: 1 };
// Add these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
// Output the entire people object to the console, displaying your information and your friend list.
console.log(people);
//////////////QUESTION NO 2/////////////////
// Scrambled Array
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// Convert non-strings to strings
const stringArray = scrambledArray.map(element => String(element));
// Rearrange elements in the desired order
const rearrangedArray = [stringArray[7], stringArray[4], stringArray[5], stringArray[0], stringArray[1], stringArray[6]];
// Use join() to combine elements back into a single string
const result = rearrangedArray.join(" ");
// Output the result
console.log(result); // "I am a student of GIAIC"
///////////QUESTION NO 3////////////////
// Define an array named inventory to store product information.
const inventory = [];
// Create three separate objects, each representing a product.
const product1 = { name: "Laptop", model: "X123", cost: 1200, quantity: 10 };
const product2 = { name: "Smartphone", model: "Y456", cost: 800, quantity: 20 };
const product3 = { name: "Tablet", model: "Z789", cost: 500, quantity: 15 };
// Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1, product2, product3);
// Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log(inventory[2].quantity); // Output: 15
// Explore adding and accessing more elements within the inventory array.
const product4 = { name: "Smartwatch", model: "W012", cost: 200, quantity: 30 };
inventory.push(product4);
console.log(inventory);
