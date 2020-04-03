import Category from '../models/TransactionType.js';

class TransactionTypeController {

    constructor(transactiontypes) {
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.listAll = this.listAll.bind(this);

        this._transactiontypes = transactiontypes;
    }

    get(request, response, next) {
        response.json([...this._transactiontypes]);
    }

    create(request, response, next) {

        const id = this._transactiontypes.size + 1;
        const name = request.body.name;

        const transactiontype = new TransactionType(id, name);
        this._transactiontypes.set(id, transactionType);

        response.send(TransactionType);
    }

    update(request, response, next) {

        const id = request.params.id;
        const transactiontype = this._transactiontypes.get(Number(id));

        if (transactiontype !== undefined) {
            const name = request.body.name;
            transactiontype.name = name;

            this.__transactiontypes.set(id, category);
            response.json(transactiontype);
        } else {
            throw new Error('TransactionType not found');
        }
    }

    delete(request, response, next) {
        const id = request.params.id;
        const transactiontype = this._transactiontypes.get(Number(id));

        if (transactiontype !== undefined) {
            this._transactiontypes.delete(Number(id));
            response.send('ok');
        } else {
            throw new Error('TransactionType not found');
        }
    }

    listAll(request, response, next) {

        const transactiontypes = [];

        for (let cat of this._transactiontypes) {
            transactiontypes.push(cat[1]);
        }

        response.render('index', {'transactiontypes': transactiontypes})
    }
}

export default TransactionTypeController;