/*
* Problem
It is your birthday and you want to celebrate it with all your friends at the park.
But for that to happen, the weather needs to be good. No raining.
If the weather is not good, your birthday party will happen in your tiny apartment.
Unfortunately, you can't invite all your friends if your birthday party needs to be in your house.

How can your create a Promise for that situation?
Start defining the weather. Is it raining?
Then write a promise (create a promise).
Then check the promise (consume the promise).
*/

//Define the weather.
let weather = 'cloudy'
//Create a promise.
const myFirstPromise = new Promise((resolve, reject) => {
  if (weather !== 'raining') {
    resolve('party in the park')
  } else {
    reject('party in the apartment')
  }
})

console.log(myFirstPromise)
const party = () => {
  return new Promise((resolve, reject) => {
    if (weather !== 'raining') {
      resolve('party in the park')
    } else {
      reject('party in the apartment')
    }
  })
}
//Consume the promise using then() and catch().
party()
  .then(
    (fulfilled) => {
      console.log(fulfilled)
    }
  ).catch(
    (err) => {
      console.log(err)
    }
  )
