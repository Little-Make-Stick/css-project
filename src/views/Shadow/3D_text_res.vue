<template>
    <div class="threeD-text-res-contain">
        <div class="container">
            <div class="a">CSS 3D</div>
            <div class="b">NEON</div>
            <div class="a">EFFECT</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    };
</script>
<style lang="scss" scoped>
    $neon-text-color: #88e;
    $neon-text-color1: #f99;
    @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap");

    @keyframes pulsea {
        0% {
            text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
                0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
                0.14em 0.14em 0 #112, 0.145em 0.145em 0 #aaf;
        }

        50% {
            text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
                0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #aaf,
                0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
        }

        75% {
            text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
                0.045em 0.045em 0 #aaf, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
                0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
        }

        100% {
            text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.4), 0.04em 0.04em 0 #112,
                0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
                0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
        }
    }

    @keyframes pulseb {
        0% {
            text-shadow: 0 0 0.3em rgba(255, 100, 200, 0.3), 0.04em 0.04em 0 #112,
                0.045em 0.045em 0 #f99, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #b66,
                0.14em 0.14em 0 #112, 0.145em 0.145em 0 #faa;
        }

        50% {
            text-shadow: 0 0 0.3em rgba(255, 100, 200, 0.3), 0.04em 0.04em 0 #112,
                0.045em 0.045em 0 #f99, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #faa,
                0.14em 0.14em 0 #112, 0.145em 0.145em 0 #a44;
        }

        75% {
            text-shadow: 0 0 0.3em rgba(255, 100, 200, 0.3), 0.04em 0.04em 0 #112,
                0.045em 0.045em 0 #faa, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #b66,
                0.14em 0.14em 0 #112, 0.145em 0.145em 0 #a44;
        }

        100% {
            text-shadow: 0 0 0.3em rgba(255, 100, 200, 0.3), 0.04em 0.04em 0 #112,
                0.045em 0.045em 0 #f99, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #b66,
                0.14em 0.14em 0 #112, 0.145em 0.145em 0 #a44;
        }
    }

    .threeD-text-res-contain {
        width: 100%;
        height: 100%;
        display: flex;
        font-family: "Rajdhani", sans-serif;
        font-weight: bold;
        background: #000;

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: auto;
            transform: rotateX(25deg) rotateY(-25deg);

            &>div {
                text-align: center;
                display: block;
                font-size: 26vh;
                letter-spacing: 0.1em;
                max-height: 22vh;
            }

            .a {
                text-shadow:
                    0 0 0.3em rgba(200, 200, 255, 0.3),
                    0.04em 0.04em 0 #112,
                    0.045em 0.045em 0 #88e,
                    0.09em 0.09em 0 #112,
                    0.095em 0.095em 0 #66c,
                    0.14em 0.14em 0 #112,
                    0.145em 0.145em 0 #44a;
                color: $neon-text-color;
                animation: pulsea 300ms ease infinite alternate;
            }

            .b {
                text-shadow:
                    0 0 0.3em rgba(255, 100, 200, 0.3),
                    0.04em 0.04em 0 #112,
                    0.045em 0.045em 0 #f99,
                    0.09em 0.09em 0 #112,
                    0.095em 0.095em 0 #b66,
                    0.14em 0.14em 0 #112,
                    0.145em 0.145em 0 #a44;
                color: $neon-text-color1;
                animation: pulseb 300ms ease infinite alternate;
            }
        }
    }
</style>