// Array to hold all community events
let communityEvents = [
  { name: "Live Concert", date: "2025-07-10", seats: 20, category: "Music" },
  { name: "Art Therapy", date: "2025-06-30", seats: 15, category: "Art" },
  { name: "JavaScript Bootcamp", date: "2025-08-05", seats: 25, category: "Technology" }
];

// 👉 Add a new event using .push()
communityEvents.push({
  name: "Workshop on Baking",
  date: "2025-07-25",
  seats: 12,
  category: "Food"
});

console.log("✅ Event added via .push():");
console.log(communityEvents[communityEvents.length - 1]);

// 👉 Filter only music events using .filter()
const musicEvents = communityEvents.filter(event => event.category === "Music");

console.log("\n🎵 Music Events:");
musicEvents.forEach(e => console.log(`- ${e.name} on ${e.date}`));

// 👉 Format event names using .map()
const eventCards = communityEvents.map(event => `📅 ${event.name} (${event.category})`);

console.log("\n🪪 Event Cards:");
eventCards.forEach(card => console.log(card));
