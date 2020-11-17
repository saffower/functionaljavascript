import forEach from '../lib/es-functional'

var array = [1,2,3]
//print the console
forEach(array,(data) => console.log(data))
//double the contents
forEach(array,(data) => console.log(2 * data))