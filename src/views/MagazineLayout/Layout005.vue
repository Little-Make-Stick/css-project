<template>
    <div class='layout005-contain'>
        <div class="left-img">
            <div class="foreword">{{content.foreword}}</div>
        </div>
        <div class="right-content">
            <div class="content-title">{{content.title}}</div>
            <div class="content-foreword">{{content.foreword}}</div>
            <div class="content-content" v-html="content.content"></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                content:{
                    title: 'The Dream Dies Hard',
                    foreword: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem exercitationem sapiente accusamus eveniet ut deserunt minus magnam repellendus quasi natus!',
                    content: `
        <div class="section">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil praesentium, aperiam. Nemo, dolores, recusandae! Voluptas nam quisquam repudiandae eaque ea nisi sequi! Iste, ducimus dolore laudantium, quasi ex repellat fugit reiciendis nam perspiciatis. Illum cupiditate commodi possimus reiciendis odit voluptas necessitatibus ut molestias? Iste, ex, est. Voluptas facilis impedit quasi temporibus. Nostrum tempore qui consectetur dicta repellat facilis neque ullam, praesentium molestias repellendus eligendi ab quia, veniam voluptates quisquam? Consequatur cum adipisci perspiciatis molestiae a quo ipsam eligendi quas aliquam esse natus tempore, aperiam accusamus iusto velit. Rerum culpa tenetur laborum quasi similique unde iure. Quae, eum unde cum sint aliquam at porro voluptate ipsa. Incidunt necessitatibus provident, assumenda obcaecati.
        </div>
        <div class="section">
            Ab corporis rerum incidunt quasi velit quod natus est perferendis maiores, eum perspiciatis error quis dolorem mollitia totam dolores officiis delectus, ut aut? Quis repudiandae iure quam maxime unde sed officiis impedit autem aut optio aspernatur nam natus odio quisquam, facere architecto? Quo animi nesciunt ex voluptatum nulla, pariatur itaque beatae, voluptates porro saepe a adipisci! Necessitatibus in quam earum, harum excepturi molestiae laboriosam mollitia deserunt quia dolorum tempore eveniet obcaecati impedit nam eius distinctio unde. Numquam nesciunt voluptas in suscipit tempore, consequatur id asperiores repellat molestias a, iste perferendis cum rerum. Eligendi dolor in nobis. Repudiandae ipsum maiores quibusdam. Temporibus a doloremque magni, eos, aliquid sed molestias fugit dignissimos voluptate asperiores suscipit distinctio ab, officiis iusto natus vitae voluptatum deleniti modi quibusdam placeat veritatis fugiat quas ea sit! Veritatis enim soluta consequatur culpa fugit quo vitae, beatae repellat fuga doloremque quae repudiandae perspiciatis deleniti expedita est quisquam assumenda alias. Ducimus saepe laudantium non deserunt, odio optio temporibus, mollitia, aut dolor recusandae quae accusantium dolore possimus quod placeat nulla beatae numquam, totam magni inventore perspiciatis veniam commodi maxime voluptates!
        </div>
        <div class="section quote">
            Ducimus saepe laudantium non deserunt, odio optio temporibus, mollitia, aut dolor recusandae quae accusantium dolore possimus quod placeat nulla beatae numquam, totam magni inventore perspiciatis veniam commodi maxime voluptates!
        </div>
        <div class="section">
            Dicta quia reprehenderit laborum, delectus, laudantium accusantium aspernatur odit atque molestias magnam ipsum! Qui dolor quas neque laborum accusamus architecto repellendus ullam, inventore incidunt. Voluptates quibusdam quod, natus autem, tempora reiciendis tenetur rerum eligendi eum officiis illum voluptate ut pariatur maxime, voluptas numquam quos accusantium blanditiis quasi asperiores. Maiores temporibus accusamus voluptatem ipsa, ipsam doloribus earum? Enim cum odio eaque a velit nobis perspiciatis nostrum voluptas ad deleniti iusto optio, aspernatur corrupti libero modi at in maxime magnam ut, aliquid ea! Aspernatur aliquam iusto non officiis ab eligendi, ipsam atque ullam ex! Placeat ratione necessitatibus, laudantium dolorem rerum, aperiam error nihil atque nostrum aut eligendi nemo, mollitia dignissimos quas, facere. Minus voluptatum consequuntur quasi, nostrum ipsam dignissimos consequatur blanditiis iste, numquam sed minima vel esse excepturi! Minus, maxime. Alias corrupti rem tempora dolorem aliquid voluptatum iure non provident dignissimos quisquam, quis veniam, molestias numquam quo vitae magnam assumenda, fugit itaque nihil cumque. Distinctio necessitatibus consectetur iusto perspiciatis, explicabo odio optio, quam, eum debitis ullam ab facilis dolorum corrupti consequatur eveniet quos quas nam. Mollitia vel facilis possimus deserunt illo, minima totam aut, in voluptas ipsum quos, dolores! Fugit nihil et quos soluta neque sed, labore eaque iure. Tempore provident eius, expedita veritatis officiis enim similique adipisci obcaecati temporibus autem atque eos quidem a ipsum, nihil voluptates deserunt illo sunt! Necessitatibus maxime deleniti cupiditate libero ut, impedit voluptas veritatis mollitia assumenda. Soluta aut obcaecati maiores, beatae commodi odit maxime mollitia, culpa quidem quos eos magni nesciunt totam qui, dolore, reiciendis reprehenderit sit quas facilis doloribus corporis non ut. Ipsa libero ducimus vel cupiditate illum possimus in unde blanditiis! Veniam recusandae fugiat ex assumenda in sint error nostrum quibusdam eius molestias! Architecto eum saepe molestias eos molestiae, delectus excepturi, accusantium fugiat, a non minus sed maxime. Omnis labore corrupti iusto, quidem maiores, ad, culpa vel voluptatibus sed fugit numquam alias pariatur excepturi laboriosam at. Et quasi beatae nisi enim architecto atque, magnam molestiae doloremque, officiis dolores at hic ut soluta veritatis vel dolorum aliquam alias quae harum autem quidem qui.
        </div>
        <div class="section">
            Aliquam nam voluptatibus asperiores ipsam facilis similique, deserunt inventore dignissimos neque voluptas, autem ipsa possimus beatae officiis quas dolores non accusamus eius aut accusantium repudiandae distinctio optio, excepturi voluptatem? Sint fugiat repudiandae voluptates officia odio ex cum! Ducimus atque aspernatur iusto culpa non libero quisquam doloremque. Laboriosam ad laudantium, sunt sed vitae necessitatibus consectetur debitis cumque explicabo, quaerat aspernatur eaque delectus maiores dolore sequi amet dolorem distinctio! Sit tenetur, porro cumque, dolor placeat dolore ea voluptatibus delectus excepturi! Iure tenetur, nihil ipsum autem nesciunt earum ab delectus, iste rerum minima provident hic veniam quisquam exercitationem, a, beatae voluptatem quibusdam consequuntur quasi aperiam minus cum consectetur! Omnis magni asperiores quis et nobis ipsa at, quam voluptate porro enim, animi. Nesciunt deleniti facere iusto iste ad officiis earum? Repellendus nesciunt aut dolores tempora, sapiente quod quas cumque voluptatum quae, corporis culpa illum tempore a dolor ex laboriosam cupiditate velit officia. A dolores nisi, est voluptatibus adipisci ipsum aut nulla autem ratione quia corporis repellat facere. Quo eligendi sint in molestiae, perspiciatis assumenda reiciendis ex quis? Nihil porro, rem quas illo eius ab veniam, itaque expedita, facilis fugiat quibusdam facere et saepe. Et facere amet reiciendis ratione accusamus necessitatibus, ex voluptatem deserunt modi, repudiandae laboriosam numquam quam illum atque placeat voluptas ea ipsam temporibus dolores.
        </div>
        <div class="section">
            Voluptate accusamus itaque, iure mollitia consectetur dicta fugit ipsam nemo saepe minus, est ut totam eligendi nobis corrupti pariatur praesentium quos voluptatibus. Nulla cum amet mollitia eligendi modi provident expedita enim accusantium harum cumque dolorem, officiis illum molestias voluptate. Ullam perspiciatis sapiente blanditiis assumenda facilis fugiat, voluptate similique illum facere amet quis vel distinctio voluptatibus, veritatis culpa asperiores error maiores laudantium ea enim eos explicabo! Aperiam vitae sapiente laborum soluta nostrum debitis repellat perspiciatis, minus officiis nihil molestiae, enim architecto pariatur illum earum ipsum, nemo optio delectus! Quis soluta quos alias, nemo totam, quisquam, ratione illo quod, recusandae reprehenderit amet eveniet aut quaerat sequi aperiam tempora voluptas blanditiis quo incidunt. Deserunt, incidunt inventore minima praesentium explicabo vel nostrum porro optio voluptas ut cupiditate enim vitae perspiciatis sunt aliquid, consequatur consequuntur sint dolor. Omnis voluptatem, ab quasi neque alias officiis rerum sunt ducimus voluptate voluptas possimus iure perspiciatis repellendus maxime placeat ullam cupiditate suscipit nam autem eligendi dolores! Deleniti doloremque dolore odio.
        </div>`
                }
            }
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss">
    $left-foreword-color: #fff;
    $right-foreword-color: rgba(0,0,0,0.7);
    $right-quote-color: rgba(0,0,0,0.6);

    .layout005-contain{
        display: flex;
        width: 100%;
        height: 100%;
        .left-img{
            flex: 1;
            height: 100%;
            background-image: url(../../assets/image/layout5-bg-1.jpg);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding-right: 10px;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            .foreword{
                width: 300px;
                // margin-left: 200px;
                text-align: right;
                word-break: break-word;
                font-size: 22px;
                letter-spacing: 1.5px;
                color: $left-foreword-color;
            }
        }
        .right-content{
            flex: 1;
            overflow-y: scroll;
            padding: 30px ;
            
            .content-title{
                text-align: right;
                font-family: "Sansita One", cursive;
                font-size: 70px;
                font-weight: bolder;
            }
            .content-foreword{
                color: $right-foreword-color;
                text-align: left;
                font-size: 22px;
                line-height: 25px;
            }
            .content-content{
                text-align: left;
                .section{
                    margin: 20px 0;
                    font-size: 18px;
                    line-height: 23px;
                    word-break: break-word;
                    &.quote{
                        color: $right-quote-color;
                        border-top: 1px solid rgba(0,0,0,0.5);
                        border-bottom: 1px solid rgba(0,0,0,0.5);
                        padding: 30px 0px;
                        line-height: 1.2em;
                        font-size: 2em;
                    }
                }
            }
        }
    }
</style>