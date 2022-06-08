console.log("hello hamze");

// data to be sent to the POST request
let _data = {
    email: $("#floatingInput").val(),
    password: $("#floatingPassword").val(),
  }
  
fetch('http://127.0.0.1:8000/api/sign_in', {
method: "POST",
body: JSON.stringify(_data),
headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err));