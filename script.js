var moment = require('moment'); // require

let myDate = new Date();
let myCoolDate = moment(myDate).format("LL"); 
console.log(myCoolDate)