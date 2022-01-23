<template>
    <div class='btn-border-animate-res-contain'>
        <div class="both">both</div>
        <div class="rect">rect</div>
        <div class="circle">circle</div>
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
.btn-border-animate-res-contain{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &>div{
        line-height: 80px;
        position: relative;
        &::before{
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent;
            border: 3px solid #000;
        }
        &:hover{
            color: #038af6;
            transition: all 4s linear infinite;
        }
        
    }
    .both{
        width: 160px;
        height: 80px;
        &::before{
            border-image: linear-gradient(45deg, #000 0%, #000 100%) 1 round;
            // border-image-source: linear-gradient(45deg, #038af6 0%, #038af6 10 * 1%, #000 11 * 1%, #000 100%);
        }
        &:hover::before{
            animation: bothAnimate 1s linear forwards;
        }
    }
    .rect{
        width: 160px;
        height: 80px;
        &::before{
            border-image: linear-gradient(45deg, #000 0%, #000 100%) 1 round;
            // border-image-source: conic-gradient(from 315deg at 50% 100%, #038af6 0%, #038af6 20%, #000 21%, #000 100%);
        }
        &:hover::before{
            animation: rectAnimate 1s linear forwards;
        }
    }
    .circle{
        width: 86px;
        height: 86px;
        border-radius: 50%;
        background: conic-gradient(#000 0%, #000 100%);
        position: relative;
        &:hover{
            animation: circleAnimate 1s linear forwards;
        }
        &::before{
            content: 'circle';
            border-radius: 50%;
            left: 3px;
            top: 3px;
            width: calc(100% - 6px);
            height: calc(100% - 6px);
            border-width: 0;
            background: #fff;
        }
    }
}
@keyframes bothAnimate{
    @for $i from 1 through 100 {
        #{$i}% {
            $both_black_start: $i + 1;
            border-image-source: linear-gradient(15deg, #038af6 0%, #038af6 $i * 1%, #000 $both_black_start * 1%, #000 100%);
        }
    }
}
@keyframes rectAnimate{
    @for $i from 1 through 100 {
        $rect_black_start: $i + 1;
        #{$i}% {
            border-image-source: conic-gradient(from 297deg at 50% 50%, #038af6 0%, #038af6 $i * 1%, #000 $rect_black_start * 1%, #000 100%);
        }
    }
}

@keyframes circleAnimate{
    @for $i from 1 through 100 {
        $rect_black_start: $i + 1;
        #{$i}% {
            background: conic-gradient(#038af6 0%, #038af6 $i * 1%, #000 $rect_black_start * 1%, #000 100%);
        }
    }
}
</style>