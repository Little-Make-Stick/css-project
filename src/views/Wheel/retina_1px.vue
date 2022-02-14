<template>
    <div class='retina-1px-contain'>
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
                <p>设备像素比(dpr) ＝ 物理像素 / 设备独立像素(dpi)</p>
                <p class="quote-link"><a href="https://www.jianshu.com/p/7e63f5a32636">7种方法解决移动端Retina屏幕1px边框问题</a></p>
                <p class="quote-link"><a href="https://github.com/amfe/article/issues/17">Flexible实现手淘</a></p>
                <p>retina屏下的1px线的实现，适用于 dpr：2 的情况:</p>
                <ul>
                    <li>0.5px边框:  iOS 8 和 OS X Yosemite 支持 0.5px 的边框</li>
                    <li>border-image: 先准备一张符合你要求的图片。然后将边框模拟在边框上。</li>
                    <li>background-image: 先准备一张符合你要求的图片。然后将边框模拟在背景上。</li>
                    <li>多背景渐变: 设置1px的渐变背景，50%有颜色，50%透明。</li>
                    <li>box-shadow: 利用css 对阴影处理</li>
                    <li>viewport + rem: 通过设置对应viewport的rem基准值</li>
                    <li>伪类 + transform: 利用 :before 或者 :after 重做 border ，并 transform 的 scale 缩小一半</li>
                </ul>
                `,
                difficult: ``,
                html: ``,
                js: ``,
                css: ``,
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
<style lang="scss">
    .retina-1px-contain ul{
        margin-left: 2em;
    }
</style>