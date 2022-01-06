<template>
    <div class='radio-checked-contain'>
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
                    <li>使用 radio 标签的 <span class="inline-code">:checked</span> 伪类，加上 <span class="inline-code">&lt;label for&gt;</label></span> 实现纯 CSS 捕获点击事情</li>
                    <li>使用了 <span class="inline-code">~</span> 选择符对样式进行控制</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='radio-checked-res-contain'>
                    <input id="stop" type="radio" name="playAnimation">
                    <input id="play" type="radio" name="playAnimation">
                    <div class="btns">
                        <label for="stop">
                            <div class="stop-btn">stop</div>
                        </label>
                        <label for="play">
                            <div class="stop-btn">play</div>
                        </label>
                    </div>
                    <div class="animation"></div>
                </div>
                `,
                js: ``,
                css: `
                @keyframes move {
                    0% {
                        transform: translateX(0%);
                    }
                
                    20% {
                        transform: translateX(100%);
                    }
                
                    40% {
                        transform: translateX(200%);
                    }
                
                    60% {
                        transform: translateX(300%);
                    }
                
                    80% {
                        transform: translateX(400%);
                    }
                
                    100% {
                        transform: translateX(500%);
                    }
                }

                .radio-checked-res-contain {
                    height: 100%;
                    input[type="radio"]{
                        visibility: hidden;
                    }
                    .btns {
                        position: relative;
                        height: 150px;
                        padding-top: 30px;
                    
                        div {
                            padding: 10px 15px;
                            border-radius: 8px;
                            border: 1px solid #000;
                            margin: 10px;
                            display: inline-block;
                        }
                    }
                
                    .animation {
                        width: 120px;
                        height: 120px;
                        background-color: cornsilk;
                        margin-left: 50px;
                        animation: move 8s linear infinite alternate;
                    }
                
                    #stop:checked~.animation {
                        animation-play-state: paused;
                    }
                
                    #play:checked~.animation {
                        animation-play-state: running;
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