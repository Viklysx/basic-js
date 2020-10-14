const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse';
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  complementKey(message, key) {
    message = message.split(' ').join('');
    return key = key.repeat(Math.ceil(message.length / key.length));

  }

  crypt(message, key, flag) {
    this.check(message, key);
    let resEcrypt = '';
    let position = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = this.complementKey(message, key);
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') position.push(i);
    }
    message = message.split(' ').join('');
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') position.push(i);
      if (message[i].match(/[A-Z]/)) {
        if (flag === true) {
          if ((this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[i])) < 26) {
            resEcrypt += this.alphabet[(this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[i]))];
          } else resEcrypt += this.alphabet[(this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[i])) % 26];
        }
        else {
          let symbol = this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[i]);
          if (symbol < 0) symbol += 26;
          resEcrypt += this.alphabet[symbol];
        }        
      } else resEcrypt += message[i];
    }
    resEcrypt = resEcrypt.split('');
    for (let k = 0; k < position.length; k++) {
      resEcrypt.splice(position[k], 0, ' ');
    };
    resEcrypt = resEcrypt.join('');
    return this.type === 'direct' ? resEcrypt : resEcrypt.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.crypt(message, key, true);
  }

  decrypt(message, key) {
    return this.crypt(message, key, false);
  }

  check(message, key) {
    if (message === undefined || message === undefined) {
      throw new Error()
    }
  }
}

module.exports = VigenereCipheringMachine;