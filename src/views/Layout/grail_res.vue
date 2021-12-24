<template>
    <div class='grail-res-contain'>
        <div class="left">left
        </div>
        <div class="middle">middle
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
    $grail-color: #fff;

    .grail-res-contain {
        padding: 0 200px;
        height: 100%;
        &>div{
            float: left;
            height: 100%;
            color: $grail-color;
        }
        .middle {
            width: 100%;
            background: $middle-bg-color;
        }

        .left {
            width: 200px;
            position: relative;
            left: -200px;
            margin-right: -200px;
            background: $left-bg-color;
        }

        .right {
            width: 200px;
            position: relative;
            right: -200px;
            margin-left: -200px;
            background: $right-bg-color;
        }
    }
</style>