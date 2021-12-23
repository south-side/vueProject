<template>
    <div class="Research">
        <h1 class="Research-title wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.4s">
            <a href="/">自主专利技术</a>
            <span>
                <i></i>
            </span>
        </h1>
        <div class="Research-content01">
            <div class="Research-content01-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                <div class="Research-content01-left">
                    <img src="../../../image/img/img_5.png">
                </div>
                <div class="Research-content01-right">
                    <div style="position: absolute;
                    padding-top: 50px;
                    padding-left: 40px;padding-right: 40px">
                        <span>分子动力学随机小批分子静电相互作用算法</span>
                        <span>——RBE-MD</span>
                        <hr/>
                        <p>
                            分子动力学随机小批分子静电相互作用算法分子动力学随机小批分子静电相互作用算法分子动力学随机小批分子静电相互作用算法
                            分子动力学随机小批分子静电相互作用算法分子动力学随机小批分子静电相互作用算法分子动力学随机小批分子静电相互作用算法
                            分子动力学随机小批分子静电相互作用算法分子动力学随机小批分子静电相互作用算法分子动力学随机小批分子静电相互作用算法
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="Research-content wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
            <ul class="ResearchAll">
                <li class="ResearchLi"
                    v-for="(item,index) in imgList"
                    v-bind:class="{ResearchActive:item.id ==2}"
                    onclick="location.href='/New'"
                    >
                    <div class="ResearchLiImg">
                        <img :src=item.url>
                    </div>
                    <div style="margin-top: 20px;margin-right: 30px;margin-left: 30px;padding-bottom: 28px">
                        <span>{{item.name}}</span>
                        <hr>
                        <p>{{item.news}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {WOW} from "wowjs";

    export default {
        name: "",
        data(){
            return {
                isTrue:0,
                hoverIndex: -1,
                imgList: [
                    {id: '1',url:require('../../../image/img/img_4.png'),name:'RBM降低计算复杂度',
                        news:'RBM降低计算复杂度RBM降低计算复杂度RBM降低计算复杂度RBM降低计算复杂度RBM降低计算复杂度RBM降低计算复杂度RBM降低计算复杂度RBM降低计算复杂度RBM降低计算复杂度'
                    },
                    {id: '2',url:require('../../../image/img/img_3.png'),name:'RBE提高并行效率及计算速度',
                        news:'RBE提高并行效率及计算速度RBE提高并行效率及计算速度RBE提高并行效率及计算速度RBE提高并行效率及计算速度RBE提高并行效率及计算速度RBE提高并行效率及计算速度'},
                    {id: '3',url:require('../../../image/img/img_1.png'),name:'RBE精确重现计算精度',
                        news:'RBE精确重现计算精度RBE精确重现计算精度RBE精确重现计算精度RBE精确重现计算精度RBE精确重现计算精度RBE精确重现计算精度RBE精确重现计算精度RBE精确重现计算精度'},
                ],
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
    .Research{
        width: 100%;
        height: 1070px;
        position: relative;
        float: left;
        top:110px;
        background-color: #fafafa;
    }
    .Research-title{
        width: 100%;
        height:100px;
        text-align: center;
        padding-top: 30px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .Research-title a{
        color: #333333;
        text-decoration: none;
    }
    .Research-title span i{
        width: 280px;
        height: 10px;
        background: rgba(0,102,255,0.3);
        display: block;
        margin:0 auto;
    }
    .Research-content01{
        width: 100%;
        height: 450px;
        background-color: #fafafa;
    }
    .Research-content01-center{
        width: 90%;
        height: 376px;
        margin-left: 5%;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }

    .Research-content01-left{
        width: 60%;
        height: 376px;
        position: relative;
        float: left;
        overflow: hidden;
    }
    .Research-content01-left img{
        width: 100%;
        height: 376px;
    }
    .Research-content01-center:hover span{
        color: #0F2F66;
    }
    .Research-content01-center:hover img{
        cursor: pointer;
        transition-duration: 8s;

        transform: scale(1.2)
    }
    .Research-content01-right{
        position: relative;
        float: left;
        width: 40%;
        height: 376px;
        background-color: white;
    }
    .Research-content01-right span{
        color: #333;
        font-size: 20px;
    }
    .Research-content01-right p{
        font-size: 14px;
        line-height: 21px;
        color: #555;
        text-align: justify;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    .Research-content{
        width: 100%;
        height: 470px;
        background-color: #fafafa;
    }
    .ResearchAll{
        width: 90%;
        height: 420px;
        margin-left: 5%;
        list-style: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
    }
    .ResearchLi{
        width: 30%;
        float: left;
        height: 420px;
        background-color: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    .ResearchLi:hover {
        box-shadow: 0 24px 34px rgb(7, 68, 168,0.1);
        cursor: pointer;
        transition-duration: 1s;
        transform: scale(1.06)
    }
    .ResearchLi:hover span{
        color: #0F2F66;
    }
    .ResearchActive{
        margin-left: 5%;
        margin-right: 5%;
    }
    .ResearchLiImg{
        width: 100%;
        height: 225px;
        overflow: hidden;
    }
    .ResearchLi img{
        width: 100%;
        height: 225px;
    }
    .ResearchLi:hover img{
        transition-duration: 1s;
        transform: scale(1.2)
    }
    .ResearchLi span{
        font-size: 18px;
        line-height: 27px;
        color: #333;
        text-align: justify;
        text-decoration: none;
    }
    .ResearchLi p{
        font-size: 14px;
        line-height: 21px;
        color: #555;
        text-align: justify;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
    }


</style>