<template>
    <div class='typeing-res-contain'>
        <h1>Pure  CSS  Typing  animation.</h1>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
.typeing-res-contain{
    height: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    h1{
        margin: auto;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        width: 26ch;
        border-right: 3px solid #fff;
        animation: typing 9s steps(27, end), blink .4s step-end infinite alternate;
    }
}
@keyframes typing{
    from {
        width: 0ch;
    }
}

@keyframes blink{
    0% {
        border-color: #fff;
    }
    50% {
        border-color: transparent;
    }
}
</style>