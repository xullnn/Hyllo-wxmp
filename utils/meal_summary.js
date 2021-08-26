module.exports = (food_items) => {
  return food_items.map(item => item.name).join(", ")
}