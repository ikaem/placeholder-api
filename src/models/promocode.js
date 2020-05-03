const mongoose = require("mongoose");

const PromocodeSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        combination: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Promocode = mongoose.model("Promocode", PromocodeSchema);
module.exports = Promocode;


/* 

    {
        id: 1,
        code: "20EUROFF",
        description: "20 EUR off final cost can be used in conjunction with other codes",
        amount: 20,
        type: "amount",
        combination: true,
    },




*/