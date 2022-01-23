<template>
    <div class='radius-gradient-border-contain'>
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
                    <li><span class="inline-code">clip-path CSS</span> 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是 <span class="inline-code">被引用内嵌的URL定义的路径</span> 或者 <span class="inline-code">外部 SVG 的路径</span> 。</li>  
                    <li>因为使用了 <span class="inline-code">clip-path</span> 裁剪后的元素，只有元素的剪切区域才能被显示，所以我们可以通过 <span class="inline-code">clip-path: inset()</span> 裁剪出带圆角的矩形元素。</li>  
                    <li>clip-path 中的inset除了有top,right,bottom,left外，还有一个round，后面接四个参数，表示剪切矩形的四个圆角。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='radius-gradient-border-res-contain'>
                    <div class="radius-gradient-border"></div>
                </div>
                `,
                js: ``,
                css: `
                .radius-gradient-border-res-contain{
                    height: 100%;
                    display: flex;
                    .radius-gradient-border{
                        margin: auto;
                        width: 140px;
                        height: 100px;
                        border: 10px solid ;
                        border-image: linear-gradient( 45deg ,blue, red ) 1 round;
                        clip-path: inset( 0px round 10px);
                        animation: colorAnimate 5s ease infinite forwards;
                    }
                }
                @keyframes colorAnimate{
                    100%{
                        filter: hue-rotate(360deg);
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