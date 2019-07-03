var firebaseConfig = {
  apiKey: 'AIzaSyC0idvt7Joq2fhjDO_hajJWGxAA-h-9gxI',
  authDomain: 'job-list-project.firebaseapp.com',
  databaseURL: 'https://job-list-project.firebaseio.com',
  projectId: 'job-list-project',
  storageBucket: 'job-list-project.appspot.com',
  messagingSenderId: '453492291169',
  appId: '1:453492291169:web:884f8c5fb9257d17'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

$('.submit-button').on('click', function() {
  event.preventDefault();
  let jobTitle = $('#job-title')
    .text()
    .trim();
  let companyName = $('#company-name')
    .text()
    .trim();
  let jobLocation = $('#job-location')
    .text()
    .trim();
  database.ref().push({
    job: jobTitle,
    company: companyName,
    location: jobLocation
  });
});

// Adding info button

database.ref().on('child_added', function(childSnapshot) {
  let newRow = $('<tr>').append(
    $('<td>').text(childSnapshot.val().job),
    $('<td>').text(childSnapshot.val().company),
    $('<td>').text(childSnapshot.val().location)
  );

  $('table > tbody').append(newRow);
});
