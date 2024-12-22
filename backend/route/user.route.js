import express from 'express'
import { Login, logout, Signup } from '../contorller/user.controller.js'

const router = express.Router();

router.post('/login', Login);
router.post('/signup', Signup);
router.post('/logout', logout);
export default router;