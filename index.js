// Code your solution in this file.

function lowerCaseDrivers(array) {
  const newArr = array.map(function(name) { 
    return name.toLowerCase(); 
  });
  
  return newArr;
}

function nameToAttributes(array) {
  const splitArr = array.map(function(fullName) {
    const splitName = fullName.split(" ");
    return Object.assign({}, { firstName: splitName[0], lastName: splitName[1]});
  })
  
  return splitArr;
}

function attributesToPhrase(array) {
  console.log(array)
  const newArr = for (const obj in array) {
    console.log(`${obj['name']} is from ${obj['hometown']}`)
    return `${obj['name']} is from ${obj['hometown']}`; 
  }
  return newArr;
}