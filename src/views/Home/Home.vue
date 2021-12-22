<template>
    <div id="Home">
        <HomeHeader></HomeHeader>
        <HomeBanner></HomeBanner>
        <HomeDevelop></HomeDevelop>
        <HomeResearch></HomeResearch>
        <HomeProduct></HomeProduct>
        <HomeIntroduce></HomeIntroduce>
        <HomeFooter></HomeFooter>

        <!--

<HomeDevelop></HomeDevelop>


        -->

    </div>
</template>
<script>
    import HomeHeader from '../Header'
    import HomeBanner from './Homecomponents/Banner'
    import HomeNews from './Homecomponents/News'
    import HomeProduct from './Homecomponents/Product'
    import HomeIntroduce from './Homecomponents/Introduce'
    import HomeFooter from '../Footer'
    import HomeDevelop from './Homecomponents/Develop'
    import HomeResearch from './Homecomponents/Research'

    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeBanner,
            HomeNews,
            HomeProduct,
            HomeIntroduce,
            HomeFooter,
            HomeDevelop,
            HomeResearch,
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