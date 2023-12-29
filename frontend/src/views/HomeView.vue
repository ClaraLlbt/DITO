<script>
import HdrBanner from '../components/Banner.vue';
import Contact from '../components/Contact.vue';
import Navbar from '../components/Navbar.vue';
import Services from '../components/Services.vue';
import GoogleReview from '../components/AvisGoogle.vue';
import Articles from '../components/Articles.vue';
import GoogleMap from '../components/GoogleMap.vue';
import Footer from '../components/Footer.vue';
export default{
    components: { Navbar, HdrBanner, Services, GoogleReview, Contact, Articles, GoogleMap, Footer },
    mounted() {
        const titles = document.querySelectorAll('#four-dot-punctuation')
        
            document.addEventListener('scroll', () => { 
                const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
                
                
                titles.forEach((title, index) => {
                    const topElementToTopViewport = title.getBoundingClientRect().top
                    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.30){
                        title.classList.add('popUp');
                    }
                }); 

                
            })
    }
}
</script>

<template>

    <!-- Navbar, Banner container -->
    <Navbar/>
    <HdrBanner/>
    

    <!--Content Services-->
    <Services/>

    <!-- //ACTUALITES// -->
    <Articles/>
        
    

    <!-- AVIS GOOGLE -->
    <GoogleReview />



    <Contact/>
    <Footer/>
</template>

<style lang="scss">
.main-title-ctr #four-dot-punctuation.popUp{
    opacity: 1 !important;
    transform: scale(4.5) translate(0, -2px);
    transition: all 1s ease-in-out;
}

</style>