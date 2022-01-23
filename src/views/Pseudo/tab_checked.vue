<template>
    <div class='tab-checked-contain'>
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
                    <li>使用 radio 标签的 <span class="inline-code">:checked</span> 伪类，加上 <span class="inline-code">&lt;label for&gt; </span> 实现纯 CSS 捕获点击事情</li>
                    <li>使用了<span class="inline-code">~</span> 选择符对样式进行控制</li>
                </ul>
                `,
                difficult: `
                <p>如何使用 CSS 接收到用户的点击事情并对相关的节点进行操作。即是：</p>
                <ul>
                    <li>如何接收点击事件</li>
                    <li>如何操作相关DOM</li>
                </ul>
                <p>拥有 checked 属性的表单元素， <span class="inline-code">&lt;input type="radio"&gt;</span> 或者 <span class="inline-code">&lt;input type="checkbox"&gt;</span> 能够接收到点击事件。</p>
                `,
                html: `
                <div class='tab-checked-res-contain'>
                    <div class="tab-checked">
                        <input class="nav-item-a" type="radio" id="li1" name="nav" checked="true">
                        <input class="nav-item-b" type="radio" id="li2" name="nav">
                        <ul class="nav">
                            <li><label for="li1"><div>tab A</div></label></li>
                            <li><label for="li2"><div>tab B</div></label></li>
                        </ul>
                        <div class="content">
                            <div class="content-a">CONTENT A</div>
                            <div class="content-b">CONTENT B</div>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .tab-checked-res-contain{
                    height: 100%;
                    display: flex;
                    .tab-checked{
                        width: 300px;
                        height: 200px;
                        border: 1px solid #000;
                        margin: auto;
                        input[type="radio"]{
                            /* visibility: hidden; */
                            display: none;
                        }
                        .nav{
                            list-style: none;
                            display: flex;
                            width: 100%;
                            padding: 0;
                            margin: 0;
                            li{
                                width: 50%;
                                border: 1px solid #000;
                                label>div{
                                    width: 100%;
                                    padding: 8px 0;
                                }
                            }
                        }
                        .content{
                            &>div{
                                line-height: 150px;
                                display: none;
                            }
                        }
                        #li1:checked~.nav li:first-child{
                            background-color: dodgerblue;
                        }
                        #li1:checked~.content .content-a{
                            display: block;
                        }
                        #li2:checked~.nav li:last-child{
                            background-color: dodgerblue;
                        }
                        #li2:checked~.content .content-b{
                            display: block;
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