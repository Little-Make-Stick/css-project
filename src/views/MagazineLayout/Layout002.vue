<template>
    <div class='layout002-contain'>
        <div class="main-info">
            <div class="title-info">
                <div class="logo">{{logo}}</div>
                <div class="date">
                    <div class="date-line">Inspiration</div>
                    <div class="date-line">{{date}}</div>
                </div>
            </div>
            <div class="foreword-categories">
                <div class="foreword" v-for="(item,i) in forewordCats" :key="i">
                    <router-link class="foreword-cat" :to="item.link">{{item.cat}}</router-link>
                    <div class="foreword-title">{{item.title}}</div>
                    <div class="foreword-content">{{item.content}}</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="first-two-content">
                <div class="line-1-article">
                    <div class="article" v-for="(item,i) in firstTwoContent(content.articles)" :key="i">
                        <router-link class="article-cat" :to="item.link">{{item.cat}}</router-link>
                        <div class="article-title">{{item.title}}</div>
                        <div class="article-content">{{item.content}}</div>
                    </div>
                </div>
            </div>
            <div class="content-title-module">
                <div class="line"></div>
                <div class="content-title">{{content.title}}</div>
                <div class="line"></div>
            </div>
            <div class="last-two-content">
                <div class="line-1-article">
                    <div class="article" v-for="(item,i) in lastTwoContent(content.articles)" :key="i">
                        <router-link class="article-cat" :to="item.link">{{item.cat}}</router-link>
                        <div class="article-title">{{item.title}}</div>
                        <div class="article-content">{{item.content}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                logo: 'Geupap.',
                date: 'April 2018',
                forewordCats: [
                    {
                        cat: 'The Ultimate',
                        link: '/',
                        title: 'Journal',
                        content: 'autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat ulla facilsilis at vero eros et accumsan et iusto.'
                    },
                    {
                        cat: 'Street top pick',
                        link: '/',
                        title: 'Fashion Model',
                        content: 'lorem ipsum dolor, sit amet consectetur adipisicing elit. odio fugiat consequatur consectetur at, deleniti explicabo reprehenderit.'
                    },
                ],
                content: {
                    title: 'Special Fashion Week',
                    articles: [
                        {
                            cat: 'Modern Dressing',
                            link: '/',
                            title: 'Special Summering',
                            content: 'adipisicing elit. ipsam dicta, quia similique nulla eum voluptatibus quae laborum, consectetur sunt necessitatibus corrupti quaerat.'
                        },
                        {
                            cat: 'Style Random',
                            link: '/',
                            title: 'Inside Fashion Pack',
                            content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. sequi provident vel, architecto numquam nemo repellat.'
                        },
                        {
                            cat: 'Group Jenita',
                            link: '/',
                            title: 'Sensual Woman Girl',
                            content: 'doloremque, totam blanditiis itaque ipsam commodi atque, vero, laborum eos quaerat nostrum deleniti laboriosam debitis.'
                        },
                        {
                            cat: 'Power of Beauty',
                            link: '/',
                            title: 'Glamour Fashion Week',
                            content: 'lorem ipsum dolor sit amet consectetur, adipisicing elit. ab pariatur eaque nihil tempora facere dicta mollitia impedit, nisi eius.'
                        },
                    ]
                }

            }
        },
        watch: {},
        filters: {
            // firstTwoContent(val){
            //     return val.slice(0,2);
            // },
            // lastTwoContent(val){
            //     return val.slice(-2);
            // }
        },
        computed: {},
        created() { },
        mounted() { },
        methods: {
            firstTwoContent(val) {
                return val.slice(0, 2);
            },
            lastTwoContent(val) {
                return val.slice(-2);
            }
        },
    }
</script>
<style lang="scss" scoped>
    $main-bg-color: #fff;
    $logo-color: rgb(85, 92, 98);
    $font-color: rgb(85, 92, 98);
    $content-color: #fff;

    .layout002-contain {
        background-image: url(../../assets/image/layout2-bg-1.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: top left;
        width: calc(100% - 20px);
        /* height: calc(100% - 10px); */
        padding: 40px 0px;
        margin: 10px;

        .main-info {
            position: relative;
            background-color: $main-bg-color;
            margin: 0px auto;
            width: 800px;
            padding: 30px;

            .title-info {
                display: flex;
                justify-content: space-between;
                margin: 20px 0 40px 0;

                .logo {
                    font-size: 80px;
                    font-weight: bold;
                    color: $logo-color;
                }

                .date {
                    color: $font-color;

                }
            }

            .foreword-categories {
                display: flex;
                justify-content: flex-end;

                .foreword {
                    width: 220px;
                    margin: 10px;
                    text-align: left;
                    color: $font-color;

                    .foreword-cat {
                        color: $font-color;
                    }

                    .foreword-title {
                        font-weight: bold;
                        line-height: 30px;
                    }
                }
            }
        }

        .content {
            width: 800px;
            margin: 30px auto;
            color: $content-color;
            position: relative;

            .line-1-article {
                display: flex;
                padding: 0px 100px;

                .article {
                    flex: 1;
                    padding: 20px 10px;

                    .article-cat {
                        color: $content-color;
                    }

                    .article-title {
                        font-size: 20px;
                        line-height: 50px;
                        font-weight: bold;
                    }

                    .article-content {
                        line-height: 22px;
                    }

                    &:first-child {
                        text-align: right;
                        border-right: 1px solid $content-color;
                    }

                    &:last-child {
                        text-align: left;
                    }
                }
            }

            .first-two-content {
                margin-bottom: -10px;

                &:before {
                    content: '';
                    width: 10px;
                    height: 10px;
                    position: absolute;
                    background-color: $content-color;
                    left: calc(calc(800px - 10px) / 2);
                }
            }

            .content-title-module {
                display: flex;
                align-items: center;

                .line:first-child {
                    &:before {
                        content: '';
                        width: 10px;
                        height: 10px;
                        position: absolute;
                        left: 0;
                        top: calc(calc(100% - 10px) / 2);
                        background-color: $content-color;
                    }
                }
                .line:last-child {
                    &:before {
                        content: '';
                        width: 10px;
                        height: 10px;
                        position: absolute;
                        right: 0;
                        top: calc(calc(100% - 10px) / 2);
                        background-color: $content-color;
                    }
                }

                .content-title {
                    width: 500px;
                    margin: 20px auto;
                    font-size: 25px;
                    font-weight: 600;
                    letter-spacing: 3px;
                    position: relative;

                    &:before {
                        content: '';
                        line-height: 45px;
                        position: absolute;
                        top: -20px;
                        left: 0;
                        width: 500px;
                        padding: 35px 0px;
                        border: 1px solid $content-color;
                    }

                    &:after {
                        content: '';
                        width: 500px;
                        position: absolute;
                        top: -10px;
                        left: -10px;
                        padding: 25px 10px;
                        border: 1px solid $content-color;
                    }
                }

                .line {
                    flex: 1;
                    height: 1px;
                    background-color: $content-color;
                }
            }

            .last-two-content {
                margin-top: -8px;

                &:after {
                    content: '';
                    width: 10px;
                    height: 10px;
                    position: absolute;
                    background-color: $content-color;
                    left: calc(calc(800px - 10px) / 2);
                }
            }
        }
    }
</style>