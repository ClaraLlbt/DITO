<script>
export default{
    name : "Services",
}
</script>

<template>
    <div id="services" class="container-fluid services-ctr">
        <h2 class="main-title">Une expertise qui s'adapte aux besoins des professionnels</h2>
        
        <div class="row pro-services">
            <div class="col-lg-6 col-md-12">
                <div class="card">
                    <div class="background">
                        <div class="bckgd-card little-circle"></div>
                        <div class="bckgd-card big-circle"></div>
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
            <div class="col-lg-6 col-md-12">
                <div class="card">
                    <div class="background">
                        <div class="bckgd-card little-circle"></div>
                        <div class="bckgd-card big-circle"></div>
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
        </div>
        <div class="row pro-services">
            <div class="col-lg-6 col-md-12">
                <div class="card">
                    <div class="background">
                        <div class="bckgd-card little-circle"></div>
                        <div class="bckgd-card big-circle"></div>
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
            <div class="col-lg-6 col-md-12">
                <div class="card">
                    <div class="background">
                        <div class="bckgd-card little-circle"></div>
                        <div class="bckgd-card big-circle"></div>
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
        
        <!-- <div class="row part-services">
            <div class="col-lg-6 col-md-12 about-part-services">
                <h3>Mais aussi à ceux des particuliers</h3>
                <p class="subtitle">&#10030 Intervention à domicile</p>
                <p class="subtitle">&#10030 Devis et diagnostic gratuit</p>
                <p class="subtitle">&#9776 Préstations : </p>
                <div class="computer-services">
                    
                    <p class="benefit-title">Informatique (Windows, Linux, MacOs)</p>
                    <p>&#187 Vente de matériel neuf et recondionné</p>
                    <p>&#187 Installation du matériel informatique et Dépannage</p>
                    <p>&#187 Installation/réinstallation/migration/nettoyage du système informatique</p>
                    <p>&#187 Clonage/remplacement de disque dur</p>
                    <p>&#187 Sécurisation et récupération des des données</p>
                    <p>&#187 Remplacement des accéssoires informatiques</p>
                </div>
                <div class="network-telecom-services">
                    <p class="benefit-title">Réseau et Télécom</p>
                    <p>&#187 Diagnostic des prises téléphoniques et tableaux de communication</p>
                    <p>&#187 Raccordement et installation des prises téléphoniques et tableaux de communication</p>
                    <p>&#187 Installation de box internet</p>
                    <p>&#187 Installation téléassistance</p>
                    <p>&#187 Test de fonctionnement de votre installation</p>
                    <p>&#187 Sécurisation de vos données / Contrôle parental</p>
                    <p>&#187 Création de boite mail</p>
                </div>
                
                
            </div>
            <div class="col-lg-6 col-md-12 img"> 
                <img src="../assets/images/services-particuliers.webp" width="596" height="1096" alt="Bureau d'un particulier" rel="preload" decoding="auto">
            </div>
        </div> -->

    </div>

</template>

<style lang="scss">
.services-ctr{
    .main-title{ 
        text-align-last: center;
        margin: 30px  auto;
        font-size: 2.2rem; }
    .row{
        align-content: center;
        padding: 40px;
        width: 80%;
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
                    height: 65%;
                    width: 40%;
                    transform: translate(-65px, -35px);
                }
                .bckgd-card.big-circle{
                    height: 115%;
                    width: 65%;
                    transform: translate(-60px, 73px);
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
            }

        }
        .img{
            place-self: center;
            text-align: center;
            img{ 
                width: 80%;
                filter: drop-shadow(-11px 0px 7px lightgrey);
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