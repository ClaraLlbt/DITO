<script>
import { useBluetooth, useDark, useToggle } from "@vueuse/core";
export default{
    name: "Navbar",
    data(){
        return{
            dark : '',
        }
    },
    mounted(){
        this.responsiveIcons()
        this.darkMode()
    },  
    methods : {
        responsiveIcons(){
            const iconHome = document.querySelector('.icon-home')
            const iconServices = document.querySelector('.icon-services')
            const iconContact = document.querySelector('.icon-contact')

            if (window.matchMedia("(max-width: 768px)").matches) {
                /* La largeur minimum de l'affichage est 600 px inclus */
                console.log("format mobile detecté")
                iconHome.classList.add('mbl')
                iconServices.classList.add('mbl')
                iconContact.classList.add('mbl')

            } else {
                console.log("format mobile non detecté")
                /* L'affichage est inférieur à 600px de large */
            }
        },
        darkMode(){
            const isDark = useDark();
            const toggleDark = useToggle(isDark)
            this.dark = isDark

            console.log(this.dark);

            const btnDkMod = document.querySelector('.item-dark-reader')
            btnDkMod.addEventListener('click', function(){
                toggleDark()
            })
        },
    }
}
</script>

<template>
    <nav class="navbar">
        <a class="navbar-brand" href="#"><img src="../assets/dito-txt.svg" width="150" height="50" alt="Logo DITO en texte"></a>
        
        <div class="" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link link-home" href="#" aria-label="Lien vers l'accueil">Home
                        <div class="border-effect"></div>
                    </a>
                    <a class="nav-link icon-home" href="#"><i class="bi bi-house-door-fill" aria-label="Lien vers l'accueil"></i>
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-services" href="#services" aria-label="Lien vers les services proposés">Services
                        <div class="border-effect"></div>
                    </a>
                    <a class="nav-link icon-services" href="#services" aria-label="Lien vers les services proposés"><i class="bi bi-gear-wide-connected"></i>
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-contact" href="#contact" aria-label="Lien vers le formulaire de contact">Contact
                        <div class="border-effect"></div>
                    </a>
                    <a class="nav-link icon-contact" href="#contact" aria-label="Lien vers le formulaire de contact"><i class="bi bi-envelope-at"></i>
                        <div class="border-effect"></div>
                    </a>
                </li>
                <li class="item-dark-reader">
                    <btn id="darkmode" role="button" class="btn" aria-label="buton darkmode">
                        <i class="bi bi-moon icon-moon" v-if="this.dark == false"></i>
                        <i class="bi bi-brightness-high icon-light" v-else-if="this.dark == true"></i>
                    </btn>
                </li>
               
            </ul>
        </div>
        
    </nav>
</template>

<style lang="scss" scoped>
nav{
    position: fixed;
    padding: 0;
    top: auto;
    z-index: 2;
    width: 100%;
    overflow: hidden;
    backdrop-filter: blur(100px);
    height: 50px;
    &:hover{
        background: aliceblue;
    }
    .navbar-brand{
        position: fixed;
        left: 5px;
    }
    #navbarNav{
        width: 100%;
        ul{
            justify-content: center;
            align-items: center;
            flex-direction: initial;
            li{ margin: 0 10px;}
            li:hover{
                .border-effect{
                    margin: auto;
                    border-bottom: 1px solid #0085A6;
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
                }
            }            
            .icon-home, .icon-services, .icon-contact{
                display: none;
            }
        }
    }
}

// Mobile Version
@media (max-width: 768px) {
    nav{
        padding: 5px 0px;
        .navbar-brand{
            img{ 
                height: 40px;
                width: 80%;
            }
        }
        #navbarNav{
            ul{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                li{
                    margin: 0 10px;
                    font-size: 1rem;
                    .icon-home.mbl, .icon-services.mbl, .icon-contact.mbl{
                        display: block;
                    }
                    .link-home, .link-services, .link-contact{
                        display: none;
                    }
                }
                
            }
        }
    }
}
</style>