<template>
    <div class='word-fracture-effect-contain'>
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
                    <li>使用元素的伪元素复制两份文本，再使用 <span class="inline-code">clip-path</span> 将元素本身、元素的两个伪元素分为3部分，分别对这3部分进行控制。</li>
                    <li>因为使用了 <span class="inline-code">clip-path</span> 裁剪后的元素，只有元素的剪切区域才能被显示，所以我们可以分别控制 3 个部分进行动画。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='word-fracture-effect-res-contain'>
                    <div class="word-fracture" data-text="Text Crack">
                        <span>Text Crack</span>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .word-fracture-effect-res-contain{
                    height: 100%;
                    display: flex;
                    font-size: 60px;
                    font-weight: bold;
                    color: #fff;
                    background-color: #000;
                    letter-spacing: 2px;
                    .word-fracture{
                        display: inline-block;
                        margin: auto;
                        span{
                            clip-path: polygon(0 0, 25% 0, 39% 100%, 0 100%);
                        }
                        &:before,&:after{
                            content: attr(data-text);
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            color: #fff;
                            transform: translate(-50%, -50%);
                        }
                        &::before{
                            clip-path: polygon(25% 0, 57% 0, 85% 100%, 39% 100%);
                            left: 51%;
                        }
                        &::after{
                            clip-path: polygon(57% 0, 100% 0, 100% 100%, 85% 100%);
                            left: 53%;
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