let obj={
  
}


Object.result = (obj, callback) =>
Object.keys(obj).filter(key => callback(obj[key]))
  .reduce((res, key) => res + Number(key), 0);




  var filtered = Object.result(obj, val => val == 1);
console.log(filtered);

