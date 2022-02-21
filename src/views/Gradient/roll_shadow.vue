<template>
    <div class='roll-shadow-contain'>
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
                    <li><span class="inline-code">background-attachment: srcoll</span>: 背景相对于元素本身固定, 而不是随着它的内容滚动。</li>
                    <li><span class="inline-code">background-attachment: local</span>: 背景相对于元素的内容固定, 随着它的内容滚动。</li>
                    <li>借助 background-attachment: srcoll 和 background-attachment: local 两个属性, 在滚动初始的时候, 利用两层背景叠加在一起隐藏阴影背景, 真正滚动的时候, 将叠加的部分移走，只漏出阴影部分即可。</li>
                </ul>
                `,
                difficult: ``,
                html: `
                <div class='roll-shadow-res-contain'>
                    <div class="roll-shadow-example">
                        <div class="table-thead">
                            <table>
                                <thead>
                                    <th>seq</th>
                                    <th>sex</th>
                                    <th>name</th>
                                    <th>phone-num</th>
                                </thead>
                            </table>
                        </div>
                        <div class="table-tbody">
                            <table>
                                <tbody>
                                    <tr v-for="item in arr" :key="item">
                                        <td>{{ item }}</td>
                                        <td>男</td>
                                        <td>李华</td>
                                        <td>123-3243545</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                `,
                js: ``,
                css: `
                .roll-shadow-res-contain {
                    height: 100%; 
                    display: flex;
                    .roll-shadow-example{
                        margin: auto;
                        table{
                            border: .5px solid #ccc;
                            border-collapse: collapse;
                            td, th {
                                border: .5px solid #ccc;
                                width: 150px;
                                line-height: 30px;
                            }
                        }
                        .table-thead{}
                        .table-tbody{
                            height: 300px;
                            position: relative;
                            overflow-y: scroll;
                            background: linear-gradient(#fff, transparent) top / 100% 100px,
                                        radial-gradient(at 50% -15px, rgba(0, 0, 0, .8), transparent 70%) top / 100000% 15px;
                            background-repeat: no-repeat, no-repeat;
                            /* background-size: 100% 100px, 100000% 15px; */
                            /* background-position: center top, center top; */
                            background-attachment: local, scroll;
                        }
                    }
                }
                `,
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