<template>
    <div>
<button @click="get_joke">Get Joke</button>
    </div>
</template>

<script>
    export default {
        name: "joke-button",
        methods: {
            get_joke() {
                this.$store.dispatch('get_joke');
            }
        },
    
    }
</script>

<style scoped>
button {
    padding: 7px;
    margin: 10px;
    background: lightgoldenrodyellow;
}
</style>