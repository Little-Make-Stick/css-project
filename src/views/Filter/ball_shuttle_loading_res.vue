<template>
    <div class='ball-shuttle-loading-res-contain'>
        <div class="ball-shuttle-loading">
            <div class="first"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
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
    .ball-shuttle-loading-res-contain {
        height: 100%;

        .ball-shuttle-loading {
            height: 100%;
            background-color: #000;
            filter: blur(5px) contrast(10);

            * {
                position: absolute;
                width: 30px;
                height: 30px;
                top: 50%;
                left: 50%;
                background-color: #fff;
                border-radius: 50%;
                transform: translate(-700%, 0);
                opacity: 0;
            }

            .first {
                animation: scaleMove 3.5s infinite linear;
            }

            .ball {}
        }
    }

    @for $i from 1 through 8 {
        .ball:nth-child(#{$i}) {
            animation: move 3.5s infinite #{$i * 0.2 + 0.1}s linear;
        }
    }

    @keyframes move {
        25% {
            opacity: 1;
            transform: translate(-1vw, 0);
        }

        50% {
            opacity: 1;
            transform: translate(1vw, 0);
        }

        75%,
        100% {
            opacity: 0;
            transform: translate(700%, 0);
        }
    }


    @keyframes scaleMove {
        25% {
            opacity: 1;
            transform: translate(-1vw, 0);
        }

        35% {
            opacity: 1;
            transform: scale(1);
        }

        70% {
            opacity: 1;
            transform: translate(1vw, 0) scale(2);
        }

        90%,
        100% {
            opacity: 0;
            transform: translate(1vw, 0) scale(1);
        }
    }
</style>