<template>
    <div class='regular-shape-shadow-contain'>
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
                    <li>使用 <span class="inline-code">clip-path</span> 可以很好的使用 SVG 的一些属性，绘制各种图形。绘制出来的图形如果希望带阴影，box-shadow 肯定是不行的，这个时候，<span class="inline-code">drop-shadow()</span> 则非常好用。</li>
                    <li>获取规则图形路径： https://bennettfeely.com/clippy/</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='regular-shape-shadow-res-contain'>
                    <div class="regular-shape-btn-wrap">
                        <div class="regalur-shape-btn">按钮一</div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .regular-shape-shadow-res-contain {
                    height: 100%;
                    display: flex;
                            
                    .regular-shape-btn-wrap {
                        margin: auto;
                        filter: drop-shadow(3px 3px 3px #ccc);
                    
                        .regalur-shape-btn {
                            padding: 15px 60px;
                            color: #bba850;
                            background-color: #efe5b6;
                            transform: scaleX(1.1);
                            clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%);
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