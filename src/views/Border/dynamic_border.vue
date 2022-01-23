<template>
    <div class='dynamic-border-contain'>
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
                    <li><span class="inline-code">border-image</span>: source slice width outset repeat|initial|inherit;
                        <ul>
                            <li><span class="inline-code">border-image-source</span>: 指定要使用的图像。</li>
                            <li><span class="inline-code">border-image-slice</span>: 指定图像的边界向内偏移。[number, % , fill]</li>
                            <li><span class="inline-code">border-image-width</span>: 指定图像边界的宽度。[number, % , fill]</li>
                            <li><span class="inline-code">border-image-outset</span>: 指定在边框外部绘制 border-image-area 的量。 [length, number]</li>
                            <li><span class="inline-code">border-image-repeat</span>: 用于图像边界如何铺满。[stretch(拉伸), repeat, round, space(平铺)]</li>
                        </ul>
                    </li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div ref="resultShow" class="result-show"></div>
                `,
                js: ``,
                css: `
                .result-show {
                    margin: calc(3 * 20px) auto;
                    width: 300px;
                    height: 150px;
                    border: 20px solid yellowgreen;
                    border-image-source: url('../../assets/image/dynamic-border.png');
                    border-image-slice: 40%;
                    border-image-width: 2;
                    /* border-image-outset: 1; */
                    border-image-repeat: stretch;
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