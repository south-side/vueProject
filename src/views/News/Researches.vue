<template>
    <div id="Researches">
        <HomeHeader></HomeHeader>
        <img src="../../image/img-8.jpg" style="width: 100%;height: 500px">
        <router-link to="/NewResearch" style="position: absolute;top:450px;left: 140px;
        font-size: 17px;color: #568ae1;
        text-decoration: none">
            新闻动态>>技术研究
        </router-link>
        <div class="Researches02">
            <div class="Researches02_i">
                <div  class="Researches02_ii">
                    <h1>
                        新闻标题
                    </h1>
                    <br/>
                    <span>撰稿人：某某</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>日期：2021-12-25</span>
                    <br/>
                    <hr/>
                    <p>
                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                    </p>
                    <img src="../../image/img/img_1.png">
                    <p>
                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                    </p>
                    <img src="../../image/img/img_1.png" style="margin-bottom: 60px">
                </div>
            </div>

            <div class="Researches02_j">
                <div class="Researches02_j_01">
                    <router-link to="/"
                                 style="text-decoration: none;color: #333;line-height: 100px">
                        上一篇:新闻标题
                    </router-link>
                </div>
                <div class="Researches02_j_02">
                    <router-link to="/"
                                 style="text-decoration: none;color: #333;line-height: 100px">
                        下一篇:新闻标题
                    </router-link></div>

            </div>
        </div>


    </div>

</template>

<script>
    import HomeHeader from '../Header'
    import HomeFooter from '../Footer'
    export default {
        name: "Researches",
        components:{
            HomeHeader,
            HomeFooter
        },
        data(){
            return{

            }
        },

    }
</script>

<style>
    html,body,
    #Researches{
        width:100%;
        height: 100%;
        margin: 0;
        padding: 0;
        position: absolute;
        background-color: #f5f5f5;
    }
    .Researches02{
        width: 100%;
        position: relative;
        float: left;
    }
    .Researches02_i{
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        background-color: white;
        margin-top: 70px;
        position: relative;
        float: left;
    }
    .Researches02_j{
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 70px;
        margin-bottom: 70px;
        position: relative;
        float: left;
        height: 100px;

    }
    .Researches02_j_01{
        width: 45%;
        height: 100px;
        background-color: white;
        position: relative;
        float: left;
        text-align: center;
    }
    .Researches02_j_02{
        width: 45%;
        height: 100px;
        background-color: white;
        position: relative;
        float: left;
        margin-left: 10%;
        text-align: center;
    }
    .Researches02_ii{
        width: 90%;
        padding-top: 50px;
        margin-left: 5%;
        margin-right: 5%;
        text-align: center;
    }
    .Researches02_ii h1{
        font-size: 25px;
        line-height: 25px;
        color: #333;
        text-align: center;
        padding-top: 0.62rem;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .Researches02_ii span{
        font-size: 15px;
        color: #333;
        line-height: 36px;
        text-align: left;
    }
    .Researches02_ii p{
        margin-top: 30px;
        font-size: 1rem;
        color: #1a1a1a;
        line-height: 1.5rem;
        text-align: left;
    }
    .Researches02_ii img{
        width: 400px;
        height: 300px;
    }
</style>