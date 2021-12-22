<template>
    <div class="Product">
        <h1 class="Product-title wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.4s">
            <a href="/">新闻中心</a>
            <span>
                <i></i>
            </span>
        </h1>
        <div class="Product_content">
            <div class="Product_content_left" v-for="item in imgList" v-if="item.id==1">
                <p><img :src="item.url"></p>
                <div class="Product_content_left01">
                    <h2 style="margin-bottom: 20px;margin-right: 50px;font-size: 20px;">
                        <a href="/">{{item.name}}</a>

                    </h2>
                    <P style="color: #999;">
                        {{item.news}}
                    </P>
                </div>
            </div>
            <div class="Product_content_right">
                <div class="Product_content_right_i" v-for="item in pList">
                    <h2 style="margin-bottom: 20px;margin-right: 50px;font-size: 20px;">
                        <a href="/">{{item.name}}</a>
                    </h2>
                    <P style="color: #999;">
                        {{item.news}}
                    </P>
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
                imgList: [
                    {id: '1',url:require('../../../image/img-8.jpg'),name:'天鹜科技新闻标题1',
                        times:'2021-10-30',
                        news:' 天鹜科技新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容,\n' +
                            '                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容,\n' +
                            '                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v'
                    },
                ],
                pList:[
                    {id: '1',url:require('../../../image/img-8.jpg'),name:'天鹜科技新闻标题1',
                        times:'2021-11-16',
                        news:' 天鹜科技新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容,\n' +
                            '                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容,\n' +
                            '                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n                        news:\'新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v\'\n新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1新闻内容1v'
                    },
                    {id: '2',url:require('../../../image/img-5.jpg'),name:'天鹜科技新闻标题2',times:'2021-11-23',news:'天鹜科技新闻内容2新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'},
                    {id: '3',url:require('../../../image/img-6.jpg'),name:'天鹜科技新闻标题3',times:'2021-11-30',news:'天鹜科技新闻内容3新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'},
                ]
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
        height:550px;
        position: relative;
        float: left;
        top:110px;
        background-color: #fafafa;

    }
    .Product-title{
        width: 100%;
        height:100px;
        text-align: center;
        padding-top: 30px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .Product-title a{
        color: #333333;
        text-decoration: none;
    }
    .Product-title a:hover{
        color: #568ae1;
    }
    .Product-title span i{
        width: 200px;
        height: 10px;
        background: rgba(0,102,255,0.3);
        display: block;
        margin:0 auto;
    }
    .Product_content{
        width: 1200px;
        height: 400px;
        margin: 0 auto;
    }
    .Product_content_left{
        width: 45%;
        float: left;
        margin-right: 50px;
        height: 400px;

    }
    .Product_content_left img{
        width: 90%;
        height: 230px;
    }
    .Product_content_left01{
        width: 90%;
        height: 150px;
    }
    .Product_content_left01 p{
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    .Product_content_right{
        width: 608px;
        float: left;
        height: 400px;
    }
    .Product_content_right_i{
        width: 608px;
        height: 110px;
        margin-bottom: 20px;
    }
    .Product_content_right_i p{
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    .Product_content a{
        text-decoration: none;
        color: #333;
    }
    .Product_content a:hover{
        color: #568ae1;
    }

</style>