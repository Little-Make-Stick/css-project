<template>
    <div class='neon-atmosphere-res-contain'>
        <div class="pink-text">PINK</div>
        <div class="orange-text">ORANGE</div>
        <div class="yellow-text">YELLOW</div>
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
    $pink-color: #E91E63;
    $orange-color: #ff5722;
    $yellow-color: #ffeb3b;
    .neon-atmosphere-res-contain{
        font-size: 3em;
        font-family: 'Lobster';
        background-color: #444;
        width: 100%;
        height: 100%;
        font-weight: bold;
        &>div{
            padding: 50px 0;
        }

        .pink-text{
            filter: brightness(110%);
            color: #fff;
            text-shadow: 
                        0 0 5px #fff, 
                        0 0 10px #fff, 
                        0 0 15px #fff, 
                        0 0 20px $pink-color, 
                        0 0 35px $pink-color, 
                        0 0 40px $pink-color, 
                        0 0 50px $pink-color, 
                        0 0 75px $pink-color;
        }
        .orange-text{
            color: $orange-color;
            &:hover{
                filter: brightness(110%);
                color: #fff;
                text-shadow: 
                            0 0 5px #fff, 
                            0 0 10px #fff, 
                            0 0 15px #fff, 
                            0 0 20px $orange-color, 
                            0 0 35px $orange-color, 
                            0 0 40px $orange-color, 
                            0 0 50px $orange-color, 
                            0 0 75px $orange-color;
            }
        }
        .yellow-text{
            color: $yellow-color;
            &:hover{
                filter: brightness(110%);
                color: #fff;
                text-shadow: 
                            0 0 5px #fff, 
                            0 0 10px #fff, 
                            0 0 15px #fff, 
                            0 0 20px $yellow-color, 
                            0 0 35px $yellow-color, 
                            0 0 40px $yellow-color, 
                            0 0 50px $yellow-color, 
                            0 0 75px $yellow-color;
            }
        }
    }
</style>