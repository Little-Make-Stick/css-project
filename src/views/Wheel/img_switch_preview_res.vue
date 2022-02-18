<template>
    <div class='img-switch-preview-res-contain'>
        <div class="title">PURE CSS SWITCH PIUTURE</div>
        <div class="pictures-frame">
            <div class="picture-a">
                <div class="picture-b">
                    <div class="resize-element"></div>
                </div>
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
    .img-switch-preview-res-contain {
        height: 100%;

        .title {
            color: lightblue;
            font-size: 2em;
            padding-top: 20px;
        }

        .pictures-frame {
            width: 650px;
            height: 340px;
            border: 8px solid #e9e3af;
            margin: 20px auto;

            .picture-a {
                width: 100%;
                height: 100%;
                background-image: url('../../assets/image/spring.png');
                text-align: left;

                .picture-b {
                    /* width: 20px; */
                    height: 100%;
                    display: inline-block;
                    background-image: url('../../assets/image/fall.png');

                    .resize-element {
                        resize: horizontal;
                        overflow-x: auto;
                        width: 20px;
                        max-width: 650px;
                        height: 13px;
                        transform: scaleY(26);
                        background: rgba(0,0,0,.2);
                        cursor: w-resize;
                        position: relative;
                        top: 48%; 
                    }
                }
            }

        }
    }
</style>