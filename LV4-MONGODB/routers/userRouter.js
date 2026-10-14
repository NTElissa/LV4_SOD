import {getAllUsers , addUser ,updateUser,deleteUser}  from '../controllers/userController.js';
import express from 'express';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/addUsers', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);



export default router;
