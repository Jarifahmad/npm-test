var moment = require('moment'); // require
var unique = require('uniq');

let myDate = new Date();
let myCoolDate = moment(myDate).format("LL"); 
let myList = [1,2,1,1,1,3,3,4,5,6,4,4,7];

let myUniqueList = unique(myList);
console.log(myUniqueList)