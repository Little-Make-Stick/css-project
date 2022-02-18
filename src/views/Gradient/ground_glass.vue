<template>
    <div class='ground-glass-contain'>
        <knowage-result
            :demand="demand"
            :keyKnowage="keyKnowage"
            :difficult="difficult"
            :html="html"
            :js="js"
            :css="css">
            
        </knowage-result>
    </div> 
</template>
<script>
    import knowageResult from '@/components/KnowageResult.vue';
    export default{
        data(){
            return{
                demand: ``,
                keyKnowage: `
                <ul>
                    <li>使用 <span class="inline-code">filter: blur()</span> 实现毛玻璃效果。</li>
                    <li>毛玻璃效果的重点在于，需要虚化的底图部分是会随页面 resize 变换而变换的。<span class="inline-code">background-attachment:fixed</span> 则可以完美契合这一需求。</li>
                    <li><span class="inline-code">background-attachment</span>：如果指定了 <span class="inline-code">background-image</span> ，那么 <span class="inline-code">background-attachment</span> 决定背景是在视口中固定的还是随着包含它的区块滚动的。</li>
                    <li><span>background-attachment: fixed;</span> 此关键字表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。</li>
                </ul>
                `,
                difficult: ``,
                html: ``,
                js: ``,
                css: ``,
            }
        },
        components:{
            knowageResult
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        methods:{},
    }
</script>
<style lang="scss" scoped>
</style>