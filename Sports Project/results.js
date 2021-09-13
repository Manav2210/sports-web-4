const firebaseConfig = {
  apiKey: "AIzaSyAirMs8nkstMimGCkk1_J9riqbK09cPwaM",
  authDomain: "sports-web-4.firebaseapp.com",
  databaseURL: "https://sports-web-4-default-rtdb.firebaseio.com",
  projectId: "sports-web-4",
  storageBucket: "sports-web-4.appspot.com",
  messagingSenderId: "1078621193186",
  appId: "1:1078621193186:web:dc6b73620035f25421efbb"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var userInputRef = firebase.database().ref('userInput');


function readResults(year){

    var results = firebase.database().ref(year);
    results.on('value', (data) => {
    var yr = data.val();
     document.getElementById("result1").innerHTML ="<br>"+yr.toUpperCase();
     document.getElementById("result2").innerHTML ="<br>"+yr.toUpperCase();
     document.getElementById("result3").innerHTML ="<br>"+yr.toUpperCase();
    })
}


function saveMessages(year) {
    var newuserInputsRef = userInputRef.push();
    newuserInputsRef.set({
        year:year})

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function submitForm(e) {

    e.preventDefault();
    var theYear = getInputVal("year");

    readResults(theYear);

}

document.getElementById('res').addEventListener('submit',submitForm);
