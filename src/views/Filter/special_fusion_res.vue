<template>
    <div class='special-fusion-res-contain'>
        <div class="special-fusion">
            <div class="box">
                <div class="ball"></div>
            </div>
        </div>
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
    .special-fusion-res-contain {
        height: 100%;
        display: flex;
        filter: contrast(20);
        *{
            /* border-radius: 50%; */
            background-color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            filter: unset;
        }
        .special-fusion {
            width: 250px;
            height: 250px;
            
            .box {
                width: 160px;
                height: 160px;
                background-color: #000;
                filter: blur(8px) contrast(20) ;

                .ball {
                    width: 60px;
                    height: 60px;
                    background-color: blue;
                    transform-origin: -100% center;
                    filter: blur(8px) contrast(20) ;
                    animation: rotateMove 3s linear infinite;
                }
            }
        }
    }

    @keyframes rotateMove {
        100% {
            transform: translate(-50% , -50%) rotate(360deg);
        }
    }
</style>