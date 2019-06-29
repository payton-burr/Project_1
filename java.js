let description = "";
let searchLocation = "";

function runLocationSearch() {
    $("#search-button1").click(function() {
        $("#searchResults").empty();
        let searchLocation = $("input").val().trim();
        let innerHTML = '';

        let queryURL = "https://cors-anywhere.herokuapp.com/" + "https://jobs.github.com/positions.json?description=" + description + "&location=" + searchLocation;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            let results = response;
            for(var i = 0; i < results.length; i++){
                innerHTML += '<tr>';
                innerHTML += '<td>' + results[i].title + '</td>';
                innerHTML += '<td>' + results[i].company + '</td>';
                innerHTML += '<td>' + results[i].location + '</td>';
                innerHTML += '<td><button id="infoButton">More Info</button></td>'
                innerHTML += '</tr>';
            }
            $("#searchResults").append(innerHTML);
        });
    });
}

runLocationSearch();

$("infoButton").click(function(){
    return "Hello world!";
  });
  $("searchResults").click(function(event){
    $("<p>").html(event.result);
  });