<template>
    <div id="News">
        <HomeHeader></HomeHeader>
        <div class="NewsContent">
            <div class="New-Up">
                <img src="../../image/img-8.jpg">
                <div class="NewsArray">
                    <table style="margin: 0 auto;">
                        <tr>
                            <td @click = "tab=0" :class="{'tab_active':tab==0}" active-class="active"
                                class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s" v-on:click="true">
                                <router-link to="/NewResearch">
                                    技术研究
                                </router-link>
                            </td>
                            <td @click = "tab=1" :class="{tab_active:tab==1}" class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
                                <router-link to="/NewCooperation">
                                    合作开发
                                </router-link>
                            </td>
                            <td  @click = "tab=2" :class="{tab_active:tab==2}" class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
                                <router-link to="/NewFinance">
                                    融资
                                </router-link>
                            </td>

                        </tr>
                    </table>
                </div>
                <div class="NewsDown">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
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
                tab:'0',
                isActive:true,
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
        height: 2600px;
        position: relative;
        overflow: hidden;
    }
    .NewsContent img{
        width: 100%;
        height: 400px;
    }
    .New-Up{
        width: 100%;
        height: 2600px;
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
        height: 2200px;
        margin: 0 auto;
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