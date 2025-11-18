function isLetter(ch) {
  const code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function validateName() {
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let msg = document.getElementById("msg");
  let info = document.getElementById("info");
  msg.style.color = "red";

  // Check empty
  if (name.length === 0 || age.length === 0) {
    msg.innerHTML = "Error: Name or age cannot be empty.";
    return false;
  }

  // Check starting letter
  if (!isLetter(name.charAt(0))) {
    msg.innerHTML = "Error: Name must start with a letter.";
    return false;
  }

  // Must contain at least two words
  let parts = name.split(" ");
  let count = 0;
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] !== "") count++;
  }
  if (count < 2) {
    msg.innerHTML = "Error: Name must contain at least two words.";
    return false;
  }

  // Check all characters
  for (let i = 0; i < name.length; i++) {
    let ch = name[i];
    if (isLetter(ch) || ch === ' ' || ch === '.' || ch === '-') {
      continue;
    } else {
      msg.innerHTML = "Error: Invalid character '" + ch + "'. Only letters[a-z & A-Z], space, dot[.] and dash[-] are allowed.";
      return false;
    }
  }

  // Passed all checks
  msg.style.color = "green";
  msg.innerHTML = "Success: Name is valid!";

  info.innerHTML=`
  Name: ${name}<br>
  Age: ${age}
  `;
  return false;
}