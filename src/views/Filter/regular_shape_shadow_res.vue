<template>
    <div class='regular-shape-shadow-res-contain'>
        <div class="regular-shape-btn-wrap">
            <div class="regalur-shape-btn">按钮一</div>
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
    .regular-shape-shadow-res-contain {
        height: 100%;
        display: flex;

        .regular-shape-btn-wrap {
            margin: auto;
            filter: drop-shadow(3px 3px 3px #ccc);

            .regalur-shape-btn {
                padding: 15px 60px;
                color: #bba850;
                background-color: #efe5b6;
                transform: scaleX(1.1);
                clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%);
            }
        }
    }
</style>