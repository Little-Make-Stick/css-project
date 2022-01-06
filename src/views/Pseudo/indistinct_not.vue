<template>
    <div class='indistinct-not-contain'>
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
                <div class='indistinct-not-res-contain'>
                    <div class="indistinct-not-res" @click="showDialog = false" :class="{'show-blur':showDialog} ">
                        <div class="header">header</div>
                        <div class="contain">
                            <div class="section-item" v-for="(item,i) in list" :key="i">
                                <p v-if="i % 10">{{item}}</p>
                                <p class="link-section" v-else @click.stop="showDialog = true">{{item}}</p>
                            </div>
                        </div>
                        <div class="footer">footer</div>
                    </div>
                    <div class="section-dialog" v-if="showDialog">
                        content
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .indistinct-not-res-contain {
                    height: 100%;
                            
                    .indistinct-not-res {
                        height: 100%;
                    
                        .header {}
                    
                        .contain {
                            max-height: calc(100% - 40px - 40px);
                            padding: 40px 0;
                            overflow-y: scroll;
                            background-color: lightblue;
                        
                            .link-section {
                                text-decoration: underline;
                                cursor: pointer;
                                background-color: #fcfcfc;
                            }
                        }
                    
                        .footer {
                            bottom: 0;
                        }
                    
                        .header,
                        .footer {
                            position: fixed;
                            width: 100%;
                            height: 40px;
                            font-size: 30px;
                            font-weight: bold;
                            background-color: cornflowerblue;
                            z-index: 99;
                        }
                    
                        &.show-blur:not(.section-dialog) {
                            filter: blur(2px);
                        }
                    }
                
                    .section-dialog {
                        background-color: lightpink;
                        padding: 10px 50px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: scale(6);
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