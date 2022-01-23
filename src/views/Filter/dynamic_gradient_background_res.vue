<template>
    <div class='dynamic-gradient-background-res-contain'>
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
.dynamic-gradient-background-res-contain{
    height: 100%;
    background: linear-gradient(45deg, #ffc107, deeppink, #9c27b0);
    animation: hueRotateAnimate 5s linear infinite;
}
@keyframes hueRotateAnimate{
    100% {
        filter: hue-rotate(360deg);
    }
}
</style>