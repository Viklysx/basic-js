const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = '';
  if (Array.isArray(members)) {
    members.forEach(element => {
      if (typeof(element) === 'string') {
        element = element.replace(/\s+/g, '');
        name += element[0].toUpperCase();
      }
    });
    return name.split('').sort().join('');
  }
  return false;
  

};
