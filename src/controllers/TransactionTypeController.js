class TransactionTypeController {
    
    constructor() {
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    get(request, response, next) {
        response.send('Get TransactionType')
    }
    create(request, response, next) {
        response.send('Create TransactionType')
    }
    update(request, response, next) {
        response.send('Update TransactionType')
    }
    delete(request, response, next) {
        response.send('Delete TransactionType')
    }
}

export default TransactionTypeController;