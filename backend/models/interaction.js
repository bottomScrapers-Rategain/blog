const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    interactionType: { type: String, enum: ['Click', 'View', 'TimeSpent', 'FormSubmission', 'Search', 'Navigation', 'AddToCart', 'Purchase'], required: true },
    timestamp: { type: Date, default: Date.now },
    pageId: { type: String }, // For Click and View interactions
    adId: { type: String }, // For Click and View interactions
    timeSpent: { type: Number }, // For TimeSpent interactions (in seconds)
    formId: { type: String }, // For FormSubmission interactions
    searchQuery: { type: String }, // For Search interactions
    navigationDetails: { type: String }, // For Navigation interactions
    productDetails: { type: String }, // For AddToCart and Purchase interactions
});

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;