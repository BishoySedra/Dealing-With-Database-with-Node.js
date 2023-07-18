import { Router } from "express";
import * as tagController from './tag.controller.js'

const router = Router();

router.post('/tags', tagController.addTag);
router.get('/tags', tagController.getTags);
router.get('/tags/:id', tagController.getTagById);
router.put('/tags/:id', tagController.updateTagById);
router.delete('/tags/:id', tagController.deleteTagById);

export default router;
