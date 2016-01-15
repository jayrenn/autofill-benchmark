// Baseline settings

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

// Contact settings

var firstNameSettings = [
  { id: "first-name", placeholder: "Double click here" },
  { name: "fname" },
  { id: "city_", name: "first-name" }
];

var emailSettings = [
  { name: "email-address" },
  { name: "emailAddress" }
];

// Payment settings

var nameOnCardSettings = [
  { name: "card-name", placeholder: "Double click here" }
];

var expMonthSettings = [
  { name: "credit-card-month" },
  { name: "expiryMonth" }
];

var expYearSettings = [
  { name: "credit-card-year" },
  { name: "expiryYear" }
];

var settingsList = [
  { settings: baselineContactSettings, stub: "baselineContact" },
  { settings: baselinePaymentSettings, stub: "baselinePayment" },
  { settings: firstNameSettings, stub: "firstNamePermutations" },
  { settings: emailSettings, stub: "emailPermutations" },
  { settings: nameOnCardSettings, stub: "nameOnCardPermutations" },
  { settings: expMonthSettings, stub: "expMonthPermutations" },
  { settings: expYearSettings, stub: "expYearPermutations" }
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

function bulkGenerate(list) {
  for (var i = 0; i < list.length; i++) {
    generateFields(list[i].settings, list[i].stub);
  }
}

function init() {
  bulkGenerate(settingsList);
}

document.addEventListener("DOMContentLoaded", init);