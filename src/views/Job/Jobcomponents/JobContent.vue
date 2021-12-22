<template>
    <div class="JobContent">
        <div class="Job-img">
            <img src="../../../image/img-8.jpg">
            <div class="areaList">
                <table style="margin: 0 auto;">
                    <tr>
                        <td v-for="items in areaList"   @click = "tab=items.name" :class="{tab_active:tab==items.name}"
                            class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s"
                        >
                            <a v-on:click="true" class="el-icon-location" >{{items.name}}</a>
                        </td>
                    </tr>
                </table>
            </div>
            <div v-for="items in areaList">
                <transition name="fade">
                    <div v-show="tab == items.name" class="JobAll" >
                        <p style="text-align: center;font-size: 30px;font-weight: bold;color: #568ae1">{{items.name}}</p>
                        <ul style="margin-block-start: 0;margin-block-end: 0;list-style: none;width: 80%;margin-left: 10%" v-for="(item,index) in jobList" v-if="item.name==items.name" >
                            <li  class="JobList" @click="dialogTableVisible = item.id" :class="{dialog_active:dialogTableVisible==item.id}" >
                                <div class="jobId" >
                                    <div class="JobName01">
                                        <p style="color: rgb(7, 113, 133);font-weight: bold;text-align: center;font-size: 27px">
                                            {{item.post}}
                                        </p>
                                        <br/>
                                        <p style="color: #656870;margin-left:15px;font-size: 17px">
                                            发布时间：{{item.time}}
                                        </p>
                                        <p style="color: #58616d;margin-left:15px;font-size: 17px" >
                                            招聘区域：{{item.name}}
                                        </p>
                                        <br/>
                                        <p style="color: #58616d;margin-left:15px;font-size: 15px" >
                                            了解更多>>
                                        </p>
                                    </div>
                                    <div class="JobName02">
                                        <p style="font-size: 18px;padding: 5px;text-align: left;">
                                            【岗位描述】
                                        </p>
                                        <ul style="overflow: hidden;
                                    -webkit-line-clamp: 3;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;margin-left: 15px">
                                            <li v-for="item01 in item.descriptionList01" style="margin: 7px">
                                                {{item01.description}}
                                            </li>
                                        </ul>
                                        <p style="font-size: 18px;padding: 5px;text-align: left;">
                                            【岗位要求】
                                        </p>
                                        <ul style="overflow: hidden;
                                    -webkit-line-clamp: 2;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;margin-left: 15px">
                                            <li v-for="item01 in item.descriptionList01" style="margin: 7px;">
                                                {{item01.require}}
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <div v-show="dialogTableVisible==item.id">
                                <el-dialog z-index="9999"
                                           :visible.sync="dialogTableVisible"
                                           width="80%"
                                >
                                    <div>
                                        <p style="color: rgb(7, 113, 133);font-weight: bold;text-align: center;font-size: 27px">
                                            {{item.post}}
                                        </p>
                                        <p style="color: black;text-align: center;font-size: 24px" class="el-icon-location">
                                            招聘区域：{{item.name}}
                                        </p>
                                        <br/>
                                        <p style="color: black;font-size: 24px" class="el-icon-date">
                                            发布时间：{{item.time}}
                                        </p>
                                        <br/>
                                        <p style="color: black;font-size: 24px" class="el-icon-message">
                                            <a href="mailto:hr@sufarm.com" style="text-decoration: none; color: black;font-weight: bold">
                                                简历投递：XXXXX@stonewise.cn
                                            </a>
                                        </p>
                                        <br/>
                                        <hr/>
                                        <p style="font-size: 24px;padding: 9px;text-align: left;">
                                            岗位描述：
                                        </p>
                                        <ul>
                                            <li v-for="item01 in item.descriptionList01" style="padding: 5px">
                                                {{item01.description}}
                                            </li>
                                        </ul>
                                        <p style="font-size: 24px;padding: 9px;text-align: left;">
                                            岗位要求：
                                        </p>
                                        <ul>
                                            <li v-for="item01 in item.descriptionList01" style="padding: 5px;">
                                                {{item01.require}}
                                                <br>
                                            </li>

                                        </ul>
                                        <br><br><br><br><br><br>

                                    </div>
                                </el-dialog>

                            </div>
                        </ul>
                    </div>
                </transition>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                tab:'北京',
                dialogTableVisible: null,
                pageSize:1,
                currentPage:1,
                total:'',
                areaList:[
                    {id:'1',name:'北京',src:'/cityJob01'},
                    {id:'2',name:'上海',src:'/cityJob02'},
                    {id:'3',name:'南京',src:'/cityJob03'},
                    {id:'4',name:'杭州',src:'/cityJob04'},
                    {id:'5',name:'苏州',src:'/cityJob05'},
                ],
                jobList:[
                    {id:'0',post:'测试工程师',time:'2021-09-10',name:'北京',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                    {id:'1',post:'测试工程师2',time:'2021-09-10',name:'上海',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                    {id:'2',post:'测试工程师3',time:'2021-02-10',name:'北京',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                    {id:'3',post:'测试工程师4',time:'2021-09-10',name:'上海',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                    {id:'4',post:'测试工程师',time:'2021-09-10',name:'北京',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                    {id:'5',post:'测试工程师',time:'2021-09-10',name:'苏州',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                    {id:'6',post:'测试工程师',time:'2021-09-10',name:'杭州',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                    {id:'7',post:'测试工程师',time:'2021-09-10',name:'南京',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                    {id:'8',post:'测试工程师',time:'2021-09-10',name:'北京',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                    {id:'9',post:'测试工程师',time:'2021-09-10',name:'上海',
                        descriptionList01:[
                            {key:'1',description:'岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require:'岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求',
                            },
                            {key:'2',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'3',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                            {key:'4',description: '岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述',
                                require: '岗位要求岗位要求岗位要求岗位要求岗位要求'},
                        ],
                    },
                ],
            }
        },
        methods:{
            greet: function () {
            }
        }

    }
</script>

<style>
    .JobContent{
        width: 100%;
        position: relative;
        float: left;
        overflow: hidden;
        top:110px;
    }
    .Job-img{
        width: 100%;
        margin: 0 auto;
    }
    .Job-img img{
        width: 100%;
        height: 400px;
        margin: 0 auto;
    }
    .areaList{
        width: 100%;
        height: 90px;
        position: absolute;
        top:280px;

    }
    .areaList .el-icon-location{
        width:150px;
        height: 85px;
        font-size: 23px;
        text-align: center;
        line-height: 85px;
        font-weight: bold;
        background-color: rgb(0,0,0,0.3);
        color: white;

    }
    .areaList .tab_active{
        color: black;
        background-color: rgb(43,91,195,0.7);
        border-bottom: 4px #68a24d solid;
    }

    .JobAll{
        width: 100%;
    }
    .JobAll .el-dialog{
        border-radius: 30px;
    }

    .JobList{
        width: 90%;
        height: 340px;
        margin-bottom: 50px;
    }
    .JobList .jobId{
        width: 100%;
        height: 340px;
        background-color: rgb(86, 138, 225,0.5);
        border-radius:15px;
        margin:0 auto;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .24), 0 0 6px rgba(0, 0, 0, .14);
        position: relative;
    }
    .JobName01{
        width: 25%;
        height: 100%;
        border-right: 1px #99a9bf solid;
        float: left;
    }
    .JobName02{
        padding-left: 50px;
        width: 69%;
        height: 100%;
        float: left;
    }
    .fade-enter-active {
        transition: all 2s ease;
    }

    .fade-enter
        /* .slide-fade-leave-active 用于 2.1.8 以下版本 */ {
        transform: translateY(300px);
        opacity: 0;
    }




</style>