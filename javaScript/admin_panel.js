console.log("admin panel")

let display_restos = $("#displayRestos");

display_restos.click(function(){
    console.log("heyyyy");

    // Get restaurants
    // let _data = {
    //     email: email,
    //     password: pass,
    // }
    
    fetch('http://127.0.0.1:8000/api/get_restaurants', {
    method: "POST",
    //body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json =>  handleResponse(json))
    .catch(err => console.log(err));
})


function handleResponse(json){
    ///
    let restos = json.restos;
    let table = document.getElementById("table");
    //console.log(json);
    //console.log(restos);
    restos.forEach(element => {
        //console.log(element);
        table.innerHTML += `<tr>
                                <td>${element.id}</td>
                                <td>${element.name}</td>
                                <td>${element.description}</td>
                                <td>${element.address}</td>
                                <td>${element.created_at}</td>
                            </tr>`
    });
}