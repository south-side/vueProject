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
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                    </p>
                    <p>
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                        公司简介公司简介公司简介公司简介公司简介公司简介公司简介，
                    </p>
                </div>
                <div class="Introduce-p02 wow bounceInDown" data-wow-duration="3s" data-wow-delay="3s">
                    <img src="../../../image/img-4.jpg" >
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