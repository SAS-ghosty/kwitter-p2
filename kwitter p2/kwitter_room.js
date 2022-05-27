const firebaseConfig = {
      apiKey: "AIzaSyAYZRQxMaplDRq0j80EWLBGY4fKSzNaaFU",
      authDomain: "kwitter-b98d0.firebaseapp.com",
      projectId: "kwitter-b98d0",
      storageBucket: "kwitter-b98d0.appspot.com",
      messagingSenderId: "583565493904",
      appId: "1:583565493904:web:76354244a0df4693b23a15"
};


const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html"
}
