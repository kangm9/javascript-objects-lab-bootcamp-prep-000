var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newrecipes = Object.assign({}, recipes)
  delete newrecipe.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.key
  return object
}