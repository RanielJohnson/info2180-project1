/* Add your JavaScript to this file */
window.onload = function() {

    let button = document.querySelector('button');
    let message = document.querySelector('.message');
  
    button.addEventListener("click", function (element) {
      element.preventDefault();
  
      let email = document.querySelector('#email');     
      
      if (email.value.length == 0) {  
          message.innerHTML = 'Please enter a valid email address.';
      } else {
          message.innerHTML = 'Thank you! Your email address ' + email.value + ' has been added to the mailing list!';
      }
    });
  };