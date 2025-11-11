function validateUser() {
  let uid = Number(document.getElementById("uid").value);
  let pic = document.getElementById("pic");
  let msg = document.getElementById("msg");
  msg.style.color = "red";

  if (!uid || uid <= 0) {
    msg.innerHTML = "Error: User ID must be a positive number.";
    return false;
  }

  if (pic.files.length === 0) {
    msg.innerHTML = "Error: Please select a picture file.";
    return false;
  }

  msg.style.color = "green";
  msg.innerHTML = "Success: User ID and Picture valid!";
  return false;
}
