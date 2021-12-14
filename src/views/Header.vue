<template>
    <div class="header">
        <div class="U-head">
            <div class="header-logo">
                <p style="padding-top:20px ; ">天鹜科技Logo</p>
            </div>
            <div class="header-content">
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        text-color="#fff"
                        background-color="rgb(57, 118, 223)"
                >
                    <el-menu-item index="2" style="height: 90px;line-height: 90px">
                        <router-link to="/">首页</router-link>
                        </el-menu-item>
                    <el-submenu index="3" style="height: 90px;line-height: 90px">
                        <template slot="title" style="height: 90px;line-height: 90px">
                            <span slot="title" style="height: 90px;line-height: 90px"><a>科学研究</a></span>
                        </template>
                        <el-menu-item index="3-1">研究方向</el-menu-item>
                        <el-menu-item index="3-2">研发管线</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4" style="height: 90px;line-height: 90px">
                        <template slot="title" style="height: 90px;line-height: 90px">
                            <span slot="title" style="height: 90px;line-height: 90px">
                                <router-link to="/NewResearch">
                                    新闻动态
                                </router-link>
                            </span>
                        </template>
                        <el-menu-item index="4-1">技术研究</el-menu-item>
                        <el-menu-item index="4-2">合作开发</el-menu-item>
                        <el-menu-item index="4-3">融资</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6" style="height: 90px;line-height: 90px">
                        <template slot="title" style="height: 90px;line-height: 90px">
                            <span slot="title" style="height: 90px;line-height: 90px"><a>关于我们</a></span>
                        </template>
                        <el-menu-item index="6-1">
                            <router-link to="/AboutUs">
                                公司简介
                            </router-link>
                        </el-menu-item>
                        <el-menu-item index="6-2">
                            <router-link to="/AboutUs">
                                团队介绍
                            </router-link>
                        </el-menu-item>
                        <el-menu-item index="6-3">
                            <router-link to="/AboutUs">
                                研发平台
                            </router-link>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="7" style="height: 90px;line-height: 90px">
                        <router-link to="/">
                            价值
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="8" style="height: 90px;line-height: 90px">
                        <router-link to="/Contact">
                            联系我们
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="9" style="height: 90px;line-height: 90px">
                        <router-link to="/Job">
                            招聘信息
                        </router-link>
                    </el-menu-item>
                </el-menu>

            </div>
            <div class="header-right">
                <a style="height: 90px;line-height: 90px">
                    登陆
                </a>|
                <a style="height: 90px;line-height: 90px">
                    注册
                </a>
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
        height:90px;
        background-color: rgb(57, 118, 223);
        position: relative;
        z-index: 1000;
        left: 0;
        top:0;
        overflow: hidden;
    }
    .U-head {
        padding: 0 30px;
        height: 100%;

    }
    .header-logo{
        width:220px;
        float: left;
        height: 100%;
    }
    .header-logo img{
        width: 100%;
        align-items: center;

    }
    .header-content{
        width: 60%;
        float: left;
        height: 100%;
        padding-left: 60px;
    }
    .header-right{
        width: 9%;
        float: left;
        height: 100%;
    }
    .header ul{
        height: 100%;
        width: 100%;
    }
    .header .el-menu--horizontal>.el-menu-item a{
        color: #000 !important;
        height: 90px;
        line-height: 90px;
        text-decoration: none;
        font-size: 18px;
    }
    .header .el-menu--horizontal> {
        line-height: 90px;
        height: 90px;

    }
    ul.el-menu-demo.el-menu--horizontal.el-menu{
        border-bottom: none;
    }
    .header .el-menu--horizontal>.el-submenu .el-submenu__title a{
        line-height: 90px;
        height: 90px;
        text-decoration: none;
        font-size: 18px;
        color: #000 !important;
    }
    .header .el-menu--horizontal>.el-submenu .el-submenu__title {
        line-height: 90px !important;
        height: 90px !important;
    }
    .header li.el-menu-item.is-active{
        border-bottom: 4px solid rgba(86, 225, 98, 0.37) !important;
    }
    .header .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
        border-bottom: 4px solid rgba(86, 225, 98, 0.37) !important;
    }
    a{
        text-decoration: none;
        color: white;
    }

    .router-link-active{
        text-decoration: none;
        color: white;
    }

</style>