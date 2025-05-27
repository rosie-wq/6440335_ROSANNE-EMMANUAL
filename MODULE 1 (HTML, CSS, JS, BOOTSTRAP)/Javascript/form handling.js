const form = document.querySelector("#registrationForm");
const messageDiv = document.querySelector("#formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 🔒 Prevent default form submission

  const { username, email, eventName } = form.elements;

  // Basic validation
  if (!username.value.trim()) {
    showError("Name is required.");
    return;
  }

  if (!email.value.includes("@")) {
    showError("Enter a valid email.");
    return;
  }

  // All valid
  const name = username.value.trim();
  const mail = email.value.trim();
  const eventSelected = eventName.value;

  // Display a success message
  messageDiv.style.color = "green";
  messageDiv.textContent = `✅ ${name}, you are registered for ${eventSelected}. Confirmation sent to ${mail}`;
});

// Helper function to show inline error
function showError(msg) {
  messageDiv.style.color = "red";
  messageDiv.textContent = `❌ ${msg}`;
}
