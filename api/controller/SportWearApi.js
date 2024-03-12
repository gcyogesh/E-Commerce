import express from 'express';
import SportWear from '../models/SportsSchema.js';
import UploadMiddleware from '../middleware/UploadMiddleware.js';


const router = express.Router();
const uploadInstance = new UploadMiddleware();
const upI = uploadInstance.upload("users");

// Route for adding sportwear 
router.post('/', async (req, res) => {
    const { productName, productSubTitle, price, brandName, image, description  } = req.body;
   
    const sportInstance = new SportWear({ productName, productSubTitle, price, brandName, image, description });
    
        const sportUser = await sportInstance.save();
        return res.send(sportUser);
  
}); 

// for getting one data 

router.get('/:id', async (req, res) => {
        try {
            const sportInstance = await SportWear.findById(req.params.id);
            if (!sportInstance) {
                return res.status(404).send("Product not found");
            }
            return res.send(sportInstance);
        } catch (error) {
            console.error("Error fetching product:", error);
            return res.status(500).send("Server Error");
        }
    });
    
router.get('/:id', async (req, res) => {
     const getSport = await SportWear.find();
        return res.send(getSport);
  
}); 

// Route for getting sportwear
router.get("/", async (req, res) => {
    
        const getSport = await SportWear.find();
        return res.send(getSport);
 
});


// for image hai ta dosti 
router.post("/upload", upI.single("image"),async (req, res)=>{
    // res.send("Richhh")
    // console.log("hjehehe")
        let image='';
        if(req.file){
            image = req.file.filename;
        }
        const user = new SportWear({ ...req.body, image});
        await user.save();
        return res.status(201).json(user);

})

export default router;
