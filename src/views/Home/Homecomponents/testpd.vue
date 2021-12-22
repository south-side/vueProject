<template>
  <el-row id="myMenu">
    <el-row class="nav">
      <el-row class="setPosition borderBox" v-for="(item,index) in list" :key="index" :style="styleList[indexList[index]]">
        <span class="titleText" :style="styleList[indexList[index]].textStyle" @click="moveToCenter(indexList[index])">{{item.title}}</span>
        <!-- <br>我取的是indexList[{{index}}]={{indexList[index]}} -->
        <!-- <br>我是页面中展示的第{{indexList[index]}}位 -->
      </el-row>
    </el-row>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      list: [{ title: "吃饭" }, { title: "睡觉" }, { title: "打游戏" }, { title: "逛街" }, { title: "撩妹" }],
      indexList: [], //下标列表
      centerNum: 0, //中间位置的下标
      theFirstIndex: 0, //存储页面展示的数组中第一位下标
      theLastIndex: 0, //存储页面展示的数组中最后一位下标
      styleList: [
        {
          width: "160px",
          height: "240px",
          top: "210px",
          left: "-240px",
          transition: "none",
          textStyle: {
            fontSize: "28px",
            lineHeight: "28px",
            transition: "none"
          }
        },
        {
          width: "160px",
          height: "240px",
          top: "280px",
          left: "0",
          transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
          textStyle: {
            fontSize: "28px",
            lineHeight: "28px",
            transition: "font-size 0.4s linear, line-height 0.4s linear"
          }
        },
        {
          width: "180px",
          height: "260px",
          top: "350px",
          left: "260px",
          transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
          textStyle: {
            fontSize: "34px",
            lineHeight: "34px",
            transition: "font-size 0.4s linear, line-height 0.4s linear"
          }
        },
        {
          width: "200px",
          height: "280px",
          top: "420px",
          left: "530px",
          transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
          textStyle: {
            fontSize: "40px",
            lineHeight: "40px",
            transition: "font-size 0.4s linear, line-height 0.4s linear"
          }
        },
        {
          width: "180px",
          height: "260px",
          top: "350px",
          left: "820px",
          transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
          textStyle: {
            fontSize: "34px",
            lineHeight: "34px",
            transition: "font-size 0.4s linear, line-height 0.4s linear"
          }
        },
        {
          width: "160px",
          height: "240px",
          top: "280px",
          left: "1100px",
          transition: "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear",
          textStyle: {
            fontSize: "28px",
            lineHeight: "28px",
            transition: "font-size 0.4s linear, line-height 0.4s linear"
          }
        },
        {
          width: "160px",
          height: "240px",
          top: "210px",
          left: "1350px",
          transition: "none",
          textStyle: {
            fontSize: "28px",
            lineHeight: "28px",
            transition: "none"
          }
        }
      ]
    };
  },
  created() {
    this.initIndexList(7);
    this.initList(0);
    this.centerNum = 3;
  },
  methods: {
    //初始化下标数组，num为数组长度
    initIndexList(num) {
      this.indexList = [];
      for (var i = 0; i < num; i++) {
        this.indexList[i] = i;
      }
    },
    //初始化菜单数组，在首尾添加新元素
    initList(num) {
      const that = this;
      var start = [];
      var mid = [];
      var end = [];
      var newArray = [];
      if (num == 0) {
        //页面初次加载时执行
        mid = that.list;
        end = mid.slice(0, 1);
        start = mid.slice(mid.length - 1, mid.length);
        newArray = start.concat(mid);
        that.list = newArray.concat(end);
        //记录改变后的数组在页面展示的第一位（取styleList[1]样式）下标值（即indexList.indexOf(1)）
        that.theFirstIndex = that.indexList.indexOf(1);
        that.theLastIndex = that.indexList.indexOf(that.list.length - 2);
      } else {
        //移动后执行
        mid = that.list.slice(1, that.list.length - 1);
        end = that.list.slice(that.theFirstIndex, that.theFirstIndex + 1);
        start = that.list.slice(that.theLastIndex, that.theLastIndex + 1);
        var startIndex = 0;
        var endIndex = 0;
        if (that.theFirstIndex <= 0) {
          startIndex = that.indexList.length - 1;
        } else {
          startIndex = that.theFirstIndex - 1;
        }
        if (that.theLastIndex >= that.indexList.length - 1) {
          endIndex = 0;
        } else {
          endIndex = that.theLastIndex + 1;
        }
        that.list[startIndex] = start[0];
        that.list[endIndex] = end[0];
      }
    },
    moveToCenter(index) {
      const that = this;
      var count = this.centerNum;
      if (index > count) {
        that.moveToLeft();
        var interval = setInterval(function() {
          if (index > count + 1) {
            that.moveToLeft();
            count++;
          } else {
            clearInterval(interval);
          }
        }, 4 * 100);
      } else if (index < count) {
        that.moveToRight();
        var interval = setInterval(function() {
          if (index < count - 1) {
            that.moveToRight();
            count--;
          } else {
            clearInterval(interval);
          }
        }, 4 * 100);
      }
    },
    //菜单整体向左移一位，下标数组向右移一位
    moveToRight() {
      this.styleList[0].transition = "none";
      this.styleList[0].textStyle.transition = "none";
      this.styleList[this.styleList.length - 1].transition = "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear";
      this.styleList[this.styleList.length - 1].textStyle.transition = "font-size 0.4s linear, line-height 0.4s linear";
      this.indexList = this.indexList.splice(1, this.indexList.length).concat(this.indexList);
      if (this.theFirstIndex <= 0) {
        this.theFirstIndex = this.indexList.length - 1;
      } else {
        this.theFirstIndex--;
      }
      if (this.theLastIndex <= 0) {
        this.theLastIndex = this.indexList.length - 1;
      } else {
        this.theLastIndex--;
      }
      this.initList(1);
    },
    //菜单 整体向右移一位，下标数组向左移一位
    moveToLeft() {
      this.styleList[this.styleList.length - 1].transition = "none";
      this.styleList[this.styleList.length - 1].textStyle.transition = "none";
      this.styleList[0].transition = "left 0.4s linear, top 0.4s linear, width 0.4s linear,height 0.4s linear";
      this.styleList[0].textStyle.transition = "font-size 0.4s linear, line-height 0.4s linear";
      this.indexList = this.indexList.splice(this.indexList.length - 1, this.indexList.length).concat(this.indexList);
      if (this.theFirstIndex >= this.indexList.length - 1) {
        this.theFirstIndex = 0;
      } else {
        this.theFirstIndex++;
      }
      if (this.theLastIndex >= this.indexList.length - 1) {
        this.theLastIndex = 0;
      } else {
        this.theLastIndex++;
      }
      this.initList(1);
    }
  }
};
</script>
<style scoped>
#myMenu {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.nav {
  width: 1260px;
  height: 700px;
  margin: 0 auto;
  background: #0157909d;
  overflow: hidden;
}
.setPosition {
  position: absolute;
}
.borderBox {
  border: 1px red solid;
  text-align: center;
}
.titleText {
  font-weight: 400;
  text-align: center;
  font-family: Microsoft YaHei;
  cursor: pointer;
}
</style>