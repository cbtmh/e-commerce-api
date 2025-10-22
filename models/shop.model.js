'use strict'

//!dmbg - quick make model form

const mongoose = require('mongoose'); 
const { model, Schema, Types } = mongoose;

const DOCUMENT_NAME = 'Shop';
const COLLECTION_NAME = 'shops';
var shopSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, // remove white space
        maxLength: 158,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    status : {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    verified: {
        type: Schema.Types.Boolean,
        default: false,
    },
    roles : {
        type : Array,
        default : []
    },
},{
    timestamps : true,
    collection : COLLECTION_NAME
});

//Export the model
module.exports = mongoose.model('User', userSchema);
