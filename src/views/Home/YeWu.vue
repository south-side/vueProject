<template>
    <div id="Yewui">
        <HomeHeader>

        </HomeHeader>
        <HomeYeWu></HomeYeWu>
        <HomeFooter></HomeFooter>

    </div>
</template>

<script>
    import HomeHeader from '../Header'
    import HomeFooter from '../Footer'
    import HomeYeWu from './yewu02'
    export default {
        name: "Researches",
        components:{
            HomeHeader,
            HomeFooter,
            HomeYeWu
        },
        data(){
            return{

            }
        },

    }
</script>

<style>
    html,body,
    #Yewui{
        width:100%;
        height: 100%;
        margin: 0;
        padding: 0;
        position: absolute;
        background-color: #f5f5f5;
    }

</style>