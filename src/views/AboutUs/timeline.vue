<template>
<div class="tmLine">
    <div class = "breaking-news-ct wow fadeInDown">
        <div class="hd">
            <h2>公司大事纪 </h2>
        </div>
         <div class="breaking-news-item" id="breakingItemOne">
                <p>京颐股份（前身）成立，同年开展移动医疗业务</p>
                <span>2004</span>
            </div>
            <div class="breaking-news-item" id="breakingItemTwo">
                <p>开展HRP业务，目前已成为军队医院财经管理信息平台指定承建商</p>
                <span>2007</span>
            </div>
            <div class="breaking-news-item" id="breakingItemThree">
                <p>新增医疗物联网，包括输液动态监测、婴儿安全管理系统等</p>
                <span>2009</span>
            </div>
            <div class="breaking-news-item" id="breakingItemFour">
                <p>获得软银中国资本A轮融资</p>
                <span>2012</span>
            </div>
            <div class="breaking-news-item" id="breakingItemFive">
                <p>获得由鼎晖创投领投、软银中国资本跟投的B轮融资</p>
                <span>2014</span>
            </div>
            <div class="breaking-news-item" id="breakingItemSix">
                <p>获盛世景投资领投，软银中国资本、弘晖资本C轮融资；上线512考试教育网，打造云时代的护理教育管理平台</p>
                <span>2015</span>
            </div>
            <div class="breaking-news-item" id="breakingItemSeven">
                <p>获某知名投资机构、软银中国资本、盛世景投资C+轮融资；率先发布云HIS；发布一卡通、综合支付；发布医疗云SaaS服务；产品线由院内向区域医疗延伸，构建区域智慧医疗</p>
                <span>2016</span>
            </div>
            <div class="breaking-news-item" id="breakingItemEight">
                <p>国内最早研发落地床旁智能交互产品；移动医疗新增血管通路管理系统、智慧大屏交互系统等；HRP新增DRGs绩效考核与成本核算等系统</p>
                <span>2017</span>
            </div>
            <div class="breaking-news-item" id="breakingItemNine">
                <p>发布新医疗云，为政府、卫生及各类型医疗机构提供一站式软硬设施租赁云服务</p>
                <span>2018</span>
            </div>
            <div class="breaking-news-item" id="breakingItemTen">
                <p>携手腾讯云发布云智慧医疗联合解决方案，助力医疗行业云端转型</p>
                <span>2019</span>
            </div>
            <div class="breaking-news-item" id="breakingItemEleven">
                <p>获得由腾讯领投的D轮融资</p>
                <span>2020</span>
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
    .hd {
        width: 100%;
        height: 50px;
    }
    .hd h2{
        margin-left: 33%;
    }
    .tmLine{
        width: 100%;
        height: 500px;
        float: left;
        position: relative;
        overflow: hidden;
    }
    .breaking-news-ct {
        position: relative;
        width: 100%;
        height: 500px; 
        margin-left: 10%;
        }
    .breaking-news-item{
        width: 5%;
        border-left: 4px solid #9dc4ff;
        height: 200px;
        position: absolute;
        bottom: 0;
        left: 5px;
        padding-right: 10px;
    }
    .breaking-news-item:before {
        content: "";
        position: absolute;
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 4px solid #9dc4ff;
        left: -14px;
        top: -22px; 
        }
    .breaking-news-ct .breaking-news-item:nth-child(12) {
      height: 196px;
      left: 1500px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(2) {
      height: 222px;
      left: 0px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(3) {
      height: 242px;
      left: 150px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(4) {
      height: 175px;
      left: 300px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(5) {
      height: 245px;
      left: 450px;
      padding-right: 30px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(6) {
      height: 302px;
      left: 600px;
      padding-right: 10px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(7) {
      height: 355px;
      left: 750px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(8) {
      height: 400px;
      left: 900px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(9) {
      height: 350px;
      left: 1050px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(10) {
      height: 249px;
      left: 1200px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(11) {
      height: 200px;
      left: 1350px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item p {
      font-size: 14px;
      line-height: 24px;
      color: #333;
      padding-left: 12px;
      text-align: left;
      letter-spacing: -1px; }
    .breaking-news-ct .breaking-news-item span {
      font-size: 35px;
      position: absolute;
      bottom: 12px;
      left: 12px; }
</style>