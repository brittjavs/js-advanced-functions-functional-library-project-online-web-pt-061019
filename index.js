const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for(let i= 0; i < collection.length; i++){
          callback(collection[i])
        }
      }
      else {
      let valuesArray = Object.values(collection)
        for(let i= 0; i < valuesArray.length; i++){
          callback(valuesArray[i])
        }
      return collection
      }
    },

    map: function(collection, cbFunct) {
      if (!Array.isArray(collection)){
        collection = Object.values(collection)
      };
      let newCollection = []
      for(let i=0; i < collection.length; i++){
        newCollection.push(cbFunct(collection[i]))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      // let newArray = collection.slice(0)
      let i = 0
      if (!acc){
        acc = collection[0]
        i = 1
      }
      for(i; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

   find: function(collection, predicate){
    for(let i = 0; i < collection.length; i++){
      if (predicate(collection[i])){
        return collection[i]
      }
    }
    return undefined
   },
   
   filter: function(collection, predicate){
    let newArray = []
    for(let i = 0; i < collection.length; i++)
      if (predicate(collection[i]))
        newArray.push(collection[i])
        return newArray
   },

   size: function(collection){
     return Object.values(collection).length
   },

  first: function(array, n){
    if (n > 0){
      return array.slice(0, n)
    }
      return array[0]
  },

  last: function(array, n){
    if(n){
      return array.slice(array.length - n, array.length)
    }
    return array[array.length-1]
  },

  compact: function(array){
    let newArray = []
    for(let i = 0; i < array.length; i++)
      if (!!array[i]){
        newArray.push(array[i])
      }
    return newArray
  },

  sortBy: function(array, callback){
    let newArray = array.slice(0)
    console.log(newArray)
  },

  flatten: function(array, [shallow]){

  },

  uniq: function(array, [isSorted], [callback]){

  },

  keys: function(object){

  },

  values: function(object){

  },



functions: function(object) {

    },


  }
})()

fi.libraryMethod()
