<template>
    <div class='charge-effect-res-contain'>
        <div class="battery">
            <div class="battery-empty"></div>
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
    .charge-effect-res-contain{
        height: 100%;
        display: flex;
        .battery{
            width: 140px;
            height: 220px;
            margin: auto;
            border: 1px solid #ccc;
            border-radius: 8px 8px 2px 2px;
            position: relative;
            background: linear-Gradient(#ed8fae, #4ca5eb);
            animation: colorAnimate 8s linear infinite ;
            &::before{
                content: '';
                width: 40px;
                height: 10px;
                position: absolute;
                top: -11px;
                left: 50%;
                transform: translateX(-50%);
                border: 1px solid #ccc;
                border-radius: 6px 6px 0 0;
            }
            .battery-empty{
                width: 100%;
                height: calc(100%);
                border-radius: 8px 8px 2px 2px;
                background: #fff;
                animation: batteryAnimate 8s linear infinite ;
            }
        }
    }
    @keyframes colorAnimate{
        0% {
            filter: hue-rotate(0);
        }
        50% {
            filter: hue-rotate(80deg);
        }
    }
    @keyframes batteryAnimate{
        0% {
            clip-path: inset(0 0 0 0);
        }
        50% {
            clip-path: inset(0 0 100% 0);
        }
    }
</style>