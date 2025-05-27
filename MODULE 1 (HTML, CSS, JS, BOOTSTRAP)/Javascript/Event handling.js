categoryFilter.onchange = applyFilters;
searchInput.addEventListener("keydown", applyFilters);
function applyFilters() {
  const category = categoryFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = events.filter(event => {
    const matchCategory = category === "All" || event.category === category;
    const matchName = event.name.toLowerCase().includes(searchTerm);
    return matchCategory && matchName;
  });

  renderEvents(filtered);
}
renderEvents();
