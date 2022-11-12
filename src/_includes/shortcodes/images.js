const sizeOf = require('image-size');

const CLOUDNAME = 'hohiemer';
const FOLDER = 'hohiemer.com';
const BASE_URL = `https://res.cloudinary.com/${CLOUDNAME}/image/upload/`;
const FALLBACK_WIDTHS = [300, 600, 680, 1360];
const FALLBACK_WIDTH = 680;

function getSrc(file, width) {
  return `${BASE_URL}q_auto,f_auto,w_${
    width || FALLBACK_WIDTH
  }/${FOLDER}/${file}`;
}

function getSrcset(file, widths) {
  const widthSet = widths || FALLBACK_WIDTHS;
  return widthSet.map((width) => `${getSrc(file, width)} ${width}w`).join(', ');
}

function getWidth(file) {
  const { width } = sizeOf(`./src/${file}`);
  return width.toString();
}

function getHeight(file) {
  const { height } = sizeOf(`./src/${file}`);
  return height.toString();
}

module.exports = {
  srcset: (file, widths) => getSrcset(file, widths),
  src: (file, width) => getSrc(file, width),
  imageWidth: (file) => getWidth(file),
  imageHeight: (file) => getHeight(file),
};
