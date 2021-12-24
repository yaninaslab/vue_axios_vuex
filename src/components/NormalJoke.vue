<template>
    <div>
<button @click="change_mode">Normal Joke</button>
    </div>
</template>

<script>
    export default {
        name: "normal-joke", 
        methods: {
            change_mode() {
                this.$store.dispatch('set_normal');
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