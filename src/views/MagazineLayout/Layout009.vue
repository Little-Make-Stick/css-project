<template>
    <div class='layout009-contain'>
        <div class="header">
            <div class="left-info">
                <div class="star-icon"><i class="fa fa-star"></i></div>
                <div class="title">{{title}}</div>
                <div class="sub-title">{{subTitle}}</div>
                <div class="foreword">{{foreword}}</div>
                <div class="photo-info">
                    <div class="photo-label">PHOTOGRAPHY BY</div>
                    <div class="photo-by"><i class="fa fa-camera"></i>{{photoBy}}</div>
                </div>
                <div class="star-icon"><i class="fa fa-star"></i></div>
            </div>
            <div class="right-img">
                <img src="../../assets/image/layout9-img-1.jpg" alt="">
            </div>
        </div>
        <div class="content">
            <div class="content1">
                <div class="content1-left">{{content1.left}}</div>
                <div class="content1-right">{{content1.right}}</div>
            </div>
            <div class="photo">
                <img :src="photo.img" alt="">
                <div class="photo-info"><i class="fa fa-camera"></i>{{photo.info}}</div>
            </div>
            <div class="content2">
                <div class="content2-left">{{content2.left}}</div>
                <div class="content2-right">{{content2.right}}</div>
            </div>
        </div>
        <div class="footer">
            <i class="fa fa-code"></i>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'PRAIRIE BUILDING',
                subTitle: 'THE LABOURS OF JOHNNY',
                foreword: 'Armed with a few primitive tools, a suburban hipster set out to build his own cabin on the open prairie',
                photoBy: 'TODD QUACKENBUSH',
                content1: {
                    left: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut soluta et nulla dolor at sint ipsa nihil quis neque consequuntur ab vel quas nesciunt dolores illo commodi, non accusantium quasi laboriosam iusto optio cupiditate sed ipsam unde. Alias maxime amet sequi, iusto dolore qui sed vitae voluptates sit, aliquid eligendi nobis hic illo. Et magni sapiente, inventore nemo, nulla veniam?

Minus possimus quos pariatur inventore aliquid. Molestias rem vel, itaque nesciunt eligendi maiores, nemo, voluptates commodi error voluptas modi facilis tempore deleniti nostrum iste veniam repellendus quam. Maiores incidunt repellendus fugit totam eius ipsam quia perspiciatis quisquam voluptas, ducimus eos voluptate excepturi, cumque. Ipsam vitae architecto, nemo perspiciatis, explicabo eligendi tempore dignissimos esse animi consequatur id nisi numquam ipsa provident.`,

                    right: `Numquam cumque architecto, voluptatibus optio voluptas porro voluptatum unde ea minima exercitationem dolor modi omnis officiis, velit distinctio doloribus voluptate delectus necessitatibus autem, veniam, tempora! Expedita dolor culpa laborum incidunt ipsum, eius enim modi suscipit delectus voluptatibus reprehenderit in ducimus iusto minima natus, reiciendis molestias animi esse. Voluptas, id nam officiis mollitia in soluta non architecto reprehenderit assumenda. Voluptatibus, iure.

Molestiae natus ipsam itaque hic deleniti, laboriosam qui ipsum accusantium molestias ipsa beatae ratione dicta aliquam officiis architecto harum velit quos dolores ea iste! Nisi possimus, debitis illo repudiandae totam rem quo officiis, veniam illum eos magnam cumque aspernatur. Odio, sit, similique. Placeat molestiae alias fugiat, distinctio voluptatibus blanditiis doloribus enim aut eius eaque ad sit esse aspernatur consectetur eos.`
                },
                photo: {
                    url: '../../assets/image/layout9-img-2.jpg',
                    img: require('../../assets/image/layout9-img-2.jpg'),
                    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus.',
                },
                content2: {
                    left: `Quos perspiciatis repellendus autem praesentium fuga, dignissimos fugit nesciunt quibusdam fugiat id, saepe, amet. Repellendus iure eaque optio labore facere ex delectus, saepe eligendi maiores numquam nesciunt quas vel culpa enim a quibusdam. Distinctio vel rem odit quam illum nobis dolore reiciendis, rerum nam tempore quasi laudantium praesentium, quos mollitia eligendi, quae repudiandae excepturi! Distinctio eveniet mollitia, qui nesciunt quisquam?

Fuga harum est magnam animi, ex saepe inventore doloribus debitis facilis commodi nisi ullam mollitia laborum iste unde consectetur consequuntur at omnis, eius accusantium enim vero possimus! Sapiente provident voluptatem illum temporibus modi odio blanditiis quibusdam consequatur dolorem asperiores, velit expedita commodi sed deleniti sunt officia autem quasi. Perspiciatis cupiditate aliquid optio suscipit reiciendis nobis, qui mollitia, voluptatem in velit?

Dolorem sed quod consequatur minus et, at ipsam cum veniam iste delectus eveniet! Id magnam adipisci eveniet praesentium cum modi, eos animi rem quae sit officiis aperiam eligendi optio voluptate minima aut, reprehenderit pariatur necessitatibus nam! Maxime ex, consequuntur quod labore rerum dolor. Suscipit praesentium ipsa, ex quo qui quidem aliquid numquam rem accusamus neque ipsum doloremque minima vitae pariatur.

Quis ex temporibus eum repudiandae, obcaecati dignissimos dolorem dolores id harum, dolore tempora accusantium qui iure modi incidunt doloremque velit quae magnam illum est quos fugiat perspiciatis, tempore! Animi, voluptatibus, commodi? Ratione veritatis praesentium quibusdam dicta facilis sunt, voluptates eaque. Laboriosam necessitatibus eligendi, ullam, assumenda mollitia itaque libero minima vitae suscipit delectus molestiae dolorem quos natus nihil voluptatem et tempore.`,

                    right: `Eligendi corporis eius, ut facere animi incidunt velit cum facilis expedita officiis architecto dolorum sint nemo iste cupiditate recusandae nostrum hic ad labore saepe vitae ex! Aliquid deleniti nemo tenetur praesentium, in iure nostrum quibusdam modi, atque deserunt earum omnis officiis dignissimos repellendus facere distinctio maiores eos velit, vitae. Magnam, facere qui. Impedit fugit, commodi esse nobis atque debitis sequi.

Vero tenetur explicabo placeat laborum a! Incidunt aliquam hic odio ex culpa adipisci at distinctio quos iusto, illum laborum deserunt ducimus atque libero consequatur, voluptates totam fuga ratione, mollitia fugit est. Molestiae quidem sequi unde aliquid tempora numquam ea laboriosam. Omnis enim, iste quos dolores rerum cumque, laborum repellat molestias assumenda consequuntur, quaerat? Voluptates molestias, ea voluptatem sit animi sapiente?

Atque perferendis placeat rerum doloremque nulla fugit labore nisi? Dolore veritatis accusantium, quod magnam, minus repellat beatae quia esse architecto dicta veniam dolorem quam explicabo laborum dolor ullam doloremque unde sapiente. Amet laboriosam saepe nostrum tenetur illo, odit nemo, a veniam asperiores corporis, tempora, quam ipsam inventore consectetur aliquam! Obcaecati laborum sunt fugit delectus, hic beatae mollitia fugiat rerum voluptates.

Magnam pariatur ex velit fugit ullam vitae atque reprehenderit unde laborum dolorem voluptas similique, architecto magni voluptatem a ipsa repellendus expedita eum nobis. Ea laborum aperiam consectetur facilis veniam magni distinctio modi quis maiores provident necessitatibus iusto deleniti quas animi soluta id similique dolore neque velit libero, tempora. Ad vitae nisi eligendi enim voluptatem et dicta commodi molestias modi magnam.`,
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
    $header-bg-color: #f0f0f0;
    $theme-color: #91927c;
    $sub-title-shadow-color: #fff;
    $info-color: #999;
    $first-letter-color: #fff;
    $first-letter-bg-color: tomato;

    .layout009-contain {
        .header {
            background-color: $header-bg-color;
            color: $theme-color;
            font-size: 25px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            .left-info {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: space-around;

                .star-icon {
                    font-size: 55px;
                    padding: 40px 0;
                }

                .title {
                    font-size: 45px;
                    transform: scale(1, 1.3);
                }

                .sub-title {
                    font-size: 35px;
                    width: 240px;
                    margin: 20px auto;
                    transform: scale(1.2, 1);
                    text-shadow: 0px 0px 3px $sub-title-shadow-color,
                        3px 3px .8px $theme-color;
                }

                .foreword {
                    width: 380px;
                    font-size: 30px;
                    margin: 20px auto;
                    border-top: 5px solid $theme-color;
                    border-bottom: 5px solid $theme-color;
                    padding: 20px 5px;
                }

                .photo-info {
                    .photo-label {
                        font-size: 34px;
                        font-weight: 600;
                    }

                    .photo-by {
                        font-size: 30px;
                        transform: scale(1, 1.2);
                        margin: 20px 0;
                    }
                }
            }

            .right-img {
                width: 100%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .content {
            font-size: 25px;
            padding: 50px 30px ;
            .content1 {
                display: grid;
                grid-template-columns: repeat(2,1fr);
                grid-gap: 20px;
                .content1-left{
                    &:first-letter{
                        background-color: $first-letter-bg-color;
                        color: $first-letter-color;
                        font-size: 3em;
                        float: left;
                        padding: 0 0.3em;
                    }
                }
            }

            .photo {
                margin: 40px 0;
                img {
                    width: 100%;
                    height: auto;
                }

                .photo-info {
                    text-align: right;
                    color: $info-color;
                    font-size: 22px;
                    margin: 10px 0;
                }
            }

            .content2 {
                display: grid;
                grid-template-columns: repeat(2,1fr);
                grid-gap: 20px;
            }
        }

        .footer {
            font-size: 120px;
            padding: 30px 0;
            color: $info-color;
        }
    }
</style>