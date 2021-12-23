<template>
     <div class="abIntroduces">
         <div class="ab01">
             <img src="../../../src/image/img-8.jpg">
         </div>
         <div class="ab02">
             <div class="abIntro">
                 <h1 style="padding-left: 180px;">天鹜科技</h1>
                 <p>
                     12月7日，天鹜科技有限公司（以下简称“天鹜科技”）宣布获得数千万元天使轮融资，由耀途资本（Glory Ventures）领投，跟投方包括商汤科技、及资深个人投资人。天鹜科技创始人洪亮教授表示，本轮融资将用于进一步优化和提升计算化学及人工智能技术在创新药研发中的应用，扩大战略合作，加速推进在研管线项目进度，持续吸纳优秀人才，加强团队建设。
                 </p>
                 <p>
                     天鹜科技成立于2021年，是一家计算化学及AI驱动（AI+CADD）的创新药研发企业。创始人洪亮教授现为上海交通大学物理天文学院&自然科学研究院分子生物物理教授，教育部长江学者，“青年千人计划”入选者。洪亮教授在生物大分子，高分子动力学方向发表论文50篇。（其中包括20篇高影响力论文：包括 Nature，Nature physics， Physical Review Letters，PNAS， Science  advances， Nature Communications，JACS等）。洪教授带领的天鹜科技核心团队拥有多年计算化学、生物信息学、人工智能、生物医学、制药等交叉学科的经验积累。团队成员包括在多篇计算化学顶刊发表论文的连续国家奖学金获得者，在国际生物学竞赛中获得金牌的青年才俊，以及在安进，百济神州等头部创新药企工作过的计算化学背景的药学管理人士。
                 </p>

             </div>
             <div class="abImg">
                 <img src="../../../src/image/img-1.jpg">
             </div>
         </div>
         <div class="ab03">
             <h1 class="About-title">
                 <a href="/">关于我们</a>
                 <span>
                <i></i>
            </span>
             </h1>
             <div class="videomasks" >
                 <video controls='controls'>
                     <source src="../../image/3.mp4" type="video/mp4" />
                 </video>
             </div>
         </div>
    </div>
</template>
<script>
    export default {
        name: "",
    }
</script>
<style>
    .abIntroduces{
        width:100%;
        height:1650px;
        float: left;
        position: relative;
        overflow:hidden;
        background-color: #f5f5f7;
        top:110px
    }
    .ab01{
        width: 100%;
        height: 400px;
        float: left;
        position: relative;
    }
    .ab01 img{
        width: 100%;
        height: 400px;
    }
    .ab02{
        width: 100%;
        height: 600px;
        float: left;
        position: relative;
    }
    .abIntro{
        width: 48%;
        height: 100%;
        margin-top: 50px;
        float: left;
    }
    .abIntro p{
        padding-left: 180px;
        margin-bottom: 35px;
        color:#3f3f3f;
        font-size: 14px;
        font-weight: bold;
    }
    .abImg{
        width: 50%;
        height: 100%;
        float: left;
    }
    .abImg img{
        width: 450px;
        height: 350px;
        margin-top: 135px;
        margin-left: 100px;
    }
    .ab03{
        width: 100%;
        height: 550px;
        float: left;
        position: relative;
    }
    .videomasks{
        width: 80%;
        height: 450px;
        margin-left: 10%;
    }
    .About-title{
        width: 100%;
        height:100px;
        text-align: center;
        padding-top: 30px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .About-title a{
        color: #333333;
        text-decoration: none;
    }

    .About-title a:hover{
        color: #568ae1;
    }
    .About-title span i{
        width: 200px;
        height: 10px;
        background: rgba(0,102,255,0.3);
        display: block;
        margin:0 auto;
    }
</style>