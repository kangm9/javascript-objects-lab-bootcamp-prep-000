var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  obj[key] = value
  return object
}
