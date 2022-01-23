<template>
    <div class='ball-shuttle-res-contain'>
        <div class="ball-shuttle">
            <div class="ball"></div>

            <div class="wall"></div>
            <div class="wall"></div>
            <div class="wall"></div>
            <div class="wall"></div>
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
.ball-shuttle-res-contain{
    height: 100%;
    .ball-shuttle{
        height: 100%;
        background: #000;
        overflow: hidden;
        filter: blur(5px) contrast(10);
        .ball{
            width: 30px;
            height: 30px;
            left: 0%;
            top: 40%;
            position: absolute;
            border-radius: 50%;
            box-shadow: 0 0 4px 6px rgba(255,255,255,.5);
            background-color: #fff;
            /* filter: brightness(110%); */
            
            animation: move 10s ease-in-out infinite;
        }
        .wall{
            height: 100%;
            width: 30px;
            left: 20%;
            position: absolute;
            background: rgba(0, 0, 0, .5);
            &:nth-child(2){
                left: 40%;
            }
            &:nth-child(3){
                left: 60%;
            }
            &:nth-child(4){
                left: 80%;
            }
        }
    }
}    
@keyframes move{
    20%{
        transform: translateX(20vw);
        background: #ddd;
    }
    100%{
        transform: translateX(100vw);
        background: #ddd;
    }
}
</style>