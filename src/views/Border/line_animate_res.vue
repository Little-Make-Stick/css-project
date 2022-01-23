<template>
    <div class='line-animate-res-contain'>
        <div class="line-animate"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    .line-animate-res-contain {
        height: 100%;
        background-color: #000;
        display: flex;
        filter: blur(4px) contrast(10);
        overflow: hidden;

        &:before {
            content: '';
            background-color: #000;
            height: 60vh;
            width: 100%;
            top: 0;
            left: 0;
            position: absolute;
            z-index: 9;
        }

        .line-animate {
            margin: auto;
            background: linear-gradient(#fff, dodgerblue);
            width: 50vmax;
            height: 50vmax;
            position: relative;
            top: -70vmin;
            transform: rotate(0deg) translate(0, 2vh) ;
            border-radius: 42% 46% 43% 45%;
            animation: lineAnimate 10s ease infinite alternate; 

            &:before {
                content: '';
                background-color: #000;
                height: 98%;
                width: 98%;
                top: 50%;
                left: 50%;
                position: absolute;
                transform: translate(-50%, -50%);
                z-index: 9;
                border-radius: 42% 46% 43% 45%;
                animation: lineShadowAnimate 10s ease infinite alternate; 
            }
        }
    }
    @keyframes lineAnimate{
        50%{
            border-radius: 42% 46% 43% 45%;
        }
        100%{
            border-radius: 46% 42% 45% 43%;
            transform: rotate(360deg) translate(0, 5vh);
        }
    }
    @keyframes lineShadowAnimate{
        50%{
            border-radius: 42% 46% 43% 45%;
        }
        100%{
            border-radius: 46% 42% 45% 43%;
        }
    }
</style>