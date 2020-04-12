import express from 'express';
import TransactionTypeController from '../controllers/TransactionTypeController.js';
import TransactionTypeRepository from '../repositories/TransactionTypeRepository.js';

const router = express.Router();
const transactionTypeController = new TransactionTypeController(TransactionTypeRepository);

router.route('/all').get(transactionTypeController.listAll);

export default router;