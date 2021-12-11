<template>
    <div id="Researches">
        <HomeHeader></HomeHeader>
        {{$route.params.id}}
        <div class="Researches01">

        </div>
        <div class="Researches02">

        </div>
        <HomeFooter></HomeFooter>
    </div>

</template>

<script>
    import HomeHeader from '../Header'
    import HomeFooter from '../Footer'
    export default {
        name: "Researches",
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
    #Researches{
        width:100%;
        height: 100%;
        margin: 0;
        padding: 0;
        position: absolute;
    }
    .Researches01{
        width: 100%;
        position: relative;
        float: left;
        background-color: #42b983;
    }
    .Researches02{
        width: 100%;
        position: relative;
        float: left;
    }

</style>