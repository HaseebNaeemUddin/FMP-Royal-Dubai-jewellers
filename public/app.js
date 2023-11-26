  var firebaseConfig = {
    apiKey: "AIzaSyBYQt1XCd_Zd9KPBxh2hHKtvfousVwxAgY",
    authDomain: "royaldubaijewellers-ac4b4.firebaseapp.com",
    databaseURL: "https://royaldubaijewellers-ac4b4-default-rtdb.firebaseio.com",
    projectId: "royaldubaijewellers-ac4b4",
    storageBucket: "royaldubaijewellers-ac4b4.appspot.com",
    messagingSenderId: "610990842241",
    appId: "1:610990842241:web:2edffd4770d7a0fb30c880"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
//   console.log(app.database);

function getValue() {
    var inputName = document.getElementById("inputName")
    var inputNumber = document.getElementById("inputNumber")
    var inputAddress= document.getElementById("inputAddress")
    var inputAddress2= document.getElementById("inputAddress2")
    var inputCity= document.getElementById("inputCity")
    var inputState= document.getElementById("inputState")
    var inputZip= document.getElementById("inputZip")
  
    console.log(inputName.value,inputNumber.value);



    var customerInfo = {
        inputName : inputName.value,
        inputNumber : inputNumber.value,
        inputAddress: inputAddress.value,
        inputAddress2: inputAddress2.value,
        inputCity : inputCity.value,
        inputState : inputState.value,
        inputZip : inputZip.value
     }

     console.log(customerInfo);

     firebase.database().ref("OrderInfo").push(customerInfo);
     alert("Order confirmed")
}
