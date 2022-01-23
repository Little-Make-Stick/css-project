<template>
    <div class='input-mutual-contain'>
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
                <p>
                    使用 <span class="inline-code">:placeholder-shown</span> && <span class="inline-code">:focus-within</span> 实现 input 输入交互。
                </p>
                <ul>
                    <li><span class="inline-code">:focus-within</span>: 是一个CSS 伪类 ，表示一个元素获得焦点，或，该元素的后代元素获得焦点。换句话说，元素自身或者它的某个后代匹配:focus伪类</li>
                    <li><span class="inline-code">:placeholder-shown</span>: CSS 伪类 在 <span class="inline-code">&lt;input&gt;</span> 或 <span class="inline-code">&lt;textarea&gt;</span> 元素显示 placeholder text 时生效</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='input-mutual-res-contain'>
                    <div class="input-container">
                        <input class="search-input" type="text" placeholder="输入你想查询的内容">
                        <button class="search-btn">Search</button>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .input-mutual-res-contain{
                    height: 100%;
                    display: flex;
                    .input-container{
                        border: 1px solid #ddd;
                        padding: 12px;
                        margin: auto;
                        input,button{
                            border: none;
                            outline: none;
                            font-size: 16px;
                        }
                        .search-input{
                            font-size: 18px;
                            width: 300px;
                        }
                    
                        .search-btn{
                            background-color: deepskyblue;
                            padding: 8px 5px;
                            color: #fff;
                        }
                    
                        .search-input:placeholder-shown~.search-btn{
                            background-color: transparent;
                        }
                        &:focus-within{
                            box-shadow: 3px 3px 5px 0 #ddd;
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