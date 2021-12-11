<template>
    <div id="News">
        <HomeHeader></HomeHeader>
        <div class="NewsContent">
            <div class="New-Up">
                <img src="../../image/img-8.jpg">
                <div class="NewsArray">
                    <table style="margin: 0 auto;">
                        <tr>
                            <td @click = "tab=0" :class="{tab_active:tab==0}">
                                <router-link to="/NewResearch">
                                    技术研究
                                </router-link>
                            </td>
                            <td @click = "tab=1" :class="{tab_active:tab==1}">
                                <router-link to="/NewCooperation">
                                    合作开发
                                </router-link>
                            </td>
                            <td  @click = "tab=2" :class="{tab_active:tab==2}">
                                <router-link to="/NewFinance">
                                    融资
                                </router-link>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="NewsDown">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>
    import HomeHeader from '../Header'
    import HomeFooter from '../Footer'
    export default {
        name: "News",
        components:{
            HomeHeader,
            HomeFooter
        },
        data(){
            return{
                tab:0,

            }
        },

    }
</script>

<style>
    html,body,
    #News{
        width:100%;
        height: 100%;
        margin: 0;
        padding: 0;
        position: absolute;
    }
    .NewsContent{
        width:100%;
        height: 2400px;
        position: relative;
        overflow: hidden;
    }
    .NewsContent img{
        width: 100%;
        height: 400px;
    }
    .New-Up{
        width: 100%;
        height: 400px;
        margin: 0 auto;
    }
    .NewsArray{
        width: 100%;
        height: 90px;
        position: absolute;
        top:260px;
    }
    .NewsArray table td{
        width:200px;
        height: 75px;
        font-size: 23px;
        text-align: center;
        line-height: 85px;
        font-weight: bold;
        background-color: rgb(0,0,0,0.3);
        color: white;
    }
    .NewsArray .tab_active{
        color: black;
        background-color: rgb(43,91,195,0.7);
        border-bottom: 4px #68a24d solid;
    }
    .NewsDown{
        width: 100%;
        height: 2000px;
        margin: 0 auto;
    }


</style>