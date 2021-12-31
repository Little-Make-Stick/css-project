<template>
    <div class='threeD-text-shadow-contain'>
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
                    <li>立体文字阴影的关键点在于多层 text-shadow 的叠加</li>
                    <li>这里合理运用了 SASS 函数来自动计算多层 text-shadow 的 CSS 代码</li>
                    <li>运用了 Sass 的颜色函数，渐进实现层级阴影颜色
                        <ul>
                            <li>fade-out: 提升颜色的透明度，让颜色更加透明<span class="inline-code">fade-out(color, amount)</span></li>
                            <li>desaturate: 调低颜色的饱和度值，让颜色更少的饱和<span class="inline-code">desaturate(color, amount)</span></li>
                        </ul>
                    </li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='threeD-text-shadow-res-contain'>
                    <div class="text-left-top-shadow">TxT Long Shadow</div>
                    <div class="text-right-top-shadow">TxT Long Shadow</div>
                    <div class="text-left-bottom-shadow">TxT Long Shadow</div>
                    <div class="text-right-bottom-shadow">TxT Long Shadow</div>
                </div>
                `,
                js: ``,
                css: `
                @function longTextShadow_right_bottom($color){
                    $val: 0px 0px $color;
                    @for $i from 1 through  50 {
                        $color: fade-out(desaturate($color, 1%), .02);
                        $val: $val, $i+px $i+px $color;
                    }
                    @return $val;
                };
                @function longTextShadow_right_top($color){
                    $val: 0px 0px $color;
                    @for $i from -50 through  0 {
                        $color: fade-in(saturate($color, 1%), .02);
                        $val: $val, (-1 * $i)+px $i+px $color;
                    }
                    @return $val;
                };
                @function longTextShadow_left_top($color){
                    $val: 0px 0px $color;
                    @for $i from -50 through  0 {
                        $color: fade-in(saturate($color, 1%), .02);
                        $val: $val, $i+px $i+px $color;
                    }
                    @return $val;
                };
                @function longTextShadow_left_bottom($color){
                    $val: 0px 0px $color;
                    @for $i from 1 through  50 {
                        $color: fade-out(desaturate($color, 1%), .02);
                        $val: $val, (-1 * $i)+px $i+px $color;
                    }
                    @return $val;
                };
                .threeD-text-shadow-res-contain{
                    font-size: 50px;
                    line-height: 150px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    .text-right-bottom-shadow{
                        color: $color-red;
                        text-shadow: longTextShadow_right_bottom(hsl(14, 100%, 40%));
                    }
                    .text-right-top-shadow{
                        color: $color-red;
                        text-shadow: longTextShadow_right_top(hsl(14, 100%, 30%));
                    }
                    .text-left-top-shadow{
                        color: $color-blue;
                        text-shadow: longTextShadow_left_top(hsl(231, 50%, 30%));
                    }
                    .text-left-bottom-shadow{
                        color: $color-blue;
                        text-shadow: longTextShadow_left_bottom(hsl(231, 50%, 40%));
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