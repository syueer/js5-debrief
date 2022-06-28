// Selecting page elements
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

// 1. Create a fetch GET method: create a function called getData

// hints: optional, can do on your own if you want
// use fetch to call the following address: https://reqres.in/api/users?page=2
// a) first .then() : when the request has finished being fetched, it should then check the response
// if the response is okay, return the response's json, else throw a new Error with message ' request failed'
// b) second .then() : finally, chain another .then that takes the output and returns it. Don't forget to console log the reponse to see it on the browser console.
// c) write a .catch() to handle an error, if it occurs

// 2. Create a fetch SET method: create a function called sendData

// hints: optional, can do on your own if you want
// use fetch to call the following address, and pass it in three arguments:
// the address: "https://reqres.in/api/users"
// an object with a POST method and  headers: {'Content-type': 'application/json'}
// and the body, JSON.stringify({name: 'morpheus', job: 'leader'})
// then, check if the response is okay, if so return the response's json
// if not, throw a new error
// also check for a networkError
// then, it should take the response if the above was successful and return it. Don't forget to console log the reponse to see it on the browser console.

// Buttons eventListeners
getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
