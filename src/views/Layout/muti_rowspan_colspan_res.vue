<template>
    <div class='muti-rowspan-colspan-res-contain'>
        <template v-for="item in arr" :key="item.key">
            <div class="title">{{item.title}}</div>
            <div :class="`${item.key}-contain`">
                <div class="box" v-for="box in boxes" :key="box"></div>
            </div>
        </template>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                boxes: [1, 2, 3, 4],
                arr: [
                    {
                        key: 'float',
                        title: 'float 实现'
                    },
                    {
                        key: 'grid',
                        title: 'grid 实现'
                    }
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
    .muti-rowspan-colspan-res-contain {
        .title {
            margin-top: 20px;
        }

        div[class$="-contain"] {
            width: 220px;
            margin: 0 auto;
        }

        .box {
            width: 100%;
            min-height: 100px;
            border: 1px solid #000;
            border-radius: 4px;
        }

        .float-contain {
            overflow: hidden;

            &>.box {
                float: left;
                width: calc(50% - 12px);
                margin: 5px;

                &:first-child {
                    height: 210px;
                }

                &:last-child {
                    width: calc(100% - 10px);
                }
            }
        }

        .grid-contain {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;

            .box {
                &:first-child {
                    grid-row: 1/3;
                }
                &:last-child {
                    grid-column: 1/3;
                }
            }
        }
    }
</style>