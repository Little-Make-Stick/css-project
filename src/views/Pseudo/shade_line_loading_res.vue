<template>
    <div class='shade-line-loading-res-contain'>
        <div class="shade-line-loading"></div>
        <div class="shade-line-loading-color"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
    
    .shade-line-loading-res-contain{
        height: 100%;
        display: flex;
        &>div{
            margin: auto;
            width: 150px;
            height: 150px;
            position: relative;
            /* background-color: blue; */
            border-radius: 50%;
            overflow: hidden;
            &:before,&:after{
                content: '';
                height: 100%;
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
                box-sizing: border-box;
                border-radius: 50%;
                border: 3px solid transparent;
                border-bottom-color: #000;
                border-right-color: #000;
                /* background-color: green; */
            }
            &::before{
                width: calc(100% + 1px);
                height: calc(100% + 1px);
                /* background-color: yellow; */
                margin: 1px;
                animation: beforeAnimation 2.5s linear infinite forwards;
            }
            &::after{
                border-width: 7px;
                border-bottom-color: red;
                border-right-color: red;
                /* animation: name duration timing-function delay iteration-count direction fill-mode; */
                animation: afterAnimation 2.5s linear infinite forwards;
            }
        }
        .shade-line-loading{
            animation: animation 2.5s linear infinite forwards;
            &::after{
                border-bottom-color: #fff;
                border-right-color: #fff;
            }
        }
        .shade-line-loading-color{
            animation: animation 2.5s linear infinite forwards;
        }
    }
    @keyframes beforeAnimation{
        0%{
            transform: rotate(0deg);
        }
        10%{
            transform: rotate(180deg);
        }
        20%{
            transform: rotate(180deg);
        }
        30%{
            transform: rotate(180deg);
        }
        40%{
            /* transform: rotate(180deg); */
        }
        50%{
            transform: rotate(360deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    @keyframes afterAnimation{
        0%{
            transform: rotate(0deg);
        }
        10%{
            transform: rotate(0deg);
        }
        20%{
            transform: rotate(0deg);
        }
        30%{
            transform: rotate(0deg);
        }
        40%{
            transform: rotate(180deg);
        }
        50%{
            transform: rotate(360deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    @keyframes animation{
        0%{
            transform: rotate(0deg);
        }
        10%{
            transform: rotate(90deg);
        }
        20%{
            transform: rotate(180deg);
        }
        30%{
            transform: rotate(360deg);
        }
        40%{
            transform: rotate(360deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
</style>