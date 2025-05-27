const form = document.querySelector("#registrationForm");
const formMessage = document.querySelector("#formMessage");
const loadingMessage = document.querySelector("#loadingMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const { username, email, eventName } = form.elements;

  const name = username.value.trim();
  const mail = email.value.trim();
  const selectedEvent = eventName.value;

  
  if (!name || !mail.includes("@") || !selectedEvent) {
    showError("Please fill all fields correctly.");
    return;
  }

 
  const userData = {
    name,
    email: mail,
    event: selectedEvent,
  };

  
  loadingMessage.style.display = "block";
  formMessage.textContent = "";

  
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        loadingMessage.style.display = "none";
        formMessage.style.color = "green";
        formMessage.textContent = ` Registered successfully for "${selectedEvent}". Data ID: ${data.id}`;
      })
      .catch((error) => {
        loadingMessage.style.display = "none";
        formMessage.style.color = "red";
        formMessage.textContent = ` Registration failed: ${error.message}`;
      });
  }, 2000); 
});


function showError(msg) {
  formMessage.style.color = "red";
  formMessage.textContent = ` ${msg}`;
  loadingMessage.style.display = "none";
}
