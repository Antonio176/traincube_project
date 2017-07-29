var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
	id: String,
    name:String,
    priceIncVat:{ type: Number},
    vatPercentage:{ type: Number},
    vatAmount:{ type: Number},
    quantity: { type: Number}

});

module.exports = mongoose.model('Product', ProductSchema);
