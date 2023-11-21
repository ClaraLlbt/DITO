<script>
import HdrBanner from '../components/Banner.vue';
import Contact from '../components/Contact.vue';
import Navbar from '../components/Navbar.vue';
import Services from '../components/Services.vue';
import GoogleReview from '../components/AvisGoogle.vue';
import GoogleCalendar from '../components/GoogleCalendar.vue';
import News from '../components/News.vue';
export default{
    components: { Navbar, HdrBanner, Services, GoogleReview, Contact, GoogleCalendar, News },
}
</script>

<template>

    <!-- Navbar, Banner container -->
    <Navbar/>
    <HdrBanner/>
    

    <GoogleCalendar/>
    <!--Content Services-->
    <Services/>


    <News/>

    <!-- AVIS GOOGLE -->
    <GoogleReview />

   


    <Contact/>
</template>

<style lang="scss">

</style>