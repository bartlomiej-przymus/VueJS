class Errors {
    constructor() {
        this.errors = {}
    }
    get(field) {
        if (this.errors[field]) {
           return this.errors[field][0];
        }
    }
    record(errors) {
        this.errors = errors;
    }
    clear(field) {
        if(field) {
            delete this.errors[field];
            return;
        }
        this.errors = {};
    }
    has(field) {
        return this.errors.hasOwnProperty(field);
    }
    any() {
        return Object.keys(this.errors).length > 0;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;
        for (let field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors()
    }
    data() {
        let data = Object.assign({}, this); //{name, description, originalData, errors}
        delete data.originalData;
        delete data.errors;
        return data;
    }
    reset(){
        for(let field in originalData) {
            this[field] = '';
        }

    }
    submit(requestType, url) {
        //axios can be here now
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this))
    }
    onSuccess(response) {
        //temp message
        alert(response.data.message);
        this.errors.clear();
        this.reset();
    }
    onFail(error) {
        this.errors.record(error.response.data.errors);
    }
}

new Vue({
    el: '#app',

    data: {
        form: new Form({
            name: '',
            description: ''
        })
    },
    // data: {
    //     name: '',
    //     description: '',
    //     errors: new Errors()
    // },

    methods: {
        onSubmit() {
            this.form.submit('post', '/projects')
        }
    }
});