const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      if (Array.isArray(collection)){
        collection.forEach(num => alert(num))
      }
      else {
       Object.values(collection).forEach(value => alert(value))
      }
      return collection
    },

    map: function(collection, cbFunct) {
      if (!Array.isArray(collection)){
        collection = Object.values(collection)
      };
      let newCollection = collection.map(num => cbFunct(num))
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

    functions: function() {

    },


  }
})()

fi.libraryMethod()
