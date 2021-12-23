<template>
    <div style="width:100%;height: 810px;top:110px;position: relative;float: left;background-color: #fafafa;">
        <h1 class="Pro-title wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.4s">
            <a href="/">核心技术</a>
            <span>
                <i></i>
            </span>
        </h1>
        <div style="width:100%;height: 70px;position: relative;
        float: left;" class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
            <el-row id="myMenu" >
                <el-row class="nav" style="border-top-left-radius: 0.4rem;border-top-right-radius: 0.4rem">
                    <el-row class="setPosition borderBox" v-for="(item,index) in list" :key="index" :style="styleList[indexList[index]]">
                        <p class="titleText" :style="styleList[indexList[index]].textStyle"
                           @click="moveToCenter(indexList[index])"
                           :class="{active:istrue ==item.id}"
                           v-on:click="istrue=item.id"
                        >
                            {{item.title}}</p>
                        <!-- <br>我取的是indexList[{{index}}]={{indexList[index]}} -->
                        <!-- <br>我是页面中展示的第{{indexList[index]}}位 -->
                    </el-row>
                </el-row>
            </el-row>
        </div>
        <div style="width: 100%;height: 500px;float:left;position: relative;top:46px;"
             class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
            <div v-for="(item,index) in yanfaList">
                <div style="width: 90%;margin-left: 5%;margin-right: 5%;float: left;position: relative;background-color: #568ae1;height: 500px;" v-show="istrue==item.id">
                    <img :src="item.url" style="width: 100%;height: 100%;border-bottom-right-radius: 0.4rem;
                        border-bottom-left-radius: 0.4rem">
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
</template>
<script>
    export default {
        data() {
            return {
                istrue:1,
                yanfaList:[
                    {id:1,url:require('../../../image/img/img_4.png'),name:'RBE-MD驱动的增强采样助力构效关系理解',
                        content:'RBE-MD驱动的增强采样助力构效关系理解,RBE-MD驱动的增强采样助力构效关系理解,RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解'},
                    {id:2,url:require('../../../image/img_11.png'),name:'RBE-MD驱动的结合自由能计算',
                        content:'RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算'},
                    {id:3,url:require('../../../image/img/img_9.png'),name:'De novo分子生成',
                        content:'De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成'},
                    {id:4,url:require('../../../image/img/img_10.png'),name:'蛋白质结构预测',
                        content:'蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测'},
                    {id:5,url:require('../../../image/img/img_8.png'),name:'AI驱动的分子对接',
                        content:'AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接'},
                    {id:6,url:require('../../../image/img/img_11.png'),name:'蛋白质相互作用预测',
                        content:'蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测'},
                    {id:0,url:require('../../../image/img/img_10.png'),name:'多任务ADMET预测',
                        content:'多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测'},

                ],
                list: [
                    { id:1,title: "增强采样助力构效关系" }, { id:2,title: "结合自由能计算" },
                    { id:3,title: "De novo分子" }, { id:4,title: "蛋白质结构预测" },
                    { id:5,title: "AI驱动的分子对接" },{id:6,title: "蛋白质相互作用预测"},{id:0,title: "多任务ADMET预测"}

                ],
                indexList: [], //下标列表
                centerNum: 0, //中间位置的下标
                theFirstIndex: 0, //存储页面展示的数组中第一位下标
                theLastIndex: 0, //存储页面展示的数组中最后一位下标
                styleList: [
                    {
                        width: "225px",
                        height: "70px",
                        left: "-240px",
                        transition: "none",
                        textStyle: {
                            fontSize: "18px",
                            lineHeight: "28px",
                            transition: "none",
                        }
                    },
                    {
                        width: "225px",
                        height: "70px",
                        left: "0",
                        transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
                        textStyle: {
                            fontSize: "18px",
                            lineHeight: "70px",
                            transition: "font-size 0.4s linear, line-height 0.4s linear",

                        }
                    },
                    {
                        width: "225px",
                        height: "70px",
                        left: "268px",
                        transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
                        textStyle: {
                            fontSize: "18px",
                            lineHeight: "70px",
                            transition: "font-size 0.4s linear, line-height 0.4s linear",

                        }
                    },
                    {
                        width: "225px",
                        height: "70px",
                        left: "536px",
                        transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
                        textStyle: {
                            fontSize: "18px",
                            lineHeight: "70px",
                            transition: "font-size 0.4s linear, line-height 0.4s linear",
                        }
                    },
                    {
                        width: "225px",
                        height: "70px",
                        left: "804px",
                        transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
                        textStyle: {
                            fontSize: "18px",
                            lineHeight: "70px",
                            transition: "font-size 0.4s linear, line-height 0.4s linear",
                        }
                    },
                    {
                        width: "225px",
                        height: "70px",
                        left: "1072px",
                        transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
                        textStyle: {
                            fontSize: "18px",
                            lineHeight: "70px",
                            transition: "font-size 0.4s linear, line-height 0.4s linear"
                        }
                    },
                    {
                        width: "225px",
                        height: "70px",
                        left: "1350px",
                        transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
                        textStyle: {
                            fontSize: "18px",
                            lineHeight: "70px",
                            transition: "none"
                        }
                    },
                    {
                        width: "225px",
                        height: "70px",
                        left: "1560px",
                        transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
                        textStyle: {
                            fontSize: "18px",
                            lineHeight: "70px",
                            transition: "none"
                        }
                    },
                    {
                        width: "225px",
                        height: "70px",
                        left: "1820px",
                        transition: "none",
                        textStyle: {
                            fontSize: "18px",
                            lineHeight: "70px",
                            transition: "none"
                        }
                    },
                ]
            };
        },
        created() {
            this.initIndexList(9);
            this.initList(0);
            this.centerNum = 3;
        },
        methods: {
            //初始化下标数组，num为数组长度
            initIndexList(num) {
                this.indexList = [];
                for (var i = 0; i < num; i++) {
                    this.indexList[i] = i;
                }
            },
            //初始化菜单数组，在首尾添加新元素
            initList(num) {
                const that = this;
                var start = [];
                var mid = [];
                var end = [];
                var newArray = [];
                if (num == 0) {
                    //页面初次加载时执行
                    mid = that.list;
                    end = mid.slice(0, 1);
                    start = mid.slice(mid.length - 1, mid.length);
                    newArray = start.concat(mid);
                    that.list = newArray.concat(end);
                    //记录改变后的数组在页面展示的第一位（取styleList[1]样式）下标值（即indexList.indexOf(1)）
                    that.theFirstIndex = that.indexList.indexOf(1);
                    that.theLastIndex = that.indexList.indexOf(that.list.length - 2);
                } else {
                    //移动后执行
                    mid = that.list.slice(1, that.list.length - 1);
                    end = that.list.slice(that.theFirstIndex, that.theFirstIndex + 1);
                    start = that.list.slice(that.theLastIndex, that.theLastIndex + 1);
                    var startIndex = 0;
                    var endIndex = 0;
                    if (that.theFirstIndex <= 0) {
                        startIndex = that.indexList.length - 1;
                    } else {
                        startIndex = that.theFirstIndex - 1;
                    }
                    if (that.theLastIndex >= that.indexList.length - 1) {
                        endIndex = 0;
                    } else {
                        endIndex = that.theLastIndex + 1;
                    }
                    that.list[startIndex] = start[0];
                    that.list[endIndex] = end[0];
                }
            },
            moveToCenter(index) {
                const that = this;
                var count = this.centerNum;
                if (index > count) {
                    that.moveToLeft();
                    var interval = setInterval(function() {
                        if (index > count + 1) {
                            that.moveToLeft();
                            count++;
                        } else {
                            clearInterval(interval);
                        }
                    }, 4 * 100);
                } else if (index < count) {
                    that.moveToRight();
                    var interval = setInterval(function() {
                        if (index < count - 1) {
                            that.moveToRight();
                            count--;
                        } else {
                            clearInterval(interval);
                        }
                    }, 4 * 100);
                }
            },
            //菜单整体向左移一位，下标数组向右移一位
            moveToRight() {
                this.styleList[0].transition = "none";
                this.styleList[0].textStyle.transition = "none";
                this.styleList[this.styleList.length - 1].transition = "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear";
                this.styleList[this.styleList.length - 1].textStyle.transition = "font-size 0.4s linear, line-height 0.4s linear";
                this.indexList = this.indexList.splice(1, this.indexList.length).concat(this.indexList);
                if (this.theFirstIndex <= 0) {
                    this.theFirstIndex = this.indexList.length - 1;
                } else {
                    this.theFirstIndex--;
                }
                if (this.theLastIndex <= 0) {
                    this.theLastIndex = this.indexList.length - 1;
                } else {
                    this.theLastIndex--;
                }
                this.initList(1);
            },
            //菜单 整体向右移一位，下标数组向左移一位
            moveToLeft() {
                this.styleList[this.styleList.length - 1].transition = "none";
                this.styleList[this.styleList.length - 1].textStyle.transition = "none";
                this.styleList[0].transition = "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear";
                this.styleList[0].textStyle.transition = "font-size 0.4s linear, line-height 0.4s linear";
                this.indexList = this.indexList.splice(this.indexList.length - 1, this.indexList.length).concat(this.indexList);
                if (this.theFirstIndex >= this.indexList.length - 1) {
                    this.theFirstIndex = 0;
                } else {
                    this.theFirstIndex++;
                }
                if (this.theLastIndex >= this.indexList.length - 1) {
                    this.theLastIndex = 0;
                } else {
                    this.theLastIndex++;
                }
                this.initList(1);
            }
        }
    };
</script>
<style scoped>
    .Pro-title{
        width: 100%;
        height:100px;
        text-align: center;
        padding-top: 30px;
        margin-block-start: 0;
        margin-block-end: 0;

    }
    .Pro-title a{
        color: #333333;
        text-decoration: none;
    }
    .Pro-title span i{
        width: 200px;
        height: 10px;
        background: rgba(0,102,255,0.3);
        display: block;
        margin:0 auto;
    }
    #myMenu {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 90%;
        margin: 0 auto;
        height: 70px;
        border-bottom: 4px solid rgba(29, 110, 193, .3);
    }
    .nav {
        width: 100%;
        height: 70px;
        margin: 0 auto;
        overflow: hidden;
    }
    .setPosition {
        position: absolute;
    }
    .borderBox {
        text-align: center;
        height: 70px;
    }
    p{
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .titleText {
        text-align: center;
        cursor: pointer;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .active{
        color: white;
        background-color: #264994;
        border-bottom: 4px solid #264994;
    }
    .titleText:hover{
        color: white;
        background-color: #264994;
        border-bottom: 4px solid #264994;
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
        font-size: 18px;
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
