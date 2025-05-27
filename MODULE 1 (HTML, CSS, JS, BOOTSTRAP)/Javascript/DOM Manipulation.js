const event = [
    {
        name: "Music Fest", date: "2025-07-20",seats: 5
    },
{
        name: "Art Expo", date: "2024-07-21",seats: 1
    },
    {
        name: "Tech talk", date: "2025-08-20",seats: 0
    },
];
const container = document.querySelector("#eventsContainer");

function renderEvents() {
 
  container.innerHTML = "";

  events.forEach((event, index) => {
    
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";

    
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
    `;

    
    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats <= 0;

    
    registerBtn.addEventListener("click", () => {
      if (event.seats > 0) {
        event.seats--;
        alert(` Registered for ${event.name}`);
        renderEvents(); 
      } else {
        alert(` No seats left for ${event.name}`);
      }
    });


    card.appendChild(registerBtn);
    container.appendChild(card);
  });
}

renderEvents();