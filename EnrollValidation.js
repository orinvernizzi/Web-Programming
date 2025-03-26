function validateEnrollForm(event) {
  event.preventDefault(); 

  const firstName = document.getElementById('firstname').value.trim();
  const lastName = document.getElementById('lastname').value.trim();
  const year = document.getElementById('year').value;
  const major = document.getElementById('major').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!/^[A-Za-z\s]+$/.test(firstName)) {
      alert("First Name must contain only letters and spaces.");
      return false;
  }
  if (!/^[A-Za-z\s]+$/.test(lastName)) {
      alert("Last Name must contain only letters and spaces.");
      return false;
  }

  if (!/^[A-Za-z]{3}\d{3}@marietta\.edu$/i.test(email)) {
      alert("Email must follow the format: abc123@marietta.edu");
      return false;
  }

  alert(`Enrollment Submitted:\nName: ${firstName} ${lastName}\nYear: ${year}\nMajor: ${major || "Undeclared"}\nEmail: ${email}`);
  return true; 
}