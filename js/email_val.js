$(document).ready(function() { 
 
  $('#btn-submit').click(function() {  

      $(".error-message").hide();
      
      var Error = false;
      var Reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      var emailVal = $("#email").val();
      if(emailVal == '') {
          $("#btn-submit").after('<span class="error-message">Please provide a valid email</span>');
          $("#email").addClass("error-icon");
          Error = true;
      }

      else if(!Reg.test(emailVal)) {
          $("#btn-submit").after('<span class="error-message">Please provide a valid email</span>');
          $("#email").addClass("input-error-icon");
          Error = true;
      }

      if(Error == true) { return false; }

  });
});