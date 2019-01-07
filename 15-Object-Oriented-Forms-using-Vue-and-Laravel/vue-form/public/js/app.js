class Errors {

    /**
     * Create a new Errors Instance.
     */
    constructor() {
        this.errors = {}
    }

    /**
     * Determine if an errors exist for the given field.
     * 
     * @param {string} field 
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    /**
     * Determine if we have any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Retrieve the error message for the field.
     * 
     * @param {string} field 
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    /**
     * Record the new errors
     * 
     * @param {object} errors 
     */
    record(errors) {
        this.errors = errors.errors;
    }

    /**
     * Clear one or all error fields.
     * 
     * @param {string|null} field 
     */
    clear(field) {
        if(field) {
            delete this.errors[field];
            return;
        }
        this.errors = {};
    }
}

class Form {
    /**
     * Create a new Form instance.
     * 
     * @param {object} data 
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors()
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        let data = {};
        for (let property in this.originalData) {
            data[property] = this[property];
        }
        // let data = Object.assign({}, this); //{name, description, originalData, errors}
        // delete data.originalData;
        // delete data.errors;
        return data;
    }

    /**
     * Reset the form fields.
     */
    reset(){
        for(let field in this.originalData) {
            this[field] = '';
        }
        this.errors.clear();

    }

    post(url) {
        return this.submit('post', url);
    }

    delete(url) {
        return this.submit('delete', url);
    }

    /**
     * Submit the form.
     * 
     * @param {string} requestType 
     * @param {string} url 
     */
    submit(requestType, url) {
        return new Promise((resolve, reject)=>{
            axios[requestType](url, this.data())
            //if i have succesful response
            .then(response => {
                this.onSuccess(response.data); //we delegate to onSuccess method and we give it data from our response

                resolve(response.data);
            })
            .catch(error => {
                this.onFail(error.response.data);

                reject(error.response.data);
            });
            // .then(this.onSuccess.bind(this))
            // .catch(this.onFail.bind(this))

        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    /**
     * Handle a successful form submission
     * 
     * @param {object} data 
     */
    onSuccess(data) {
        //temp message
        alert(data.message);
        this.reset();
    }

    /**
     * Handle a failed form submission
     * 
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.record(errors);
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

    methods: {
        onSubmit() {
            this.form.post('/projects');
              

            // this.form.submit('post', '/projects')
            //     .then(data => console.log(data))
            //     .catch(error => console.log(error));
            //we can handle different crud functionality by calling newly defined methods on form class
            //this.form.delete('/projects');
            //or
        }
    }
});