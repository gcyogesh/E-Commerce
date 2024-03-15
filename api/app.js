import express from 'express';
import connection from './database/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';
import sportWearRoutes from './controller/SportWearApi.js'


const app = express();
app.use(express.json());
dotenv.config();
app.use(cors())
app.use('/sportwear', sportWearRoutes);



// for image 
app.use(express.static('public'));

// for connection
connection();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});



