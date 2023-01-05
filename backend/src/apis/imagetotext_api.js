const imageToTextApi = require('express').Router();
const imageToTextController = require('../controllers/imagetotext')

imageToTextApi.post('/image-to-text', imageToTextController.handleImageToText);

module.exports = imageToTextApi;