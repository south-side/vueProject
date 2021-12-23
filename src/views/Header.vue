<template>
    <div class="header">
        <div class="head">
            <div class="header-left">
                <p style="height: 80px;width: 100px;line-height: 8px;">
                    <img src="../image/img_10.png" style="width:450px; height:248px; margin-top:-85px;margin-left:-145px;
            padding-left: 100px;
    color: #333;">
                </p>
            </div>
            <div class="header-right">
                <ul class="header-ul">
                    <li class="header-li">
                        <router-link to="/" class="router">
                            首页
                        </router-link>
                    </li>
                    <li class="header-li">
                        <router-link to="/" class="router">
                            自主专利技术
                        </router-link>
                    </li>
                    <li class="header-li">
                        <router-link to="/AboutUS" class="router">
                            技术平台与管线
                        </router-link>
                        <ul class="header-li-ul">
                            <li>
                                <router-link to="" class="ul-router">
                                    公司简介
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="ul-router">
                                    团队介绍
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="ul-router">
                                    研发平台
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="header-li">
                        <router-link to="/NewResearch" class="router">
                            公司新闻
                        </router-link>
                        <ul class="header-li-ul">
                            <li>
                                <router-link to="/NewResearch" class="ul-router">
                                    技术研究
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="ul-router">
                                    合作团队
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" class="ul-router">
                                    融资
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="header-li">
                        <router-link to="/Job" class="router">
                            加入我们
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    .header{
        width:100%;
        height:110px;
        background-color: rgb(255,255,255);
        position: fixed;
        z-index: 1000;
        left: 0;
        top:0;
    }
    .head{
        width:1400px;
    }

    .header-left{
        width: 25%;
        height: 110px;
        float:left;
        padding-left: 40px;
        overflow: hidden;
    }

    .header-right{
        width: 65%;
        height: 110px;
        float:left;
    }
    .header-ul{
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        display: block;
        padding-inline-start: 0;
    }
    .header-li{
        float: left;
        position: relative;
        line-height: 110px;
        font-size: 16px;
        width: 160px;
        text-align: center;
    }
    .header-li .router{
        text-decoration: none;
        color: #333;
        display:block;
        outline:0;
    }
    .header-li:hover .router{
        color: #568ae1;
    }
    .header-li:visited .router{
        color: #568ae1;
    }
    .header-li:hover ul{
        display:block;
        position:absolute;
        top:110px;
        left:0;
    }
    .header-li-ul{
        width: 160px;
        top: 110px;
        background-color: #fff;
        position: absolute;
        display: none;
        box-shadow: 0 0 10px rgb(0 0 0 / 8%);
        border-top: 2px #ffbb42 solid;
        list-style: none;
        padding-inline-start: 0;
    }
    .header-li-ul li {
        width: 160px;
        height: 40px;
        font-size: 15px;
        color: #333;
        line-height: 40px;
        text-align: center;
        position: relative;
    }
    .header-li-ul .ul-router{
        color: #333;
        text-decoration: none;
    }
    .header-li-ul .ul-router:hover{
        color: #568ae1;
    }



</style>