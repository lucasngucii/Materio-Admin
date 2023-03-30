import { Router } from 'express';
const router = Router();
import * as userController from '../../controllers/user/user.controller';
router.get('/', userController.getUserById);

module.exports = router;
