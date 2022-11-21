window.addEventListener('load', function() {

  // Elements to add/change content/styling
  const cardBkg = document.getElementById('card-bkg');
  const cardText = document.getElementById('card-text');
  const name = document.getElementById('name');
  const address1 = document.getElementById('address1');
  const address2 = document.getElementById('address2');
  const phoneEmail = document.getElementById('phone-email');

  // TODO: Add form & input elements
  const form = document.querySelector('form');

  const styleInput = document.getElementById('style-input');
  const nameInput = document.getElementById('name-input');
  const address1Input = document.getElementById('address1-input');
  const address2Input = document.getElementById('address2-input');
  const omitAddress2 = document.getElementById('omit-address2');
  const phoneInput = document.getElementById('phone-input');
  const emailInput = document.getElementById('email-input');
  const quantityInput = document.getElementById('quantity-input');
  const paperInput = document.querySelector('[name="paper-input"]')

  let allFields = [styleInput, nameInput, address1Input, address2Input, phoneInput, emailInput, quantityInput, paperInput];

  const saveButton = document.querySelector('#save-button');
  const resetButton = document.querySelector('#reset-button');
  
  // TODO: Update styling of card preview based on input
  // Card background - background-image and justify-content
  // Card text - align-items and text color
  // Name text - font-family and font-size
  styleInput.addEventListener('change', function() {
    if (styleInput.value === 'elegant') {
      cardBkg.style.backgroundImage = 'url(images/elegant-bkg.png)';
      cardBkg.style.justifyContent = 'center';
      cardText.style.alignItems = 'center';
      cardText.style.color = '#1a4362';
      name.style.fontFamily = `'Cormorant SC', serif`;
      name.style.fontSize = '20px';
    } else if (styleInput.value === 'floral') {
      cardBkg.style.backgroundImage = 'url(images/floral-bkg.png)';
      cardBkg.style.justifyContent = 'flex-end';
      cardText.style.alignItems = 'flex-end';
      cardText.style.color = 'firebrick';
      name.style.fontFamily = `'Lily Script One', cursive`;
      name.style.fontSize = '20px';
    } else if (styleInput.value === 'geometric') {
      cardBkg.style.backgroundImage = 'url(images/geometric-bkg.png)';
      cardBkg.style.justifyContent = 'flex-end';
      cardText.style.alignItems = 'flex-end';
      cardText.style.color = '#333';
      name.style.fontFamily = `'Michroma', sans-serif`;
      name.style.fontSize = '14px';
    } else if (styleInput.value === 'luxe') {
      cardBkg.style.backgroundImage = 'url(images/luxe-bkg.png)';
      cardBkg.style.justifyContent = 'center';
      cardText.style.alignItems = 'flex-start';
      cardText.style.color = 'darkgoldenrod';
      name.style.fontFamily = `'Marcellus SC', serif`;
      name.style.fontSize = '20px';
    } else if (styleInput.value === 'classic') {
      cardBkg.style.backgroundImage = 'url(images/classic-bkg.png)'; 
      cardBkg.style.justifyContent = 'center';
      cardText.style.alignItems = 'center';
      cardText.style.color = '#666';
      name.style.fontFamily = `'Cormorant SC', serif`;
      name.style.fontSize = '20px';
    }
    checkForCompletion();
  });

  // TODO: Update content of card preview with user input
  // Later, call checkForCompletion() within each listener to enable save button if form is complete
  nameInput.addEventListener('input', function() {
    name.innerHTML = nameInput.value;
    checkForCompletion();
  });
  address1Input.addEventListener('input', function() {
    address1.innerHTML = address1Input.value;
    checkForCompletion();
  });
  address2Input.addEventListener('input', function() {
    address2.innerHTML = address2Input.value;
    checkForCompletion();
  });
  omitAddress2.addEventListener('input', function() {
    if (omitAddress2.checked) {
      address2.style.display = 'none';
    } else {
      address2.style.display = 'block';
    }
    checkForCompletion();
  });
  phoneInput.addEventListener('input', function() {
    phoneEmail.innerHTML = `${phoneInput.value} | ${emailInput.value || 'Your Email'}`;
    checkForCompletion();
  });
  emailInput.addEventListener('input', function() {
    phoneEmail.innerHTML =  `${phoneInput.value || 'Your Phone'} | ${emailInput.value}`;
    checkForCompletion();
  });

  // TODO: Add logic for resetting form & card preview
  resetButton.addEventListener('click', function(event) {
    // Confirm before resetting
    let shouldReset = confirm('\nAre you sure you want to start over?\n');
    if (!shouldReset) {
      event.preventDefault();
      return; // exit function early
    }
    // Reset content on card preview
    name.innerHTML = 'Your Name';
    address1.innerHTML = 'Your Address Line 1';
    address2.innerHTML = 'Your Address Line 2';
    phoneEmail.innerHTML = 'Your Phone | Your Email';
    // Reset styling on card preview
    cardBkg.style.backgroundImage = 'none'; 
    cardBkg.style.justifyContent = 'center';
    cardText.style.alignItems = 'center';
    cardText.style.color = 'inherit';
    name.style.fontFamily = 'inherit';
    name.style.fontSize = '20px';
    // Disable save button
    saveButton.disabled = true;
  });
  
  // TODO: Console log a message when the save button is clicked
  // This will run before any built-in validation
  saveButton.addEventListener('click', function() {
    console.log('Save button clicked.')
  });

  // TODO: Give user an alert after a successful form submission
  // This will run only after it passes built-in validation
  form.addEventListener('submit', function() {
    // We aren't really saving anything to a database in this example, but it's always good to give your user some feedback.
    alert('\nLooks great! Your custom design has been saved.\n');
  });

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
