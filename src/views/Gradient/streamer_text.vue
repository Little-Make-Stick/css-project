<template>
    <div class='streamer-text-contain'>
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
                    <li><span class="inline-code">background-clip</span>: 其作用就是设置元素的背景（背景图片或颜色）的填充规则。</li>
                    <li><span>background-clip: text</span>: 使用了这个属性的意思是，以区块内的文字作为裁剪区域向外裁剪，文字的背景即为区块的背景，文字之外的区域都将被裁剪掉。 </li>
                    <li>与 box-sizing 的取值非常类似，通常而言，它有 3 个取值，<span class="inline-code">border-box</span> ，<span class="inline-code">padding-box</span> ，<span class="inline-code">content-box</span> ，后面规范新增了一个 <span class="inline-code">background-clip</span> 。时至今日，部分浏览器仍需要添加前缀 webkit 进行使用 <span class="inline-code">-webkit-background-clip</span> 。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='streamer-text-res-contain'>
                    <div class="streamer-text" data-text="Lorem ipsum dolor"> Lorem ipsum dolor </div>
                </div>
                `,
                js: ``,
                css: `
                .streamer-text-res-contain{
                    height: 100%;
                    background: #000;
                    .streamer-text{
                        // color: #E8A95B;
                        font-size: 60px;
                        font-weight: bolder;
                        letter-spacing: 1px;
                        display: inline-block;
                        position: relative;
                        color: transparent;
                        background: #E8A95B;
                        // background: linear-gradient(135deg, transparent 10%, #fff 10%, #fff 15%, transparent 15%, transparent 40%, #fff 40%, #fff 45%, transparent 45%, transparent 80%, #fff 80%, #fff 85%, transparent 85%, transparent 100%);
                        background-clip: text;

                        &::after{
                            content: attr(data-text);
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            left: 0;
                            top: 0;
                            color: transparent;
                            font-size: 60px;
                            font-weight: bold;
                            letter-spacing: 1px;
                            // background: #E8A95B;
                            background: linear-gradient(135deg, transparent 50%, #fff 50%, #fff 55%, transparent 55%);
                            filter: brightness(120%) blur(2px);
                            background-size: 300px 100%;
                            background-position: top left;
                            background-repeat: repeat-x;
                            background-clip: text;
                            animation: brightAnimate 3s linear infinite ;
                            overflow: hidden;
                        }
                    }
                }
                @keyframes brightAnimate{
                    @for $i from 1 through 100 {
                        #{$i}% {
                            background: linear-gradient(135deg, transparent #{$i * 1%}, #fff #{$i * 1%}, #fff #{($i + 5) * 1%}, transparent #{($i + 5) * 1%});
                            background-size: 300px 100%;
                            background-position: top left;
                            background-repeat: repeat-x;
                            background-clip: text;
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