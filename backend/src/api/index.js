const express = require('express');
const router = express.Router();

let apartments = [
    {
        id: 1,
        type: "Apartment",
        area: "55.0",
        price: 560,
        rooms: 3
    },
    {
        id: 2,
        type: "Detached house",
        area: "78.0",
        price: 700,
        rooms: 5
    },
    {
        id: 3,
        type: "Town house",
        area: "68.0",
        price: 605,
        rooms: 4
    },
]

router.get('/', (req, res) => {
    res.json(
        apartments.map((item)=>item)
    );
});

router.post('/added', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json(data);
});


module.exports = router;
