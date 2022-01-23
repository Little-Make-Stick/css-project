<template>
    <div class='input-mutual-res-contain'>
        <div class="input-container">
            <input class="search-input" type="text" placeholder="输入你想查询的内容">
            <button class="search-btn">Search</button>
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
    .input-mutual-res-contain{
        height: 100%;
        display: flex;
        .input-container{
            border: 1px solid #ddd;
            padding: 12px;
            margin: auto;
            input,button{
                border: none;
                outline: none;
                font-size: 16px;
            }
            .search-input{
                font-size: 18px;
                width: 300px;
            }

            .search-btn{
                background-color: deepskyblue;
                padding: 8px 5px;
                color: #fff;
            }

            .search-input:placeholder-shown~.search-btn{
                background-color: transparent;
            }
            &:focus-within{
                box-shadow: 3px 3px 5px 0 #ddd;
            }
        }
    }
</style>