<template>
    <div class='inscribed-angle-res-contain'>
        <div class="inscribed-single-btn">单边内切角</div>
        <div class="inscribed-more-btn">多边内切角</div>
        <div class="linear-single-btn">线性单边内切角</div>
        <div class="linear-double-btn">线性双边内切角</div>
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
$inscribed-bg-color: #6ec5a7;
$inscribed-bg-color1: #e9de7d;
@keyframes shadowMove {
    0% {
        background-color: $inscribed-bg-color;
        box-shadow: 0 0 0 0 $inscribed-bg-color;
    }
    10% {
        background-color: transparent;
        box-shadow: 0 0 0 0 $inscribed-bg-color;
    }
    100% {
        background-color: transparent;
        box-shadow: 0 0 0 80vw $inscribed-bg-color;
    }
}
@keyframes radialBgIncrease {
    0% {
        background-image: radial-gradient(circle at 0 0, $inscribed-bg-color1 0 , $inscribed-bg-color1 1vw ,transparent 1vw);
    }
    10% {
        background-image: radial-gradient(circle at 0 0, transparent 0 , transparent 1vw , $inscribed-bg-color1 1vw, transparent 1vw);
    }
    20% {
        background-image: radial-gradient(circle at 0 0, transparent 0 , transparent 1vw , $inscribed-bg-color1 1vw, $inscribed-bg-color1 10vw, transparent 10vw);
    }
    50% {
        background-image: radial-gradient(circle at 0 0, transparent 0 , transparent 1vw , $inscribed-bg-color1 1vw, $inscribed-bg-color1 20vw, transparent 20vw);
    }
    100% {
        background-image: radial-gradient(circle at 0 0, transparent 0 , transparent 1vw , $inscribed-bg-color1 1vw, $inscribed-bg-color1 50vw);
    }
}
.inscribed-angle-res-contain{ 
    display: flex;
    flex-direction: column;
    &>div{
        padding: 20px 40px;
        width: 70%;
        margin: 20px auto;
    }
    .inscribed-single-btn{
        position: relative;
        overflow: hidden;
        &:before{
            content: '';
            width: 2vw;
            height: 2vw;
            border-radius: 50%;
            position: absolute;
            left: -1vw;
            top: -1vw;
            z-index: -1;
            /* box-shadow: 0 0 0 80vw $inscribed-bg-color; */
        }
        &:hover{
            &:before{
                animation: shadowMove 2s ease forwards;
            }
        }
    }
    .inscribed-more-btn{
        position: relative;
        overflow: hidden;
        &:before{
            content: '';
            width: 2vw;
            height: 2vw;
            border-radius: 50%;
            position: absolute;
            left: -1vw;
            top: -1vw;
            z-index: -1;
            box-shadow: 0 0 0 50vw $inscribed-bg-color;
        }
        &:after{
            content: '';
            width: 2vw;
            height: 2vw;
            border-radius: 50%;
            position: absolute;
            right: -1vw;
            bottom: -1vw;
            z-index: -1;
            box-shadow: 0 0 0 50vw $inscribed-bg-color;
        }
    }
    .linear-single-btn{
        background-image: radial-gradient(circle at 0 0, transparent 0 , transparent 1vw ,$inscribed-bg-color1 1vw);
        background-position: left top;
        background-repeat: no-repeat;
        /* &:hover{
            animation: radialBgIncrease 2s ease forwards;
        } */
    }
    .linear-double-btn{
        background-size: 80% 80%;
        background-image: radial-gradient(circle at 0 0, transparent 0 , transparent 1vw ,$inscribed-bg-color1 1vw),
                        radial-gradient(circle at 100% 100%, transparent 0 , transparent 1vw ,$inscribed-bg-color1 1vw),
                        radial-gradient(circle at 0 100%, transparent 0 , transparent 1vw ,$inscribed-bg-color1 1vw),
                        radial-gradient(circle at 100% 0, transparent 0 , transparent 1vw ,$inscribed-bg-color1 1vw),;
        background-position: left top, right bottom, left bottom, right top ;
        background-repeat: no-repeat;
    }
}
</style>