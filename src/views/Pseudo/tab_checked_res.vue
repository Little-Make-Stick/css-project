<template>
    <div class='tab-checked-res-contain'>
        <div class="tab-checked">
            <input class="nav-item-a" type="radio" id="li1" name="nav" checked="true">
            <input class="nav-item-b" type="radio" id="li2" name="nav">
            <ul class="nav">
                <li><label for="li1"><div>tab A</div></label></li>
                <li><label for="li2"><div>tab B</div></label></li>
            </ul>
            <div class="content">
                <div class="content-a">CONTENT A</div>
                <div class="content-b">CONTENT B</div>
            </div>
        </div>
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
    .tab-checked-res-contain{
        height: 100%;
        display: flex;
        .tab-checked{
            width: 300px;
            height: 200px;
            border: 1px solid #000;
            margin: auto;
            input[type="radio"]{
                /* visibility: hidden; */
                display: none;
            }
            .nav{
                list-style: none;
                display: flex;
                width: 100%;
                padding: 0;
                margin: 0;
                li{
                    width: 50%;
                    border: 1px solid #000;
                    label>div{
                        width: 100%;
                        padding: 8px 0;
                    }
                }
            }
            .content{
                &>div{
                    line-height: 150px;
                    display: none;
                }
            }
            #li1:checked~.nav li:first-child{
                background-color: dodgerblue;
            }
            #li1:checked~.content .content-a{
                display: block;
            }
            #li2:checked~.nav li:last-child{
                background-color: dodgerblue;
            }
            #li2:checked~.content .content-b{
                display: block;
            }
        }
    }
</style>