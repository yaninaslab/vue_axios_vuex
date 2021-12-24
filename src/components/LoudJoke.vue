<template>
    <div>
<button @click="change_mode">LOUD JOKE</button>
    </div>
</template>

<script>
    export default {
        name: "loud-joke",
        methods: {
            change_mode() {
                this.$store.dispatch('set_uppermode');
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