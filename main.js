var baselineContactSettings = [
  { id: "firstName", name: "firstName", placeholder: "Double click here" },
  { id: "middleName", name: "middleName" },
  { id: "lastName", name: "lastName" },
  { id: "addressLine1", name: "addressLine1" },
  { id: "addressLine2", name: "addressLine2" },
  { id: "city", name: "city" },
  { id: "state", name: "state" },
  { id: "zipCode", name: "zipCode" },
  { id: "phone", name: "phone" },
  { id: "email", name: "email" }
];

var baselinePaymentSettings = [
  { id: "cardName", name: "cardName", placeholder: "Double click here" },
  { id: "cardNumber", name: "cardNumber" },
  { id: "cardType", name: "cardType" },
  { id: "expMonth", name: "expMonth" },
  { id: "expYear", name: "expYear" }
];

var firstNameSettings = [
  { id: "first-name", placeholder: "Double click here" },
  { id: "city_", name: "first-name" },
  { id: "first-name", name: "city_" },
  { name: "fname" }
];

var nameOnCardSettings = [
  { id: "name-on-card" },
  { name: "card-name" }
];

function createFieldInput(settings, stub, type) {
  var settingsKeys = Object.keys(settings);
  var field = document.createElement("div");
  field.className = settingsKeys.indexOf("placeholder") != -1 ? "field placeholder" : "field";
  var input = document.createElement("input");
  input.type = type || "text";

  for (var i = 0; i < settingsKeys.length; i++) {
    var key = settingsKeys[i];
    input[key] = settings[key];
  }

  field.appendChild(input);

  stub.parentNode.insertBefore(field, stub);
}

function generateFields(settings, stub) {
  stub = document.getElementById(stub);
  for (var i = 0; i < settings.length; i++) {
    createFieldInput(settings[i], stub);
  }
}

function init() {
	var stub;

  // Baseline for contact information
  generateFields(baselineContactSettings, "baselineContact");

  // Baseline for payment information
  generateFields(baselinePaymentSettings, "baselinePayment");

	// First name permutations
  generateFields(firstNameSettings, "firstNamePermutations");
}

document.addEventListener("DOMContentLoaded", init);