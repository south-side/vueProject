<template>
    <div id="Home">
        <HomeHeader></HomeHeader>
        <HomeBanner></HomeBanner>
        <HomeDevelop></HomeDevelop>
        <HomeResearch></HomeResearch>
        <HomeIntroduce></HomeIntroduce>
        <HomeFooter></HomeFooter>

        <!--







         <HomeProduct></HomeProduct>


        -->

    </div>
</template>
<script>
    import HomeHeader from '../Header'
    import HomeBanner from './Homecomponents/Banner'
    import HomeFooter from '../Footer'
    import HomeDevelop from './Homecomponents/Develop'
    import HomeResearch from './Homecomponents/Research'
    import HomeIntroduce from './Homecomponents/Introduce'
    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeBanner,
            HomeFooter,
            HomeDevelop,
            HomeResearch,
            HomeIntroduce
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