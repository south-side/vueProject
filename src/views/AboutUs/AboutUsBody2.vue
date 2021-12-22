<template>
    <div class="visions">
        <div class="visions-bg">
             <img src = "../../image/our_bg1.jpg">
         </div>
         <div class="panel" >
            <div class = "cont1">
                 <h2>使命</h2>
                 <p>我们探索未来</p>
            </div>
            <div class = "cont1">
                <h2>愿景</h2>
                 <p>我们致力于以我们值得尊敬的学识成为
                 <br>
                    中国植保行业一些小众市场的先锋
                 </p>
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
    .visions{
        width: 100%;
        height: 610px;
        float: left;
        position: relative;
        overflow: hidden;
    }
    .visions-bg{
        width:100%;
        height:100%;
        position: absolute;
        margin-left: 15%;
        overflow:hidden;
        bottom: 20px;
    }
    .visions-bg img{
        align-content: center;
    }
    .panel{
        display: block;
        position: absolute;
        left: 17%;
        top : 82px;
    }
    .panel .cont1 h2{
        color : #fff;
        font-size: 33px;
        line-height: 33px;
        margin-bottom: 24px;
        letter-spacing: 5px;
        font-weight: 500;
    }
    .panel .cont1 p{
        font-size: 16px;
        line-height: 24px;
        color: #fff;
        font-weight: 400;
    }

</style>