var firstNameSettings = [
  { id: "first-name" },
  { name: "fname" }
];

function createFieldInputText(settings, stub) {
  var field = document.createElement("div");
  field.className = "field";
  var label = document.createElement("label");
  label.innerText = "Test";
  var input = document.createElement("input");
  input.type = "text";

  var settingsKeys = Object.keys(settings);

  for (var i = 0; i < settingsKeys.length; i++) {
    var key = settingsKeys[i];
    input[key] = settings[key];
  }

  field.appendChild(label);
  field.appendChild(input);

  stub.parentNode.insertBefore(field, stub);
}

function init() {
	var stub;

	// First name permutations
	stub = document.getElementById("firstNamePermutations");
  for (var i = 0; i < firstNameSettings.length; i++) {
    createFieldInputText(firstNameSettings[i], stub);
  }
}

document.addEventListener("DOMContentLoaded", init);