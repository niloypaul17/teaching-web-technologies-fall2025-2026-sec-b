function validateLang() {
  let langs = document.getElementsByName("lang");
  let msg = document.getElementById("msg");
  msg.style.color = "red";

  let selected = false;
  for (let i = 0; i < langs.length; i++) {
    if (langs[i].checked) {
      selected = true;
      break;
    }
  }

  if (!selected) {
    msg.innerHTML = "Error: Please select at least one language.";
    return false;
  }

  msg.style.color = "green";
  msg.innerHTML = "Success: Language selected!";
  return false;
}
