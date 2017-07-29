var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CartSchema   = new Schema({

    id:String,
    rows: [],
    totalPriceIncVatAmount:{ type: Number},
    totalVatAmount:{ type: Number}


});

module.exports = mongoose.model('Cart', CartSchema);