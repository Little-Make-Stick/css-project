<template>
    <div class='layout007-contain'>
        <div class="header">
            <div class="header-image">
                <img src="../../assets/image/layout7-img-1.jpg" alt="">
            </div>
            <div class="header-image-describe">{{imgDescribe}}</div>
        </div>
        <div class="content">
            <div class="content1">
                <div class="col1">{{content1.col1}}</div>
                <div class="col2">{{content1.col2}}</div>
                <div class="col3">{{content1.col3}}</div>
            </div>
            <div class="figures-list">
                <div class="left">
                    <div class="figure">
                        <div class="image">
                            <img src="../../assets/image/layout7-img-2.jpg" alt="">
                        </div>
                        <div class="image-describe">{{imgDescribe}}</div>
                    </div>
                </div>
                <div class="right">
                    <div class="figure">
                        <div class="image">
                            <img src="../../assets/image/layout7-img-3.jpg" alt="">
                        </div>
                        <div class="image-describe">{{imgDescribe}}</div>
                    </div>
                    <div class="figure">
                        <div class="image">
                            <img src="../../assets/image/layout7-img-4.jpg" alt="">
                        </div>
                        <div class="image-describe">{{imgDescribe}}</div>
                    </div>
                </div>
            </div>
            <div class="content2">
                <div class="col1">{{content2.col1}}</div>
                <div class="col2">{{content2.col2}}</div>
                <div class="col3">{{content2.col3}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imgDescribe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit voluptas velit',
                content1: {
                    col1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti labore eius, distinctio eaque numquam asperiores modi sit hic. Accusantium dolore a dolor, praesentium voluptatibus vero laudantium excepturi optio, enim sapiente iusto repellat dolorem eligendi, accusamus iste impedit temporibus pariatur doloribus! Voluptates fugit numquam quo minima quas, iusto hic. Molestiae voluptate expedita, reiciendis perferendis eos nihil ab alias error illum adipisci beatae, quis ea, natus vero eveniet sequi vitae ipsam! Illo qui provident suscipit ut reiciendis, similique dignissimos, quae voluptas facilis soluta debitis at consequatur, tempore mollitia quia quibusdam neque repellat vero, deleniti explicabo quasi. Optio asperiores illum delectus, pariatur magni totam! Consequatur autem pariatur adipisci, quaerat doloremque non distinctio quo dolorem quasi! Harum similique odit, est error, quo eum veniam accusamus praesentium, eos enim totam. Enim sapiente dicta commodi fugit non consequuntur libero quod, dignissimos, ut officiis ducimus, velit in tenetur`,
                    col2: `repellendus. Officiis quia sunt laborum ratione similique sapiente, ipsa optio itaque perspiciatis ad impedit perferendis quisquam, eius earum obcaecati vel architecto amet quas alias quibusdam. Officia odio quos asperiores minima beatae fugit architecto neque. Repellendus, temporibus perferendis maiores iste odio placeat doloribus commodi doloremque, saepe eum explicabo ullam laboriosam fugit. Deserunt recusandae vero debitis consectetur maxime dolorem, sapiente voluptatibus eveniet, quae nihil, in et. Obcaecati porro debitis dolorum, delectus inventore eaque sed, consequatur magni repellendus possimus iste cum corporis tenetur amet, quidem officia. Qui ipsum placeat culpa tenetur nostrum sequi rerum dolor error omnis quam dolorem itaque, illum, fuga quod quaerat eligendi nulla soluta beatae, perspiciatis vero accusamus odio voluptatum? Magni cumque odit error animi accusamus ullam fuga, eveniet quas doloremque. Qui dicta saepe, nam iusto distinctio itaque! Esse facilis similique eveniet excepturi repellat, ea officia in nesciunt,`,
                    col3: `ducimus amet unde, illo quam. Quo deserunt, maxime temporibus asperiores officia dicta, corporis, magni nisi illum vero non sapiente beatae doloremque repudiandae, blanditiis delectus quae ad deleniti. Reprehenderit, iure enim, ipsam eius consequuntur recusandae libero unde esse aspernatur in, provident fugiat sit. Repellendus nihil suscipit doloremque, porro facilis at neque ducimus quidem maiores, inventore voluptas voluptatum eius enim nemo, explicabo velit quia quibusdam, ut laborum eligendi commodi sapiente! Animi quaerat molestiae, repellendus quae ad, neque optio doloribus sapiente libero commodi, ut eaque? Ratione adipisci architecto enim, nulla officiis cupiditate quaerat placeat non, voluptates. Quaerat nobis sit animi dignissimos, unde atque qui voluptate eius accusantium repellendus ducimus ullam fuga adipisci earum tempora vero architecto perferendis ea esse, ratione veritatis, aliquam, nam. Possimus.`,
                },
                content2: {
                    col1: ``,
                    col2: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti labore eius, distinctio eaque numquam asperiores modi sit hic. Accusantium dolore a dolor, praesentium voluptatibus vero laudantium excepturi optio, enim sapiente iusto repellat dolorem eligendi, accusamus iste impedit temporibus pariatur doloribus! Voluptates fugit numquam quo minima quas, iusto hic. Molestiae voluptate expedita, reiciendis perferendis eos nihil ab alias error illum adipisci beatae, quis ea, natus vero eveniet sequi vitae ipsam! Illo qui provident suscipit ut reiciendis, similique dignissimos, quae voluptas facilis soluta debitis at consequatur, tempore mollitia quia quibusdam neque repellat vero, deleniti explicabo quasi. Optio asperiores illum delectus, pariatur magni totam! Consequatur autem pariatur adipisci, quaerat doloremque non distinctio quo dolorem quasi! Harum similique odit, est error, quo eum veniam accusamus praesentium, eos enim totam. Enim sapiente dicta commodi fugit non consequuntur libero quod, dignissimos, ut officiis ducimus, velit in tenetur repellendus. Officiis quia sunt laborum ratione similique sapiente, ipsa optio itaque perspiciatis ad impedit perferendis quisquam, eius earum obcaecati vel architecto amet quas alias quibusdam. Officia odio quos asperiores minima beatae fugit architecto neque. Repellendus, temporibus perferendis maiores iste odio placeat doloribus commodi doloremque, saepe eum explicabo ullam laboriosam fugit. Deserunt recusandae vero debitis consectetur maxime dolorem, sapiente `,
                    col3: `voluptatibus eveniet, quae nihil, in et. Obcaecati porro debitis dolorum, delectus inventore eaque sed, consequatur magni repellendus possimus iste cum corporis tenetur amet, quidem officia. Qui ipsum placeat culpa tenetur nostrum sequi rerum dolor error omnis quam dolorem itaque, illum, fuga quod quaerat eligendi nulla soluta beatae, perspiciatis vero accusamus odio voluptatum? Magni cumque odit error animi accusamus ullam fuga, eveniet quas doloremque. Qui dicta saepe, nam iusto distinctio itaque! Esse facilis similique eveniet excepturi repellat, ea officia in nesciunt, ducimus amet unde, illo quam. Quo deserunt, maxime temporibus asperiores officia dicta, corporis, magni nisi illum vero non sapiente beatae doloremque repudiandae, blanditiis delectus quae ad deleniti. Reprehenderit, iure enim, ipsam eius consequuntur recusandae libero unde esse aspernatur in, provident fugiat sit. Repellendus nihil suscipit doloremque, porro facilis at neque ducimus quidem maiores, inventore voluptas voluptatum eius enim nemo, explicabo velit quia quibusdam, ut laborum eligendi commodi sapiente! Animi quaerat molestiae, repellendus quae ad, neque optio doloribus sapiente libero commodi, ut eaque? Ratione adipisci architecto enim, nulla officiis cupiditate quaerat placeat non, voluptates. Quaerat nobis sit animi dignissimos, unde atque qui voluptate eius accusantium repellendus ducimus ullam fuga adipisci earum tempora vero architecto perferendis ea esse, ratione veritatis, aliquam, nam. Possimus. ♣`,
                }
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
    $image-describe-color: #888;

    .layout007-contain {
        .header {
            .header-image {
                img{
                    width: 100%;
                    height: auto;
                }
            }

            .header-image-describe {
                font-size: 20px;
                font-style: italic;
                color: $image-describe-color;
                text-align: right;
            }
        }

        .content {
            padding: 20px;

            .content1 {
                text-align: left;
                font-style: 18px;
                line-height: 23px;
                white-space: break-spaces;
                padding: 20px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 20px;
            }

            .figures-list {
                width: 100%;
                height: 700px;
                margin: 20px 0;
                display: grid;
                grid-template-columns: calc(64% - 20px) 36%;
                grid-template-rows: repeat(2, 1fr);
                grid-gap: 20px;

                .image {
                    img {
                        width: 100%;
                        height: auto;
                    }
                }

                .image-describe {
                    font-size: 13px;
                    font-style: italic;
                    color: $image-describe-color;
                    text-align: left;
                    line-height: 40px;
                }

                .left {
                    height: 700px;

                    .image {
                        img {
                            width: 100%;
                            height: calc(700px - 40px);
                        }
                    }
                }

                .right {
                    height: 700px;

                    .image {
                        img {
                            width: 100%;
                            height: calc(350px - 40px);
                        }
                    }
                }
            }

            .content2 {
                text-align: left;
                font-style: 18px;
                line-height: 23px;
                white-space: break-spaces;
                padding: 20px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 20px;
            }
        }
    }
</style>