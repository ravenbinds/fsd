var user = document.getElementById("user");
var pass = document.getElementById("pass");

$("#button").click(function() {
    if (user.value == "admin" && pass.value == "12345") {
        document.getElementById('set').setAttribute("action", "home.html");
    } else {
        alert("incorrect username or password");
    }
});




$(document).ready(function() {

    $.getJSON("https://jsonplaceholder.typicode.com/todos", function(data) {
        var output = "";

        $.each(data, function(key, value) {
            output += '<tr>';
            output += '<td>' + value.id + '</td>';
            output += '<td>' + value.title + '</td>';
            if (value.completed == false) {
                output += '<td><input id="hello" type="checkbox" onchange="done()">completed</td>';
            }
            if (value.completed == true) {
                output += '<td><input type="checkbox"checked disabled>completed</td>';
            }
            output += '</tr>';
        });
        $('#output_tab').append(output);
    });
});


function done() {
    var prom = new Promise(function(resolve, reject) {
        var check = $('input:checkbox:checked').length;
        var values = check - 90;
        if (values >= 5) {
            resolve("Congrats.you have succesfully completed " + values + " tasks");
        } else {
            reject("not enough tasks completed");
        }
    })
    prom.then(function(e) {
            setTimeout(function() {
                alert(e);
            }, 500);
        })
        .catch(function(e) {
            console.log(e);
        })
}