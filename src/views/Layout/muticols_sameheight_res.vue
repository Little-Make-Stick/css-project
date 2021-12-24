<template>
    <div class='muticols-sameheight-res-contain'>
        <div class="res-contain" v-for="(item ,i) in arr" :key="i">
            <div class="title">{{item.title}}</div>
            <div :class="`content-${item.key}`">
                <div class="left">
                    <div class="nav">nav</div>
                </div>
                <div class="right">
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                    <p>content</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                arr: [
                    {
                        key: 'padmar',
                        title: 'padding + margin + overflow，实现多列等高效果，兼容性好',
                    },
                    {
                        key: 'border',
                        title: 'border实现多列等高，左边框宽度为200px，左列浮动，伪元素清除浮动',
                    },
                    {
                        key: 'lineargradient',
                        title: '父元素线性渐变背景色实现多列等高（同理各种颜色障眼法）',
                    },
                    {
                        key: 'flex',
                        title: 'display：flex实现多列等高',
                    },
                    {
                        key: 'grid',
                        title: 'display：grid实现多列等高',
                    },
                    {
                        key: 'table',
                        title: 'display:table-cell 实现多列等高',
                    },
                ]
            }
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    $title-bg-color: cornflowerblue;
    $navs-bg-color: lightpink;
    $content-bg-color: lemonchiffon;

    .muticols-sameheight-res-contain {
        .res-contain {
            margin: 30px 200px;

            .title {
                background-color: $title-bg-color;
                padding: 15px 0;
            }

            p {
                margin: 0;
            }

            .left {
                background-color: $navs-bg-color;
                width: 200px;
            }

            .right {
                background-color: $content-bg-color;
            }

            .content-padmar {
                position: relative;
                overflow: hidden;

                &>div {
                    float: left;
                    padding-bottom: 9999px;
                    margin-bottom: -9999px;
                }

                .left {
                    margin-right: -200px;
                }

                .right {
                    width: 100%;
                    margin-left: 200px;

                }
            }

            .content-border {
                .left {
                    float: left;
                }

                .right {
                    border-left: 200px solid $navs-bg-color;
                }
            }

            .content-lineargradient {
                overflow: hidden ;
                background: linear-gradient(90deg, $navs-bg-color 0 , $navs-bg-color 200px ,$content-bg-color 200px , $content-bg-color );
                &>div{
                    background-color: transparent;
                    float: left;
                }
            }


            .content-flex {
                display: flex;
                width: 100%;

                .right {
                    flex: 1;
                }
            }

            .content-grid {
                display: grid;
                width: 100%;
                grid-template-columns: 200px auto;
            }

            .content-table {
                display: table;
                width: 100%;

                .left {
                    display: table-cell;
                }
            }

        }
    }
</style>