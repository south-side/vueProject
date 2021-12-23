<template>
    <div class="News">
        <h1 class="News-title wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.4s">
            <a href="/">核心技术</a>
            <span>
                <i></i>
            </span>
        </h1>
        <div class="News-content">
            <div class="News-content_i">
                <div class="News-content-top" >
                    <ul style="list-style: none;padding-inline-start: 0;margin-block-start: 0;margin-block-end: 0;">
                        <li class="News-li" style="margin-right: 2.5%;border-top-left-radius: 0.4rem" :class="{active:istrue ==0}" @click="istrue=0">
                            增强采样助力构效关系
                        </li>
                        <li class="News-li" style="margin-right: 2.5%" :class="{active:istrue ==1}" @click="istrue=1">
                            结合自由能计算
                        </li>
                        <li class="News-li" style="margin-right: 2.5%" :class="{active:istrue ==2}" @click="istrue=2">
                            De novo分子生成
                        </li>
                        <li class="News-li" style="margin-right: 2.5%" :class="{active:istrue ==3}" @click="istrue=3">
                            蛋白质结构预测
                        </li>
                        <li class="News-li" :class="{active:istrue ==4}" @click="istrue=4" style="border-top-right-radius: 0.4rem">
                            AI驱动的分子对接
                        </li>
                        <li class="News-li" :class="{active:istrue ==5}" @click="istrue=5" style="border-top-right-radius: 0.4rem">
                            蛋白质相互作用预测
                        </li>
                        <li class="News-li" :class="{active:istrue ==6}" @click="istrue=6" style="border-top-right-radius: 0.4rem">
                            多任务ADMET预测
                        </li>
                    </ul>
                    <!--
                    <a href="/" class="News_left_btn"><i></i></a>
                    <a href="/" class="News_right_btn"><i></i></a>
                    -->
                </div>
                <div  v-for="item in yanfaList">
                    <div v-show="istrue==item.id" class="News-content-bottom">
                        <img :src="item.url" >
                        <div style="background: rgba(0,0,0,.3);width: 100%;height: 100%;position:absolute;
                        left: 0;top:0;border-bottom-right-radius: 0.4rem;
                        border-bottom-left-radius: 0.4rem">
                        </div>
                        <div class="News-content-bottom-i" >
                            <h2>{{item.name }}</h2>
                            <p style="line-height: 34px">
                                {{item.content}}
                            </p>
                            <a href="/">
                                详情  >>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {WOW} from 'wowjs';
    export default {

        name: "",
        data(){
            return {
                istrue:0,
                yanfaList:[
                    {id:0,url:require('../../../image/img-4.jpg'),name:'RBE-MD驱动的增强采样助力构效关系理解',
                    content:'RBE-MD驱动的增强采样助力构效关系理解,RBE-MD驱动的增强采样助力构效关系理解,RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解'},
                    {id:1,url:require('../../../image/img_11.png'),name:'RBE-MD驱动的结合自由能计算',
                        content:'RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算'},
                    {id:2,url:require('../../../image/img-1.jpg'),name:'De novo分子生成',
                        content:'De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成'},
                    {id:3,url:require('../../../image/img_11.png'),name:'蛋白质结构预测',
                        content:'蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测'},
                    {id:4,url:require('../../../image/img-1.jpg'),name:'AI驱动的分子对接',
                        content:'AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接'},
                    {id:5,url:require('../../../image/img_11.png'),name:'蛋白质相互作用预测',
                        content:'蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测'},
                    {id:6,url:require('../../../image/img-1.jpg'),name:'多任务ADMET预测',
                        content:'多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测'},

                ],
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
        }

    }
</script>

<style>
    .News{
        width: 100%;
        height: 800px;
        position: relative;
        float: left;
        top:110px;
        background-color: #fafafa;
    }
    .News-title{
        width: 100%;
        height:100px;
        text-align: center;
        padding-top: 30px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .News-title a{
        color: #333333;
        text-decoration: none;
    }
    .News-title span i{
        width: 200px;
        height: 10px;
        background: rgba(0,102,255,0.3);
        display: block;
        margin:0 auto;
    }
    .News-content{
        width: 100%;
        height: 740px;
    }
    .News-content_i{
        width: 90%;
        height: 720px;
        margin-left: 5%;
    }
    .News-content-top{
        width: 100%;
        height: 70px;
        position: relative;
        border-bottom: 4px solid rgba(29, 110, 193, .3);
    }
    .News-li{
        float: left;
        width: 18%;
        height: 70px;
        text-align: center;
        line-height: 70px;
        font-size: 21px;
    }
    .News-li:hover{
        color: white;
        background-color: #264994;
        border-bottom: 4px solid #264994;
    }
    .active{
        color: white;
        background-color: #264994;
        border-bottom: 4px solid #264994;
    }
    .News_left_btn{
        display: block;
        height: 620px;
        width: 50px;
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 2;
        left: -50px;
    }
    .News_right_btn{
        display: block;
        height: 530px;
        width: 50px;
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 2;
        right: -50px;
    }

    .News-content-bottom{
        background-color: #145096;
        width: 100%;
        height: 500px;
        float: left;
        position: relative;
        top:46px
    }
    .News-content-bottom img{
        width: 100%;
        height: 500px;
        border-bottom-right-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
    }
    .News-content-bottom-i{
        width: 70%;
        height: 450px;
        position: absolute;
        left: 180px;
        top:60px;
    }
    .News-content-bottom-i h2{
        position: relative;
        top:40px;
        color: snow;
        font-size: 30px;
    }
    .News-content-bottom-i p{
        position: relative;
        top:80px;
        color: snow;
        font-size: 18px;
    }
    .News-content-bottom-i a{
        position: relative;
        top:120px;
        color: white;
        text-decoration: none;
    }


</style>