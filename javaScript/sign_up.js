console.log("hello hamze sign up");

$("#submit").click(function(e){
    e.preventDefault();
    let name =  $("#name").val();
    let email = $("#email").val();
    let pass = $("#password").val();
    console.log(name);
    console.log(email);
    console.log(pass);


    // data to be sent to the POST request
    let _data = {
        name: name,
        email: email,
        password: pass,
    }
    
    fetch('http://127.0.0.1:8000/api/sign_up', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));

})
