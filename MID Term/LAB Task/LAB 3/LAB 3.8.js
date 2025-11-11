function isLetter(ch) {
  let code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function validateAll() {
  let msg = document.getElementById("msg");
  msg.style.color = "red";

  // Name
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    msg.innerHTML = "Error: Name cannot be empty.";
    return false;
  }
  if (!isLetter(name.charAt(0))) {
    msg.innerHTML = "Error: Name must start with a letter.";
    return false;
  }
  let parts = name.split(" ");
  let count = 0;
  for (let i = 0; i < parts.length; i++) if (parts[i] !== "") count++;
  if (count < 2) {
    msg.innerHTML = "Error: Name must contain at least two words.";
    return false;
  }

  // Email
  let email = document.getElementById("email").value.trim();
  if (email === "") {
    msg.innerHTML = "Error: Email cannot be empty.";
    return false;
  }
  let atPos = email.indexOf("@");
  let lastAt = email.lastIndexOf("@");
  if (atPos === -1 || atPos !== lastAt) {
    msg.innerHTML = "Error: Email must contain one '@'.";
    return false;
  }
  let afterAt = email.slice(atPos + 1);
  if (afterAt.indexOf(".") === -1) {
    msg.innerHTML = "Error: Email must have '.' after '@'.";
    return false;
  }

  // Checkbox
  let opts = document.getElementsByName("opt");
  let any = false;
  for (let i = 0; i < opts.length; i++) if (opts[i].checked) any = true;
  if (!any) {
    msg.innerHTML = "Error: Select at least one option.";
    return false;
  }

  // Date
  let d = Number(document.getElementById("day").value);
  let m = Number(document.getElementById("month").value);
  let y = Number(document.getElementById("year").value);
  if (!d || !m || !y) {
    msg.innerHTML = "Error: Date fields cannot be empty.";
    return false;
  }
  if (d < 0 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2016) {
    msg.innerHTML = "Error: Invalid date (0–31, 1–12, 1900–2016).";
    return false;
  }

  msg.style.color = "green";
  msg.innerHTML = "Success: All inputs are valid!";
  return false;
}