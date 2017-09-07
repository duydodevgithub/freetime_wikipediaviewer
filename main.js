$("#submit").on("click",function(){
    var x = $("#userinput").val().trim();

    var queryURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ x +"&format=json&callback=?";
    
    // ================ method 1

    var xhr = new XMLHttpRequest();  //create XMLHttpRequest object
    xhr.open("GET", queryURL, true); //open a request
    xhr.send(null);  //send the request

    xhr.onload = function(){
        if(xhr.status == 200) {
            var responseObject = (xhr.responseText);
            console.log(responseObject);
        }
    }

    // =============method 2

    // $.ajax({
    //     url: queryURL,
    //     type: "GET",
    //     dataType: "json",
    //     success: function(data) {
    //         console.log(data);
    //     }
    // });

    });



