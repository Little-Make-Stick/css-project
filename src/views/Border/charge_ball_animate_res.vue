<template>
    <div class='charge-ball-animate-res-contain'>
        <div class="charge-ball">
            <div class="wave"></div>
            <div class="electric-volume"></div>
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
    .charge-ball-animate-res-contain {
        height: 100%;
        display: flex;

        .charge-ball {
            margin: auto;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            outline: 8px solid #67cbf7;
            border: 8px solid #fff;
            background: #67cbf7;
            position: relative;
            overflow: hidden;

            .wave {
                width: 240px;
                height: 240px;
                background-color: rgba(255, 255, 255, .4);
                border-radius: 38% 36% 31% 39%;
                position: absolute;
                left: -30%;
                top: -65%;
                animation: waveAnimate 10s linear infinite forwards;

                &:before {
                    content: '';
                    background-color: rgba(255, 255, 255, 1);
                    border-radius: 48% 45% 47% 49%;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            }

            .electric-volume {
                &:after {
                    content: '60%';
                    position: absolute;
                    z-index: 99;
                    font-size: 30px;
                    line-height: 150px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    animation: contentAnimate 10s linear infinite forwards;
                }
            }
        }
    }
    @keyframes contentAnimate{
        @for $i from 0 through 100{
            #{$i}%{
                content: $i+'%';
            }
        }
    }

    @keyframes waveAnimate {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        100% {
            transform: translate(0, -59%) rotate(360deg);
        }
    }
</style>