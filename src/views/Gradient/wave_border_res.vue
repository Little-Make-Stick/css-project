<template>
    <div class='wave-border-res-contain'>
        <div class="wave-border-bg">
            <div class="wave-1"></div>
            <div class="wave-2"></div>
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
<style lang="scss">
:root {
    --colorA: #ccc;
}
.wave-border-res-contain{
    height: 100%;
    
    .wave-border-bg{
        width: 100%;
        height: 100%;
        background: linear-gradient(#607d8b 15% , #673ab7 30%, var(--colorA) 30%, var(--colorA) 100%);

        .wave-1{
            width: 100%;
            height: 15px;
            background-repeat: repeat-x;
            background: radial-gradient(circle at 10px -5px, transparent 12px, #fff 13px, #fff 20px);
            background-size: 20px 20px;
            position: absolute;
            bottom: 60%;
            animation: moveToTop 2s linear forwards;
        }
        .wave-2{
            width: 100%;
            height: 15px;
            background-repeat: repeat-x;
            background: radial-gradient(circle at 10px 15px, white 12px, transparent 13px);
            background-size: 40px 20px;
            background-position: 20px -3px ;
            position: absolute;
            bottom: 20%;
            animation: moveToTop 2s linear 1s forwards;
        }
    }
}
@keyframes moveToTop{
    100%{
        bottom: 70%;
    }
}
</style>