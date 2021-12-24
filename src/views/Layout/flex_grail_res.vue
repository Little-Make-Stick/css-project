<template>
    <div class='flex-grail-res-contain'>
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
    $flex-grail-color: #fff;

    .flex-grail-res-contain {
        width: 100%;
        height: 100%;
        display: flex;
        &>div{
            height: 100%;
            line-height: 100%;
            color: $flex-grail-color;
        }
        .middle {
            flex: 1 1 auto;
            background: $middle-bg-color;
        }

        .left {
            flex: 0 0 200px;
            background: $left-bg-color;
        }

        .right {
            flex: 0 0 200px;
            background: $right-bg-color;
        }
    }
</style>