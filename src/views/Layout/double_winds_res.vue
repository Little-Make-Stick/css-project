<template>
    <div class='double-winds-res-contain'>
        <div class="left">left
        </div>
        <div class="middle">
            <div class="middle-inner">middle</div>
        </div>
        <div class="right">right
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    $left-bg-color: #ffcc00;
    $middle-bg-color: #cc6630;
    $right-bg-color: pink;
    $double-winds-color: #fff;

    .double-winds-res-contain {
        width: 100%;
        height: 100%;
        &>div{
            float: left;
            height: 100%;
            display: flex;
            div{
                margin: auto;
                color: $double-winds-color;
            }
        }
        .middle {
            width: calc(100% - 400px);
            background: $middle-bg-color;
        }

        .left {
            width: 200px;
            background: $left-bg-color;
        }

        .right {
            width: 200px;
            background: $right-bg-color;
        }
    }
</style>