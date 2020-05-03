const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        paymentDetails: {
            email: {
                type: String,
                required: true
            },
            nameOnCard: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
            cardNumber: {
                type: String,
                required: true,
                minlength: 13,
                maxlength: 19
            },
            cardExpirationMonth: {
                type: Number,
                required: true,
                min: 1,
                max: 12
            },
            cardExpirationYear: {
                type: Number,
                required: true,
                min: 20,
                max: 99
            },
            cvv: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 3
            }
        },
        cartItems: [
            {
                originalId: {
                    type: mongoose.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                orderedQuantity: {
                    type: Number,
                    required: true,
                },
                orderedPricePerItem: {
                    type: Number,
                    required: true
                }
            }
        ],
        costDetails: {
            subtotal: {
                type: String,
                required: true
            },
            grandTotal: {
                type: String,
                required: true
            },
            promocodeDiscounts: [
                {
                    originalId: {
                        type: mongoose.Types.ObjectId,
                        ref: "Promocode",
                        // required: true
                    },
                    description: {
                        type: String,
                        // required: true
                    },
                    discount: {
                        type: Number,
                        // required: true
                    }
                }
            ]
        }
    },
    {
        timestamps: true
    }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;





