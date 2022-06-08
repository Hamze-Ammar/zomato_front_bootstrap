console.log("hello hamze");

$("#submit").click(function(e){
    e.preventDefault();
    let email = $("#floatingInput").val();
    let pass = $("#floatingPassword").val();


    // data to be sent to the POST request
    let _data = {
        email: email,
        password: pass,
    }
    
    fetch('http://127.0.0.1:8000/api/sign_in', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json =>  handleResponse(json))
    .catch(err => console.log(err));

})

function handleResponse(json){
    console.log(json);
    console.log("---");
    let msg = json.msg;
    let type = json.type;
    //alert(msg);
    if (msg=="You are now logged in!"){
        if (type==1){
            //redirect admin
            alert("redirecting admin")
            window.location.replace("../pages/admin_panel.html");
            return
        }
        //redirect user to home page
        alert(msg);
        window.location.replace("../index.html");
    }else{
        alert(msg);
    }
    //console.log(json.type);

}




