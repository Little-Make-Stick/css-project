<template>
    <div class='img-switch-preview-contain'>
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
                    <li>CSS <span class="inline-code">resize</span> 属性允许你控制一个元素的可调整大小性</li>
                    <li>配合 <span class="inline-code">resize</span> 实现子元素的动态宽度</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='img-switch-preview-res-contain'>
                    <div class="title">PURE CSS SWITCH PIUTURE</div>
                    <div class="pictures-frame">
                        <div class="picture-a">
                            <div class="picture-b">
                                <div class="resize-element"></div>
                            </div>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .img-switch-preview-res-contain {
                    height: 100%;
                            
                    .title {
                        color: lightblue;
                        font-size: 2em;
                        padding-top: 20px;
                    }
                
                    .pictures-frame {
                        width: 650px;
                        height: 340px;
                        border: 8px solid #e9e3af;
                        margin: 20px auto;
                    
                        .picture-a {
                            width: 100%;
                            height: 100%;
                            background-image: url('../../assets/image/spring.png');
                            text-align: left;
                        
                            .picture-b {
                                /* width: 20px; */
                                height: 100%;
                                display: inline-block;
                                background-image: url('../../assets/image/fall.png');
                            
                                .resize-element {
                                    resize: horizontal;
                                    overflow-x: auto;
                                    width: 20px;
                                    max-width: 650px;
                                    height: 13px;
                                    transform: scaleY(26);
                                    background: rgba(0,0,0,.2);
                                    cursor: w-resize;
                                    position: relative;
                                    top: 48%; 
                                }
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