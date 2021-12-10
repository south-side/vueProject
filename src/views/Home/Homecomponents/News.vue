<template>
    <div class="Product">
        <h1 class="Product-title wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.4s">
            <a href="/">新闻中心</a>
        </h1>
        <el-carousel :interval="4000" type="card" height="400px" class="wow rotateIn">
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <div class="Product-content wow rotateIn" data-wow-duration="1s" data-wow-delay="1s">
                    <img :src="item.url">
                    <div class="Product-content01">
                        <h1 style="color: #000;text-align:center;padding-top: 10px">{{item.name}}</h1>
                        <p style="font-size: 18px;padding-right: 20px;padding-top: 10px">
                            {{item.news}}
                        </p>
                        <a href="">了解更多>></a>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import {WOW} from 'wowjs';
    export default {
        name: "",
        data(){
            return {
                imgList: [
                    {id: '1',url:require('../../../image/img-4.jpg'),name:'新闻标题1',
                        news:'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v'
                    },
                    {id: '2',url:require('../../../image/img-5.jpg'),name:'新闻标题2',news:'新闻内容2'},
                    {id: '3',url:require('../../../image/img-6.jpg'),name:'新闻标题3',news:'新闻内容3'},
                    {id: '4',url:require('../../../image/img-7.jpg'),name:'新闻标题1',
                        news:'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v'
                    },
                    {id: '5',url:require('../../../image/img-8.jpg'),name:'新闻标题2',news:'新闻内容2'},
                    {id: '6',url:require('../../../image/img-9.jpg'),name:'新闻标题3',news:'新闻内容3'},


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
    .Product{
        width:100%;
        height:670px;
        position: relative;
        float: left;
    }
    .Product-title{
        width: 100%;
        height:100px;
        text-align: center;
        padding-top: 20px;
    }
    .Product-title a{
        color:#568ae1;
        text-decoration: none;
        border-bottom: 1px solid #568ae1;
        padding-bottom: 20px;
    }
    .Product .el-carousel__container{
        width: 100%;
        height:500px;
        margin-top: 20px;
    }
    .Product-content{
        height: 400px;
        width: 100%;
        overflow: hidden;

    }
    .Product .el-carousel__item img{
        height: 100%;
        margin: 0;
        width: 100%;
        transition: all 0.6s;
    }
    .Product .el-carousel__item img :hover{
        transform: scale(1.4);
    }
    .Product-content01{
        width: 50%;
        height: 100%;
        background: white;
        opacity: 0.7;
        position: absolute;
        margin-left: 50%;
        z-index: 11;
        top:0;
    }
    .Product-content01 p{
        overflow: hidden;
        -webkit-line-clamp: 5;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        font-size: 15px;
        padding-left: 25px;
        padding-right: 25px;
        color: #000;
    }
    .Product-content01 a{
        float: left;
        text-decoration: none;
        font-size: 15px;
        font-weight: bold;
        color: #000;
        padding-top: 40px;
        padding-left: 40px;
    }
    .Product-content01 a:hover{
        color: darkgreen;
    }


    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>