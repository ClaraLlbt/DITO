<script>
import Album from '../components/Album.vue';
import HdrBanner from '../components/Banner.vue';
import Contact from '../components/Contact.vue';
import Navbar from '../components/Navbar.vue';
import Services from '../components/Services.vue';
import axios from 'axios'
export default{
    name: "Home",
    components: { Navbar, HdrBanner, Album, Services, Contact },

}
</script>

<template>

    <!-- Navbar, Banner container -->
    <Navbar/>
    <HdrBanner/>
    <Album/>


    <!--Content Services-->
    <Services/>


    <Contact/>
</template>

<style lang="scss">

</style>