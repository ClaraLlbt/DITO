<script>

import Navbar from '../components/Navbar.vue';
import Articles from '../components/Articles.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'actualites',
    components:{ Navbar, Articles, Contact, Footer },
    mounted(){
        const txtCtr = document.querySelector('.txt')
        const colorTxt = document.querySelectorAll('.color-txt')
        document.addEventListener('scroll', () => { 
            const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
                        
            colorTxt.forEach((text, index) => {
                const topElementToTopViewport = txtCtr.getBoundingClientRect().top
                if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60){
                    text.classList.add('appear');
                }
            }); 
        })
    }
}
</script>

<template >

    <Navbar/>
    <div class="bckgd-filter"></div>

    <!-- // CLIENT INTERFACE -->
    <div class="container-fluid articles-ctr">

        <div class="row  news-banner">
            <div class="custom-banner">
                <div class="txt-banner">
                    <h1><span>⁘</span> DITO ACTUS</h1>
                    <p>DITO, votre partenaire de confiance dans le monde dynamique des solutions B2B retail dédiées à la gestion de réseaux.
                        Fort d'une expérience de 4 ans sur le terrain, DITO propose des solutions adaptées a vos besoins de. Intervenant dans les zones du Var, 
                        des Alpes-Maritimes et des Bouches-du-Rhône, DITO met son expertise à disposition pour assurer une assistance rapide et efficace.
                    </p>
                </div>
                
            </div>
        </div>

        <div class="row txt">
            <p><span class="color-txt">Découvrez l'univers</span> passionnant de la gestion de réseaux et des technologies de connectivité. 
                <span class="color-txt">Explorez nos articles</span> captivants détaillant des <span class="color-txt">projets sur le terrain,</span> mettant en lumière les <span class="color-txt">défis</span> et les <span class="color-txt">réussites</span> 
                de notre équipe d'<span class="color-txt">experts.</span> Découvrez les dernières tendances en matière de technologies réseau, des conseils pratiques pour <span class="color-txt">optimiser vos infrastructures,</span> 
                et des analyses approfondies sur les innovations émergentes.
                Nous sommes déterminés à vous tenir informés et vous offrir un aperçu exclusif des <span class="color-txt">coulisses de nos opérations</span>
            </p>
        </div>
        <hr>
    </div>
        <!--// Bloc affichant les articles-->
    <div class="container articless">
        <Articles/>
    </div>


    <div class="container-fluid actu-contact-ctr">
        <!-- <Contact class="actu-contact"/> -->
            <div class="row banner-contact">
                <div class="col-7 cards-contact">
                    <h1>Nos articles vous ont convaincu ? Contactez-nous !</h1>
                    <div class="row contact-row">
                        <!-- Contact Informations -->
                        <div class="col-12 col-sm-12 col-md-12 col-lg-8 info-contact">
                            <div class="row">
                                <div class="col-4 map-img">
                                    <GoogleMap/>
                                </div>
                                <div class="col-4 email">
                                    <span>
                                        <i class="bi bi-envelope-at"></i>
                                        <p>contact@dito-pro.fr</p>
                                    </span>
                                </div>
                                <div class="col-4 phone-img"></div>
                            </div>
                            <div class="row">
                                <div class="col-4 adress">
                                    <span><i class="bi bi-geo-alt-fill"></i>
                                        <p>813 Av. des Moulins, 83200 Toulon</p>
                                    
                                    </span>
                                </div>
                                <div class="col-4 email-img">
                                </div>
                                <div class="col-4 nb-phone">
                                    <span>
                                        <i class="bi bi-phone-vibrate"></i>
                                        <p><a href="tel:+33627034216"> 06 27 03 42 16</a></p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 logo-dito">
                    <img src="../assets/dito_logo.svg" alt="">
                </div>
            </div>
     </div>
     <Footer/>
</template>


<style lang="scss">
.color-txt{
    color: #F76F00;
    opacity: 0;
}
.color-txt.appear{
    opacity: 1;
    transition: opacity 1s ease-in-out;
}
.bckgd-filter{
    background: url(/src/assets/images/particles.jpg);
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    /* filter: brightness(0.5); */
    opacity: 10%;
    z-index: -1;
    bottom: 0;
    position: fixed;
}


.articles-ctr{
    .news-banner{
        height: 700px;
        background: url('../assets/images/checkpoint.jpg');
        overflow: hidden;
        background-size: contain;
        background-position: right;
    
        .custom-banner{
            background: url('../assets/icons/newsbanner.png');
            background-position: center;
            background-size: cover;
            font-family: 'League Gothic', sans-serif;
            .txt-banner{
                position: absolute;
                left: 5%;
                top: 15%;
                width: 50%;
                h1{
                    text-align: left;
                    color: #F76F00;
                    font-size: 6rem;
                }
                p{
                    font-size: xx-large;
                }
            }
            
        }
    }
    .txt{
        width: 90%;
        text-align: center;
        margin: auto;
        font-size: xx-large;
        padding: 50px;
    }
}
.articless{
    .articles{
    width: 100% !important;
    margin: 100px auto;
    .card {
        a { display: none;}
        padding: 0;
        margin: 3px !important;
    }
}
}
.actu-contact-ctr{
        height: 600px;
        width: 100%;
        background: url('../assets/icons/newsbannerrigth.png');
        background-position: center;
        background-size: cover;
        font-family: 'League Gothic', sans-serif;
        &::before{
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -2;
            background-color: #017FA0;
        }
        .banner-contact {
            height: 100%;
            color: white;
            align-content: center;
            align-items: center;
            justify-content: space-between;
            h1{ 
                align-self: center;
                text-align: center;
            }
            .cards-contact{
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: space-evenly;
                .contact-row{
                    width: 100%;
                    justify-content: center;
                    .info-contact{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        &::after{
                            content: "";
                            width: 78%;
                            box-shadow: 0px 0px 13px 3px black;
                            position: absolute;
                            bottom: -2px;
                            right: 0;
                            left: 0;
                            margin: auto;
                            z-index: -1;
                        }
                        .row{
                            height: 180px;
                            width: 90%;
                            border: 1px solid white;
                            .map-img{
                                padding: 0;
                            }
                            .adress, .email, .nb-phone{
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                text-align: center;
                                background-color: #E9EAEC;
                                color: #F76F00;
                                i{
                                    font-size: 50px;
                                }
                            }
                            .email-img{
                                background: url('../assets/images/sentEmail.jpg');
                                background-position: center;
                                background-size: cover;
                            }
                            .phone-img{
                                background: url('../assets/images/call.jpg');
                                background-position: center;
                                background-size: cover;
                            }
                        }
                    }
                }
            }
            .logo-dito{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                img{ width: 70%;}
            }
        }
}


//MOBILE
/*portrait*/
@media screen and (max-width: 768px) {
    /* Styles pour les écrans de 768px de largeur ou moins */
}
</style>