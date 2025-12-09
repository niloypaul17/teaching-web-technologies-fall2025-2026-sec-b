function validateGender() {
  let genders = document.getElementsByName("gender");
  let msg = document.getElementById("msg");
  msg.style.color = "red";

  let selected = false;
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      selected = true;
      break;
    }
  }

  if (!selected) {
    msg.innerHTML = "Error: Please select gender.";
    return false;
  }

  msg.style.color = "green";
  msg.innerHTML = "Success: Gender selected!";
  return false;
}
