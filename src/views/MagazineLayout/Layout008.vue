<template>
    <div class="layout008-contain">
        <div class="content">
            <div class="left">
                <div class="figures-list">
                    <div class="figure" v-for="(item, i) in simpleContents(contents)" :key="i">
                        <div class="figure-img" :style="{ backgroundImage: 'url(' + item.img + ')' }">
                            <div class="figure-id">{{ item.id }}</div>
                        </div>
                        <div class="figure-title">{{ item.title }}</div>
                        <div class="figure-context">{{ item.context }}</div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="title">{{ title }}</div>
                <div class="figures-list">
                    <div class="figure" v-for="(item, i) in doubleContents(contents)" :key="i">
                        <div class="figure-img" :style="{ backgroundImage: 'url(' + item.img + ')' }">
                            <div class="figure-id">{{ item.id }}</div>
                        </div>
                        <div class="figure-title">{{ item.title }}</div>
                        <div class="figure-context">{{ item.context }}</div>
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
                title: "INNOVATORS OF THE NEW GENRE",
                contents: [
                    {
                        id: 1,
                        title: "TECHNICAL INFORMATION",
                        img: require("../../assets/image/layout8-img-1.jpg"),
                        imgUrl: "../../assets/image/layout8-img-1.jpg",
                        context:
                            "In 1985 Aldus Corporation launched its first desktop publishing program Aldus PageMaker for Apple Macintosh computers.",
                    },
                    {
                        id: 2,
                        title: "VARIANTS",
                        img: require("../../assets/image/layout8-img-2.jpg"),
                        imgUrl: "../../assets/image/layout8-img-2.jpg",
                        context: "Released in 1987 for PCs running Windows 1.0.",
                    },
                    {
                        id: 3,
                        title: "WHEN NOT TO USE IT",
                        img: require("../../assets/image/layout8-img-3.jpg"),
                        imgUrl: "../../assets/image/layout8-img-3.jpg",
                        context:
                            "The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread?",
                    },
                    {
                        id: 4,
                        title: "SO LOREM IPSUM IS BAD",
                        img: require("../../assets/image/layout8-img-4.jpg"),
                        imgUrl: "../../assets/image/layout8-img-4.jpg",
                        context: `One of the villagers, Kristina Halvorson from Adaptive Path, holds steadfastly to the notion that design can’t be tested without real content.`,
                    },
                ],
            };
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {
            simpleContents(val) {
                return val.filter((item) => item.id % 2);
            },
            doubleContents(val) {
                return val.filter((item) => !(item.id % 2));
            },
        },
    };
</script>
<style lang="scss" scoped>
    $simple-id-color: rgba(104, 23, 186, 0.5);
    $double-id-color: #fff;
    $third-id-bg-color: #000;
    $title-bottom-color: #6817ba;

    .layout008-contain {
        .content {
            width: 800px;
            margin: 40px auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;

            .figure {
                margin: 0px 0 60px 0;
                .figure-img {
                    background-repeat: no-repeat;
                    background-size: 100% auto;

                    .figure-id {}
                }

                .figure-title {
                    text-align: right;
                    font-size: 18px;
                    font-weight: bold;
                    transform: scale(1, 1.2);
                    margin: 15px 0;
                }

                .figure-context {
                    text-align: right;
                    margin-left: 130px;
                }
            }

            .left {
                .figures-list {
                    .figure:first-child {
                        .figure-img {
                            height: 600px;
                            display: flex;
                            align-items: flex-end;

                            .figure-id {
                                text-align: left;
                                color: $simple-id-color;
                                font-size: 260px;
                                transform: scale(1, 1.2);
                                font-weight: bolder;
                                margin-bottom: -130px;
                            }
                        }
                    }

                    .figure:last-child {
                        padding-top: 35px;
                        .figure-img {
                            height: 260px;
                            display: flex;
                            align-items: flex-start;
                            justify-content: flex-end;
                            .figure-id {
                                background-color: $third-id-bg-color;
                                color: $double-id-color;
                                font-size: 100px;
                                border-radius: 50%;
                                width: 1.2em;
                                position: relative;
                                left: 15px;
                                top: -35px;
                                transform: scale(1, 1.2);
                                font-weight: bolder;
                                margin-bottom: -130px;
                            }
                        }
                    }
                }
            }

            .right {
                .title {
                    width: 250px;
                    font-size: 25px;
                    font-weight: bold;
                    transform: scale(1, 1.5);
                    line-height: 1.2em;
                    margin: 0.5em 0 1.5em 0;
                    padding-bottom: 0.2em;
                    text-align: left;
                    border-bottom: 15px solid $title-bottom-color;
                }

                .figures-list {
                    .figure:first-child {
                        .figure-img {
                            height: 580px;
                            display: flex;
                            align-items: flex-end;
                            justify-content: flex-end;
                            .figure-id {
                                
                                color: $double-id-color;
                                font-size: 180px;
                                transform: scale(1, 1.2);
                                font-weight: bolder;
                                margin-bottom: -0.2em;
                            }
                        }
                    }

                    .figure:last-child {
                        .figure-img {
                            height: 240px;
                            display: flex;
                            align-items: flex-end;

                            .figure-id {
                                text-align: left;
                                color: $simple-id-color;
                                font-size: 260px;
                                transform: scale(1, 1.2);
                                font-weight: bolder;
                                margin-bottom: -100px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>