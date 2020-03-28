import process from 'process';
import express from 'express';
import user from './routers/UserRouter.js';
import category from './routers/CategoryRouter.js';
import transaction from './routers/TransactionRouter.js';
import transactionType from './routers/TransactionTypeRouter.js';


const app = express();

const PORT = process.env.PORT || 3000;

app.use('/users', user);
app.use('/categorys', category);
app.use('/transactions', transaction);
app.use('/transactionTypes', transactionType);

const server = app.listen(PORT, () => {
    console.log(`Server started on port ${server.address().port}`);
});