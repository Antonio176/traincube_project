/*
var mongoose = require('mongoose');

var Product = mongoose.Schema({
	name: {
		type: String,
		default: "",
		required: true
	},
	description: {
		type: String,
		default: "",
		required: true
	},
	price: {
		type: Number,
		default: 0,
		required: true
	},
	Owner: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Product', Product);
*/