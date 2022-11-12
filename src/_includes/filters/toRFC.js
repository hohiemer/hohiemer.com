module.exports = (date) => {
  const dateObject = new Date(date);
  const split = dateObject.toISOString().split('.');
  split.pop();
  return `${split.join('')}Z`;
};
