<template>
    <div class='non-regular-ball-loading-res-contain'>
        <div class="non-regular-ball"></div>
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
.non-regular-ball-loading-res-contain{
    height: 100%;
    background-color: #000;
    display: flex;
    .non-regular-ball{
        margin: auto;
        width: 140px;
        height: 140px;
        background: linear-gradient(#298bda, #ef59ef);
        border-radius: 35% 36% 38% 36%;
        position: relative;
        z-index: 9;
        animation: waveAnimate 3s ease infinite;
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            background: linear-gradient(#579bd2, #ef59ef);
            border-radius: 43% 41% 44% 40%;
            z-index: 1;
        }
        &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            background: linear-gradient(#298bda, #ef59ef);
            border-radius: 40% 38% 41% 39%;
            z-index: 0;
            animation: afterAnimate 3s ease infinite;
        }
    }
}
@keyframes waveAnimate{
    100%{
        transform: rotate(360deg);
    }
}
@keyframes afterAnimate{
    90%{
        transform: rotate(324deg);
    }
    91%{
        transform: rotate(340deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>