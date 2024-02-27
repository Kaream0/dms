const express = require("express");
const router = express.Router();
const productController = require("../controller/productsController");


// Get all
router.get('/products', productController.getAllProducts);

// Get one
router.get('/groceries/:id', (req, res) => {

})

// create one
router.post('/products', productController.createProduct);

// update one
router.patch('/groceries/:id', (req, res) => {

})

// Delete one

router.delete('/groceries/:id', (req, res) => {

})

module.exports = router;


app.get('/equipes', (req, res) => {
    // res.send("Liste des equipes");
    res.status(200).json(equipes)
});

app.get('/equipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const equipe = equipes.find(equipe => equipe.id === id);
    
    res.status(200).json(equipe);
})

app.post('/equipe', (req, res) => {
    equipes.push(req.body);
    res.status(200).json(equipes);
})

app.put('/equipe/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let equipe = equipes.find(equipe => equipe.id === id)
    equipe.name = req.body.name,
    equipe.country = req.body.country,
    res.status(200).json(equipes)
})

app.delete('/equipe/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let equipe = equipes.find(equipe => equipe.id === id)
    equipe.splice(equipes.indexOf(equipe), 1)
})

