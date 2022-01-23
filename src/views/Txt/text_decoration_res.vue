<template>
    <div class='text-decoration-res-contain'>
        <div class="text-decoration">1234567890</div>
        <div class="text-decoration-ball"></div>
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
.text-decoration-res-contain{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .text-decoration{
        font-size: 35px;
        font-weight: bold;
        color: transparent;
        text-decoration: underline 5px wavy #03a9f4;
    }
    .text-decoration-ball{
        width: 160px;
        height: 160px;
        border: 5px solid #03a9f4;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        &:before{
            content: '12345678901234567891234567800000043435465576s';
            position: absolute;
            left: 0;
            line-height: 160px;
            color: transparent;
            animation: waveAnimate 3s linear infinite;
            text-decoration: underline 5px wavy #03a9f4;
        }
    }
}
@keyframes waveAnimate{
    100%{
        transform: translateX(calc(-100% + 170px));
    }
}
</style>