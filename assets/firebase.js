var firebaseConfig = {
    apiKey: "AIzaSyC0idvt7Joq2fhjDO_hajJWGxAA-h-9gxI",
    authDomain: "job-list-project.firebaseapp.com",
    databaseURL: "https://job-list-project.firebaseio.com",
    projectId: "job-list-project",
    storageBucket: "job-list-project.appspot.com",
    messagingSenderId: "453492291169",
    appId: "1:453492291169:web:884f8c5fb9257d17"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database();

  let queryURL = "https://cors-anywhere.herokuapp.com/" + "https://jobs.github.com/positions.json?description=" + description + "&location=" + searchLocation;
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      $('.submit-button').on('click', function() {
        event.preventDefault();
    
        let jobTitle = $(this).response.title;
        let companyName = $(this).response.company;
        let jobLocation = $(this).response.location;
      
        database.ref().push({
          title: jobTitle,
          company: companyName,
          location: jobLocation
        });
      });
  });
