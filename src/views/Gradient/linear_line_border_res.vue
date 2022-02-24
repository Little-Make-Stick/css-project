<template>
    <div class='linear-line-border-res-contain'>
        <div class="linear-line-border-list">
            <div class="linear-line-border-1"></div>
            <div class="linear-line-border-2"></div>
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
.linear-line-border-res-contain{
    height: 100%;
    display: flex;
    .linear-line-border-list{
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: space-around;
        .linear-line-border-1,.linear-line-border-2{
            width: 160px;
            height: 130px;
            border-radius: 4px;
            overflow: hidden;
            position: relative;
            &::before{
                animation: rotateAnimate 4s linear forwards infinite;
            }
            &::after{
                content: '';
                width: 150px;
                height: 120px;
                position: absolute;
                left: 5px;
                top: 5px;
                border-radius: 3px;
                background: #fff;
                animation: opacityAnimate 4s linear forwards infinite;
            }
        }
        .linear-line-border-1{
            &::before{
                content: '';
                width: 240px;
                height: 240px;
                border-radius: 50%;
                position: absolute;
                left: -40px;
                top: -55px;
                background: linear-Gradient(to right, red 0%, red 50%, green 50%, green 100%), linear-Gradient(to right, yellow 0%, yellow 50%, blue 50%, blue 100%);
                background-repeat: no-repeat, no-repeat;
                background-size: 100% 50%, 100% 50%;
                background-position: top left, bottom left;
            }
        }
        .linear-line-border-2{
            &::before{
                content: '';
                width: 240px;
                height: 240px;
                border-radius: 50%;
                position: absolute;
                left: -40px;
                top: -55px;
                background: conic-Gradient( red 0deg, red 90deg, green 90deg, green 180deg, yellow 180deg, yellow 270deg, blue 270deg, blue 0deg);
            }
        }
    }
}
@keyframes rotateAnimate{
    100% {
        transform: rotate(360deg);
    }
}
@keyframes opacityAnimate{
    0% {
        background: rgba(255, 255, 255, 1);
    }
    100% {
        background: rgba(255, 255, 255, 0);
    }
}
</style>