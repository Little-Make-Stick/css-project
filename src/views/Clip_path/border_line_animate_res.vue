<template>
    <div class='border-line-animate-res-contain'>
        <div class="border-line-animate">hello</div>
        <div class="border-line-animate-example">hello</div>
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
.border-line-animate-res-contain{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .border-line-animate,.border-line-animate-example{
        width: 160px;
        height: 120px;
        position: relative;
        line-height: 120px;
        font-size: 20px;
        
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 2px solid rgba(247, 227, 52, 1);
            clip-path: inset(0% 99% 0% 0%);
            animation: clipAnimate 2s linear infinite forwards;
        }
    }
    .border-line-animate-example{
        &::before{
            background-color: rgba(247, 227, 52, .3);
        }
    }
}
@keyframes clipAnimate{
    25%{
        clip-path: inset(0% 0% 99% 0%);
    }
    50% {
        clip-path: inset(0% 0% 0% 99%);
    }
    75% {
        clip-path: inset(99% 0% 0% 0%);
    }
    100% {
        clip-path: inset(0% 99% 0% 0%);
    }
}
</style>