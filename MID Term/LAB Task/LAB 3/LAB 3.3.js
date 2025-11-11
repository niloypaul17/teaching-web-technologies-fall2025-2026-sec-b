function validateChoice() {
  let opts = document.getElementsByName("opt");
  let msg = document.getElementById("msg");
  msg.style.color = "red";

  let selected = false;
  for (let i = 0; i < opts.length; i++) {
    if (opts[i].checked) {
      selected = true;
      break;
    }
  }

  if (!selected) {
    msg.innerHTML = "Error: Select at least one option.";
    return false;
  }

  msg.style.color = "green";
  msg.innerHTML = "Success: Option selected!";
  return false;
}
