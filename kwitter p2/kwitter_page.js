const firebaseConfig = {
      apiKey: "AIzaSyAYZRQxMaplDRq0j80EWLBGY4fKSzNaaFU",
      authDomain: "kwitter-b98d0.firebaseapp.com",
      projectId: "kwitter-b98d0",
      storageBucket: "kwitter-b98d0.appspot.com",
      messagingSenderId: "583565493904",
      appId: "1:583565493904:web:76354244a0df4693b23a15"
};


const app = initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
