<template>
    <div class='tab-focus-within-res-contain'>
        <div class="tab-focus-within">
            <button class="tab-a tab-item">Tab-A</button>
            <button class="tab-b tab-item">Tab-B</button>
            <div class="content">
                <div class="content-a">CONTENT A</div>
                <div class="content-b">CONTENT B</div>
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
    .tab-focus-within-res-contain {
        height: 100%;
        display: flex;

        .tab-focus-within {
            margin: auto;
            width: 300px;
            height: 200px;
            border: 1px solid #000;


            button {
                width: 50%;
                background: transparent;
                line-height: 35px;
                outline: none;
                background-color: blue;
                outline: none;

                &:not(:focus-within) {
                    background-color: transparent;
                }
            }
            .content{
                &>div{
                    display: none;
                    line-height: 150px;
                }
            }

            .tab-a:focus-within~.content .content-a {
                display: block;
            }

            .tab-b:focus-within~.content .content-b {
                display: block;
            }
            &:not(:focus-within){
                .tab-a{
                    background-color: blue;
                }
                .content-a{
                    display: block;
                }
            }
        }
    }
</style>