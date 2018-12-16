Vue.component('task-list', {

    template: `
    <ul>
    <task v-for="(task, index) in tasks" :key="index">{{task.description}}</task>
    </ul>
    `,

    data() {

        return {

            tasks: [

                { description:'Go to store', complete: true },

                { description:'Finish screencast', complete: false },

                { description:'Make donation', complete: false },

                { description:'Clear Inbox', complete: false },

                { description:'Make dinner', complete: false },

                { description:'Clean room', complete: true }

            ]

        };

    }

});

Vue.component('task', {

    template: '<li><slot></slot></li>'

});

new Vue({

    el: '#root'

});