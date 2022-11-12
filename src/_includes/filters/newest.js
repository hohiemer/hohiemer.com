module.exports = (collection) =>
  new Date(Math.max(...collection.map((item) => item.date)));
