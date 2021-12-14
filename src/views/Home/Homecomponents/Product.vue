<template>
    <div class="News">
        <h1 class="News-title wow fadeInRight " data-wow-duration="1s" data-wow-delay="0.4s">
            <a href="/">产品中心</a>
        </h1>
        <div class="News-content ">
            <el-row>
                <el-col :span="8" v-for="item in imgList" :key="item.id">
                    <el-card :body-style="{ padding: '0px' }" class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.5s">
                        <a href="/">
                            <img :src="item.url" class="image">
                            <div style="padding: 15px;">
                                <h3>{{item.name}}</h3>
                                <p>{{item.news}}</p>
                            </div>
                        </a>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {WOW} from 'wowjs';
    export default {

        name: "",
        data(){
            return {
                imgList: [
                    {id: '1',url:require('../../../image/img-1.jpg'),name:'新闻标题1',
                        news:'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v'
                    },
                    {id: '2',url:require('../../../image/img-2.jpg'),name:'新闻标题2',news:'新闻内容2'},
                    {id: '3',url:require('../../../image/img-3.jpg'),name:'新闻标题3',news:'新闻内容3'},
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
        height: 600px;
        position: relative;
        float: left;
    }
    .News-title{
        width: 100%;
        height:100px;
        text-align: center;
        padding-top: 20px;
    }
    .News-title a{
        color: #568ae1;
        text-decoration: none;
        border-bottom: 1px solid #568ae1;
        padding-bottom: 20px;
    }
    .News-content{
        width: 100%;
        height: 420px;
    }
    .News-content .el-row{
        width: 100%;
        height: 400px;
    }
    .News-content .el-col-8{
        margin-left:30px;
        height: 400px;
        width: 30%;
    }
    .News-content .el-card{
        height: 100%;
        width: 100%;
    }
    .News-content img{
        width: 100%;
        height: 220px;
    }

    .News-content a{
        text-decoration: none;
        color: #4F4F4F;
    }
    .News-content a:visited{
        text-decoration: none;
        color: #4F4F4F;
    }
    .News-content a:hover{
        text-decoration: none;
        color: #568ae1;
    }
    .News-content h3{
        width: 100%;
        text-align: center;
        margin-block-start:0;
        margin-block-end:0;
        overflow: hidden;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    .News-content p{
        overflow: hidden;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        font-size: 16px;
        text-indent:2em;
    }
</style>