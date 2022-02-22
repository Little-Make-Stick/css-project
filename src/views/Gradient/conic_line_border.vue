<template>
    <div class='conic-line-border-contain'>
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
                    <li>利用角向渐变 <span class="inline-code">conic-gradient</span> 与遮罩实现线条 border 效果</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='conic-line-border-res-contain'>
                    <div class="conic-line-border"></div>
                </div>
                `,
                js: ``,
                css: `
                .conic-line-border-res-contain{
                    height: 100%;
                    display: flex;
                    .conic-line-border{
                        width: 300px;
                        height: 200px;
                        margin: auto;
                        position: relative;
                        border-radius: 14px;
                        border: 5px solid green;
                        /* background-color: rgba(0, 255, 0,.3); */
                        &::before{
                            content: '';
                            width: calc(100% + 10px);
                            height: calc(100% + 10px);
                            position: absolute;
                            left: -5px;
                            top: -5px;
                            border-radius: 8px;
                            /* background: conic-gradient(from -45deg,#fff -45deg, transparent -45deg, transparent 90deg, #fff 90deg); */
                            /* background: conic-gradient(from -45deg,#fff 110deg, transparent 110deg, transparent 160deg, #fff 160deg); */
                            animation: conicBorderAnimate 4s linear infinite ;
                        }
                    }
                }
                @keyframes conicBorderAnimate{
                    @for $i from 0 through 100 {
                        #{$i}%{
                            /* background: conic-gradient(#fff #{$i * 3deg}, transparent #{$i * 3deg}, transparent #{$i * 3.3deg + 90deg}, #fff #{$i * 3.3deg + 90deg}); */
                            background: conic-gradient(from -45deg, #fff #{$i * 3.6deg - 45deg}, transparent #{$i * 3.6deg - 25deg}, transparent #{$i * 3.6deg + 25deg}, #fff #{$i * 3.6deg + 25deg});
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