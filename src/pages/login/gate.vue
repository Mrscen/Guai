<template>
    <div>
        <h1>gate</h1>
        <button @click="goto('newUser')">newUser</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    name:'gate',
    methods:{
        goto(path){
            this.$router.push(path)
        }
}
}
</script>