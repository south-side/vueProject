<template>
    <div id="aboutUs">
        <abHeader></abHeader>
        <abBanner></abBanner>
        <timeline></timeline>
        <abody></abody>
        <abody2></abody2>
        <abfooter></abfooter>
        
    </div>
</template>
<script lang="ts">
import abHeader from '../Header.vue'
import abfooter from "../Footer.vue"
import abBanner from "../Home/Homecomponents/Banner.vue"
import abody from "./AboutUsBody.vue"
import abody2 from "./AboutUsBody2.vue"
import timeline from "./timeline.vue"
export default ({
    name : "AboutUs",
    components:{
        abHeader,
        abfooter,
        abody,
        abody2,
        abBanner,
        timeline,
    },
    data()
    {
        return 
        {

        }
    }

    
})
</script>