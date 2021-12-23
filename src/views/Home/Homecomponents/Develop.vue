<template>
    <div class="Develop">
        <h1 class="Develop-title wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.4s">
            <a href="/">主营业务</a>
            <span>
                <i></i>
            </span>
        </h1>
        <div class="Develop_content wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
            <div class="Develop_content_i">
                <ul>
                    <li>
                        <div class="DC_i" onclick="location.href='/YeWu'">
                            <img src="../../../image/img/img_1.png">
                            <div class="DC_j">
                                <div class="DC_j01">
                                    <h3>主营业务1</h3>
                                    <p>
                                        计算化学及人工智能驱动的创新药研发方案解决商
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style="margin-left: 5%;margin-right: 5%">
                        <div class="DC_i" onclick="location.href='/YeWu'">
                            <img src="../../../image/img/img_6.png">
                            <div class="DC_j">
                                <div class="DC_j01">
                                    <h3>主营业务2</h3>
                                    <p>
                                        计算化学及人工智能驱动的创新药研发方案解决商
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="DC_i" onclick="location.href='/YeWu'">
                            <img src="../../../image/img/img_2.png">
                            <div class="DC_j">
                                <div class="DC_j01">
                                    <h3>主营业务3</h3>
                                    <p>
                                        计算化学及人工智能驱动的创新药研发方案解决商
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style>
    .Develop{
        width:100%;
        height:490px;
        float: left;
        position: relative;
        overflow:hidden;
        top:110px;
        background-color: #fafafa;
    }
    .Develop-title{
        width: 100%;
        height:100px;
        text-align: center;
        padding-top: 30px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .Develop .Develop-title a{
        color: #333333;
        text-decoration: none;
    }

    .Develop .Develop-title a:hover{
        color: #568ae1;
    }
    .Develop .Develop-title span i{
        width: 200px;
        height: 10px;
        background: rgba(0,102,255,0.3);
        display: block;
        margin:0 auto;
    }
    .Develop .Develop_content{
        width:100%;
        height:670px;

    }
    .Develop .Develop_content_i{
        width:90%;
        height:100%;
        margin-left:5%;
    }
    .Develop .Develop_content_i ul{
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 0;
        list-style: none;
    }
    .Develop .Develop_content_i li{
        float: left;
        width: 30%;
        height: 300px;
        border-radius: 8px;
        box-shadow: 0 2px 12px 0 rgba(10, 48, 110, 0.7);
        position: relative;
    }
    .DC_i{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .DC_i:hover{
        transition-duration: 1s;

        transform: scale(1.07);
        cursor: pointer;
    }
    .DC_i img{
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .DC_j {
        background-color: rgb(10, 48, 110,0.7);
        position: absolute;
        width: 100%;
        height: 40%;
        top:60%
    }
    .DC_j01{
        padding-left: 30px;
        padding-right: 30px;
    }
    .DC_j01 h3{
        font-size: 22px;
        margin-bottom: 10px;
        font-weight: bold;
        color: white;
    }
    .DC_j01 p{
        font-size: 14px;
        line-height: 24px;
        color: white;
    }



</style>