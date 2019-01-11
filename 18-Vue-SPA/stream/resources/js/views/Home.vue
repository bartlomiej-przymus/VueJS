<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said...
                        </p>
                        <p>
                            {{ postedOn(status) }}
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        data(){
            return{
                statuses: []
            }
        },

        created(){
            // fetch stuff
            axios.get('/statuses')
            // .then(response => this.statuses = response.data);
            //ES2015 allows us to use object destructuring directly within function arguments
            //in this instance we want to access data property of the object that was passed through..
                .then(({data}) => this.statuses = data);
        },

        mounted() { //can be created()
            //if you need to fetch something from database you put your ajax requests here like:
            //axios. 
            console.log('Component mounted.')
        },

        methods: {
            postedOn(status) {
                return moment(status.created_at).fromNow();
            }
        }
    }
</script>
