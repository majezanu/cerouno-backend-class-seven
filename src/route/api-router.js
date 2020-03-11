import express from 'express';
import userRouter from '../route/user-router';
const router = express.Router();

router.use('/users', userRouter);

export default router;