<template>
    <div class='side-shadow-contain'>
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
                    <li>外 box-shadow 前四个参数：x 偏移值、y 偏移值 、模糊半径、扩张半径。</li>
                    <li>单侧投影的核心是第四个参数：扩张半径。这个参数会根据你指定的值去扩大或缩小投影尺寸，如果我们用一个负的扩张半径，而他的值刚好等于模糊半径，那么投影的尺寸就会与投影所属的元素尺寸完全一致，除非使用偏移量来移动他，否则我们将看不到任何投影。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='side-shadow-res-contain'>
                    <template v-for="item in direct" :key="item.key">
                        <div :class="item.key+'-shadow'">{{item.content}}</div>
                    </template>
                </div>
                `,
                js: `
                direct: [
                    {
                        key: 'top',
                        content: '上',
                    },
                    {
                        key: 'right',
                        content: '右',
                    },
                    {
                        key: 'bottom',
                        content: '下',
                    },
                    {
                        key: 'left',
                        content: '左',
                    },
                ]
                `,
                css: `
                .side-shadow-res-contain{
                    display: flex;
                    flex-wrap: wrap;
                    [class$="-shadow"]{
                        width: 100px;
                        height: 100px;
                        margin: 20px;
                        border: 1px solid #000;
                        line-height: 100px;
                    }
                    .top-shadow{
                        box-shadow: 0px -8px 5px -5px #000;
                    }
                    .right-shadow{
                        box-shadow: 8px 0px 5px -5px #000;
                    }
                    .bottom-shadow{
                        box-shadow: 0px 8px 5px -5px #000;
                    }
                    .left-shadow{
                        box-shadow: -8px 0px 5px -5px #000;
                    }
                }`,
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