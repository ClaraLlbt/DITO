<script>
export default{
    name : "Services",
    mounted(){
        this.animations()
    },
    methods:{
        animations(){
            const el = document.querySelector('.services-ctr')
            const cards = document.querySelectorAll('.card-services')

            const titlesSlide = document.querySelectorAll(".services-dscpt h4")
            const imgSlideTop = document.querySelectorAll(".services .card img")

            document.addEventListener('scroll', () => { 
                const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
                const topElementToTopViewport = el.getBoundingClientRect().top
                
                if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.30){
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            // Ajoutez une classe CSS pour déclencher l'animation
                            card.classList.add('slide-card');
                        }, 500 * index);
                    }); 

                }
                titlesSlide.forEach((title, index) => {
                    const topElementToTopViewport = title.getBoundingClientRect().top
                    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60){
                        // Ajoutez une classe CSS pour déclencher l'animation
                        title.classList.add('slide-h4');
                    }
                }); 
                imgSlideTop.forEach((img, index) => {
                    const topElementToTopViewport = img.getBoundingClientRect().top
                    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.60){
                        setTimeout(() => {
                            // Ajoutez une classe CSS pour déclencher l'animation
                            img.classList.add('slide-top');
                        }, 300 * index);// Appliquez un délai de 0.3 seconde multiplié par l'index de la carte
                    }
                }); 
            })
        }
    }
}
</script>

<template>
    <div id="services" class="container-fluid services-ctr">
        <div class="row pro-services">
            <h2 class="main-title">Une expertise qui s'adapte aux besoins des professionnels</h2>
            <div class="main-title-ctr"><span id="four-dot-punctuation">&#8280;</span><h3 class="title-ctr"> Nos services </h3></div>
           
                        
            <div class="col-lg-3 col-md-12 card card-services ">
                <a href="#checkpoint-dscpt" class="stretched-link"></a>
                <div class="card-body text">
                        <h4>Installation Checkpoint</h4>
                </div>
                <div class="card-img img">
                    <img src="../assets/icons/checkpoint.png" alt="">
                </div>
                    
            </div>
            
            <div class="col-lg-3 col-md-12 card card-services">
                <a href="#audit-dscpt" class="stretched-link"></a>
                <div class="card-body">
                    <div class="col-6 text">
                        <h4>Audit wifi EKAHAU</h4>
                    </div>
                </div>
                <div class="card-img img">
                        <img src="../assets/icons/modem wifi.png" alt="">
                </div>
            </div>
            <div class="col-lg-3 col-md-12 card card-services">
                <a href="#network-dscpt" class="stretched-link"></a>
                <div class="card-body">
                    <div class="col-6 text">
                        <h4>Réseau</h4>
                    </div>
                </div>
                <div class="card-img img">
                    <img src="../assets/icons/box server.png" alt="">
                </div>
            </div>
            <div class="col-lg-3 col-md-12 card card-services">
                <a href="#data-restore-dscpt" class="stretched-link"></a>
                <div class="card-body">
                    <div class="col-6 text">
                        <h4>Autres services</h4>
                    </div>
                </div>
                <div class="card-img img">
                    <img src="../assets/icons/data.png" alt="">
                </div>
            </div>
        </div>
        
        <div class="row services-dscpt">
            <div class="main-title-ctr title-right"><span id="four-dot-punctuation">&#8280;</span><h3> Comprendre de quoi il s'agit... </h3></div>
            <div id="checkpoint-dscpt" class="row checkpoint-dscpt text-dscpt">
                <div class="col-12 col-md-6 dscpt">
                    <h4>Installation checkpoint</h4>
                    <span>L'installation de bornes antivol dans une entreprise implique plusieurs étapes. 
                        Tout d'abord, une évaluation des zones critiques est réalisée pour déterminer les emplacements stratégiques des bornes. 
                        Ensuite, les bornes antivol sont physiquement installées, généralement aux entrées et sorties clés. 
                        Les systèmes de sécurité électronique associés sont configurés et intégrés. 
                        Enfin, un test complet est effectué pour garantir le bon fonctionnement du système, 
                        assurant ainsi une protection efficace contre le vol.</span>
                </div>
                <div class="col-12 col-md-4 img-dscpt"></div>
            </div>
            <div id="audit-dscpt" class="row audit-dscpt text-dscpt">
                <div class="col-md-4 img-dscpt"></div>
                <div class="col-md-6 dscpt">
                    <h4>Audit de couverture wifi</h4>
                    <span>Un audit de couverture Wi-Fi avec le service Ekahau implique l'utilisation d'outils spécialisés 
                        pour évaluer et optimiser les réseaux sans fil. Ekahau permet la cartographie précise des signaux Wi-Fi, 
                        l'identification des zones de faible couverture et l'analyse des interférences. En utilisant des données 
                        de mesure en temps réel, cet audit permet d'ajuster la configuration des points d'accès, 
                        d'optimiser la qualité du signal et d'améliorer la performance globale du réseau Wi-Fi, 
                        assurant ainsi une connectivité fiable et efficace. </span>
                </div>
            </div>
            <div id="network-dscpt" class="row network-dscpt text-dscpt">
                <div class="col-md-6 dscpt">
                    <h4>Déploiement du réseau wifi</h4>
                    <span>Le déploiement et l'installation du réseau WiFi impliquent l'intégration complète des composants tels que le câblage, 
                        les coffrets, les bornes, les switchs, les routeurs et les contrôleurs d'accès 
                    </span>
                </div>
                <div class="col-md-4 img-dscpt"></div>
            </div>
            <div id="data-restore-dscpt" class="row data-restore-dscpt text-dscpt">
                
            </div>
        </div>

        <div class="row other-services">
            <img class="bckgd-cable" src="../assets/icons/cable-2.png" alt="">
            <div class="col-12 col-md-5 title">
                <div class="main-title-ctr"><span id="four-dot-punctuation">&#8280;</span><h3> Autres Services </h3></div>
                <p>Forts de notre expertise dans le domaine de l'informatique, nous proposons également les services suivants pour les particuliers:</p>
            </div>
            <div class="col-12 col-md-6 services">
                <div class="card col-10 col-md-3">
                    <img src="../assets/icons/screen.png" width="200" alt="">
                    <div class="card-body">
                        Installation/Dépannage informatique
                    </div>
                </div>
                <div class="card col-10 col-md-3">
                    <img src="../assets/icons/SSD.png" width="200" alt="">
                    <div class="card-body">Sauvegarde, Récupération et Remplacement du disque dur</div>
                </div>
                <div class="card col-10 col-md-3">
                    <img src="../assets/icons/keyboard-mouse.png" width="200" height="200" alt="">
                    <div class="card-body">Remplacement de votre matériel informatique</div>
                </div>
            </div>
        </div>
        <div class="row partnership">
            <div class="col-10 col-md-4 logo-partner">
                <img src="../assets/kaladev-logo.svg" alt="logo partenaire création web">
            </div>
            <div class="col-10 col-md-5 contact-partner">
                <h4>NOTRE PARTENAIRE DE CREATION WEB</h4>
                <p>Vous souhaitez représenter votre entreprise comme nous l'avons fait ?</p>
                <div class="link"><a class="btn" href="https://kaladev.fr">Contactez notre partenaire</a></div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.services-ctr{
    .main-title{ 
        text-align-last: center;
        margin: 30px  auto;
        font-size: 4.2rem; }
    .pro-services{
        align-content: center;
        padding: 40px;
        width: 80%;
        margin: auto;
        justify-content: space-between;
        .card-services{
            width: 260px;
            height: 270px;
            border-radius: 30px;
            background: #E6E7E9;
            box-shadow: 6px 3px 20px 0px #bebebe, -6px -1px 20px 5px #ffffff;
            border: none;
            transform: translateY(60px) scale(1);
            opacity: 0;
            &:hover{
                
                box-shadow: inset 3px 1px 6px #bebebe, inset -2px -1px 6px #ffffff;
            }
            &:active{
                box-shadow: inset 3px 1px 6px #bebebe, inset -2px -1px 6px #ffffff;
            }
            .stretched-link{
                &::after{
                    height: 270px;
                }
            }
            .text{
                margin: auto;
                text-align: center;
                color: #F76F00;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                h3{ font-size: 30px;}
            }

        }
        .card-services.slide-card{
            animation: slideCards .5s 0.5s forwards;    
        }
        .img{
            place-self: center;
            text-align: center;
            img{ 
                width: 77%;
                
                margin: auto;
            }
        }
        .about-pro-services{
            p{ 
                margin: 5px 0;
                overflow-wrap: anywhere;
            }
        }
        .about-part-services{
            h3{ 
                margin: 0px 0px 20px 0px;
            }
            p{ 
                margin: 5px 0;
                overflow-wrap: anywhere;
            }
            p.subtitle{
                font-weight: 500;
                font-size: 20px;
                &:hover{
                    color: #0085A6;
                }
            }
            .computer-services, .network-telecom-services{
                padding: 10px 0px;
                border-top: 1px solid black;
                .benefit-title{
                    font-size: 18px;
                    font-weight: 500;
                }
                
            }
        }
    }
    .services-dscpt{
        .title-right{
            justify-content: flex-end;
            padding-right: 185px;
        }
        .checkpoint-dscpt .dscpt h4, .audit-dscpt .dscpt h4, .network-dscpt .dscpt h4{
            transform: translateX(-370px);
            opacity: 0;
        }
        .checkpoint-dscpt .dscpt h4.slide-h4, .audit-dscpt .dscpt h4.slide-h4, .network-dscpt .dscpt h4.slide-h4{
            transform: translateX(0);
            opacity: 1;
            transition: all 1s ease;
        }
        .checkpoint-dscpt, .audit-dscpt, .network-dscpt {
            height: 500px;
            justify-content: center;
            .dscpt{
                background: white;
                padding: 50px;
                text-align: center;
                height: 100%;
                display: flex;
                align-items: center;
                h4{
                    font-family: 'League Gothic', sans-serif;
                    font-size: 80px;
                    text-transform: uppercase;
                    text-align: right;
                    padding: 0 15px;
                }
                span{
                    text-align: justify;
                }
            }
            .img-dscpt{
                background-position: center;
                background-size: cover;
            }
            
        }
        .checkpoint-dscpt .img-dscpt{
            background: url('../assets/images/checkpoint-action.jpg');
            background-position: center;
            background-size: cover;
        }
        .audit-dscpt .img-dscpt{
            background: url('../assets/images/Ekahau.png');
            background-position: center;
            background-size: contain;
            background-color:#E9EAEC;
            background-repeat: no-repeat;

        }
        .network-dscpt .img-dscpt{
            background: url('../assets/images/reseau1.webp');
            background-position: center;
            background-size: cover;
        }
        
    }
    .other-services{
        background: #017FA0;
        margin-top: 50px;
        height: 400px;
        justify-content: center;
        .main-title-ctr{margin: 0 !important;}
        .bckgd-cable{
            opacity: 80%;
            width: 27%;
            position: absolute;
            left: -70px;
            top: 0;
        }
        .title{ 
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            flex-direction: column;
            
            p{ 
                text-align: center;
                font-size: 18px;
                width: 60%;
            }
        }
        .services{
            align-self: center;
            color: white;
            display: flex;
            justify-content: space-around;
            .card{
                background: none;
                img{ 
                    margin: auto;
                    transform: translateY(180px);
                    opacity: 0;
                    
                }
                img.slide-top{
                    opacity: 1;
                    transform: translateY(0);
                    transition: all 0.8s ease-in-out;
                    &:hover{
                        transform: scale(1.1) translateY(2px);
                        transition: transform 0.2s;
                    }
                }
                .card-body{ text-align: center;}
            }
            h4{
                font-size: x-larger;
            }
            p{ font-size: large;}
        }

    }
    .partnership{
        background: white;
        justify-content: center;
        align-items: center;
        height: 400px;
        h4{
            font-size: 65px;
        }
        p{ font-size: large;}
        .logo-partner {
            text-align: right;
            img{
                width: 40%;
                margin: auto;
                position: relative;
                right: 50px;
            }
        }
        .contact-partner{
            .btn{    
                background: linear-gradient(57deg,#ab9c7c,#cfc09f,#ffecb3,#cfc09f);
            }
        }
    }
}

//ANIMATIONS
@keyframes slideCards{
0%{
    transform: translateY(60px);
    opacity: 0;
}
100%{
    transform: translateY(0px);
    opacity: 1;
}
}


@media (max-width: 768px) {
    .services-ctr{
        margin: auto;
        padding: 0;
        .title-ctr{font-size: 40px;}
        .pro-services{
            .main-title, .title-ctr{
                font-size: 33px;
            }
            .card-services.slide-card{
                height: auto;
                width: auto;
                opacity: 1;
                transform: translateY(0);
                animation: none;
                margin: 17px auto;
                .card-img img{
                    width: 50%;
                }
                
            }
        }
        .services-dscpt{
            .title-ctr{
                right: 0;
                padding: 0 25px;
            }
            .text-dscpt{
                height: max-content;
                .dscpt{
                    flex-direction: column;
                }
                .img-dscpt{
                    height: 350px;
                }
            }
            .text-dscpt:nth-child(3){
                flex-direction: column-reverse;
            }
        }
        .other-services{
            height: auto;
            .title{
                h3{ font-size: 40px;}
                p{
                    width: 100%;
                    padding: 5px;
                    font-size: initial;
                }
            }
            .services{
                flex-direction: column;
                .card{
                    margin: 15px auto;
                    img{width: 50%;}
                }
            }
        }
        .partnership{
            height: max-content;
            flex-direction: column-reverse;
            .contact-partner{
                text-align: center;
                h3{ font-size: 50px;}
            }
            .logo-partner{
                text-align: center;
                img{
                    position: initial;
                }
            }
        }

        .pro-services .img img, .part-services .img img{
            width: 100%;
            height: 100%;
            
        }
        .pro-services .about-pro-services h3, .part-services .about-part-services h3{
                margin: 10px 0;
        }

        .main-title{
            text-align: center;
            font-size: 26px;
            margin: 20px auto;
        }
        .row{
            padding: 0;
            .about-pro-services{
                h5{
                    margin-top: 15px;
                    em{
                        color: #0085A6;
                        font-style: normal;
                    }
                }
            }
            .about-part-services p.subtitle{ color: #0085A6;}
        }
        .part-services{
            flex-direction: column-reverse;
        }
    }
}
</style>