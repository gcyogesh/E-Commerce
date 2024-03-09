import express from 'express';
import SportWear from '../models/SportsSchema.js';

const router = express.Router();

// Route for adding sportwear 
router.post('/', async (req, res) => {
    const { productName, productSubTitle, price, brandName, image, description  } = req.body;
   
    const sportInstance = new SportWear({ productName, productSubTitle, price, brandName, image, description });
    
        const sportUser = await sportInstance.save();
        return res.send(sportUser);
  
}); 

// for getting one data 
router.get('/:id', async (req, res) => {
    const { productName, productSubTitle, price, brandName, image, description  } = req.body;
   
    const sportInstance = new SportWear({ productName, productSubTitle, price, brandName, image, description });
    
        const sportUser = await sportInstance.save();
        return res.send(sportUser);
  
}); 

// Route for getting sportwear
router.get("/", async (req, res) => {
    
        const getSport = await SportWear.find();
        return res.send(getSport);
 
});

export default router;
