<template>
    <div class='dot-loading-contain'>
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
                    <li>非常有意思，借助动画操控伪元素的 content</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='dot-loading-res-contain'>
                    <p>加载中</p>
                </div>
                `,
                js: ``,
                css: `
                .dot-loading-res-contain{
                    height: 100%;
                    display: flex;
                    p{
                        margin: auto;
                        font-size: 40px;
                        font-weight: bold;
                        &:after{
                            content: '.';
                            animation: dotLoading 1.5s linear infinite forwards;
                        }
                    }
                }
                @keyframes dotLoading{
                    0%{
                        content: '.';
                    }
                    33.3%{
                        content: '..';
                    }
                    66.6%{
                        content: '...';
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