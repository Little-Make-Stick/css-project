<template>
    <div class='shade-res-contain'>
        <p>背景文字背景文字背景文字背景文字</p>
        <div class="btn">HOVER ME</div>
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
    .shade-res-contain {
        .btn {
            padding: 20px 30px;
            border: 1px solid #000;
            transition: all 1s ease;
            /* top 和 left移到界面的50%，50%，此时元素本身的宽高也在其中，再移动自身的一半回到中心 */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>