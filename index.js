function findMatching(arrDrivers, string){
    return arrDrivers.filter(function(name){return name.toLowerCase() === string.toLowerCase();});
  }

function fuzzyMatch(arrDrivers, string){
    return arrDrivers.filter(function(name){return name.toLowerCase()[0] === string.toLowerCase()[0];});
    }

function matchName(arrDrivers, string){
    return arrDrivers.filter(function(key){return key.name === string})
}