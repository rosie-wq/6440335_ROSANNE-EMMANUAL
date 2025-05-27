class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
  }

  registerUser() {
    if (this.checkAvailability()) {
      this.seats--;
      console.log(` Registered for ${this.name}. Remaining seats: ${this.seats}`);
    } else {
      console.log(` No seats available for ${this.name}.`);
    }
  }
}


Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};


const event1 = new Event("Startup Meetup", "2025-06-15", 10, "Business");
const event2 = new Event("Live Concert", "2025-07-01", 0, "Music");


event1.registerUser(); // Should register
event2.registerUser(); // Should fail


console.log(" Event Details:");
Object.entries(event1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
