
var firebaseConfig = {
      apiKey: "AIzaSyCean8OgllPNrRlWExITzuhaN_ycLMErTk",
      authDomain: "kwitter-8f43a.firebaseapp.com",
      databaseURL: "https://kwitter-8f43a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8f43a",
      storageBucket: "kwitter-8f43a.appspot.com",
      messagingSenderId: "761940292475",
      appId: "1:761940292475:web:e46b37acc00c758e4c03de"
    };
    firebase.initializeApp(firebaseConfig);
    var user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name;
    function addRoom(){
          var room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log(Room_names);
           var row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
           document.getElementById("output").innerHTML+= row;
    
          //Start code
    
          //End code
          });});}
    getData();
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location="kwitter_page.html";
    }