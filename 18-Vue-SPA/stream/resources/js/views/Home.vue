<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Home Page</div>

                    <div class="panel-body">
                        I'm an example component.
                        <!-- you render data here {{ body }}-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() { //can be created()
            //if you need to fetch something from database you put your ajax requests here like:
            //axios. 
            console.log('Component mounted.')
        }
    }
</script>
