const unicode = require('./unicode_lookup');

module.exports = function(email) {
  let rando = () => Math.floor(Math.random() * letters.length);
  let letters = email.toLowerCase().replace(/[^a-z0-9]/, '');
  let letter1 = letters[rando()];
  let letter2 = letters[rando()];
  let pattern1 = new RegExp(letter1, 'g');
  let pattern2 = new RegExp(letter2, 'g');

  return email.replace("@", "&#64;").replace(pattern1, unicode[letter1]).replace(pattern2, unicode[letter2]);
  
};
