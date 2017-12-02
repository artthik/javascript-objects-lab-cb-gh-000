var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  var tmp = Object.assign({}, object);
  tmp[key] = value;
  return tmp;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var tmp = Object.assign({}, object);
  tmp[key] = value;
  return tmp;
}