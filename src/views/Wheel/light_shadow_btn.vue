<template>
    <div class='light-shadow-btn-contain'>
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
                <p> box-reflect: </p>
                <div style="margin-left: 2em;">
                    <ul>
                        <li>可以是 below | above | left | right 代表下上左右4个方向</li>
                        <li>在方向后面，还可以接一个具体的数值大小，表示倒影与原元素间的距离</li>
                        <li>方位后面，还能再设置一个渐变值，利用这个渐变值，可以实现倒影的一个虚化效果</li>
                    </ul>
                </div>
                `,
                difficult: ``,
                html: `
                <div class='light-shadow-btn-res-contain'>
                    <div class="light-shadow-btn-list">
                        <div class="btn orange-btn">Neon</div>
                        <div class="btn blue-btn">Neon</div>
                        <div class="btn green-btn">Neon</div>
                        <div class="btn red-btn">Neon</div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .light-shadow-btn-res-contain{
                    height: 100% ;
                    background-color: #000;
                    display: flex;
                    .light-shadow-btn-list{
                        width: 100%;
                        margin: auto;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        .btn{
                            color: orange;
                            padding: 12px 20px;
                            position: relative;
                            border-radius: 6px;
                            border: 2px solid transparent;
                            -webkit-box-reflect: below 12px linear-gradient( transparent, rgba(0, 0, 0, .5));
                            &::before{
                                content: '';
                                border-radius: 6px;
                                border: 1px solid orange;
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                clip-path: inset(0 0 100% 0);
                                animation: borderMove 2s linear infinite;
                            }
                        }
                        .orange-btn{
                            &::before{}
                        }
                        .blue-btn{
                            color: deepskyblue;
                            &::before{
                                border-color: deepskyblue;
                            }
                        }
                        .green-btn{
                            color: greenyellow;
                            &::before{
                                border-color: greenyellow;
                            }
                        }
                        .red-btn{
                            color: tomato;
                            &::before{
                                border-color: tomato;
                            }
                        }
                    }
                }
                @keyframes borderMove{
                    25%{
                        clip-path: inset(0 0 0% 100%);
                    }
                    50% {
                        clip-path: inset(100% 0 0 0);
                    }
                    75% {
                        clip-path: inset(0 100% 0 0);
                    }
                    100% {
                        clip-path: inset(0 0 100% 0);
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