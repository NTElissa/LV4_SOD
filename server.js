import express from 'express';
import dotenv from 'dotenv' 
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
});