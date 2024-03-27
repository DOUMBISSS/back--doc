import express from 'express';
import Database from './db/database.js';
import User from './db/models/user.js';
import bodyParser from 'body-parser';
// import {routes} from "./routes/routes.js";
import Category from './db/models/category.js';
import Product from './db/models/product.js';
import Laptop from './db/models/laptop.js';
import cors from "cors";
import dotenv from 'dotenv'
import bcrypt from "bcrypt";
import 'dotenv/config';
// import Category from './db/models/category.js';


const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors())
// app.use(routes);
const database = new Database();

Database.connect();


app.post('/products',function(req,res){
    const newProduct=new Product(req.body)
    newProduct.save((err,doc)=>{
        if(err) {console.log(err);
            return res.status(400).json({ success : false});}
        res.status(200).json({
            succes:true,
            message : "Product added with success",
            data : doc
        });
    });
})

app.get('/products', (req,res) => { 
                        Product.find({})
                        .then((doc)=>{res.send(doc)})
                        .catch(err => {console.log(err);      
                            })
                    })
app.get('/productsgdg', (req,res) => { 
                        let mysort = { name: -2 };
                        Product.find({}).sort(mysort).limit(8)
                        .then((doc)=>{res.send(doc)})
                        .catch(err => {console.log(err);      
                            })
                    })

app.get('/products/:id',(req,res) => { 
                        Product.findById((req.params.id),(req.body))
                        .then((doc)=>{res.send(doc)})
                        .catch(err => {console.log(err);      
                            })
                    })

 app.put('/products/:id',(req,res) => { 
                        Product.findByIdAndUpdate((req.params.id),(req.body))
                        .then((doc)=>{res.send(doc)})
                        .catch(err => {console.log(err);      
                            })
                    })

app.get('/laptops', (req,res) => { 
                        const query = {categorie:'Batterie'};
                        Product.find(query)
                        .then((doc)=>{res.send(doc)})
                        .catch(err => {console.log(err);      
                            })
                    })
        
app.get('/laptop/:id',(req,res) => { 
                        Laptop.findById((req.params.id),(req.body))
                        .then((doc)=>{res.send(doc)})
                        .catch(err => {console.log(err);      
                            })
                    })

app.post('/laptops',function(req,res){
                        const newLaptop=new Laptop(req.body)
                        newLaptop.save((err,doc)=>{
                            if(err) {console.log(err);
                                return res.status(400).json({ success : false});}
                            res.status(200).json({
                                succes:true,
                                message : "Laptop added with success",
                                data : doc
                            });
                        });
                    })
app.put('/laptops/:id',(req,res) => { 
                        Laptop.findByIdAndUpdate((req.params.id),(req.body))
                        .then((doc)=>{res.send(doc)})
                        .catch(err => {console.log(err);      
                            })
                    })


app.get('/categories', (req,res) => { 
    Category.find({}).populate('product_id')
    .then((doc)=>{res.send(doc)})
    .catch(err => {console.log(err);      
    })
})

app.post('categories',function(req,res){
    const categories = new Category (req.body)
    categories.save()
    .then((doc)=>{res.send(doc)})
    .catch(err => {console.log(err);      
     })
})

app.listen(port , ()=> {
    console.log('Server running at 127.0.0.1:' + port)
})
