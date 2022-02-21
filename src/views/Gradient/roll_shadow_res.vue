<template>
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
</template>
<script>
    export default {
        data() {
            return {
                arr: new Array(30),
            }
        },
        watch: {},
        computed: {},
        created() { 
            this.arr = new Array(30).fill(0).map((e,i) => e = i + 1);
        },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss" scoped>
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
</style>