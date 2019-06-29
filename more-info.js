$( document ).ready(function() {
    let search = window.location.search;
    search = search.replace('?', '');
    search = search.split('&');

    let searchObj = {}
    for(let i=0; i<search.length; i++){
        const keyAndValue = search[i].split('=');
        searchObj[keyAndValue[0]] = keyAndValue[1];
    }
    let descriptionQueryURL = "https://cors-anywhere.herokuapp.com/" + "https://jobs.github.com/positions/" + searchObj.job_id + ".json?markdown=true";
    $.ajax({
        url: descriptionQueryURL,
        method: "GET"
    }).then(function(response) {
        let results = response;
        $("#company-name").append("<p>" + results.company + "</p>");
        $("#job-title").append("<p>" + results.title + "</p>");
        $("#job-type").append("<p>" + results.type + "</p>");
        $("#job-location").append("<p>" + results.location + "</p>");
        $("#company-logo").append("<img src=" + results.company_logo + "</img>");
        $("#job-description").append("<p>" + results.description + "</p>");
    });
});