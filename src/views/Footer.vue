<template>
    <div class="Footer">
        <div class="Footer-left">
            <div class="Footer-left02">
                <ul>
                    <li>
                        自主专利技术
                    </li>
                    <li>
                        技术平台与管线
                    </li>
                    <li>
                        公司新闻
                    </li>
                    <li>
                        加入我们
                    </li>
                </ul>

            </div>
            <div class="Footer-left01" data-wow-duration="1s" data-wow-delay="1s">
                <p >中国生物技术股份有限公司</p>
                <p>
                    地址：北京市朝阳区双桥路乙2号院
                </p>
                <p>电话：010-84663377</p>
                <p>
                    邮箱：XXXXX@qq.com
                </p>
            </div>
        </div>
        <div class="Footer-right" data-wow-duration="1s" data-wow-delay="1s">
            <table>
                <tr>
                    <th>
                        <img src="../image/img_6.png">
                    </th>
                    <th>
                        <img src="../image/img_6.png">
                    </th>
                    <th>
                        <img src="../image/img_6.png">
                    </th>
                </tr>
                <tr>
                    <td>微信</td>
                    <td>qq</td>
                    <td>微博</td>
                </tr>
            </table>
        </div>
    </div>

</template>

<script>
    import {WOW} from 'wowjs';
    export default {
        name: "",
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
    .Footer{
        width:100%;
        height:370px;
        float: left;
        position: relative;
        top:110px;
        background-color: #145096;
    }
    .Footer-left{
        width: 65%;
        height:300px;
        float: left;
    }
    .Footer-left02{
        width: 50%;
        height: 100%;
        position: relative;
        float: left;
    }
    .Footer-left02 ul{
        list-style: none;
        padding-left: 220px;
        padding-top: 70px;
    }
    .Footer-left02 ul li{
        margin-bottom: 35px;
        font-size: 18px;
        color: white;
    }
    .Footer-left01{
        width: 50%;
        height: 100%;
        position: relative;
        float: left;
        color: white;
        padding-top: 70px;
    }
    .Footer-left01 p{
        padding-left: 70px;
        margin-bottom: 35px;
        font-size: 18px;
    }
    .Footer-right{
        width: 35%;
        height:300px;
        float: left;
        color: white;
    }

    .Footer-right img{
        width: 130px;
        height: 130px;
        padding-left: 25px;
        padding-top: 120px;
    }
    .Footer-right td{
        text-align: center;
        padding-left: 25px;
    }

</style>