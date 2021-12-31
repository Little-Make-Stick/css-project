<template>
    <div class='div-hover-res-contain'>
        <div class="stop-btn">STOP</div>
        <div class="animation"></div>
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
    @keyframes move {
        0% {
            transform: translateX(100%);
        }

        25% {
            transform: translateX(200%);
        }

        50% {
            transform: translateX(300%);
        }

        75% {
            transform: translateX(400%);
        }

        100% {
            transform: translateX(500%);
        }
    }

    .div-hover-res-contain {

        /* height: 100%; */
        .stop-btn {
            display: inline-block;
            margin: 20px auto;
            padding: 5px 15px;
            border-radius: 6px;
            border: 1px solid #000;
        }

        .animation {
            width: 120px;
            height: 120px;
            background-color: cornflowerblue;
            animation: move 8s linear infinite alternate-reverse;
        }

        .stop-btn:hover~.animation {
            animation-play-state: paused;
        }
    }
</style>