class CategoryController {
    
    constructor() {
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    get(request, response, next) {
        response.send('Get Category')
    }
    create(request, response, next) {
        response.send('Create Category')
    }
    update(request, response, next) {
        response.send('Update Category')
    }
    delete(request, response, next) {
        response.send('Delete Category')
    }
}

export default CategoryController;