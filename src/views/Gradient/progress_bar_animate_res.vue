<template>
    <div class='progress-bar-animate-res-contain'>
        <div class="progress-bar-animate-list">
            <div class="progress-bar-1"></div>
            <div class="progress-bar-2"></div>
        </div>
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
.progress-bar-animate-res-contain{
    height: 100%;
    display: flex;
    .progress-bar-animate-list{
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: space-around;
        .progress-bar-1{
            width: 200px;
            height: 50px;
            background: linear-gradient(45deg, tomato 25%, #fff 25%, #fff 50%, tomato 50%, tomato 75%, #fff 75%, #fff 0%) repeat-x;
            background-size: 50px 100%;
        }
        .progress-bar-2{
            width: 200px;
            height: 50px;
            overflow: hidden;
            position: relative;
            &::before{
                content: '';
                width: 150%;
                height: 200%;
                position: absolute;
                left: -25%;
                top: -75%;
                /* background: linear-gradient(45deg, tomato 25%, #fff 25%, #fff 50%, tomato 50%, tomato 75%, #fff 75%, #fff 0%) repeat-x; */
                background: linear-gradient(45deg, tomato 12.5%, #fff 12.5%, #fff 25%, tomato 25%, tomato 37.5%, #fff 37.5%, #fff 50%, tomato 50%, tomato 62.5%, #fff 62.5%, #fff 75%, tomato 75%, tomato 87.5%, #fff 87.5%, #fff 0%) repeat-x;
                background-size: 33px 100%;
                animation: progressAnimate 1s linear forwards infinite;
            }
        }
    }
}
@keyframes progressAnimate{
    0%{
        transform: translate(0% , 0%);
    }
    100% {
        transform: translate(-15% , 10%);
    }
}
</style>