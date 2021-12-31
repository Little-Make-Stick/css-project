<template>
    <div class='cameo-btn-contain'>
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
                    <li><span class="inline-code">box-shadow</span> 与颜色的合理搭配</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='cameo-btn-res-contain'>
                    <div class="login-module">
                        <div class="login-title">Sign In</div>
                        <div class="login-form">
                            <div class="form-item">
                                <input class="username-input" placeholder="USERNAME"/>
                            </div>
                            <div class="form-item">
                                <input type="password" class="password-input" placeholder="PASSWORD"/>
                            </div>
                            <div class="form-item">
                                <button class="login-button circle strong">
                                    <i class="fa fa-lock"></i>
                                    Login In
                                </button>
                            </div>
                            <div class="form-item">
                                <button class="round">
                                    <i class="fa fa-arrow-left"></i>
                                </button>
                                <button class="round">
                                    <i class="fa fa-bookmark"></i>
                                </button>
                                <button class="round">
                                    <i class="fa fa-cog"></i>
                                </button>
                            </div>
                            <div class="form-item">
                                <input class="search-input" placeholder="EMAIL ADDRESS"/>
                                <button class="round">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .cameo-btn-res-contain{
                    font-family: "Montserrat", sans-serif;
                    background: $color-bg;
                    height: 100%;
                    color: $color-shadow;
                    .login-module{
                        width: 400px;
                        margin: auto;
                        padding: 20px 0;
                        .login-title{
                            font-size: 2em;
                            margin-bottom: 20px;
                        }
                        .login-form{
                            .form-item{
                                display: flex;
                                margin: 20px 30px;
                                justify-content: center;
                                align-items: center;
                                input{
                                    // 设置内阴影，内阴影上白下黑伪装下沉
                                    box-shadow: -3px -3px 1px 1px $color-white inset, 2px 2px 1px 2px $color-shadow inset;
                                    &:active{
                                        border: none;
                                        outline: none;
                                    }
                                    &:focus{
                                        border: none;
                                        outline: none;
                                        // 缩减内阴影的宽度减小下沉
                                        box-shadow: -1px -1px 1px .5px $color-white inset, 1px 1px 1px .5px $color-shadow inset;
                                    }
                                }
                                button{
                                    // 设置外阴影假装浮起
                                    box-shadow: 4px 4px 4px 4px $color-bg inset, -4px -4px 4px 4px $color-bg inset,-2px -2px 8px 4px $color-white, 4px 4px 8px 4px $color-shadow;

                                    &:hover{
                                        // 缩减外阴影减小浮起
                                        box-shadow: 0 0 2px 2px $color-bg inset, -2px -2px 8px 2px $color-white, 2px 2px 8px 2px $color-shadow;
                                    }
                                    &:active{
                                        // 去除外阴影，以内阴影伪装下沉
                                        box-shadow: -2px -2px 1px 1px $color-white inset, 2px 2px 1px 2px $color-shadow inset;
                                    }
                                }
                            }
                            input,button{
                                border: none;
                                background: $color-bg;
                                padding: 15px;
                                width: 100%;
                                color: #444;
                            }
                            input,button.circle{
                                border-radius: 30px;
                            }
                            button.round{
                                border-radius: 8px;
                                width: auto;
                                padding: 15px 16px;
                                margin: 0 16px;
                            }
                            button.strong{
                                color: $color-red;
                                font-weight: bold;
                                i{
                                    margin-right: 8px;
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