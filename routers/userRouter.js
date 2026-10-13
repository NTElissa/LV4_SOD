import {getAllUsers , addUser}  from '../controllers/userController.js';
import express from 'express';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', addUser);

export default router;
