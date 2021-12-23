<template>
    <div id="aboutUs">
        <AbHeader></AbHeader>
        <AbBody></AbBody>
        <AbFooter></AbFooter>

    </div>
</template>
<script>
    import AbHeader from '../Header'
    import AbFooter from '../Footer'
    import AbBody from './AboutUsBody'
    export default {
        name: "News",
        components:{
            AbHeader,
            AbFooter,
            AbBody
        },
        data(){
            return{

            }
        },

    }
</script>
<style>
    html,body,
    #aboutUs{
        width:100%;
        height: 100%;
        margin: 0;
        padding: 0;
        position: absolute;
    }
</style>