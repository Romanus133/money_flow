class TransactionController {
    
    constructor() {
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    get(request, response, next) {
        response.send('Get Transaction')
    }
    create(request, response, next) {
        response.send('Create Transaction')
    }
    update(request, response, next) {
        response.send('Update Transaction')
    }
    delete(request, response, next) {
        response.send('Delete Transaction')
    }
}

export default TransactionController;