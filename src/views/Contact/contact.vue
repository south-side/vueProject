<template>
  <div id="contact">
      <HomeHeader></HomeHeader>


      <HomeFooter></HomeFooter>

  </div>
</template>

<script>
import HomeHeader from '../Header'
import HomeContactus from './contactus'
import HomeFooter from '../Footer'
import HomeBanner from '../../views/Home/Homecomponents/Banner'
export default {
  name: "contact",
  components:{
    HomeHeader,
    HomeContactus,
    HomeBanner,
    //HomeNews,
    //HomeProduct,
    //HomeIntroduce,
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
#contact{
  width:100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
}

</style>