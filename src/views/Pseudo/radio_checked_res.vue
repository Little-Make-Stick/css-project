<template>
    <div class='radio-checked-res-contain'>
        <input id="stop" type="radio" name="playAnimation">
        <input id="play" type="radio" name="playAnimation">
        <div class="btns">
            <label for="stop">
                <div class="stop-btn">stop</div>
            </label>
            <label for="play">
                <div class="stop-btn">play</div>
            </label>
        </div>
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
            transform: translateX(0%);
        }

        20% {
            transform: translateX(100%);
        }

        40% {
            transform: translateX(200%);
        }

        60% {
            transform: translateX(300%);
        }

        80% {
            transform: translateX(400%);
        }

        100% {
            transform: translateX(500%);
        }
    }

    .radio-checked-res-contain {
        height: 100%;
        input[type="radio"]{
            visibility: hidden;
        }
        .btns {
            position: relative;
            height: 150px;
            padding-top: 30px;

            div {
                padding: 10px 15px;
                border-radius: 8px;
                border: 1px solid #000;
                margin: 10px;
                display: inline-block;
            }
        }

        .animation {
            width: 120px;
            height: 120px;
            background-color: cornsilk;
            margin-left: 50px;
            animation: move 8s linear infinite alternate;
        }

        #stop:checked~.animation {
            animation-play-state: paused;
        }

        #play:checked~.animation {
            animation-play-state: running;
        }
    }
</style>