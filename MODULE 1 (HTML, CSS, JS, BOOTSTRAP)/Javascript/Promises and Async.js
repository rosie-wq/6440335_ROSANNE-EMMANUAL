const loader = document.querySelector("#loader");
const container = document.querySelector("#eventsContainer");
function fetchEventsMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { name: "Coding Jam", date: "2025-07-15", seats: 8, category: "Technology" },
        { name: "Painting Class", date: "2025-07-20", seats: 12, category: "Art" },
        { name: "Rock Concert", date: "2025-08-10", seats: 0, category: "Music" }
      ];
      resolve(data);
    }, 1500); 
  });
}


function renderEvents(events) {
  container.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
      <p>Category: ${event.category}</p>
    `;
    container.appendChild(card);
  });
}


async function loadEventsAsync() {
  try {
    const events = await fetchEventsMock();
    loader.style.display = "none";
    renderEvents(events);
  } catch (error) {
    loader.textContent = "Failed to load events.";
    console.error(error);
  }
}


loadEventsAsync();
