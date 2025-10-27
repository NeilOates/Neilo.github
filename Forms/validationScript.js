    // JavaScript code for form validation

	// Prevent form from submitting


document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault();
 console.log('form submission preented');

      // Retrieve the input field value

let inputElement = document.getElementById('inputField').value;


      // Regular expression pattern for alphanumeric input

      
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  

      

      // Check if the input value matches the pattern
      if (alphanumericRegex.test(inputElement)) {
        alert('The number is valid!')

      }else {alert('The number is not valid')}


      

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message
        });