<template>
    <div class='border-not-contain'>
        <knowage-result
            :demand="demand"
            :keyKnowage="keyKnowage"
            :difficult="difficult"
            :html="html"
            :js="js"
            :css="css">
        </knowage-result>
    </div>
</template>
<script>
    import knowageResult from '@/components/KnowageResult.vue';
    export default{
        data(){
            return{
                demand: ``,
                keyKnowage: `
                <ul>
                    <li>可以利用这个伪类写一个完全没有用处的选择器。例如， :not(*) 匹配任何非元素的元素，因此这个规则将永远不会被应用。</li>
                    <li>可以利用这个伪类提高规则的优先级。例如， #foo:not(#bar) 和 #foo 会匹配相同的元素。 但是前者的优先级更高。</li>
                    <li>:not(foo) 将匹配任何非foo元素，包括html和body。</li>
                    <li>这个选择器只会应用在一个元素上，你无法用它排除所有父元素。比如， body :not(table) a 将依旧会应用在table内部的<span class="inline-code">&lt;a&gt;</span> 上, 因为 <span class="inline-code">&lt;tr&gt;</span>将会被 :not()这部分选择器匹配。</li>
                </ul>
                `,
                difficult: `
                <p>CSS 否定伪类，:not(X)，是以一个简单的以选择器X为参数的功能性标记函数。它匹配不符合参数选择器X描述的元素。</p>
                `,
                html: `
                <div class='border-not-res-contain'>
                    <div class="list">
                        <div class="item" v-for="(item,i) in list" :key="i">
                            <img :src="item.img" alt="">
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .border-not-res-contain{
                    height: 100%;
                    display: flex;
                    .list{
                        margin: auto;
                        width: 600px;
                        display: flex;
                        flex-wrap: wrap;
                        .item{
                            padding: 10px 20px;
                            margin-top: 20px;
                            img{
                                width: 100px;
                                height: 100px;
                            }
                            &:not(:nth-child(4n)){
                                border-right: 1px solid #000;
                            }
                        }
                    }
                }
                `,
            }
        },
        components:{
            knowageResult
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
</style>