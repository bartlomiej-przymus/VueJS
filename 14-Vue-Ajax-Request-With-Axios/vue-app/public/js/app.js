new Vue({
    el: '#app',

    data: {
        skills:[],
    },

    mounted() {
        //Make AJAX request to our server - /skills
        axios.get('/skills').then(response => this.skills = response.data);
    }
});