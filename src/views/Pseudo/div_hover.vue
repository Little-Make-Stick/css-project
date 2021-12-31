<template>
    <div class='div-hover-contain'>
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
                    <li>使用 hover 伪类，在鼠标悬停在按钮上面时，控制动画样式的暂停</li>
                    <li>使用了 <span class="inline-code">~</span> 选择符对样式进行控制</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='div-hover-res-contain'>
                    <div class="stop-btn">STOP</div>
                    <div class="animation"></div>
                </div>
                `,
                js: ``,
                css: `
                @keyframes move {
                    0% {
                        transform: translateX(100%);
                    }
                
                    25% {
                        transform: translateX(200%);
                    }
                
                    50% {
                        transform: translateX(300%);
                    }
                
                    75% {
                        transform: translateX(400%);
                    }
                
                    100% {
                        transform: translateX(500%);
                    }
                }
            
                .div-hover-res-contain {
                
                    /* height: 100%; */
                    .stop-btn {
                        display: inline-block;
                        margin: 20px auto;
                        padding: 5px 15px;
                        border-radius: 6px;
                        border: 1px solid #000;
                    }
                
                    .animation {
                        width: 120px;
                        height: 120px;
                        background-color: cornflowerblue;
                        animation: move 8s linear infinite alternate-reverse;
                    }
                
                    .stop-btn:hover~.animation {
                        animation-play-state: paused;
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