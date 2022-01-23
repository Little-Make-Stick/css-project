<template>
    <div class='dynamic-border-res-contain'>
        <div class="example-img">
            示例图片： <img width="40" height="40" src="../../assets/image/dynamic-border.png" alt="">
        </div>
        <div class="dynamic-border-example">
            <div class="border-image-slice">
                <div class="label">border-image-slice:</div>
                <el-select v-model="slice" placeholder="border-image-slice" size="small">
                    <el-option-group key="number" label="number">
                        <el-option label="2" key="2" value="2"></el-option>
                        <el-option label="20px" key="20px" value="20px"></el-option>
                    </el-option-group>
                    <el-option-group key="percent" label="percent">
                        <el-option label="10%" key="10%" value="10%"></el-option>
                        <el-option label="20%" key="20%" value="20%"></el-option>
                        <el-option label="30%" key="30%" value="30%"></el-option>
                        <el-option label="40%" key="40%" value="40%"></el-option>
                    </el-option-group>
                    <el-option-group key="fill" label="fill">
                        <el-option label="fill" key="fill" value="fill"></el-option>
                    </el-option-group>
                </el-select>
            </div>
            <div class="border-image-width">
                <div class="label">border-image-width:</div>
                <el-select v-model="width" placeholder="border-image-slice" size="small">
                    <el-option-group key="number" label="number">
                        <el-option label="2" key="2" value="2"></el-option>
                        <el-option label="20px" key="20px" value="20px"></el-option>
                    </el-option-group>
                    <el-option-group key="percent" label="percent">
                        <el-option label="1%" key="1%" value="1%"></el-option>
                        <el-option label="5%" key="5%" value="5%"></el-option>
                        <el-option label="10%" key="10%" value="10%"></el-option>
                        <el-option label="15%" key="15%" value="15%"></el-option>
                    </el-option-group>
                    <el-option-group key="fill" label="fill">
                        <el-option label="fill" key="fill" value="fill"></el-option>
                    </el-option-group>
                </el-select>
            </div>
            <div class="border-image-outset">
                <div class="label">border-image-outset:</div>
                <el-select v-model="outset" placeholder="border-image-slice" size="small">
                    <el-option-group key="length" label="length">
                        <el-option label="4px" key="4px" value="4px"></el-option>
                        <el-option label="10px" key="10px" value="10px"></el-option>
                    </el-option-group>
                    <el-option-group key="number" label="number">
                        <el-option label="0" key="0" value="0"></el-option>
                        <el-option label="2" key="2" value="2"></el-option>
                        <el-option label="3" key="3" value="3"></el-option>
                    </el-option-group>
                </el-select>
            </div>
            <div class="border-image-repeat">
                <div class="label">border-image-repeat:</div>
                <el-select v-model="repeat" placeholder="border-image-slice" size="small">
                    <el-option label="stretch" key="stretch" value="stretch"></el-option>
                    <el-option label="repeat" key="repeat" value="repeat"></el-option>
                    <el-option label="round" key="round" value="round"></el-option>
                    <el-option label="space" key="space" value="space"></el-option>
                </el-select>
            </div>
            <div class="dynamic-border-result">
                <div class="result-html">
                    border-image-slice:{{slice}};<br/>
                    border-image-width:{{width}};<br/>
                    border-image-outset:{{outset}};<br/>
                    border-image-repeat:{{repeat}};<br/>
                </div>
                <div ref="resultShow" class="result-show"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                slice: '40%',
                width: '2',
                outset: 0,
                repeat: 'round',
            }
        },
        watch: {
            slice( newV ){
                this.$refs.resultShow.style.borderImageSlice = newV;
            },
            width( newV ){
                this.$refs.resultShow.style.borderImageWidth = newV;
            },
            outset( newV ){
                this.$refs.resultShow.style.borderImageOutset = newV;
            },
            repeat( newV ){
                this.$refs.resultShow.style.borderImageRepeat = newV;
            }
        },
        computed: {},
        created() { },
        mounted() { },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    .dynamic-border-res-contain {
        height: 100%;
        display: flex;

        .dynamic-border-example {
            margin: auto;
            text-align: left;

            &>div {
                display: flex;
                margin: 5px 0;
            }

            .label {
                width: 170px;
                text-align: right;
            }

            .dynamic-border-result {
                display: flex;
                .result-html{
                    padding: 30px ;
                    margin-right: 150px;
                    line-height: 35px;
                    color: #409eff;
                    border: 1px solid #409eff;
                }
                .result-show {
                    margin: calc(3 * 20px) auto;
                    width: 300px;
                    height: 150px;
                    border: 20px solid yellowgreen;
                    border-image-source: url('../../assets/image/dynamic-border.png');
                    border-image-slice: 40%;
                    border-image-width: 2;
                    /* border-image-outset: 1; */
                    border-image-repeat: stretch;
                }

            }
        }
    }
</style>