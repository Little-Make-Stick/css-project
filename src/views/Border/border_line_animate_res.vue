<template>
    <div class='border-line-animate-res-contain'>
        <div class="btn-box">
            <div class="btn">Hover Me</div>
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
    .border-line-animate-res-contain {
        height: 100%;
        display: flex;
        background-color: yellowgreen;
        position: relative;
        z-index: 0;

        .btn-box {
            margin: auto;
            overflow: hidden;
            width: 182px;
            height: 90px;
            display: flex;
            position: relative;

            .btn {
                margin: auto;
                width: 160px;
                height: 70px;
                line-height: 70px;
                font-size: 22px;
                background: #fff;
                color: yellowgreen;
                border: 5px solid yellowgreen;
            }

            &:before {
                content: '';
                width: 200px;
                height: 130px;
                position: absolute;
                top: -30px;
                background: #fff;
                transform: rotateZ(-90deg);
                transform-origin: bottom left;
            }

            &:hover::before {
                z-index: -1;
                animation: borderLine 2s ease forwards;
            }
        }
    }

    @keyframes borderLine {
        100% {
            transform: rotateZ(0deg) translate(0px, 0px);
        }
    }
</style>