require("dotenv").config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.port || 5000;
const DB_HOST = process.env.DB_HOST;

const db = require("./db");
const models = require("./models/index");
const newOrderSelector = require("./selectors/newOrder");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
db.connect(DB_HOST);

app.get("/", async (req, res) => {
    try {
        const products = await models.Product.find();
        res.json(products);
    }
    catch (error) {
        console.log(error);
    }
});

app.post("/getcartitems", async (req, res) => {
    const { cartItemsIds } = req.body;
    console.log("this here", cartItemsIds);
    try {
        const cartItems = await models.Product.find(
            {_id: { $in: cartItemsIds }}
        )
        console.log("result:", cartItems)
        res.json(cartItems);
    }
    catch (error) {
        console.log(error);

    }
})

app.post("/applypromocode", async (req, res) => {
    const { code } = req.body;
    console.log(req.body);

    try {
        const promocode = await models.Promocode.findOne({ code });
        res.json(promocode);

    }
    catch (error) {
        console.log(error);
    }
})

app.post("/newproduct", async (req, res) => {
    try {
        const product = await models.Product.create(req.body);
        res.json("success?")
    }
    catch (error) {
        console.log(error);
    }
});

app.post("/newpromocode", async (req, res) => {
    try {
        const promocode = await models.Promocode.create(req.body);
        res.json("success proocode?")
    }
    catch (error) {
        console.log(error);
    }
});

app.post("/neworder", async (req, res) => {
    const { order } = req.body;
    console.log("order", order);
    try {
        const newOrder = await models.Order.create(order);



        res.json(newOrderSelector(newOrder));

    }
    catch (error) {
        console.log(error);
    }
})

app.delete("/deleteproduct", async (req, res) => {
    const { id } = req.body;
    try {
        const deletedProduct = await models.Product.deleteOne({id})
        console.log(deletedProduct);
        res.json("success deleting?");
    }
    catch (error) {
        console.log("tis be error", error);
    }
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}` )
})