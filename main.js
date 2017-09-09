$("#submit").on("click",function(){
    var x = $("#userinput").val().trim();

    var queryURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ x +"&format=json&callback=?";
    
    // ================ method 1

    // var xhr = new XMLHttpRequest();  //create XMLHttpRequest object
    // xhr.open("GET", queryURL, true); //open a request
    // xhr.send(null);  //send the request

    // xhr.onload = function(){
    //     if(xhr.status == 200) {
    //         var responseObject = (xhr.responseText);
    //         console.log(xhr);
    //     }
    // }

    // =============method 2

    $.ajax({
        url: queryURL,
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            for(i = 1; i < data[1].length; i++){
                var content = "";
                content += "<div class=\"content_box\"><h3 class=\"content_header\">" + "<a href=\"" + data[3][i] + "\">" + data[1][i] + "</a>" + "</h3><hr>";
                content += "<p class=\"content_content\">" + data[2][i] + "</p>" 
                content += "<p>Source: " + "<a href=\"" + data[3][i] + "\">" + data[3][i] + "</a>" + "</p></div><br>"
                $("#content").prepend(content);
            }
        }
    });

    });



