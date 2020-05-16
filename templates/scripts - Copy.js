




// message
function validateName() {
            var name = document.getElementById('fname').value;
            if(name.length == 0) {
              alert("Name can't be blank") ;
              return false;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct name") ;//Validation Message
              return false;
            }
            return true;
          }
          
          
           function validatelname() {
            var phone = document.getElementById('lname').value;
            if(phone.length == 0) {
              alert("Last name can't be blank") ;//Validation Message
              return false;
            }

            

           return true;

         }
         
         
          function validateEmail () {

          var email = document.getElementById('email').value;
          if(email.length == 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

          }

          if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

        }
        
         function validateMessage () {

          var email = document.getElementById('message').value;
          if(email.length == 0) {
            alert("Message can't be blank") ;//Validation Message
            return false;

          }

         
          return true;

        }
        
         function validateForm() {
          if (!validateName() || !validatelname() || !validateEmail() || !validateMessage()) {

            alert("Form not submitted");//Validation Message
            return false;
          }
          else {
            submitted=true;
            return true;
          }
        }
		


     
         
   // var form = document.forms.namedItem("myform"); // high importance!, here you need change "yourformname" with the name of your form
           // var formData = new FormData(form); // high importance!
           
        
  
          
         


      