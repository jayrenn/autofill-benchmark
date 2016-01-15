var firstNameSettings = [
  { id: "first-name" },
  { name: "fname" }
];

function createFieldInput(settings, stub, type) {
  var field = document.createElement("div");
  field.className = "field";
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.type = type;
  var spacer = document.createTextNode("\n");
  var settingsKeys = Object.keys(settings);

  for (var i = 0; i < settingsKeys.length; i++) {
    var key = settingsKeys[i];
    input[key] = settings[key];
  }

  field.appendChild(label);
  field.appendChild(spacer);
  field.appendChild(input);

  stub.parentNode.insertBefore(field, stub);
}

function init() {
	var stub;

	// First name permutations
	stub = document.getElementById("firstNamePermutations");
  for (var i = 0; i < firstNameSettings.length; i++) {
    createFieldInput(firstNameSettings[i], stub, "text");
  }
}

document.addEventListener("DOMContentLoaded", init);