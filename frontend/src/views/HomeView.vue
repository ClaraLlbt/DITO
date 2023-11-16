<script>
import HdrBanner from '../components/Banner.vue';
import Contact from '../components/Contact.vue';
import Navbar from '../components/Navbar.vue';
import Services from '../components/Services.vue';
import GoogleReview from '../components/AvisGoogle.vue';
import LogIn from '../components/LogIn.vue';
import About from '../components/About.Vue';
import News from '../components/News.vue';
export default{
    components: { Navbar, HdrBanner, Services, GoogleReview, Contact, LogIn, About, News },
}
</script>

<template>

    <!-- Navbar, Banner container -->
    <Navbar/>
    <HdrBanner/>
    

    <LogIn/>
    <!--Content Services-->
    <Services/>

    <About/>

    <News/>

    <!-- AVIS GOOGLE -->
    <GoogleReview />

   


    <Contact/>
</template>

<style lang="scss">

</style>