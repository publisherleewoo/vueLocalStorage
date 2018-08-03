function copyObj(obj) {
  var copy = {};
  if (typeof obj === 'object' && obj !== null) {
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = copyObj(obj[attr]);
      }
    }
  } else {
    copy = obj;
  }
  return copy;
}

const localStorageCopy = copyObj(localStorage);
delete localStorageCopy["loglevel:webpack-dev-server"]

let viewData = []
for (keys in localStorageCopy) {
  viewData.push(localStorageCopy[keys])
}

module.exports = viewData
