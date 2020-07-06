<template>
    <span @click="changeCode()" title="看不清楚？换一张">{{pcode}}</span>
</template>

<script>
export default {
    name:"RandomCode",
    data() {
        return {
            pcode:'',
            letter:['1','2','3','4','5','6','7','8','9','0','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
        }
    },
    created() {
        this.pcode = this.makeCode();
        sessionStorage.setItem('pcode',this.pcode);
    },
    methods: {
        makeCode(){
            //自动生成字母跟数字   4位数  [0,35] [-,1)
            let code = [];
            for(let i=0;i<4;i++){
                code[i] = this.letter[Math.ceil(Math.random()*35)]
            }
            return code.join('')
        },
        changeCode(){
            this.pcode = this.makeCode()
            sessionStorage.setItem('pcode',this.pcode);
        }
    },
}
</script>

<style scoped>
    span{
        display: inline-block;
        width:120px;
        height: 36px;
        background-color: #00a1d6;
        color: #fff;
        font: 20px/36px "微软雅黑";
        text-align: center;
        cursor: pointer;
    }
</style>
