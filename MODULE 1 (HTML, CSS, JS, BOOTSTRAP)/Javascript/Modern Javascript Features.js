// Original event list
const originalEvents = [
  { name: "Yoga Session", date: "2025-07-18", seats: 10, category: "Health" },
  { name: "Jazz Night", date: "2025-07-20", seats: 0, category: "Music" },
  { name: "Dev Conference", date: "2025-08-05", seats: 15, category: "Technology" }
];

// 🧠 Clone the array using spread operator to avoid mutation
const events = [...originalEvents];

// ✅ Function with default parameter and destructuring
function displayEventCard({ name, date, seats, category } = {}) {
  const card = document.createElement("div");
  card.style.border = "1px solid #aaa";
  card.style.padding = "10px";
  card.style.marginBottom = "10px";
  card.innerHTML = `
    <h3>${name}</h3>
    <p>Date: ${date}</p>
    <p>Seats: ${seats}</p>
    <p>Category: ${category}</p>
  `;
  return card;
}

// 🎯 Render Events (refactored using let/const properly)
const renderEvents = (eventList = []) => {
  const container = document.querySelector("#eventsContainer");
  container.innerHTML = "";

  for (const event of eventList) {
    const card = displayEventCard(event);
    container.appendChild(card);
  }
};

// 🧪 Example filter function using spread + arrow functions
const filterByCategory = (category = "All") => {
  const cloned = [...events]; // clone using spread
  return category === "All"
    ? cloned
    : cloned.filter(({ category: cat }) => cat === category);
};

// 🚀 On load
document.addEventListener("DOMContentLoaded", () => {
  const filteredEvents = filterByCategory("Technology");
  renderEvents(filteredEvents);
});
