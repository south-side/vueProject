<template>
    <div class="Footer">
        <div class="Footer-left">
            <div class="Footer-left01 wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
                <p >中国生物技术股份有限公司</p>
                <p>
                    京公网安备 11010502041575号
                    地址：北京市朝阳区双桥路乙2号院
                </p>
                <p>电话：010-84663377 传真：010-84663322</p>
                <p>
                    互联网药品信息服务资格证书编号：（京）-非经营性-2018-0278
                </p>
            </div>
        </div>
        <div class="Footer-right wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
            <table>
                <tr>
                    <th>
                        <img src="../../image/img_6.png">
                    </th>
                    <th>
                        <img src="../../image/img_6.png">
                    </th>
                    <th>
                        <img src="../../image/img_6.png">
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
        height:300px;
        position: relative;
        float: left;
        background-color: rgb(96, 141, 217);
    }
    .Footer-left{
        width: 50%;
        height:300px;
        float: left;
    }
    .Footer-left01{
        padding-top: 70px;
        padding-left: 130px;
    }
    .Footer-right{
        width: 50%;
        height:300px;
        float: left;
    }

    .Footer-right img{
        width: 150px;
        height: 150px;
        padding-left: 25px;
        padding-top: 60px;
    }
    .Footer-right td{
        text-align: center;
        padding-left: 25px;
    }

</style>