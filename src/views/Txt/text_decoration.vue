<template>
    <div class='text-decoration-contain'>
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
                    <li><span class="inline-code">text-decoration</span> 这个 CSS 属性是用于设置文本的修饰线外观的（下划线、上划线、贯穿线/删除线 或 闪烁）。</li>
                    <li>使用 <span class="inline-code">text-decoration-style: wavy</span> 生成波浪下划线。</li>
                </ul>
                `,
                difficult: `
                <ul>
                    <li>缺点在于由于是文本，使用 <span class="inline-code">text-decoration-style: wavy</span> 生成的波浪线受字体的影响很大，极有可能在一部分设备调试正常，在另一部设备由于字体的变化导致譬如动画首尾衔接出现问题。</li>
                </ul>
                `,
                html: `
                <div class='text-decoration-res-contain'>
                    <div class="text-decoration">1234567890</div>
                    <div class="text-decoration-ball"></div>
                </div>
                `,
                js: ``,
                css: `
                .text-decoration-res-contain{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .text-decoration{
                        font-size: 35px;
                        font-weight: bold;
                        color: transparent;
                        text-decoration: underline 5px wavy #03a9f4;
                    }
                    .text-decoration-ball{
                        width: 160px;
                        height: 160px;
                        border: 5px solid #03a9f4;
                        border-radius: 50%;
                        position: relative;
                        overflow: hidden;
                        &:before{
                            content: '12345678901234567891234567800000043435465576s';
                            position: absolute;
                            left: 0;
                            line-height: 160px;
                            color: transparent;
                            animation: waveAnimate 3s linear infinite;
                            text-decoration: underline 5px wavy #03a9f4;
                        }
                    }
                }
                @keyframes waveAnimate{
                    100%{
                        transform: translateX(calc(-100% + 170px));
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