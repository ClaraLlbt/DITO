<script>
import { useDark, useToggle } from "@vueuse/core";
import { RouterLink } from "vue-router";
import GoogleCalendar from "./GoogleCalendar.vue";
export default{
    name: "Navbar",
    data() {
        return {
            dark: '',
            mobileView: false,
        };
    },
    mounted() {
        this.responsiveIcons();
        this.darkMode();
    },
    methods: {
        responsiveIcons() {
            const iconHome = document.querySelector('.icon-home');
            const iconServices = document.querySelector('.icon-services');
            const iconContact = document.querySelector('.icon-contact');
            if (window.matchMedia("(max-width: 768px)").matches) {
                /* La largeur minimum de l'affichage est 600 px inclus */
                // console.log("format mobile detecté");
                this.mobileView = !this.mobileView
                console.log(this.mobileView);
               
            }
            else {
                // console.log("format mobile non detecté");
                /* L'affichage est inférieur à 600px de large */
            }
        },
        darkMode() {
            const isDark = useDark();
            const toggleDark = useToggle(isDark);
            this.dark = isDark;
            const btnDkMod = document.querySelector('.item-dark-reader');
            btnDkMod.addEventListener('click', function () {
                toggleDark();
            });
        },
    },
    components: { RouterLink, GoogleCalendar }
}
</script>

<template>
    <div class="collapse mobile-nav" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div id="navbarNav" class="p-4">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link icon-home" href="#"><i class="bi bi-house-door-fill" aria-label="Lien vers l'accueil"></i>
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link icon-services" href="#services" aria-label="Lien vers les services proposés"><i class="bi bi-gear-wide-connected"></i>
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link icon-services" href="#services" aria-label="Lien vers les services proposés"><i class="bi bi-newspaper"></i>
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link icon-contact" href="#actu" aria-label="Lien vers le formulaire de contact"><i class="bi bi-envelope-at"></i>
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <button class="nav-link link-contact btn" id="btn-agenda">
                        <i class="bi bi-calendar4-week"></i>
                        <div class="border-effect"></div>
                    </button>
                </li>
                <button id="darkmode" role="button" class="btn nav-link" aria-label="buton darkmode">
                    <i class="bi bi-moon icon-moon" v-if="!dark"></i>
                    <i class="bi bi-brightness-high icon-light" v-else-if="dark"></i>
                </button>
               

            </ul>

        </div>
    </div>
    <nav class="navbar nav navbar-expand-lg ">
        <a v-if="!mobileView" class="navbar-brand" href="#"><img src="../assets/dito_logo_navbar.svg" width="150" height="100" alt="Logo DITO en texte"></a>

        <div id="navbarNav" class="container-fluid">
            <button class="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>
            <ul class="navbar-nav" v-if="!mobileView">
                <li class="nav-item">
                    <a class="nav-link link-home" href="#" aria-label="Lien vers l'accueil"><router-link to="/">Home</router-link>
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-services" href="#services" aria-label="Lien vers les services proposés"><router-link to="/#services">Services</router-link>  
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-contact" aria-label="Lien vers le formulaire de contact"><router-link to="/actualites">Actualités</router-link>
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-contact" href="#contact" aria-label="Lien vers le formulaire de contact">Contact
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <button role="button" class="nav-link link-contact btn" id="btn-agenda">
                        <i class="bi bi-calendar4-week"></i>
                        <div class="border-effect"></div>
                    </button>
                </li>
                <li class="item-dark-reader">
                    <button id="darkmode" role="button" class="btn nav-link" aria-label="buton darkmode">
                        <i class="bi bi-moon icon-moon" v-if="!dark"></i>
                        <i class="bi bi-brightness-high icon-light" v-else-if="dark"></i>
                    </button>
                </li>
            </ul>
        </div>
    </nav>

    <GoogleCalendar/>
</template>

<style lang="scss" scoped>
.mobile-nav{
    background: #E9EAEC;
    .navbar-nav{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .nav-item{
            box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
            width: 11%;
            text-align-last: center;
            border-radius: 15px;
            .nav-link{margin: auto;}
            &:active{
                box-shadow: inset 3px 1px 6px #bebebe, inset -2px -1px 6px #ffffff;  
            }
        }
    }
}
.nav{
    position: fixed;
    padding: 0;
    top: auto;
    z-index: 2;
    width: 100%;
    height: 50px;
    backdrop-filter: blur(100px);
    &:hover{
        background: #E9EAEC;
    }
    .navbar-brand{
        position: inherit;
        left: 5px;
    }
    #navbarNav{
        width: 100%;
        justify-content: center;
        .navbar-toggler{
            border: none;
            transform: scale(1.4);
            position: relative;
            top: -10px;
            background: lightgrey;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            padding: 0;
            
            i{ color: #F76F00;}
        }
        ul{
            width: 100%;
            justify-content: center;
            align-items: center;
            flex-direction: initial;
            li{ margin: 0 10px;}
            li #btn-agenda{
                background: none;
                color: #F76F00;
                font-size: x-large;
            }
            li:hover{
                .border-effect{
                    margin: auto;
                    border-bottom: 1px solid #F76F00;
                    animation: borderEffectOnHover 1s ease-in-out;
                }
                @keyframes borderEffectOnHover {
                    from{
                        width: 0%;
                    }
                    to{
                        width: 100%;
                    }
                }
            }
            li.item-dark-reader{
                position: absolute;
                right: 20px;
                margin: 0;
                .btn{
                    font-size: 1.5rem;
                    color: #F76F00;
                }
            }    
        }
    }
}

// Mobile Version
@media (max-width: 768px) {
    .mobile-nav{
        position: fixed;
        bottom: 50px;
        width: 100%;
        z-index: 2;
    }
    .nav{
        bottom: 0;
        padding: 5px 0px;
        .navbar-brand{
            img{ 
                height: 40px;
                width: 100%;
            }
        }
    }
}
</style>