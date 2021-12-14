<template>
    <div class="block">
        <div class="btn">
            <el-button type="primary" round @click='checkVideoFun()' >点此观看</el-button> <div class='mask' v-if="videoState == true" @click='masksCloseFun' ></div>
            <div class="videomasks" v-if="videoState == true">
                <video controls='controls'>
                    <source src="../../../image/2.mp4" type="video/mp4" /> </video>
            </div>
        </div>
        <el-carousel height="600px">
            <el-carousel-item v-for="item in imgList" :key="item.id" >
                <img :src="item.url" class="image">
                <div :id="item.css"
                     v-for="items in pList"
                     v-if="items.id==item.id" >
                    <div  v-bind:class="{'wow fadeInUp': items.isActive}">
                        <h1>{{items.title}}</h1>
                        <p>{{items.msg}}</p>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel> </div>
</template>

<script>

    import {WOW} from "wowjs";
    export default {
        name: 'index',
        data(){
            return {
                imgList: [
                    {id: '1',url:require('../../../image/img_1.png'),css:'block-content-1',m:'1s'},
                    {id: '2',url:require('../../../image/img_2.png'),css:'block-content-2',m:'2s'},
                    {id: '3',url:require('../../../image/bizhi.jpg'),css:'block-content-3',m:'3s'},


                ],

                pList:[
                    {
                        id: '1',
                        title:'XXXXXXXXXXX研发平台',
                        msg:'333333333333333333333333333333333',
                        isActive: true,
                    },
                    {
                        id: '2',
                        title:'XXXXXXXXXXXX研发平台',
                        msg: '444433333333333333333333333333',
                        isActive: true,
                    },
                    {
                        id: '3',
                        title:'XXXXXXXXXXX研发平台',
                        msg:'5555555555555555555555555555',
                        isActive: true,
                    },
                ],
                videoState:false,
                hasError: true
            };
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

        },
        methods:{
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
        opacity: 1;
    }
    .block .btn{
        position: absolute;

    }
    .block .btn li{
        list-style: none;
        float: left;
    }
    .block .btn .mask{
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:10;
        background-color: #000000;
        opacity: .6;
    }

    .block .btn .videomasks{
        max-width: 1200px;
        position: fixed;
        left: 50%;
        top: 55%;
        z-index: 20;
        transform: translate(-40%,-40%);
        width: 700px;
        height: 550px;
       }
    .videomasks video{
        width: 100%;
        height: 100%;
    }

    .block{
        position: relative;
        float: left;
        width:100%;
        height: 600px;
    }
    .block .image{
        width: 100%;
        height: 600px;
    }
    .btn{
        position: fixed;
        z-index: 999;
        width: 130px;
        height: 40px;
        top:550px;
        right: 0;
        transition: 1s;
    }
    .btn .el-button:hover{
        transform: scale(1.5);
    }
    #block-content-1{
        background-color: rgb(86, 138, 225,0.4);
        width: 450px;
        height:450px;
        position: absolute;
        border-radius:50%;
        top:75px;
        left: 80px;

    }
    #block-content-2{
        background-color: rgb(255,255,255,0.4);
        width: 450px;
        height:450px;
        position: absolute;
        top:75px;
        left: 80px;
        border-radius:30%;
    }
    #block-content-3{
        background-color: rgb(255,255,255,0.4);
        width: 450px;
        height: 450px;
        position: absolute;
        top:75px;
        left: 80px;
        border-radius:30%;
    }
    .block h1{
        color: white;
        padding-top:90px;
        text-align: center;
    }
    .block p{
        color: white;
        text-align: center;
        padding-top: 20px;
        font-size: 17px;
        text-indent: 2em;
        overflow: hidden;
        -webkit-line-clamp: 2;
    }


</style>