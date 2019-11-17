var maintext1 = document.getElementById("maintext1");
var maintext2 = document.getElementById("maintext2");
var maintext3 = document.getElementById("maintext3");
var maintext4 = document.getElementById("maintext4");
var maintext5 = document.getElementById("maintext5");
var maintext6 = document.getElementById("maintext6");
var sb = document.getElementById("submitbutton");


function subimit() {
  var db = firebase.firestore();
  db.collection("Titiksha").doc().set({
    name: (maintext1.value + ""),
    email: (maintext2.value + ""),
    phone: (maintext4.value + ""),
    mega: (maintext5.value + ""),
    formal: (maintext6.value + ""),
    informal: (maintext7.value + ""),
  }).then(function (doc) {
    alert("You have successfully submitted your event registration Form");
    window.history.back();

  });
  sb.disabled = true;

}
