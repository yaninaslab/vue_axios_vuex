<template>
    <div>
<button @click="change_mode">Snake_Joke</button>
    </div>
</template>

<script>
    export default {
        name: "snake-joke", 
        methods: {
            change_mode() {
                this.$store.dispatch('set_snake');
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