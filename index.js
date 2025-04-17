import { name } from "ejs";
import express from "express";


const app = express();
const PORT = 3000;



//  Index route
app.get('/', (req, res) => {
    res.send("Hello Express!");
});

// get all product 
app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: "1000",
        }, {
            id: 2,
            name: "Mobile",
            price: "1000",
        }, {
            id: 3,
            name: "Charger",
            price: "1000",
        }
    ]
    res.status(200).json({ products })
})

//get a single product 
app.get('/api/products/:id',(req,res)=>{
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: "1000",
        }, {
            id: 2,
            name: "Mobile",
            price: "1000",
        }, {
            id: 3,
            name: "Charger",
            price: "1000",
        }
    ]

    const product = products.find(p =>p.id === Number(req.params.id));
    if (!product) {
        return res.status(404).json({message: "product not found"})
    }
    res.status(200).json(product)
})

// create a new product 

app.post('/api/products',(req,res)=>{    
    const newProduct = req.body;
    newProduct.id = Date.now();
    res.status(200).json(newProduct)
})



// ✅ Catch-all route
app.use((req, res) => {
    res.status(404).send("Sorry, this route is not found");
});

// ✅ Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on PORT ${PORT}`);
});
