window.addEventListener('load', function() {

  // Elements to add/change content/styling
  const cardBkg = document.getElementById('card-bkg');
  const cardText = document.getElementById('card-text');
  const name = document.getElementById('name');
  const address1 = document.getElementById('address1');
  const address2 = document.getElementById('address2');
  const phoneEmail = document.getElementById('phone-email');

  // TODO: Add form & input elements

  
  // TODO: Update styling of card preview based on input
  // Card background - background-image and justify-content
  // Card text - align-items and text color
  // Name text - font-family and font-size
  // Later, call checkForCompletion() to enable save button if form is complete


  // TODO: Update content of card preview with user input
  // Make sure 2nd line on card preview is removed with display: none if box is checked
  // Later, call checkForCompletion() within each listener to enable save button if form is complete


  // TODO: Add logic for resetting form & card preview
  // Remember to prevent default if user changes mind about resetting
  // Reset content on card preview
  // Reset styling on card preview
  // Disable save button

  
  // TODO: Console log a message when the save button is clicked
  // This will run before any built-in validation


  // TODO: Give user an alert after a successful form submission
  // This will run only after it passes built-in validation


  // Run through all input fields and verify required completion before enabling save button
  function checkForCompletion() {
    for (let i=0; i < allFields.length; i++) {
      let field = allFields[i];
      if (field.required && !field.value) {
        saveButton.disabled = true;
        return; 
      }
    }
    saveButton.disabled = false;
  };
});