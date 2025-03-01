document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let valid = true;

  if (name.trim() === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  
  if (email.trim() === "" || !email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});
