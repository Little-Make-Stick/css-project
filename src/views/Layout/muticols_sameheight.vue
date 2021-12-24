<template>
    <div class='muticols-sameheight-contain'>
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
                demand: `
                <p>多列等高，要求左右两列高度自适应且一样，分别设置不同背景色</p>
                `,
                keyKnowage: `
                <ol>
                    <li><span class="inline-code">padding + margin + overflow</span> 实现多列等高效果，兼容性好</li>
                    <li>border实现多列等高，左边框宽度为200px，左列浮动，伪元素清除浮动</li>
                    <li>父元素线性渐变背景色实现多列等高（同理各种颜色障眼法）</li>
                    <li>display：flex实现多列等高</li>
                    <li>display：grid实现多列等高</li>
                    <li>display:table-cell 实现多列等高</li>
                </ol>
                `,
                difficult: ``,
                html: `
                <div class="res-contain" v-for="(item ,i) in arr" :key="i">
                    <div class="title">{{item.title}}</div>
                    <div :class="'content-'+item.key">
                        <div class="left">
                            <div class="nav">nav</div>
                        </div>
                        <div class="right">
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .muticols-sameheight-res-contain {
                    .res-contain {
                        margin: 30px 200px;
                        .title {
                            background-color: $title-bg-color;
                            padding: 15px 0;
                        }
                        p {
                            margin: 0;
                        }
                        .left {
                            background-color: $navs-bg-color;
                            width: 200px;
                        }
                        .right {
                            background-color: $content-bg-color;
                        }
                        .content-padmar {
                            position: relative;
                            overflow: hidden;
                            &>div {
                                float: left;
                                padding-bottom: 9999px;
                                margin-bottom: -9999px;
                            }
                            .left {
                                margin-right: -200px;
                            }
                            .right {
                                width: 100%;
                                margin-left: 200px;
                            
                            }
                        }
                        .content-border {
                            .left {
                                float: left;
                            }
                        
                            .right {
                                border-left: 200px solid $navs-bg-color;
                            }
                        }
                        .content-lineargradient {
                            overflow: hidden ;
                            background: linear-gradient(90deg, $navs-bg-color 0 , $navs-bg-color 200px ,$content-bg-color 200px , $content-bg-color );
                            &>div{
                                background-color: transparent;
                                float: left;
                            }
                        }
                        .content-flex {
                            display: flex;
                            width: 100%;
                        
                            .right {
                                flex: 1;
                            }
                        }
                        .content-grid {
                            display: grid;
                            width: 100%;
                            grid-template-columns: 200px auto;
                        }
                        .content-table {
                            display: table;
                            width: 100%;
                        
                            .left {
                                display: table-cell;
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