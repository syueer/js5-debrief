// Selecting page elements
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
// AJAX funtions

// get request
const getData = async () => {
  try {
    const jsonResponse = await fetch('https://reqres.in/api/users/469')
    const data = await jsonResponse.json()
    console.log(data)
    return data
  } catch (err) {
    return err
  }
}

// post request
const sendData = async () => {
  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "name": "Yue",
        "job": "frontend developer"
      })
    });
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// Buttons eventListeners
getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
