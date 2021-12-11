<template>
    <div id="aboutUs">
        <abHeader></abHeader>
        <abBanner></abBanner>
        <abody></abody>
        <abfooter></abfooter>
    </div>
</template>
<script lang="ts">
import abHeader from '../Header.vue'
import abfooter from "../Footer.vue"
import abBanner from "../Home/Homecomponents/Banner.vue"
import abody from "./AboutUsBody.vue"
export default ({
    name : "AboutUs",
    components:{
        abHeader,
        abfooter,
        abody,
        abBanner,
    },
    data()
    {
        return 
        {

        }
    }

    
})
</script>