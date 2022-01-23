<template>
    <div class='drip-effect-res-contain'>
        <div class="text">MAGICCSS</div>
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
.drip-effect-res-contain{
    height: 100%;
    background-color: #000;
    filter: blur(5px) contrast(10);
    .text{
        position: absolute;
        color: #fff;
        font-size: 80px;
        font-weight: bold;
        top: 50%;
        left: 50%;
        text-decoration: underline;
        transform: translate(-50%, -50%) scaleY(1.3) skewY(5deg);
        &:before,&:after{
            content: '';
            width: 10px;
            height: 10px;
            position: absolute;
            bottom: 0;
            left: 5px;
            background-color: #fff;
            transform: translate(0,0);
        }
        &::before{
            animation: moveDrop 8s linear infinite forwards;
        }
        &::after{
            animation: moveDrop 7.5s linear .2s infinite forwards;
        }
    }
}
@keyframes moveDrop{
    0% {
        opacity: 1;
    }
    25% {
        transform: translate(200px, 0);
    }
    40% {
        transform: translate(300px, 0) scaleY(1.1);
    }
    60% {
        transform: translate(380px, 0) scaleY(1.2);
    }
    70% {
        transform: translate(380px, 500px) scale(1.2);
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>