import { Router } from "express";
import * as userController from './user.controller.js';

const router = Router();

router.post('/users', userController.addUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUserById);
router.delete('/users/:id', userController.deleteUserById);

export default router;