<template>
    <div class='radius-gradient-border-res-contain'>
        <div class="radius-gradient-border"></div>
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
.radius-gradient-border-res-contain{
    height: 100%;
    display: flex;
    .radius-gradient-border{
        margin: auto;
        width: 140px;
        height: 100px;
        border: 10px solid ;
        border-image: linear-gradient( 45deg ,blue, red ) 1 round;
        clip-path: inset( 0px round 10px);
        animation: colorAnimate 5s ease infinite forwards;
    }
}
@keyframes colorAnimate{
    100%{
        filter: hue-rotate(360deg);
    }
}
</style>
