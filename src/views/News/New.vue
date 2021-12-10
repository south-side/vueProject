<template>
    <div id="News">
        <HomeHeader></HomeHeader>
        <div>
            <img src="../../image/img-8.jpg">
        </div>
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>
    import HomeHeader from '../Home/Header'
    import HomeFooter from '../Home/Footer'
    export default {
        name: "News",
        components:{
            HomeHeader,
            HomeFooter
        },
        data(){
            return{

            }
        },

    }
</script>

<style>
    html,body,
    #Home{
        width:100%;
        height: 100%;
        margin: 0;
        padding: 0;
        position: absolute;
    }

</style>