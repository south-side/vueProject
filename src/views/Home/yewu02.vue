<template>
    <div class="yewu">
        <div class="News-content">
            <div class="News-content_i">
                <div class="News-content-top" >
                    <ul style="list-style: none;padding-inline-start: 0;margin-block-start: 0;margin-block-end: 0;">
                        <div v-for="item in itemlist" class="li-content">
                            <div class="News-li">
                                <li :class="{active:istrue==item.id}" @click="istrue=clickitem(item.id)">{{item.content}}</li>
                            </div>
                        </div>

                    </ul>
                    <!-- <a href="/" class="News_left_btn"><i></i></a>
                    <a href="/" class="News_right_btn"><i></i></a> -->

                </div>
                <div  v-for="item in yanfaList">
                    <div v-show="istrue==item.id" class="News-content-bottom">
                        <div class="News-content-bottom-i" >
                            <h2>{{item.name }}</h2>
                            <p style="line-height: 34px">
                                {{item.content}}
                            </p>
                            <img src="../../image/img/img_8.png">
                            <p style="line-height: 34px">
                                {{item.content}}
                            </p>
                            <p style="line-height: 34px">
                                {{item.content}}
                            </p>
                            <p style="line-height: 34px">
                                {{item.content}}
                            </p>
                            <img src="../../image/img/img_8.png">
                            <img src="../../image/img/img_8.png">
                            <p style="line-height: 34px">
                                {{item.content}}
                            </p>
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
                    {id:0,name:'主营业务1',
                        content:'RBE-MD驱动的增强采样助力构效关系理解,RBE-MD驱动的增强采样助力构效关系理解,RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解RBE-MD驱动的增强采样助力构效关系理解'},
                    {id:1,name:'主营业务2',
                        content:'RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算RBE-MD驱动的结合自由能计算'},
                    {id:2,name:'主营业务3',
                        content:'De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成De novo分子生成'},
                    {id:3,name:'主营业务4',
                        content:'蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测蛋白质结构预测'},
                    {id:4,name:'主营业务5',
                        content:'AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接AI驱动的分子对接'},
                    {id:5,name:'主营业务6',
                        content:'蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测'},
                    {id:6,name:'主营业务7',
                        content:'多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测'},
                    {id:7,name:'主营业务8',
                        content:'蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测'},
                    {id:8,name:'主营业务9',
                        content:'多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测'},
                    {id:9,name:'主营业务10',
                        content:'蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测蛋白质相互作用预测'},
                    {id:10,name:'主营业务11',
                        content:'多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测多任务ADMET预测'},
                ],
                itemlist:[
                    {id:0,name:'主营业务1',
                        content:'主营业务1',class:"News-li"},
                    {id:1,name:'主营业务1',
                        content:'主营业务2',class:"News-li"},
                    {id:2,name:'De novo分子生成',
                        content:'主营业务3',class:"News-li"},
                    {id:3,name:'蛋白质结构预测',
                        content:'主营业务4',class:"News-li"},
                    {id:4,name:'AI驱动的分子对接',
                        content:'主营业务5',class:"News-li"},
                    {id:5,name:'蛋白质相互作用预测',
                        content:'主营业务6',class:"News-li"},
                    {id:6,name:'多任务ADMET预测',
                        content:'主营业务7',class:"News-li"},
                    {id:7,name:'多任务ADMET预测',
                        content:'主营业务8',class:"News-li"},
                    {id:8,name:'多任务ADMET预测',
                        content:'主营业务9',class:"News-li"},
                    {id:9,name:'多任务ADMET预测',
                        content:'主营业务10',class:"News-li"},
                    {id:10,name:'多任务ADMET预测',
                        content:'主营业务11',class:"News-li"},
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
        },
        methods:{
            clickitem(num,nownum)
            {
                nownum = this.istrue;
                console.log(num,nownum);
                if(num == 101)
                {
                    if(nownum<6)
                    {
                        nownum=nownum+1;
                    }
                    else
                    {
                        nownum=0
                    }

                }
                else if(num==100)
                {
                    if(nownum>0)
                    {
                        nownum=nownum-1;
                    }
                    else
                    {
                        nownum=6;
                    }
                }
                else{
                    nownum = num;
                }
                return nownum;
            }
        }
    }
</script>

<style>
    .yewu{
        width: 100%;
        height: 2600px;
        position: relative;
        float: left;
        top:110px;
    }
    .yewu .News-content{
        width: 100%;
        height: 780px;
    }
    .yewu .News-content_i{
        width: 90%;
        height: 780px;
        margin-left: 5%;
    }
    .yewu .News-content-top{
        width: 20%;
        height: 780px;
        position: relative;
        float: left;
        margin-top: 4%;
        border-right: 4px solid rgba(29, 110, 193, .3);
    }
    .yewu .News-li{
        float: left;
        width: 100%;
        height: 70px;
        text-align: center;
        line-height: 70px;
        font-size: 21px;
    }
    .yewu .News-li:hover{
        color: white;
        background-color: #264994;
        border-bottom: 4px solid #264994;
    }
    .yewu .active{
        color: white;
        background-color: #264994;
        border-bottom: 4px solid #264994;
    }
    .yewu .News-content-bottom{
        width: 72%;
        height: 2480px;
        margin-left:3%;
        float: left;
        position: relative;
        margin-top: 4%;
        background-color: white;
    }
    .yewu .News-content-bottom-i{
        width: 70%;
        height: 450px;
        position: absolute;
        left: 100px;
        top:20px;
    }
    .yewu .News-content-bottom-i h2{
        position: relative;
        top:20px;
        color: black;
        font-size: 30px;
        text-align: center;
    }
    .yewu .News-content-bottom-i p{
        position: relative;
        top:30px;
        color: black;
        font-size: 18px;
    }
    .yewu .News-content-bottom-i img{
        width: 100%;
        height: 300px;
        margin-top:60px;
    }
    .yewu .News-content-bottom-i a{
        position: relative;
        top:120px;
        color: black;
        text-decoration: none;
    }
</style>