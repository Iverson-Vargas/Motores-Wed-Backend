import { Router } from "express";
import { success } from '../red/answers.js'

const router = Router();

router.get('/', (req ,res) => {
    success(req, res, 'Todo ok desde productos', 200)
})

export default router;