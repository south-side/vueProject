<template>
    <div id="Researches">
        <HomeHeader></HomeHeader>
        {{$route.params.id}}
        <div class="Researches01">

        </div>
        <div class="Researches02">
            <div class="Re wow fadeInDown" >
                <div>
                    3333
                </div>
            </div>
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
        height: 1000px;
    }
    .Researches02{
        width: 100%;
        position: relative;
        float: left;
        height: 300px;
    }
    .Re{
        width: 10%;
        border-left: 4px solid #9dc4ff;
        height: 200px;
        position: absolute;
        bottom: 0;
        left: 10px;
        padding-right: 10px;

    }
    .Re:before {
        content: "";
        position: absolute;
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 4px solid #9dc4ff;
        left: -14px;
        top: -22px; }

</style>