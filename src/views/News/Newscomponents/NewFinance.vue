<template>
    <div class="NewsResearch">
        <div class="NewsResearch-up">
            <p style="height: 90px;text-align: center;line-height: 90px">
                <el-button style="height: 70px">抢先看>></el-button>
            </p>
            <el-carousel height="480px" :interval="5000" arrow="always">
                <el-carousel-item v-for="item in nList" :key="item">
                    <div class="NewsResearch-left">
                        <img :src="item.url">
                    </div>
                    <div class="NewsResearch-right">
                        <h2 style="text-align: center;color: black;padding-top: 20px">{{item.title}}</h2>
                        <p class="el-icon-date" style="text-indent: 1em;color: black;margin-block-start: 0;margin-block-end: 3em;">
                            &nbsp;&nbsp;&nbsp;{{item.time}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;发布人：{{item.name}}
                        </p>
                        <p style="overflow: hidden;
                                    -webkit-line-clamp: 7;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    text-indent: 2em;
                                    color: black;width: 90%;margin: 0 auto;">
                            {{item.des}}
                        </p>

                        <br/>
                        <el-button style="margin-left: 30px;margin-top: 30px">了解更多>></el-button>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="NewsResearch-down">
            <p style="height: 80px;text-align: center;line-height: 80px">
                <el-button style="height: 70px">新闻详情>></el-button>
            </p>
            <div v-for="items in newList">
                <ul class="ResearchList">
                    <li>
                        <router-link to="/" class="router">
                            <div>
                                <img :src="items.url" style="height: 200px;width:100%;background-repeat:no-repeat;
                                background-position: center;background-size: 100% 100%;transition: all 0.4s;
                                -moz-transition:all .4s;
                                -webkit-transition:all .4s;-o-transition:all .4s;">
                                <h2 style="text-align: center;color: black;">{{items.title}}</h2>
                                <p style="overflow: hidden;
                                    -webkit-line-clamp: 2;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    text-indent: 2em;
                                    color: black">
                                    {{items.des}}
                                </p>
                                <p class="el-icon-date" style="text-indent: 1em;color: black">&nbsp;&nbsp;&nbsp;{{items.time}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="NewsResearch-btn">
            <el-button style="margin-top: 30px;">了解更多>></el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                newList:[
                    {
                        id:'1',title:'合作开发',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'技术研究技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究技术研究技术研究技术研究技术研究技术研究技术研究！'
                    },
                    {id:'2',title:'合作开发',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究技术研究技术研究'
                    },
                    {id:'3',title:'合作开发',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究技术研究技术研究'
                    },
                    {id:'4',title:'合作开发',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究技术研究技术研究'
                    },
                    {id:'5',title:'合作开发',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究技术研究技术研究'
                    },
                    {id:'6',title:'合作开发',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究技术研究技术研究'
                    },
                    {id:'7',title:'合作开发',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究技术研究技术研究'
                    },
                    {id:'8',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究技术研究技术研究'
                    },
                    {id:'9',title:'智慧融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究技术研究技术研究'
                    },
                ],
                nList:[
                    {
                        id:'1',title:'融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',name:'紫菱',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，'
                    },
                    {id:'2',title:'融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',name:'紫菱',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，！技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，'
                    },
                    {id:'3',title:'融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',name:'紫菱',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，！技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，'
                    },
                    {id:'4',title:'融资',url:require('../../../image/img-4.jpg'),time:'2020-10-30',name:'紫菱',
                        des:'技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，！技术研究技术研究技术研究，技术研究技术研究技术研究技术研究技术研究，'
                    },
                ]
            }
        }
    }
</script>

<style>
    .NewsResearch{
        width: 100%;
        height: 2200px;
        position: relative;
        float: left;
    }
    .NewsResearch-up{
        width: 100%;
        height: 700px;
        position: relative;
        float: left;
        border-radius: 30px;
    }
    .NewsResearch-left{
        width: 40%;
        height: 480px;
        position: relative;
        float: left;
    }
    .NewsResearch-left img{
        width: 100%;
        height: 100%;
    }
    .NewsResearch-up .el-carousel{
        margin-top: 50px;
        border-radius:30px;
    }
    .NewsResearch-up .el-carousel-item{
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius:30px;
    }
    .NewsResearch-up .el-carousel__item:nth-child(2n) {
        background-color: white;
    }

    .NewsResearch-up .el-carousel__item:nth-child(2n+1) {
        background-color: white;
    }
    .NewsResearch-right{
        width: 60%;
        height: 480px;
        position: relative;
        float: left;
        background-color: rgb(66, 110, 185,0.7);
    }
    .NewsResearch-right a:hover{
        color: #568ae1;
    }

    .NewsResearch-down{
        width: 100%;
        height: 1400px;
        position: relative;
        float: left;
    }
    .ResearchList{
        width: 100%;
        list-style: none;
    }
    .ResearchList li{
        width: 30%;
        height: 400px;
        float: left;
        list-style:none;
        padding:0; /* 将默认的内边距去掉 */
        margin:15px;
        background-color:white;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .24), 0 0 6px rgba(0, 0, 0, .14);
    }
    .NewsResearch-btn{
        width: 100%;
        height: 100px;
        text-align: center;

    }
    .router h2:hover{
        color: #568ae1;
    }


</style>