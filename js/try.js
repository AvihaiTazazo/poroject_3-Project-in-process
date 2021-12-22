$( "#FirstName" ).rules( "add", {
  required: true,
  minlength: 2,
  messages: {
    required: "plz enter first name!!!",
    minlength: jQuery.validator.format("Please, at least 2 characters are necessary")
  }
});