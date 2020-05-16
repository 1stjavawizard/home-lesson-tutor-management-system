




// message
function validateName() {
            var name = document.getElementById('fname').value;
            if(name.length === 0) {
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
            if(phone.length === 0) {
              alert("Last name can't be blank") ;//Validation Message
              return false;
            }

            

           return true;

         }
         
         
          function validateEmail () {

          var email = document.getElementById('email').value;
          if(email.length === 0) {
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
          if(email.length === 0) {
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
		


  
  
function validateName2() {
            var name = document.getElementById('Name').value;
            if(name.length === 0) {
              alert("Name can't be blank") ;
              return false;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct name") ;//Validation Message
              return false;
            }
            return true;
          }
         
           function validatePhone() {
            var phone = document.getElementById('Phone').value;
            if(phone.length === 0) {
              alert("Phone can't be blank") ;//Validation Message
              return false;
            }

            

           return true;

         }
         
          
          
          function validateEmail2(){

          var email = document.getElementById('Email').value;
          if(email.length === 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

          }

          if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

        }
        
		
         function validateHours() {

          var email = document.getElementById('Hours').value;
          if(email.length === 0) {
            alert("Hours can't be blank") ;//Validation Message
            return false;

          }

         
          return true;

        }
		
		
		
		
function validateaddress() {
            var name = document.getElementById('address').value;
            if(name.length === 0) {
              alert("Address can't be blank") ;
              return false;

            }
            
            return true;
          }
          
         
           function validateClasses() {
            var phone = document.getElementById('Classes').value;
            if(phone.length === 0) {
              alert("Classes can't be blank") ;//Validation Message
              return false;
            }

            

           return true;

         }
         
         
          function validateTutors_no() {

          var email = document.getElementById('tutors_no').value;
          if(email.length === 0) {
            alert("This  can't be blank") ;//Validation Message
            return false;

          }

          
          return true;

        }
         function validateStudents_no() {

          var email = document.getElementById('students_no').value;
          if(email.length === 0) {
            alert("This can't be blank") ;//Validation Message
            return false;

          }

         
          return true;

        }
		
		
	
function validateSubjects() {
            var name = document.getElementById('Subjects').value;
            if(name.length === 0) {
              alert("Subject can't be blank") ;
              return false;

            }
            
            return true;
          }
          
          
           function validateHear_about(){
            var phone = document.getElementById('hear_about').value;
            if(phone.length === 0) {
              alert("This can't be blank") ;
              return false;
            }

           return true;

         }
         
         
          function validateRequest_details(){

          var email = document.getElementById('request_details').value;
          if(email.length === 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

          }


          return true;

        }
        
        
        
         function validateForm2() {
          if (!validateName2() || !validatePhone() || !validateEmail2() || !validateHours() || !validateaddress() || !validateClasses() || !validateTutors_no() || !validateStudents_no() || !validateSubjects() || !validateHear_about() || !validateRequest_details()) {

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
           
// become a tutor


function validateName3() {
            var name = document.getElementById('fname2').value;
            if(name.length === 0) {
              alert("Name can't be blank") ;
              return false;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct name") ;//Validation Message
              return false;
            }
            return true;
          }
		
		  function validateName4() {
            var name = document.getElementById('lname2').value;
            if(name.length === 0) {
              alert("Name can't be blank") ;
              return false;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct name") ;//Validation Message
              return false;
            }
            return true;
          }
         
          
         
          
          
          function validateEmail3(){

          var email = document.getElementById('email2').value;
          if(email.length === 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

          }

          if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

        }
		 
		 
         function validateAge() {

          var email = document.getElementById('age').value;
          if(email.length === 0) {
            alert("Age can't be blank") ;//Validation Message
            return false;

          }

         
          return true;

        }
		
		function validatePhone2(){
            var phone = document.getElementById('phone2').value;
            if(phone.length === 0) {
              alert("Phone Number can't be blank") ;//Validation Message
              return false;
            }

            

           return true;

         }
        
		
		
	 
function validateaddress2() {
            var name = document.getElementById('address2').value;
            if(name.length === 0) {
              alert("Address can't be blank") ;
              return false;

            }
            
            return true;
          }
          
      
           function validateteaching2() {
            var phone = document.getElementById('teaching2').value;
            if(phone.length === 0) {
              alert("Teaching Experience can't be blank") ;//Validation Message
              return false;
            }

            

           return true;

         }
         
          function validatedegree2() {

          var email = document.getElementById('degree2').value;
          if(email.length === 0) {
            alert("University degree  can't be blank") ;//Validation Message
            return false;

          }

          
          return true;

        }
		 
         function validatesubject2() {

          var email = document.getElementById('subject2').value;
          if(email.length === 0) {
            alert("Subjects field can't be blank") ;//Validation Message
            return false;

          }

         
          return true;

        }
		
		
	    
function validateteacher2() {
            var name = document.getElementById('teacher2').value;
            if(name.length === 0) {
              alert("State if you are currently a teacher or not") ;
              return false;

            }
            
            return true;
          }
          
        
           function validateapproach2() {
            var phone = document.getElementById('approach2').value;
            if(phone.length === 0) {
              alert("Approach to tutoring can't be blank") ;//Validation Message
              return false;
            }

            

           return true;

         }
         
       
          function validatesummary2(){

          var email = document.getElementById('summary2').value;
          if(email.length === 0) {
            alert("Summary can't be blank") ;//Validation Message
            return false;

          }


          return true;

        }
        
        
       
         function validateForm3() {
          if (!validateName3() || !validateName4() || !validateEmail3() || !validateAge() || !validatePhone2() || !validateaddress2() || !validateteaching2() || !validatedegree2() || !validatesubject2() || !validateteacher2() || !validateapproach2() || !validatesummary2()) {

            alert("Form not submitted");//Validation Message
            return false;
          }
          else {
            submitted=true;
            return true;
          }
        }
		
  
          
// code of conduct message


function validateNamed() {
            var name = document.getElementById('comment').value;
            if(name.length === 0) {
              alert("Name can't be blank") ;
              return false;

            }
           
          }
		
		  function validateName5() {
            var name = document.getElementById('author').value;
            if(name.length === 0) {
              alert("Name can't be blank") ;
              return false;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct name") ;//Validation Message
              return false;
            }
            return true;
          }
         
          
         
          
          
          function validateEmail4(){

          var email = document.getElementById('email3').value;
          if(email.length === 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

          }

          if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

        }
		 
		   function validateUrl() {
        var url = document.getElementById("url").value;
         if(url.length === 0) {
              alert("Website address can't be blank") ;
              return false;

            }
            
            return true;

    }
        
		
	
		
	
         function validateForm4() {
              submitted=true;
            return true;
         
        }
		



      