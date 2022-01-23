<template>
    <div class='bubble-res-contain'>
        <div class="bubble-res">
            <div class="shapes-example">
                <div class="shape-item-1"></div>
                <div class="shape-item-2"></div>
                <div class="shape-item-3"></div>
            </div>
            <div class="bubble">
                <div class="bubble-content">我是气泡内容气泡内容气泡内容气泡内容</div>
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
    .bubble-res-contain {
        height: 100%;
        display: flex;

        .bubble-res {
            margin: auto;

            .shapes-example {
                margin: 20px 0;
                display: flex;
                align-items: center;
                justify-content: space-around;

                &>div {
                    border: 10px solid blue;
                    border-color: blue yellow green red;
                }

                .shape-item-1 {
                    width: 20px;
                    height: 20px;
                }

                .shape-item-3 {
                    border-color: transparent red transparent transparent;
                }
            }

            .bubble {
                display: flex;
                align-items: center;
                filter: drop-shadow(0 0 2px #ddd);

                .bubble-content {
                    padding: 5px 8px;
                    border-radius: 4px;
                    background-color: rgb(110, 207, 20);
                }

                &:before {
                    content: '';
                    border: 6px solid transparent;
                    border-right-color: rgb(110, 207, 20);
                    transform: scaleX(1.5);
                }
            }
        }
    }
</style>