<template>
    <div class='juejin-login-focus-within-res-contain'>
        <div class="juejin-login-form">
            <div class="juejin-login-form-header"
                :style="{backgroundImage: 'url('+formHeaderImg+')'}">
                
            </div>
            <div class="juejin-login-form-contain">
                <div class="form-title">账密登录</div>
                <div class="form-item">
                    <input type="text" @focus="changeHeaderImg('account')" @blur="changeHeaderImg" placeholder="请输入账号">
                </div>
                <div class="form-item">
                    <input type="password" @focus="changeHeaderImg('password')" @blur="changeHeaderImg" placeholder="请输入密码">
                </div>
                <div class="form-item">
                    <button>登录</button>
                </div>
                <div class="form-options">
                    <div class="phonenum-login"><a href="#">手机登录</a></div>
                    <div class="forget-password"><a href="#">忘记密码</a></div>
                </div>
                <div class="other-login-ways">
                    <div class="login-way-item">
                        <i class="fa fa-weibo"></i>
                    </div>
                    <div class="login-way-item">
                        <i class="fa fa-wechat"></i>
                    </div>
                    <div class="login-way-item">
                        <i class="fa fa-github"></i>
                    </div>
                </div>
                <div class="login-tip">
                    注册登录即表示同意
                    <a href="#">用户协议</a>、
                    <a href="#">隐私政策</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                formHeaderImg: require('../../assets/image/welcome-login.svg')
            }
        },
        methods:{
            changeHeaderImg(type = 'welcome'){
                if(type == "account"){
                    this.formHeaderImg = require('../../assets/image/enter-account.svg')
                }else if(type == "password"){
                    this.formHeaderImg = require('../../assets/image/enter-password.svg')
                }else{
                    this.formHeaderImg = require('../../assets/image/welcome-login.svg')
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    .juejin-login-focus-within-res-contain{
        height: 100%;
        display: flex;
        background-color: #fcfcfc;
        .juejin-login-form{
            margin: auto;
            .juejin-login-form-header{
                width: 300px;
                height: 100px;
                /* background-image: url('../../assets/image/welcome-login.svg'); */
                background-position: center bottom;
                background-size: auto 100%;
                background-repeat: no-repeat;
                transition: all .2s ease;
            }
            .juejin-login-form-contain{
                background-color: #fff;
                padding: 15px;
                width: 270px;
                &>div{
                    width: 100%;
                    text-align: left;
                    font-size: 14px;
                }
                .form-title{
                    font-weight: bold;
                    font-size: 17px;
                }
                .form-item{
                    margin: 15px 0;
                    input,button{
                        width: 100%;
                        box-sizing: border-box;
                        padding: 8px 0;
                        line-height: 18px;
                        border: none;
                        outline: none;
                    }
                    input{
                        padding-left: 10px;
                        border: 1px solid #ccc;
                    }
                    input:focus-within{
                        border-color: #409eff;
                    }
                    button{
                        background-color: #409eff;
                        color: #fff;
                    }
                }
                a{
                    color: #409eff;
                    text-decoration: none;
                }
                .form-options{
                    display: flex;
                    justify-content: space-between;
                }
                .other-login-ways{
                    padding: 15px ;
                    width: calc(100% - 30px);
                    display: flex;
                    justify-content: space-around;
                }
                .login-tip{
                    font-size: 13px;
                    text-align: center;
                }
            }
        }
    }
</style>