<template>
    <div class='layout012-contain'>
        <div class="contain-header">
            <div class="title">{{title}}</div>
            <div class="sub-title" v-html="subTitle"></div>
            <div class="foreword">{{foreword}}</div>
            <div class="author">By {{author}}</div>
        </div>
        <div class="contain-in-brief">
            <div class="content1">
                <template v-for="(item,i) in content1" :key="i">
                    <div class="col" v-html="item"></div>
                </template>
            </div>
            <div class="in-brief">
                <div class="in-brief-name">{{inBrief.name}}</div>
                <div class="in-brief-content">
                    <template v-for="(item,i) in inBrief.content" :key="i">
                        <div class="col" v-html="item"></div>
                    </template>
                </div>
            </div>
        </div>
        <div class="contain-main">
            <div class="content2" v-html="content2"></div>
            <div class="photo">
                <div class="photo-image">
                    <img :src="photo.img" alt="">
                </div>
                <div class="photo-info">{{photo.info}}</div>
            </div>
            <div class="content3" v-html="content3"></div>
        </div>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'ARCHAEOSTRONOMY',
                subTitle: `
        <div class="line-1">STARS</div>
        <div class="circle">OF THE</div>
        <div class="line-2">DEAD</div>`,
                foreword: 'Mysterious tables of astrononmical information have been found in 4,000-year-old coffins. What in the world was their purpose?',
                author: 'Sarah Symons and Elizabeth Tasker',
                content1: [
                    `
        <div class="section">
            <span class="strong">Lorem ipsum dolor sit amet,</span> consectetur adipisicing elit. Illum quaerat quod nemo voluptas voluptatum itaque eaque amet consequuntur cum quam error dolore facilis reprehenderit impedit, consectetur ex, quae, ducimus deserunt.
        </div>
        <div class="section">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, facilis eligendi. Saepe blanditiis animi commodi modi
        </div>
                    `,
                    `
        <div class="section-other">
            alias accusamus similique reprehenderit aliquam non dolores quos, nisi nam aliquid beatae adipisci cumque?
        </div>
        <div class="section">
            Voluptates placeat totam illo sapiente magni animi corrupti, aut iure mollitia nihil. Dolores magni quod praesentium laudantium, et aperiam voluptatem nobis, iste voluptates, sint excepturi tempore asperiores ex saepe cupiditate.
        </div>
                    `
                ],
                inBrief: {
                    name: 'IN BRIEF',
                    content: [
                        `
        <div class="section">
            <span class="strong">Ancient Egyptians</span> habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.
        </div>`,
                        `
        <div class="section">
            <span class="strong">Long thought to serve in</span> ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae
        </div>`,
                        `
        <div class="section-other">
            est. Mauris placerat eleifend leo. Go to bed.all franco coo beansio. and stuff and stuff hello vegas.
        </div>`
                    ],
                },
                content2: `
        <div class="section">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa ad rem, incidunt non unde iure deleniti, maiores, aperiam quidem ducimus voluptates, excepturi tenetur culpa laborum provident illum corporis suscipit.
        </div>
        <div class="section">
            Ad nihil dolorem perspiciatis dolores, fugit harum libero adipisci enim pariatur nobis repudiandae minima obcaecati molestias blanditiis? Optio doloremque, sit ipsa aperiam numquam ducimus quam, iure eum quae ad pariatur!
        </div>
        <div class="section">
            Adipisci magni dolore labore porro quia accusamus libero ratione ab atque consequuntur quisquam eius minima quos consequatur eligendi, recusandae quis qui harum ipsum possimus deleniti dolorum ut sint voluptate? Possimus.
        </div>
        <div class="section section-title">
            STAR CLOCKS?
        </div>
        <div class="section">
            Veniam voluptatibus velit accusantium iusto eum eos in totam itaque, minus eveniet asperiores, laborum dignissimos, officia quia quod amet debitis. Quisquam suscipit, vel sapiente? Quae cumque aspernatur labore placeat odio.
        </div>
        <div class="section">
            Hic accusamus porro iure aperiam facilis excepturi numquam unde molestiae fuga? Eveniet ipsum eos laboriosam, soluta, expedita accusamus officia atque voluptas inventore nesciunt eligendi perspiciatis distinctio quod, quia pariatur magnam.
        </div>
        <div class="section">
            Dicta quaerat vero, laudantium recusandae odit enim repudiandae expedita dolorum dolor id consequatur est quas vel, corrupti sit quae quis rem officiis, ad. Itaque fuga harum voluptatum enim architecto odit.
        </div>`,
                photo: {
                    img: require('../../assets/image/layout12-img-1.jpg'),
                    url: '../../assets/image/layout12-img-1.jpg',
                    info: 'STAR TABLE shown here is display at the cool museum on super street in city country and sometimes it has a coffin on it.',
                },
                content3: `
        <div class="section">
            Expedita beatae, a rem, excepturi repellendus dolorem dolore, aperiam magnam fugiat eos optio asperiores illo veniam voluptas architecto, dolores officia cupiditate. Quibusdam vel voluptate, atque quo eius qui officiis consequuntur.
        </div>
        <div class="section">
            Libero a eius nesciunt, molestiae, perspiciatis quaerat facilis consequuntur odio eligendi quas tenetur officiis suscipit, recusandae omnis laboriosam exercitationem unde ducimus totam quos corporis obcaecati ex, voluptatibus voluptatum aspernatur necessitatibus?
        </div>
        <div class="section">
            Iure accusamus quisquam aspernatur dicta iste, unde ullam hic nostrum est placeat consequuntur aut, molestias fuga praesentium voluptas sit ipsum voluptatum inventore voluptatem amet odio nesciunt. Cupiditate iure saepe ipsam.
        </div>
        <div class="section">
            Laudantium veritatis ratione iusto voluptatibus reiciendis sunt numquam non est nam inventore laboriosam id recusandae aliquid, vero, aspernatur amet cumque esse quisquam beatae consectetur totam doloribus iure maxime tempora! Tempore.
        </div>
        <div class="section">
            Dolore sapiente rem velit recusandae illo natus eum. Facilis natus enim delectus corrupti hic voluptatibus ipsa ut quibusdam ducimus magni velit eaque ad perspiciatis modi id, cumque odio repellat explicabo.
        </div>
        <div class="section">
            Doloremque assumenda expedita delectus nesciunt, numquam vero architecto esse eaque veritatis maiores error ipsa, quaerat iusto harum. Itaque, corporis. Excepturi optio accusantium totam ipsa id sequi ad, corrupti soluta quam?
        </div>
        <div class="section">
            Delectus, perferendis? Iusto ipsa vitae natus culpa accusamus, rerum nostrum excepturi aspernatur repellendus illo animi deleniti in, blanditiis eius, minima et quisquam harum dolorum asperiores tempore. Asperiores reiciendis quasi, praesentium!
        </div>
        <div class="section">
            Ullam repellat deleniti perferendis fugiat ratione commodi suscipit expedita pariatur quidem porro dolorem veniam, cumque quasi accusantium at mollitia culpa vitae natus facilis laborum placeat. Temporibus voluptates nihil error consequuntur?
        </div>
        <div class="section">
            Aliquid praesentium ratione impedit, quo error unde mollitia quos iste labore eligendi. Ipsum delectus voluptatem tempore veniam fuga doloribus, quae temporibus, eum laborum ex dolorem quasi quidem ad adipisci est!
        </div>
        <div class="section">
            Praesentium minima sit hic et dolorum ab cum reprehenderit nam, vero earum, debitis quod laborum ratione iusto voluptatibus dolor! A, natus. Cumque impedit sunt blanditiis non, dolorum possimus quas cum?
        </div>
        <div class="section">
            Dicta sunt consequuntur, velit aliquid cumque pariatur error sapiente odio ratione distinctio vero impedit, voluptates ab! Quam quod unde possimus debitis, nulla et, nemo tenetur dolor tempora consequuntur fuga! Commodi.
        </div>
        <div class="section">
            Vero minus vel consectetur, eos praesentium beatae atque voluptatum consequatur saepe quibusdam dolor error necessitatibus, non modi natus. Reprehenderit magnam harum inventore repellat velit, id architecto perferendis soluta delectus corporis!
        </div>
        <div class="section">
            Corporis deserunt enim perspiciatis quo ex minus. Eveniet labore voluptatum vel exercitationem. Expedita distinctio optio at vero cumque omnis dolores consequatur, enim eaque numquam dicta facilis laboriosam nemo odio nesciunt!
        </div>
        <div class="section">
            Explicabo similique quod provident nisi facere officiis, inventore ducimus eos culpa. Fugit ut nesciunt laudantium expedita laboriosam quod! Tenetur ratione sapiente reiciendis at, quo dignissimos. Corporis libero dolorem eligendi laborum.
        </div>`,
            }
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss">
    $title-color: red;
    $in-brief-name-color: #999;
    $transparent-color: #fff;

    .layout012-contain {
        width: 1000px;
        margin: 0 auto;
        font-size: 14px;

        .section {
            margin: 10px 0;
            text-indent: 2em;
            text-align: left;
            line-height: 20px;

            .strong {
                font-weight: bold;
            }
        }
        .section-other{
            margin: 10px 0;
            text-align: left;
            line-height: 20px;
        }

        .contain-header {
            padding: 50px;

            .title {
                color: $title-color;
                font-size: 16px;
                font-weight: bold;
                margin: 20px 0;
            }

            .sub-title {
                position: relative;
                font-weight: bolder;
                .line-1{
                    font-size: 230px;
                    line-height: 180px;
                }
                .line-2{
                    font-size: 280px;
                    line-height: 220px;
                }
                .circle{
                    border-radius: 50%;
                    line-height: 40px;
                    width: 80px;
                    background-color: $transparent-color;
                    font-size: 30px;
                    position: absolute;
                    font-weight: 600;
                    left: 180px;
                    bottom: 180px;
                }
            }

            .foreword {
                font-size: 18px;
                font-weight: 600;
                margin: 30px 0;
            }

            .author {
                font-style: italic;
            }
        }

        .contain-in-brief {
            .content1 {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: 1;
                grid-gap: 20px;
            }

            .in-brief {

                .in-brief-name {
                    color: $in-brief-name-color;
                    padding: 0 15px;
                    border-left: 1px solid $in-brief-name-color;
                    border-right: 1px solid $in-brief-name-color;
                    border-bottom: 1px solid $transparent-color;
                    display: inline-block;
                    position: relative;
                    bottom: -1px;
                    letter-spacing: 2px;
                }

                .in-brief-content {
                    border: 1px solid $in-brief-name-color;
                    padding: 10px;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: 1;
                    grid-gap: 20px;
                }
            }
        }

        .contain-main {
            padding: 20px 200px;

            .content2 {}

            .photo {
                margin: 20px 0;

                .photo-image {
                    img{
                        width: 100%;
                    }
                }

                .photo-info {
                    font-weight: bold;
                    font-size: 16px;
                    text-align: left;
                }
            }

            .content3 {}
        }
    }
</style>