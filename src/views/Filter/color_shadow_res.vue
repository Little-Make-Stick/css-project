<template>
    <div class='color-shadow-res-contain'>
        <div class="color-shadow">
            <div class="avatar"></div>
            <p>color shadow</p>
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
    .color-shadow-res-contain {
        height: 100%;
        display: flex;

        .color-shadow {
            margin: auto;

            .avatar {
                width: 180px;
                height: 180px;
                position: relative;
                background-position: center center;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-image: url('../../assets/image/color-shadow-img.png');

                &:before {
                    content: '';
                    width: 180px;
                    height: 180px;
                    position: absolute;
                    left: 15px;
                    z-index: -1;
                    background-position: center center;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    background-image: url('../../assets/image/color-shadow-img.png');
                    filter: blur(3px) brightness(80%) opacity(.8);
                }
            }

            p {
                margin: 20px;
            }
        }
    }
</style>