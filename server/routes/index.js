import express from 'express';

import { startGame, hit, stand } from '../controllers/game.js';


const router = express.Router();

router.get('/start', startGame);
router.post('/hit', hit);
router.post('/stand', stand);

export default router;