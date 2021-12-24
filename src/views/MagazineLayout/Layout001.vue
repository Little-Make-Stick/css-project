<template>
    <div class='layout001-contain'>
        <div class="welcome-page">
            <div class="right-info">
                <div class="foreword">
                    <div class="foreword-content">{{foreword.content}}</div>
                    <div class="foreword-author">By {{foreword.author}}</div>
                </div>
                <div class="title">
                    <div class="main-title">{{mainTitle}}</div>
                    <div class="sub-title">{{subTitle}}</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="left-content">{{ leftContent }}</div>
            <div class="right-content">{{ rightContent }}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                mainTitle: 'POWERS OF',
                subTitle: 'ATTRACTION',
                foreword: {
                    content: 'In the modern world chlorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque asperiores dolores sed expedita eum amet facere suscipit doloribus architecto autem commodi quidem voluptates repellendus.',
                    author: 'Amanda McCrae',
                },
                leftContent: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quis nisi sit consectetur quae incidunt est ex magni error nam doloremque enim, corporis sunt aliquam vero nemo necessitatibus! Cum laboriosam, facilis perferendis distinctio ex aspernatur esse, quidem aliquam tenetur impedit, dignissimos voluptate sint culpa error consequatur hic officia. Repellat!

Velit enim assumenda commodi quas minus fugiat, facilis deserunt mollitia voluptatem sed animi, suscipit tenetur voluptate tempora eius magni hic iusto. Unde voluptatibus enim sint ipsam voluptatum qui culpa, mollitia similique magnam voluptate cupiditate, quia aperiam maiores blanditiis. Magnam consequatur illo fugiat ea tempora eos culpa earum, voluptates dicta.

Voluptates quaerat, tenetur quos incidunt ipsum eaque fugit. Maiores minima officiis sequi doloremque non accusamus consectetur, inventore, fugiat facilis, praesentium itaque iste odio vel, porro! Aliquid officia nihil explicabo, non quidem odio earum commodi doloribus, dolor neque quod ratione voluptas magnam! Dicta reprehenderit, quasi facilis possimus magni sint iure.

Voluptatibus nesciunt maiores, ipsa enim id quasi alias placeat, amet aliquid mollitia corporis sunt quia expedita officia aliquam, adipisci, eum voluptatum quaerat cupiditate harum? Inventore a officia, dolores consequatur perferendis atque commodi molestiae repellat odio quibusdam alias perspiciatis nemo facilis. Maxime ullam consequuntur, consequatur repudiandae magni, soluta perspiciatis illo!

Magnam fugiat earum soluta, magni quos blanditiis suscipit eligendi sapiente, necessitatibus aperiam. Molestias quisquam, officia similique rem adipisci iure atque quod voluptas voluptates laudantium molestiae distinctio culpa placeat, repellendus sed laborum ex voluptatum fuga. Laudantium maiores eos consequuntur, sequi facere autem impedit! Est, eius. Optio, doloribus sit odio corrupti.

A qui culpa beatae quis natus suscipit voluptatum earum assumenda optio, itaque nobis facere repudiandae illum perferendis eligendi ad minus ab voluptate quae quisquam sint, et consequatur nesciunt! Distinctio nihil, commodi optio perspiciatis cum possimus adipisci ut. At nesciunt exercitationem eius doloribus ullam reiciendis, ipsa magnam, autem nam itaque!
                `,
                rightContent: `
                Aliquid voluptatem aspernatur, non perferendis, ad labore quas consequatur, nihil atque veritatis ut minus repellat pariatur dolorum excepturi adipisci itaque commodi. Corporis, maxime et deleniti perspiciatis? Facere dolorum delectus, alias maxime quaerat, cum nostrum blanditiis consequuntur, ad explicabo atque, veritatis rerum. Assumenda dolor temporibus non alias dolores accusantium, ea.

Esse a dolorem modi rem sunt ex, veniam, quasi animi excepturi cumque pariatur beatae delectus quisquam porro, facere quis ipsa sequi nihil blanditiis ipsum vel eaque. Laborum culpa quam unde earum cumque rerum fugiat, aut excepturi nobis numquam ipsa deserunt ex iusto est qui doloribus atque suscipit, consectetur voluptatem.

Commodi dolorem eligendi qui, reprehenderit tempora. Accusamus asperiores atque, a facilis sapiente voluptatum alias provident ea dicta ab sint quae vero consequuntur! Dolorem iusto veniam alias vero consequatur voluptatum dolorum adipisci voluptatibus corporis porro autem ex, doloribus exercitationem dolores sint libero at quaerat sed error ea. Provident, praesentium quae.

Tenetur dicta illo commodi non est laborum sit sint, dolorum iusto aliquid ipsum expedita ex et atque, qui voluptate eaque ea cumque, exercitationem minus deserunt illum suscipit quisquam. Eum veritatis, at nemo similique excepturi tempore aspernatur illo ipsum? Accusantium ducimus nihil perferendis, in saepe libero maiores quisquam nam maxime?

Inventore minima, eos praesentium eligendi assumenda doloremque maiores optio consequatur possimus laboriosam minus nisi quisquam sed debitis aspernatur sequi nam ullam, illum placeat atque quas harum nihil. Fuga maiores odio at, molestiae nemo dolorum, aliquam minima, quisquam facilis eum perspiciatis eius deserunt placeat error voluptas, impedit inventore cumque nobis.

Ipsum, voluptatum sit quas consequuntur quidem dicta minima, mollitia expedita perspiciatis, ratione ducimus optio reprehenderit fugit dolorem nisi velit id quia! Unde odit aliquid animi quasi quam ipsam similique repellat dolor deleniti! Quisquam minus accusamus, recusandae repellat tempora, quae dignissimos sit at nihil ab aliquid. Ut impedit aut itaque.
                `,
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
    $theme-color: #f0ffff;
    $main-title-color: #000;
    $sub-title-color: tomato;
    $foreword-color: #555;

    .layout001-contain {
        width: 100%;

        .welcome-page {
            width: 100%;
            height: calc(100vh - 100px - 60px);

            .right-info {
                width: 50%;
                float: right;
                height: 100%;
                padding: 50px;
                background-color: $theme-color;
                display: flex;
                align-items: center;
                .title{
                    position: relative;
                    right: 0;
                    transform: rotate(270deg);
                    font-weight: bold;
                    margin-right: -100px;
                    // flex: 1;
                    .main-title {
                        color: $main-title-color;
                        font-size: 65px;
                    }

                    .sub-title {
                        color: $sub-title-color;
                        font-size: 60px;
                    }
                }
                .foreword {
                    color: $foreword-color;
                    flex: 1;
                    // height: 100%;
                    text-align: right;
                    line-height: 40px;
                    font-size: 25px;
                    letter-spacing: 1px;
                    margin-left: 100px;

                    .foreword-content {}

                    .foreword-author {}
                }
            }
        }

        .content {
            width: 100%;
            display: flex;
            font-size: 20px;
            align-items: flex-start;
            // 分段
            white-space: break-spaces;
            word-break: break-word;
            text-align: left;

            .left-content {
                width: calc(50% - 40px);
                padding: 20px;
                
                &:first-letter{
                    font-size: 70px;
                    color: tomato;
                    // 首字母下沉
                    float: left;
                }
            }

            .right-content {
                width: calc(50% - 40px);
                padding: 20px;
            }
        }
    }
</style>