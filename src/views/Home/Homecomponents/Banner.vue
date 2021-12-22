<template>
    <div class="block">
        <div class="btn">
            <span class="block_span" @click='checkVideoFun()'>
            </span>
            <span   class="block_p">点击观看</span>
            <div class='mask' v-if="videoState == true" @click='masksCloseFun'></div>
            <div class="videomasks" v-if="videoState == true">
                <video controls='controls'>
                    <source src="../../../image/2.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <el-carousel height="560px">
            <el-carousel-item v-for="item in imgList" :key="item.id" >
                <img :src="item.url" class="image"> </el-carousel-item>
        </el-carousel> </div> </template>
<script>
    import {WOW} from "wowjs"; export default {
        name: 'index', data(){
            return {
                imgList: [
                    {id: '1',url:require('../../../image/img_11.png'),css:'block-content-1',m:'1s'},
                    {id: '2',url:require('../../../image/img_11.png'),css:'block-content-2',m:'2s'},
                    {id: '3',url:require('../../../image/img_11.png'),css:'block-content-3',m:'3s'},
                ],
                videoState:false,
                hasError: true };
        },
        mounted(){
            //new WOW().init();  直接引用，默认配置，如果需要修改配置用下面的一段代码
            let wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init();
        }, methods:{
            //点击按钮出现弹窗播放视频
            checkVideoFun(){
                this.$confirm('点击是否观看此视频, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }).then(() => {
                    this.videoState = true;
                }).catch(() => {
                    this.videoState = false;
                });
            },
            masksCloseFun(){
                this.videoState = false;
            }
        }
    }
</script>
<style>
    .block .show{
        opacity: 1; }
    .block .btn{
        width: 230px;
        height: 230px;
        right: 20px;
        top:380px;
        position: fixed;
        z-index: 999;
        line-height: 229px;
        text-align: center;
    }
    .block_span{
        position: fixed;
        top:380px;
        width: 227px;
        height: 229px;
        right: 20px;
        transition: 1s;
        background: url("../../../../src/image/img/img.png") no-repeat;
        animation: run_animation 12s linear infinite;
    }
    .block_p{
        font-size: 20px;
        color: white;

    }
    .block_p:hover{
        transform: scale(1.5);
    }
    .block .btn .mask{
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:10; background-color: #000000; opacity: .6;
    }
    .block .btn .videomasks{
        max-width: 1400px; position: fixed;
        left: 50%;
        top: 55%;
        z-index: 20;
        transform: translate(-40%,-40%); width: 800px;
        height: 450px;
    }
    .videomasks video{
        width: 100%;
        height: 100%; }


    .block{
        position: relative; float: left; width:100%; height: 560px; z-index: 998; top:110px
    }
    .block .image{
        width: 100%;
        height: 560px; }
    @keyframes run_animation{ from {
        transform: rotatez(0deg); }
        to {
            transform: rotatez(360deg);
        } }
</style>