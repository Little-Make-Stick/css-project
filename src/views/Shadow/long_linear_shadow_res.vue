<template>
    <div class='long-linear-shadow-res-contain'>
        <div class="long-linear-shadow"></div>
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
    $contain-bg-color: hsl(199, 98%, 50%);

    .long-linear-shadow-res-contain {
        height: 100%;
        display: flex;
        background: $contain-bg-color;

        .long-linear-shadow {
            width: 120px;
            height: 120px;
            margin: auto;
            background: #fff;
            position: relative;

            &:before {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                left: 50%;
                top: 100%;
                background: linear-gradient(to bottom, hsl(199, 98%, 30%) 0%, transparent 100%);
                transform: skewX(45deg);
            }

            &:after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                left: 100%;
                top: 50%;
                background: linear-gradient(to right, hsl(199, 98%, 30%) 0%, transparent 100%);
                transform: skewY(45deg);
            }
        }
    }
</style>