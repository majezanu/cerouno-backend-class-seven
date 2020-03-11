import express from 'express';
import userController from '../controller/user-controller';
const router = express.Router();

router.get('/private', (req, res) => userController.getUsersWithoutPass(req, res));
router.get('', (req, res) => userController.getUsersList(req, res));

export default router;