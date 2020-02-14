 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBbH0_Os-tPgHhn1T2VYkGyxQGk0KErfUc",
    authDomain: "portia-s-website.firebaseapp.com",
    databaseURL: "https://portia-s-website.firebaseio.com",
    projectId: "portia-s-website",
    storageBucket: "portia-s-website.appspot.com",
    messagingSenderId: "203149103404",
    appId: "1:203149103404:web:3202e4b27f9add2aea9c89",
    measurementId: "G-QLYHNTLC40"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
      // Reference messages collection
      var messagesRef = firebase.database().ref('messages');
      // listen for form submit
      document.getElementById('contactform').addEventListener('submit', submitform);
      // Submit form
      function submitform(e){
      e.preventDefault();
      
      //Get values
      var firstname = getInputVal("firstname");
      var lastname = getInputVal('lastname');
      var number = getInputVal('number');
      var email = getInputVal('email');
      var subject = getInputVal('subject');
      // Save messages
      saveMessages(firstname, lastname,number,email, subject)
      // Show alert
      document.querySelector('.alert').style.display = 'block';
      // Hide alert after 3 seconds
      setTimeout(function(){
          document.querySelector('.alert').style.display = 'none';
      },3000);
      // Clear form
      document.getElementById('contactform').reset();
  }
      // Function to get get form values
      function getInputVal(id) {
      return document.getElementById(id). value;
  }
      // Save the messages to firebase
      function saveMessages(firstname, lastname, number, email, subject){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
      YourName: Yourname,
      email: email,
      subject: subject
  })
  }
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        <script src="main.js"></script>