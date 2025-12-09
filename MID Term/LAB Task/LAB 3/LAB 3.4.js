function validateDate() {
  let d = Number(document.getElementById("day").value);
  let m = Number(document.getElementById("month").value);
  let y = Number(document.getElementById("year").value);
  let msg = document.getElementById("msg");
  msg.style.color = "red";

  if (!d || !m || !y) {
    msg.innerHTML = "Error: All fields are required.";
    return false;
  }

  if (d < 0 || d > 31) {
    msg.innerHTML = "Error: Day must be between 0 and 31.";
    return false;
  }

  if (m < 1 || m > 12) {
    msg.innerHTML = "Error: Month must be between 1 and 12.";
    return false;
  }

  if (y < 1900 || y > 2016) {
    msg.innerHTML = "Error: Year must be between 1900 and 2016.";
    return false;
  }

  msg.style.color = "green";
  msg.innerHTML = "Success: Valid date!";
  return false;
}
