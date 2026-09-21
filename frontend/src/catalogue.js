export function filterMedicines(medicines, query, category) {
  const normalizedQuery = query.trim().toLowerCase()
  return medicines.filter((item) =>
    (category === 'All' || item.category === category) &&
    item.name.toLowerCase().includes(normalizedQuery))
}

export function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

