const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        onStock: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;


/* 

    {
        id: 5, 
        name: "Water Leak Sensor",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1542321888-8a6abb3ec824?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800"
    },










*/