<template>
    <div>
        <h2>The Count: {{ count }}</h2>
    <p>
        <!-- We can change value of count increment live and old data will remain! -->
        <button @click="count += 20">Increment</button>
    </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        };
    }
}
</script>

<style>

</style>
