const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        type: String,
        required: 'This field is required.'
    },
    ingredients: {
        type: Array,
        required: 'This field is required.'
    },
    category: {
        type: String,
        enum: ['Thai', 'American', 'Mexican', 'Chinese', 'Indian'],
        required: 'This field is required.'
    },
    image: {
        type: String,
        required: 'This field is required.'
    },

});

module.exports = mongoose.model('Recipe', recipeSchema);