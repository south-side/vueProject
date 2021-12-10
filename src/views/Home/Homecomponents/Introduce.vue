<template>
    <div class="Introduces">
        <h1 class="Introduces-title wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.4s">
            <a href="/">公司简介</a>
        </h1>
        <div class="Introduce">
            <div class="Introduce-bg">
                <img src="../../../image/bizhi.jpg">
            </div>
            <div class="Introduce-p wow rollIn" data-wow-duration="1s" data-wow-delay="1s">
                <h1 class="wow bounceInDown" data-wow-duration="2s" data-wow-delay="2s">关于我们</h1>
                <div class="Introduce-p01 wow bounceInDown " data-wow-duration="3s" data-wow-delay="3s">
                    <p>
                        目前公司下辖东方美谷核心区——生物科技园区，园区地处奉贤区中部，
                        北起大叶公路、南至浦南运河、西起S4高速公路，东至金汇港，占地面积18.49平方公里。
                        园区是上海“品牌园区”，也是“张江高新区奉贤园”的重要组成部分，于2011年通过ISO9001、
                        ISO14001质量环境管理双体系认证。
                    </p>
                    <p>
                        通过高品质的安全生产、环境保护、政府协调等运营管理工作，推进东方美谷产业承载区的产城融合发展。
                        近些年，先后建成“上海国家生物产业基地”、“国家科技兴贸创新基地（生物医药）” 、
                        “上海南郊生产性服务业功能区”、“上海市服务业综合改革试点”、“上海市产业园区转型升级试点 ”
                        和“上海市新药创制服务产业创新基地”，并获得“上海市企业服务优秀园区”、“上海市知识产权示范园区”、
                        “上海市知名品牌创建示范区”等品牌荣誉。
                    </p>
                </div>
                <div class="Introduce-p02 wow bounceInDown" data-wow-duration="3s" data-wow-delay="3s">
                    <img src="../../../image/img_5.png" >
                </div>
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
    .Introduces{
        width:100%;
        height:680px;
        float: left;
        position: relative;
        overflow:hidden;
    }
    .Introduces-title{
        width: 100%;
        height:100px;
        text-align: center;
    }
    .Introduces-title a{
        color:#568ae1;
        text-decoration: none;
        border-bottom: 1px solid #568ae1;
        padding-bottom: 20px;
    }
    .Introduce{
        width:100%;
        height:550px;
        float: left;
        position: absolute;
        top:120px;
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
    .Introduce-p{
        width:75%;
        height:500px;
        float: left;
        position: absolute;
        background-color: rgb(255, 255, 255,0.6);
        margin-left: 70px;
        margin-top: 30px;
    }

    .Introduce-p h1{
        text-align: center;
        padding-top: 25px;
        color: black;
        border-bottom: 1px solid black;
    }
    .Introduce-p01{
        width:60%;
        height:380px;
        float: left;
        margin: 0 25px;
    }
    .Introduce-p01 p{
        text-indent: 2em;
    }
    .Introduce-p02{
        width:30%;
        height:380px;
        float: left;
    }
    .Introduce-p02 img{
        width: 300px;
        height: 200px;
    }


</style>