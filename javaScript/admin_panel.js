// =========== Display Restaurants part ==============

let display_restos = $("#displayRestos");

display_restos.click(function(){

    
    fetch('http://127.0.0.1:8000/api/get_restaurants', {
    method: "POST",
    //body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json =>  handleResponseResto(json))
    .catch(err => console.log(err));
})

// Display Restaurants
function handleResponseResto(json){
    ///
    let restos = json.restos;

    // Displaying table in page
    // title:
    document.getElementById("title-table").innerHTML = 'Restaurants';
    //table part:
    document.getElementById('table-main').innerHTML = `<table class="table table-striped table-sm">
                                                            <thead>
                                                                <tr>
                                                                <th>#</th>
                                                                <th>name</th>
                                                                <th>description</th>
                                                                <th>address</th>
                                                                <th>created At</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="table">
                                                            </tbody>
                                                        </table>`
    let table = document.getElementById("table");
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


// =========== End Display Restaurants part ==============

// =========== Display Reviews part Accept & Decline ==============

let display_reviews = $("#displayReviews");

display_reviews.click(function(){

    
    fetch('http://127.0.0.1:8000/api/get_pending_reviews', {
    method: "GET",
    //body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json =>  handleResponseReviews(json))
    .catch(err => console.log(err));
})


function handleResponseReviews(json){
    console.log(json);
    let reviews = json.reviews;
    console.log(reviews);

    // Prepare DOM
    // Displaying table in page
    // title:
    document.getElementById("title-table").innerHTML = 'Pending Reviews';
    //table part:
    document.getElementById('table-main').innerHTML = `<table class="table table-striped table-sm">
                                                            <thead>
                                                                <tr>
                                                                <th>#</th>
                                                                <th>content</th>
                                                                <th>rate</th>
                                                                <th>user_id</th>
                                                                <th>rest_id</th>
                                                                <th>accept/decline</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="table">
                                                            </tbody>
                                                        </table>`

    reviews.forEach(element => {
        //console.log(element);
        table.innerHTML += `<tr id="${element.id}">
                                <td>${element.id}</td>
                                <td>${element.content}</td>
                                <td>${element.rate}</td>
                                <td>${element.user_id}</td>
                                <td>${element.rest_id}</td>
                                <td><i onClick= "acceptReview(this)" class="fa-solid fa-check"></i><i onClick= "deleteReview(this)" class="fa-solid fa-xmark"></i></td>
                            </tr>`

    })
}

let acceptReview = (e) => {
    let id = e.parentElement.parentElement.id;
    //console.log(id);
    //console.log(e);
    e.parentElement.parentElement.remove();
    sendBackResponse(id, 'accept');
}

let deleteReview = (e) => {
    let id = e.parentElement.parentElement.id;
    e.parentElement.parentElement.remove();
    sendBackResponse(id, 'decline');
}

function sendBackResponse(id, response){

    // data to be sent to the POST request
    let _data = {
        id: id,
        res: response,
    }
    
    fetch('http://127.0.0.1:8000/api/approve_review', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json =>  handleResponse(json))
    .catch(err => console.log(err));
}

