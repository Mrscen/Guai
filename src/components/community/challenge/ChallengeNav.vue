<template>
    <div id="ChallengeNav">
        <button @click="goto('/community/challenge/picked')">picked</button>
        <button @click="goto('/community/challenge/newest')">newest</button>
        <button @click="goto('/community/challenge/date')">date</button>
        <button @click="goto('/community/challenge/relevant')">relevant</button>
    </div>
</template>

<script>
export default {
    name:'CommunityAside',
    methods:{
        goto(path){
            this.$router.push(path)
        }
    }
}
</script>

<style>
*{
    /* 初始化内外边距 */
    margin: 0;
    padding: 0;
}
</style>