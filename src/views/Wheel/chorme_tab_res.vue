<template>
    <div class='chorme-tab-res-contain'>
        <div class="chorme-tab-list">
            <a :href="item.link" class="chorme-tab" v-for="item in tabs" :key="item.title">
                <div class="tab-title"><i class="tab-icon" :class="item.icon"></i>{{item.title}}</div>
                <div class="close-btn">
                    <div class="btn-content">+</div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabs: [
                    {
                        icon: 'fa fa-edge',
                        title: 'The Jest Object',
                        link: 'http://localhost:8081/#/chorme_tab_res'
                    },
                    {
                        icon: 'fa fa-google',
                        title: 'ChromeTab分栏实现',
                        link: 'http://localhost:8081/#/chorme_tab_res'
                    },
                    {
                        icon: 'fa fa-github',
                        title: 'chokcoco（Coco）',
                        link: 'http://localhost:8081/#/chorme_tab_res'
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
    .chorme-tab-res-contain {
        height: 100%;

        .chorme-tab-list {
            background-color: #ddd;
            display: flex;
            padding: 6px 8px 0 8px;

            a {
                text-decoration: none;
                color: #000;
            }

            .chorme-tab {
                width: 220px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 10px;
                padding: 6px 0px 6px 10px;
                border-radius: 6px 6px 0 0;
                transition: all .5s ease;
                position: relative;

                &::before, &::after {
                    content: '';
                    width: 10px;
                    height: 10px;
                    background: radial-gradient(circle at 0 0, transparent 0% , transparent 100%);
                    position: absolute;
                    bottom: 0px;
                }

                &::before{
                    left: -10px;
                }

                &::after{
                    right: -10px;
                    transform: rotate(90deg);
                }

                &:hover {
                    background-color: #eee;
                    &::before, &::after{
                        background: radial-gradient(circle at 0 0, transparent 0% , transparent 85%, #eee 85%, #eee 100%);
                    }
                }

                .tab-title {
                    margin-right: 6px;

                    .tab-icon {
                        margin-right: 6px
                    }
                }

                .close-btn {
                    font-size: 16px;
                    width: 20px;
                    height: 20px;
                    box-shadow: -3px 0px 1px -2.8px #000 inset;
                    padding: 0 6px;

                    .btn-content {
                        width: 20px;
                        height: 20px;
                        transform: rotate(45deg);
                        border-radius: 50%;

                        &:hover {
                            background-color: #ddd;
                        }
                    }
                }

                &:focus-within {
                    background-color: #fff;
                    transform: scaleX(1.01);
                    &::before, &::after{
                        background: radial-gradient(circle at 0 0, transparent 0% , transparent 85%, #fff 85%, #fff 100%);
                    }
                }
            }
        }
    }
</style>