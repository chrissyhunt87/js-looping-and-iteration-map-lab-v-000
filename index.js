// Code your solution in this file.

function lowerCaseDrivers(array) {
  const newArr = array.map(function(name) { 
    return name.toLowerCase(); 
  });
  
  return newArr;
}

function nameToAttributes(array) {
  console.log(array);
  const splitArr = array.map(function(fullName) {
    const splitName = fullName.split(" ");
    console.log(splitName);
    return Object.assign({}, { firstName: splitName[0], lastName: splitName[1]});
  })
  
  return splitArr;
}