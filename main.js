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
  { id: "cardNumber", name: "cardNumber", placeholder: "Double click here" },
  { id: "cardType", name: "cardType" },
  { id: "expMonth", name: "expMonth" },
  { id: "expYear", name: "expYear" }
];

var firstNameSettings = [
  { id: "first-name" },
  { name: "fname" }
];

function createFieldInput(settings, stub, type) {
  var field = document.createElement("div");
  field.className = "field";
  var input = document.createElement("input");
  input.type = type || "text";
  var settingsKeys = Object.keys(settings);

  for (var i = 0; i < settingsKeys.length; i++) {
    var key = settingsKeys[i];
    input[key] = settings[key];
  }

  field.appendChild(input);

  stub.parentNode.insertBefore(field, stub);
}

function generateFields(settings, stub) {
  for (var i = 0; i < settings.length; i++) {
    createFieldInput(settings[i], stub);
  }
}

function init() {
	var stub;

  // Baseline for contact information
  stub = document.getElementById("baselineContact");
  generateFields(baselineContactSettings, stub);

  // Baseline for payment information
  stub = document.getElementById("baselinePayment");
  generateFields(baselinePaymentSettings, stub);

	// First name permutations
	stub = document.getElementById("firstNamePermutations");
  generateFields(firstNameSettings, stub);
}

document.addEventListener("DOMContentLoaded", init);