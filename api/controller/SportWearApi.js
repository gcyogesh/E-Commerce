import express from 'express';
import SportWear from '../models/SportsSchema.js';
import UploadMiddleware from '../middleware/UploadMiddleware.js';



const router = express.Router();
const uploadInstance = new UploadMiddleware();
const upI = uploadInstance.upload("users");

// Route for adding sportwear  and image 
router.post('/', upI.single("image"), async (req, res) => {
    try{ let image='';
        if(req.file){
            image = req.file.filename;
        }
        const user = new SportWear({ ...req.body, image});
        await user.save();
        return res.status(201).json(user);
    }catch(error){
        console.error("Error uploading image:", error);
        return res.status(500).json({ error: "Server Error" });
    }
  
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
    
// router.get('/:id', async (req, res) => {
//      const getSport = await SportWear.find();
//         return res.send(getSport);
  
// }); 

// Route for getting sportwear
router.get("/", async (req, res) => {
    
        const getSport = await SportWear.find();
        return res.send(getSport);
 
});




// Route for deleting a sportswear item by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await SportWear.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ error: "Product not found" });
        }
        return res.status(200).json({ message: "Product deleted successfully", deletedItem });
    } catch (error) {
        console.error("Error deleting product:", error);
        return res.status(500).json({ error: "Server Error" });
    }
});

export default router;
