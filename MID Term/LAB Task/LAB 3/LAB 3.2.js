function validateEmail() {
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("msg");
  msg.style.color = "red";

  if (email === "") {
    msg.innerHTML = "Error: Email cannot be empty.";
    return false;
  }

  if (email.indexOf(" ") !== -1) {
    msg.innerHTML = "Error: Email cannot contain spaces.";
    return false;
  }

  let atPos = email.indexOf("@");
  let lastAt = email.lastIndexOf("@");

  if (atPos === -1 || atPos !== lastAt) {
    msg.innerHTML = "Error: Email must contain exactly one '@'.";
    return false;
  }

  if (atPos === 0) {
    msg.innerHTML = "Error: There must be characters before '@'.";
    return false;
  }

  let afterAt = email.slice(atPos + 1);
  let dotPos = afterAt.indexOf(".");
  if (dotPos === -1 || dotPos === 0) {
    msg.innerHTML = "Error: Domain must contain a '.' and characters before it.";
    return false;
  }

  let lastDot = email.lastIndexOf(".");
  if (lastDot === email.length - 1) {
    msg.innerHTML = "Error: Email must have characters after the last '.'.";
    return false;
  }

  msg.style.color = "green";
  msg.innerHTML = "Success: Valid email!";
  return false;
}
