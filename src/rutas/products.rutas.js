import { Router } from "express";

const router = Router();

router.get('/', (req ,res) => {
    res.send('Productos OK')
})

export default router;