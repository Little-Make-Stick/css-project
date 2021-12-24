<template>
    <div class='v-h-center-contain'>
        <knowage-result 
            :difficult="difficult"
            :html="html"
            :css="css">
        </knowage-result>
    </div>
</template>
<script>
    import knowageResult from '@/components/KnowageResult.vue';
    export default {
        data() {
            return {
                difficult: `
                <p>核心点在于使用了 FFC/GFC 使 margin: auto 在垂直方向上居中元素。</p>
                <p>原因如下，在 <span class="inline-code">dispaly: flex</span> 下：</p>
                <ul>
                    <li>Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.</li>
                </ul>
                <div class="quote-link">
                    <a href="https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#auto-margins">CSS Flexible Box Layout Module Level 1 -- 8.1. Aligning with auto margins</a>
                </div>
                <p>简单翻译一下，大意是在 <span class="strong">flex 格式化上下文</span>中，设置了 <span  class="inline-code">margin: auto</span> 的元素，在通过 <span class="inline-code">justify-content</span> 和 <span class="inline-code">align-self</span> 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去</p>
                <p>这里，很重要的一点是，margin auto 的生效不仅是水平方向，垂直方向也会自动去分配这个剩余空间。</p>
                `,
                html: `
                <div class='v-h-center-res-contain'>
                    <div class="center-box"></div>
                </div>`,
                css: `
                .v-h-center-res-contain{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    .center-box{
                        width: 5em;
                        height: 5em;
                        background-color: #444;
                        margin: auto;
                    }
                }`,

            }
        },
        components: {
            knowageResult
        },
        watch: {},
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    .v-h-center-contain {
        height: 100%;
    }
</style>