<template>
    <div class='indistinct-not-res-contain'>
        <div class="indistinct-not-res" @click="showDialog = false" :class="{'show-blur':showDialog} ">
            <div class="header">header</div>
            <div class="contain">
                <div class="section-item" v-for="(item,i) in list" :key="i">
                    <p v-if="i % 10">{{item}}</p>
                    <p class="link-section" v-else @click.stop="showDialog = true">{{item}}</p>
                </div>
            </div>
            <div class="footer">footer</div>
        </div>
        <div class="section-dialog" v-if="showDialog">
            content
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [],
                showDialog: false,
            }
        },
        watch: {},
        computed: {},
        created() {
            this.list = new Array(100).fill('content')
        },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    .indistinct-not-res-contain {
        height: 100%;

        .indistinct-not-res {
            height: 100%;

            .header {}

            .contain {
                max-height: calc(100% - 40px - 40px);
                padding: 40px 0;
                overflow-y: scroll;
                background-color: lightblue;

                .link-section {
                    text-decoration: underline;
                    cursor: pointer;
                    background-color: #fcfcfc;
                }
            }

            .footer {
                bottom: 0;
            }

            .header,
            .footer {
                position: fixed;
                width: 100%;
                height: 40px;
                font-size: 30px;
                font-weight: bold;
                background-color: cornflowerblue;
                z-index: 99;
            }

            &.show-blur:not(.section-dialog) {
                filter: blur(2px);
            }
        }

        .section-dialog {
            background-color: lightpink;
            padding: 10px 50px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: scale(6);
        }

    }
</style>