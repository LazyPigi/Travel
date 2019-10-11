<template>
    <div style="padding:50px;">

        <div class="btns">
            <span v-for="(item, index) in ['丽江', '天山', '凤凰古都', '稻城', '五色湖']"
            :key="index"
            @click="handleClick(index)"
            :class="{ active: index === current }"
            >
                {{item}}
            </span>
        </div>

        <div v-if="current === 0">
            <img src="../../../每日资料跟进/image/001.jpeg" alt="">
        </div>

        <div v-if="current === 1">
            <img src="../../../每日资料跟进/image/002.jpg" alt="">
        </div>

        <div v-if="current === 2">
            <img src="../../../每日资料跟进/image/003.jpg" alt="">
        </div>

        <div v-if="current === 3">
            <img src="../../../每日资料跟进/image/004.jpg" alt="">
        </div>

        <div v-if="current === 4">
            <img src="../../../每日资料跟进/image/005.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 一个框架的学习可以通过tab栏来总结，该例子最重要的核心就是当前的下标的变量
            current: 0
        }
    },

    methods: {
        // 点击的时候改变current
        handleClick(index){
            this.current = index;
        }
    }
}
</script>

<style scoped lang="less">
    .btns{
        margin-bottom: 20px;
        span{
            cursor: pointer;
            border:1px #ddd solid;
            padding: 10px;
        }

        .active{
            color:red;
            border-color: red;
        }
    }


    img {
        height: 700px;
        }
</style>