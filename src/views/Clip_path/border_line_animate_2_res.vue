<template>
    <div class='border-line-animate-2-res-contain'>
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
.border-line-animate-2-res-contain{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .border-line-animate,.border-line-animate-example{
        background-color: rgba(247, 227, 52, 1);
        color: #fff;
        padding: 15px 40px;
        border-radius: 5px;
        box-sizing: border-box;
        position: relative;
        &:before,&:after{
            content: '';
            position: absolute;
            width: 116%;
            height: 131%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 2px solid rgba(247, 227, 52, 1);
            border-radius: 5px;
            clip-path: inset(0% 0% 99% 0%);
        }
        &::before{
            animation: borderAnimate 4s linear infinite forwards;
        }
        &::after{
            animation: borderAnimate 4s linear -2s infinite forwards;
        }
    }
    .border-line-animate-example{
        &::before,&::after{
            background-color: rgba(247, 227, 52, .3);
        }
    }
}   
@keyframes borderAnimate{
    25% {
        clip-path: inset(0% 0% 0% 99%);
    }
    50% {
        clip-path: inset(99% 0% 0% 0%);
    }
    75% {
        clip-path: inset(0% 99% 0% 0%);
    }
    100% {
        clip-path: inset(0% 0% 99% 0%);
    }
}
</style>