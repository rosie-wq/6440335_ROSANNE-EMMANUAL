// Event list with category
let events = [
  { name: "Music Fest", date: "2025-07-20", seats: 5, category: "Music" },
  { name: "Art Expo", date: "2024-07-21", seats: 10, category: "Art" },
  { name: "Tech Talk", date: "2025-08-20", seats: 20, category: "Technology" }
];

// Function to add a new event
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
  console.log(`✅ Event added: ${name} (${category})`);
}

// Closure to track total registrations by category
function createRegistrationTracker() {
  const registrationsByCategory = {};

  return function registerUser(eventName) {
    const event = events.find(e => e.name === eventName);
    if (!event) return console.error("Event not found.");

    if (event.seats <= 0) {
      console.error(`❌ No seats left for ${event.name}`);
      return;
    }

    event.seats--;
    registrationsByCategory[event.category] = (registrationsByCategory[event.category] || 0) + 1;

    console.log(`✅ Registered for ${event.name}. Remaining seats: ${event.seats}`);
    console.log(`🧾 Total registrations in ${event.category}: ${registrationsByCategory[event.category]}`);
  };
}

// Higher-order function to filter events using a callback
function filterEvents(callback) {
  return events.filter(callback);
}

// Filter by category
function filterEventsByCategory(category) {
  const filtered = filterEvents(event => event.category === category);
  console.log(`🎯 Events in category "${category}":`);
  filtered.forEach(e => console.log(`- ${e.name} on ${e.date} | Seats: ${e.seats}`));
}

// ---------- Usage Examples ----------

// Add a new event
addEvent("Cooking Workshop", "2025-09-10", 15, "Food");

// Register users using closure-based tracker
const register = createRegistrationTracker();
register("Music Fest");
register("Cooking Workshop");
register("Cooking Workshop");

// Filter events dynamically
filterEventsByCategory("Food");
filterEventsByCategory("Technology");
