<template>
    <div class='text-gradient-contain'>
        <div class="gradient-image">
        </div>
        <div class="gradient-line">
        </div>
        <div class="gradient-text">
            Love is harmless to creature
        </div>
        <div class="image-text">
            <div class="image"></div>
            <div class="text">Love is harmless to creature</div>
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
<style lang="scss">
    .text-gradient-contain {
        .gradient-image {
            width: 30%;
            height: 300px;
            margin: 30px auto;
            background: url(../../assets/image/layout7-img-1.jpg) center center/cover no-repeat, linear-gradient(135deg, #61bb46 0%, #61bb46 16.5%, #fdb827 16.5%, #fdb827 33.5%, #f5821f 33.5%, #f5821f 50%, #e03a3e 50%, #e03a3e 66.5%, #963d97 66.5%, #963d97 83%, #009ddc 83%, #009ddc 100%);
            background-blend-mode: multiply;
        }

        .gradient-line {
            width: 60%;
            margin: 20px auto;
            height: 5px;
            background: linear-gradient(135deg, #61bb46 0%, #61bb46 16.5%, #fdb827 16.5%, #fdb827 33.5%, #f5821f 33.5%, #f5821f 50%, #e03a3e 50%, #e03a3e 66.5%, #963d97 66.5%, #963d97 83%, #009ddc 83%, #009ddc 100%);
        }

        .gradient-text {
            display: inline-block;
            position: relative;
            background-image: linear-gradient(135deg, #61bb46 0%, #61bb46 16.5%, #fdb827 16.5%, #fdb827 33.5%, #f5821f 33.5%, #f5821f 50%, #e03a3e 50%, #e03a3e 66.5%, #963d97 66.5%, #963d97 83%, #009ddc 83%, #009ddc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        }

        .image-text {
            width: 100%;
            height: 100px;
            background: url(../../assets/image/layout9-img-2.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;

            .text {
                mix-blend-mode: lighten;
                position: absolute;
                width: 100%;
                height: 100%;
                color: #000;
                background-color: #fff;
                font-weight: bolder;
            }
        }
    }
</style>