<template>
    <div class='tab-focus-within-contain'>
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
                    <li>
                        这个属性有点类似 <span class="inline-code">Javascript 的事件冒泡</span>，从可获焦元素开始一直冒泡到根元素 html，都可以接收触发 <span class="inline-code">:focus-within</span> 事件
                    </li>
                    <li>
                        本例子的思路就是通过获焦态来控制其他选择器，以及最重要的是利用了<span class="inline-code">父级的 :not(:focus-within)</span> 来设置默认样式
                    </li>
                </ul>
                `,
                difficult: `
                <p>
                    <span class="inline-code">:focus-within</span> 它表示一个元素获得焦点，或，该元素的后代元素获得焦点。划重点，它或它的后代获得焦点。
                </p>
                <p>
                    这也就意味着，它或它的后代获得焦点，都可以触发 :focus-within。
                </p>
                `,
                html: `
                <div class='tab-focus-within-res-contain'>
                    <div class="tab-focus-within">
                        <button class="tab-a tab-item">Tab-A</button>
                        <button class="tab-b tab-item">Tab-B</button>
                        <div class="content">
                            <div class="content-a">CONTENT A</div>
                            <div class="content-b">CONTENT B</div>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .tab-focus-within-res-contain {
                    height: 100%;
                    display: flex;

                    .tab-focus-within {
                        margin: auto;
                        width: 300px;
                        height: 200px;
                        border: 1px solid #000;
                    
                    
                        button {
                            width: 50%;
                            background: transparent;
                            line-height: 35px;
                            outline: none;
                            background-color: blue;
                            outline: none;
                        
                            &:not(:focus-within) {
                                background-color: transparent;
                            }
                        }
                        .content{
                            &>div{
                                display: none;
                                line-height: 150px;
                            }
                        }
                    
                        .tab-a:focus-within~.content .content-a {
                            display: block;
                        }
                    
                        .tab-b:focus-within~.content .content-b {
                            display: block;
                        }
                        // 默认选中tab-A
                        &:not(:focus-within){
                            .tab-a{
                                background-color: blue;
                            }
                            .content-a{
                                display: block;
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