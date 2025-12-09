function validateUser() {
  let uid = Number(document.getElementById("uid").value);
  let pic = docuentm.getElementById("pic");
  let msg = docume
  nt.getElementById("msg");
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
