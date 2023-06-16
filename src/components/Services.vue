<script>
export default{
    name : "Services",
}
</script>

<template>
    <div id="services" class="container services-ctr">
        <h1 class="main-title">Une expertise qui s'adapte aux besoins des professionnels</h1>
        <div class="row pro-services">
            <div class="col-lg-6 col-md-12 img">
                <img src="../assets/images/services-pro.jpg" width="" height="" alt="Poignée de mains entre professionnels" decoding="auto">
            </div>
            <div class="col-lg-6 co-md-12 about-pro-services">
                <h5>Vous êtes à la recherche de la performance ? Vous souhaitez optimiser l'efficacité du SI de votre entreprise ? 
                    <em>Etablissons ensemble vos besoins</em>
                </h5>
                <p>&#187 Audit Informatique et Réseau</p>
                <p>&#187 Installation d'équipements Informatique et Réseau</p>
                <p>&#187 Cablage Réseau</p>
                <p>&#187 Déploiement Réseau</p>
                <p>&#187 Mise en service du matériel installé</p>
                <p>&#187 Assistance Dépannage Informatique et Réseau</p>
                <p>&#187 Récupération de données (disque dur illisible, perte de données)</p>
                <p>&#187 Brassage de baies</p>
                <p>&#187 Installation de borne wifi avec test de couverture EKAHAU</p>
            </div>
        </div>
        <div class="row part-services">
            <div class="col-lg-6 col-md-12 about-part-services">
                <h1>Mais aussi à ceux des particuliers</h1>
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
                <img src="../assets/images/services-particuliers.jpg" width="" height="" alt="Bureau d'un particulier" decoding="auto">
            </div>
        </div>

    </div>

</template>

<style lang="scss">
.services-ctr{
    h1{
        margin: 30px  auto;
    }
    .main-title{ text-align-last: center; }
    .row{
        align-content: center;
        padding: 40px;
        .img{
            img{
                width: 100%;
            }
        }
        .about-pro-services{
            p{ 
                margin: 5px 0;
                overflow-wrap: anywhere;
            }
        }
        .about-part-services{
            h1{ 
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

// Version mobile
@media (max-width: 768px) {
    .services-ctr{
        .main-title{
            text-align: center;
            font-size: 26px;
            margin: 20px auto;
        }
        .row{
            padding: 15px;
            flex-direction: column-reverse;
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
    }
}
</style>