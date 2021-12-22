<template>
    <div class="Introduces">
        <h1 class="Intro-title wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.4s">
            <a href="/">公司简介</a>
            <span>
                <i></i>
            </span>
        </h1>
        <div class="Intro_content">
            <div class="Introduce-bg">
                <img src="../../../image/bizhi.jpg">
            </div>


            <!--
            <div class="Intro_content_i wow rollIn" data-wow-duration="1s" data-wow-delay="1.5s">
                <div class="Intro_content_left">
                    <img src="../../../image/img_11.png">
                </div>
                <div class="Intro_content_right">
                    <h2 style="font-size: 24px;margin-left: 30px;margin-top: 50px;color: #333">关于我们</h2>
                    <p>
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介

                    </p>
                </div>
            </div>
            -->

        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style>
    .Introduces{
        width:100%;
        height:700px;
        float: left;
        position: relative;
        overflow:hidden;
        top:110px;
        background-color: #fafafa;
    }
    .Intro-title{
        width: 100%;
        height:100px;
        text-align: center;
        padding-top: 30px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .Introduces .Intro-title a{
        color: #333333;
        text-decoration: none;
    }

    .Introduces .Intro-title a:hover{
        color: #568ae1;
    }
    .Introduces .Intro-title span i{
        width: 200px;
        height: 10px;
        background: rgba(0,102,255,0.3);
        display: block;
        margin:0 auto;
    }
    .Introduces .Intro_content{
        width:100%;
        height:550px;
        float: left;
        margin:0;
        padding:0;
        overflow:hidden;
        background-color: rgb(66, 110, 185,0.7);
    }
    .Introduce-bg{
        width:100%;
        height:100%;
        position: absolute;
        margin-left:37%;
        transform:skew(-50deg,0deg);
        -ms-transform:skew(-50deg,0deg); /* IE 9 */
        -moz-transform:skew(-50deg,0deg); /* Firefox */
        -webkit-transform:skew(-50deg,0deg); /* Safari and Chrome */
        -o-transform:skew(-50deg,0deg); /* Opera */
        overflow:hidden;
    }
    .Introduce-bg img{
        width:100%;
        height:550px;
        margin-left:-31%;
        transform:skew(50deg,0deg);
        -ms-transform:skew(50deg,0deg); /* IE 9 */
        -moz-transform:skew(50deg,0deg); /* Firefox */
        -webkit-transform:skew(50deg,0deg); /* Safari and Chrome */
        -o-transform:skew(50deg,0deg); /* Opera */
    }
    .Intro_content_i{
        width:90%;
        height:450px;
        background-color: rgb(255, 255, 255,0.6);
        position: absolute;
        margin-left: 5%;
        margin-top: 50px;
    }
    .Intro_content_left{
        width: 63%;
        height: 450px;
        float: left;
    }
    .Intro_content_left img{
        width: 100%;
        height: 450px;
    }
    .Intro_content_right{
        width: 37%;
        height: 450px;
        float: left;
        
    }
    .Intro_content_right p{
        font-size: 14px;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 30px;
        color: #666666;
        line-height: 32px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 7;
    }



</style>