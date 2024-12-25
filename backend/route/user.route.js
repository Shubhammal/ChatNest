import express from 'express'
import { getAllUsers, Login, logout, Signup } from '../contorller/user.controller.js'
import secureRoute from '../Middleware/secureRoute.js';


const router = express.Router();

router.post('/login', Login);
router.post('/signup', Signup);
router.post('/logout', logout);
router.get('/getAllUsers',secureRoute, getAllUsers);
export default router;