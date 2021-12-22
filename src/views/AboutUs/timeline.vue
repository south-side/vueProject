<template>
<div class="tmLine">
    <div class="hd">
        <h1>公司大事纪</h1>
    </div>
    <div class = "breaking-news-ct wow fadeInDown">
         <div class="breaking-news-item" id="breakingItemOne">
             <p>事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件</p>
             <span>2009</span>
         </div>
        <div class="breaking-news-item" id="breakingItemTwo">
            <p>事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件</p>
            <span>2009</span>
        </div>
        <div class="breaking-news-item" id="breakingItemThree">
            <p>事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件</p>
            <span>2009</span>
        </div>
        <div class="breaking-news-item" id="breakingItemFour">
            <p>事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件</p>
            <span>2012</span>
        </div>
        <div class="breaking-news-item" id="breakingItemFive">
            <p>事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件</p>
            <span>2014</span>
        </div>
        <div class="breaking-news-item" id="breakingItemSix">
            <p>事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件件事件事件事件事件事件事件事件事件事件</p>
            <span>2015</span>
        </div>
        <div class="breaking-news-item" id="breakingItemSeven">
            <p>事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件</p>
            <span>2016</span>
        </div>
        <div class="breaking-news-item" id="breakingItemEight">
            <p>事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件</p>
            <span>2017</span>
        </div>
        <div class="breaking-news-item" id="breakingItemNine">
            <p>事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件</p>
            <span>2017</span>
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
    .tmLine{
        width: 100%;
        height: 700px;
        float: left;
        position: relative;
        overflow: hidden;
    }
    .hd {
        width: 100%;
        height: 100px;
        text-align: center;
    }
    .hd h1{

    }

    .breaking-news-ct {
        position: relative;
        width: 100%;
        height: 600px;
        margin-left: 20px;
        margin-bottom: 40px;
        }
    .breaking-news-item{
        width: 10%;
        border-left: 4px solid #9dc4ff;
        height: 600px;
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
    .breaking-news-ct .breaking-news-item:first-child {
        height: 300px;
        bottom: 0;
        left: 0;
    }
    .breaking-news-ct .breaking-news-item:nth-child(2) {
        height: 400px;
        left: 150px;
    }
    .breaking-news-ct .breaking-news-item:nth-child(3) {
      height: 500px;
      left: 300px;
      bottom: 0px; }

    .breaking-news-ct .breaking-news-item:nth-child(4) {
      height: 600px;
      left: 450px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(5) {
      height: 600px;
      left: 600px;
      padding-right: 30px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(6) {
      height: 600px;
      left: 750px;
      padding-right: 10px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(7) {
      height: 500px;
      left: 900px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(8) {
      height: 400px;
      left: 1050px;
      bottom: 0px; }
    .breaking-news-ct .breaking-news-item:nth-child(9) {
        height: 300px;
        left: 1200px;
        bottom: 0px; }

    .breaking-news-ct .breaking-news-item p {
      font-size: 14px;
      line-height: 24px;
      color: #333;
      padding-left: 12px;
      text-align: left;
      letter-spacing: -1px; }
    .breaking-news-ct .breaking-news-item span {
      font-size: 25px;
      position: absolute;
      bottom: 42px;
      left: 12px;
    }

</style>