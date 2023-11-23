<script>
export default{
    name : "Services",
}
</script>

<template>
    <div id="services" class="container-fluid services-ctr">
        <div class="row pro-services">
            <h2 class="main-title">Une expertise qui s'adapte aux besoins des professionnels</h2>
            <h3 class="title-ctr"><span>&#8280;</span> Nos services </h3>
           
                        
            <div class="card col-lg-3 col-md-12">
                <a href="#checkpoint-dscpt" class="stretched-link"></a>
                <div class="card-body text">
                        <h3>Installation Checkpoint</h3>
                </div>
                <div class="card-img img">
                    <img src="../assets/icons/checkpoint.png" alt="">
                </div>
                    
            </div>
            
            <div class="card col-lg-3 col-md-12">
                <a href="#audit-dscpt" class="stretched-link"></a>
                <div class="card-body">
                    <div class="col-6 text">
                        <h3>Audit wifi EKAHAU</h3>
                    </div>
                </div>
                <div class="card-img img">
                        <img src="../assets/icons/modem wifi.png" alt="">
                </div>
            </div>
            <div class="card col-lg-3 col-md-12">
                <a href="#network-dscpt" class="stretched-link"></a>
                <div class="card-body">
                    <div class="col-6 text">
                        <h3>Réseau</h3>
                    </div>
                </div>
                <div class="card-img img">
                    <img src="../assets/icons/box server.png" alt="">
                </div>
            </div>
            <div class="card col-lg-3 col-md-12">
                <a href="#data-restore-dscpt" class="stretched-link"></a>
                <div class="card-body">
                    <div class="col-6 text">
                        <h3>Récupération de données</h3>
                    </div>
                </div>
                <div class="card-img img">
                    <img src="../assets/icons/data.png" alt="">
                </div>
            </div>
        </div>
        
        <div class="row services-dscpt">
            <h3 class="title-ctr"><span>&#8280;</span> Comprendre de quoi il s'agit...</h3>
            <div id="checkpoint-dscpt" class="row checkpoint-dscpt">
                <div class="col-6 dscpt">
                    <h4>Installation checkpoint</h4>
                    <span>L'installation de bornes antivol dans une entreprise implique plusieurs étapes. 
                        Tout d'abord, une évaluation des zones critiques est réalisée pour déterminer les emplacements stratégiques des bornes. 
                        Ensuite, les bornes antivol sont physiquement installées, généralement aux entrées et sorties clés. 
                        Les systèmes de sécurité électronique associés sont configurés et intégrés. 
                        Enfin, un test complet est effectué pour garantir le bon fonctionnement du système, 
                        assurant ainsi une protection efficace contre le vol.</span>
                </div>
                <div class="col-4 img-dscpt"></div>
            </div>
            <div id="audit-dscpt" class="row audit-dscpt">
                <div class="col-4 img-dscpt"></div>
                <div class="col-6 dscpt">
                    <h4>Audit de couverture wifi</h4>
                    <span>Un audit de couverture Wi-Fi avec le service Ekahau implique l'utilisation d'outils spécialisés 
                        pour évaluer et optimiser les réseaux sans fil. Ekahau permet la cartographie précise des signaux Wi-Fi, 
                        l'identification des zones de faible couverture et l'analyse des interférences. En utilisant des données 
                        de mesure en temps réel, cet audit permet d'ajuster la configuration des points d'accès, 
                        d'optimiser la qualité du signal et d'améliorer la performance globale du réseau Wi-Fi, 
                        assurant ainsi une connectivité fiable et efficace. </span>
                </div>
            </div>
            <div id="network-dscpt" class="row network-dscpt">
                <div class="col-6 dscpt">
                    <h4>Déploiement du réseau wifi</h4>
                    <span>Le déploiement et l'installation du réseau WiFi impliquent l'intégration complète des composants tels que le câblage, 
                        les coffrets, les bornes, les switchs, les routeurs et les contrôleurs d'accès 
                    </span>
                </div>
                <div class="col-4 img-dscpt"></div>
            </div>
            <div id="data-restore-dscpt" class="row data-restore-dscpt">
                
            </div>
        </div>

        <div class="row other-services">
            <img class="bckgd-cable" src="../assets/icons/cable-2.png" alt="">
            <div class="col-5 title">
                <h3><span>&#8280;</span>Autres services</h3>
                <p>Forts de notre expertise dans le domaine de l'informatique, nous proposons également les services suivants pour les particuliers:</p>
            </div>
            <div class="col-6 services">
                
                    <div class="card col-3">
                        <img src="../assets/icons/screen.png" width="200" alt="">
                        <div class="card-body">
                            Installation/Dépannage informatique
                        </div>
                    </div>
                    <div class="card col-3">
                        <img src="../assets/icons/SSD.png" width="200" alt="">
                        <div class="card-body">Sauvegarde, Récupération et Remplacement du disque dur</div>
                    </div>
                    <div class="card col-3">
                        <img src="../assets/icons/keyboard-mouse.png" width="200" height="200" alt="">
                        <div class="card-body">Remplacement de votre matériel informatique</div>
                    </div>
                
                <!-- <p class="benefit-title">Informatique (Windows, Linux, MacOs)</p>

                <p>&#187 Installation du matériel informatique et Dépannage</p>
                <p>&#187 Installation/réinstallation/migration/nettoyage du système informatique</p>
                <p>&#187 Clonage/remplacement de disque dur</p>
                <p>&#187 Sécurisation et récupération des des données</p>
                <p>&#187 Remplacement des accéssoires informatiques</p> -->
            </div>
        </div>
        <div class="row partnership">
            <div class="col-4 logo-partner">
                <img src="../assets/kaladev-logo.svg" alt="logo partenaire création web">
            </div>
            <div class="col-5 contact-partner">
                <h3>NOTRE PARTENAIRE DE CREATION WEB</h3>
                <p>Vous souhaitez représenter votre entreprise comme nous l'avons fait ?</p>
                <div class="link"><a class="btn" href="https://kaladev.fr">Contactez notre partenaire</a></div>
            </div>
        </div>

    </div>

</template>

<style lang="scss">
.services-ctr{
    .main-title{ 
        text-align-last: center;
        margin: 30px  auto;
        font-size: 4.2rem; }
    .pro-services{
        align-content: center;
        padding: 40px;
        width: 90%;
        margin: auto;
        justify-content: space-between;
        .card{
            width: 260px;
            height: 270px;
            border-radius: 30px;
            background: #E6E7E9;
            box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
            border: none;
            &:hover{
                transform: scale(1.05);
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
        h3{
            text-align: right;
            padding-right: 185px;
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
            h3{
                font-size: 65px;
                span{
                    font-size: xxx-large;
                    color: #F76F00;
                    font-weight: 900;
                }
            }
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
                img{ margin: auto;}
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
        h3{
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


@media (max-width: 768px) {
    .services-ctr{
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
            padding: 15px;
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