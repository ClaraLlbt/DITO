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
            
            <div class="col-lg-3 col-md-12">
                <div class="card">
                    <div class="background">
                        <div class="bckgd-card little-circle"></div>
                    </div>
                    <div class="col-6 text">
                        <h3>Installation Checkpoint</h3>
                        <p>Installation de borne antivol</p>
                    </div>
                    <div class="col-6 img">
                        <img src="../assets/icons/checkpoint.png" alt="">
                    </div>
                    
                </div>
            </div>
            <div class="col-lg-3 col-md-12">
                <div class="card">
                    <div class="background">
                        <div class="bckgd-card little-circle"></div>
                    </div>
                    <div class="col-6 text">
                        <h3>Audit wifi</h3>
                        <p>Audit et Installation de bornes wifi avec couverture EKAHAU</p>
                    </div>
                    <div class="col-6 img">
                        <img src="../assets/icons/modem wifi.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12">
                <div class="card">
                    <div class="background">
                        <div class="bckgd-card little-circle"></div>
                    </div>
                    <div class="col-6 text">
                        <h3>Réseau</h3>
                        <p>Installation d'équipements réseau et brassage de baie</p>

                    </div>
                    <div class="col-6 img">
                        <img src="../assets/icons/box server.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12">
                <div class="card">
                    <div class="background">
                        <div class="bckgd-card little-circle"></div>
                    </div>
                    <div class="col-6 text">
                        <h3>Récupération de données</h3>
                        <p>Installation de borne antivol</p>
                    </div>
                    <div class="col-6 img">
                        <img src="../assets/icons/data.png" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div class="row services-dscpt">
            <h3 class="title-ctr"><span>&#8280;</span> Comprendre de quoi il s'agit...</h3>
            <div class="row checkpoint-dscpt">
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
            <div class="row audit-dscpt">
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
            <div class="row network-dscpt">
                <div class="col-6 dscpt">
                    <h4>Déploiement du réseau wifi</h4>
                    <span>Le déploiement et l'installation du réseau WiFi impliquent l'intégration complète des composants tels que le câblage, 
                        les coffrets, les bornes, les switchs, les routeurs et les contrôleurs d'accès 
                    </span>
                </div>
                <div class="col-4 img-dscpt"></div>
            </div>
            <div class="row data-restore-dscpt">
                
            </div>
        </div>

        <div class="row part-services">
            <div class="col-4 title">
                <h3><span>&#8280;</span> Et pour les particuliers ?!</h3>
            </div>
            <div class="col-4 services">
                <p class="benefit-title">Informatique (Windows, Linux, MacOs)</p>
                <p>&#187 Installation du matériel informatique et Dépannage</p>
                <p>&#187 Installation/réinstallation/migration/nettoyage du système informatique</p>
                <p>&#187 Clonage/remplacement de disque dur</p>
                <p>&#187 Sécurisation et récupération des des données</p>
                <p>&#187 Remplacement des accéssoires informatiques</p>
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
        margin: auto;
        
        .card{
            height: 400px;
            flex-direction: row;
            border-radius: 0;
            &::after{
                content: "";
                width: 94%;
                box-shadow: 0px 0px 13px 3px black;
                position: absolute;
                bottom: -2px;
                right: 0;
                left: 0;
                margin: auto;
                z-index: -1;
            }
            .background{
                position: absolute;
                height: 100%;
                width: 100%;
                overflow: hidden;
                .bckgd-card{
                background: linear-gradient(15deg, rgba(51,54,82,1) 0%, rgba(1,127,160,1) 100%);
                border-radius: 50%;
                position: absolute;
                }
                .bckgd-card.little-circle{     
                    height: 100%;
                    width: 100%;
                    transform: translate(-195px, 0);
                }
            }
            .text{
                margin: auto;
                text-align: center;
                color: #F0F7FE;
                font-family: 'Montserrat', sans-serif;
                height: 100%;
                z-index: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 50px 10px;
                h3{ font-size: 30px;}
            }

        }
        .img{
            place-self: center;
            text-align: center;
            img{ 
                width: 105%;
                
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
    .part-services{
        background: #017FA0;
        margin-top: 50px;
        height: 500px;
        justify-content: center;
        .title{ 
            display: flex;
            justify-content: center;
            align-items: center;
            h3{ 
                color: white;
                font-size: 40px;
                span{
                    font-size: xxx-large;
                    color: #F76F00;
                    font-weight: 900;
                }
            }
        }
        .services{
            align-self: center;
            color: white;
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