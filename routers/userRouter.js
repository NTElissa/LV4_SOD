import {getAllUsers , addUser}  from '../controllers/userController.js';
import express from 'express';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/addUsers', addUser);

export default router;
