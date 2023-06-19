<script>
import axios from 'axios';
export default{
    name: 'Contact',
    data(){
        return{
            currentYear : '',
            formData: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                object: '',
                message: '',
            }
        }
    },
    mounted() {
        this.copyrith()
    },
    methods: {
        copyrith(){
            this.currentYear = new Date().getFullYear();
        },
        submitForm(){

            axios.post('http://localost:3000/send', this.formData)
                .then((response) => {
                    console.log(response.data);
                    window.location.reload()
                })
                .catch(error => {
                    console.log(error)    
                })
            }
    }
}
</script>

<template>
    <div id="contact" class="container-fluid contact-ctr">

        <div class="row">
            <!-- Contact Informations -->
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 info-contact">
                <div class="contents-grp">
                    <div class="row social-network-icons">
                        <div class="col"><img src="../assets/dito-txt.svg" width="150px" height="auto" alt="Logo DITO en texte"></div>
                        <div class="col icons"> 
                            <a href="https://www.linkedin.com/in/remy-joly-11552a1b2/" aria-label="Lien vers le profil LinkedIn"><i class="bi bi-linkedin"></i></a>
                            <a href="https://www.facebook.com/reparation.pc.714" aria-label="Lien vers la page Facebook"><i class="bi bi-facebook"></i></a>
                        </div>
                    </div>
                    <div class="row info-dito">
                        <div class="row menu">
                            <div class="col">
                                <a class="nav-link" href="#">Home
                                    <div class="border-effect"></div>
                                </a>
                            </div>
                            <div class="col">
                                <a class="nav-link" href="#services">Services
                                    <div class="border-effect"></div>
                                </a>
                            </div>
                        </div>
                        <div class="row about">
                            <div class="col-12 col-md-6 about-us">
                                <h4>A propos</h4>
                                <p>DITO est une entreprise spécialisée dans le domaine du dépannage informatique et réseau. Avec une expérience de 4 ans sur le terrain,
                                    DITO propose des solutions adaptées aux besoins de ses clients, aussi bien particuliers que professionnels. 
                                    Intervenant dans les zones du Var, des Alpes-Maritimes et des Bouches-du-Rhône, 
                                    DITO met son expertise à disposition pour assurer une assistance rapide et efficace 
                                    en cas de panne ou de dysfonctionnement informatique.
                                </p>
                            </div>
                            <div class="col intervention">
                                <h4>Zone d'intervention</h4>
                                <p>83 - Var</p>
                                <p>06 - Alpes Maritimes</p>
                                <p>13 - Bouche-du-Rhône</p>

                                <div class="inquire">
                                    <p>Renseignements &#8594</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row contact">
                        <div class="col number-phone"> 
                            <p><a href="tel:+33627034216"><i class="bi bi-telephone"></i> 06 27 03 42 16</a></p>
                        </div>
                        <div class="col email"> 
                            <p><i class="bi bi-at"></i> Remy@dito-pro.fr</p>
                        </div>
                    </div>
                    </div>

            </div>
            <!-- Contact Form -->
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 form-column">
                    <form id="form" action="" method="post" @submit.prevent="submitForm">
                        <label for="">Formulaire de contact</label>
                        <div class="row">
                            <div class="col-6">
                                <input v-model="this.formData.firstname" type="text" pattern="[a-zA-ZÀ-ÿ\u00C0-\u017F]+([ '-][a-zA-ZÀ-ÿ\u00C0-\u017F]+)*" class="form-control" id="inputName" placeholder="&#x27A4 Votre nom" required>
                            </div>
                            <div class="col-6">
                                <input v-model="this.formData.lastname" type="text" pattern="[a-zA-ZÀ-ÿ\u00C0-\u017F]+([ '-][a-zA-ZÀ-ÿ\u00C0-\u017F]+)*" class="form-control" id="inputLastname" placeholder="&#x27A4 Votre prénom" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <input v-model="this.formData.email"  type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" class="form-control" id="inputEmail" placeholder="&#x2709 Votre email" required>
                            </div>
                            <div class="col-6">
                                <input v-model="this.formData.phone" type="tel"  pattern="^0[1-9](\d{2}){4}$" class="form-control" id="inputPhoneNumber" placeholder="&#x260F Votre numéro de téléphone" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input v-model="this.formData.object" type="text" pattern="([a-zA-Z]|[à-ü])+.{0,50}" class="form-control" id="inputObjectMessage" placeholder="&#x2726 Sujet de votre message" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col textarea">
                                <textarea v-model="this.formData.message" placeholder=" &#x270E Ecrivez votre message..." maxlength="350" id="inputMessage" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <button id="sendBtn" type="submit" class="btn">Envoyer &#8594</button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>

    </div>

    <footer class="container-fluid footer-ctr">
            <div class="row">
                <p>Copyright @{{this.currentYear}}. Laliberté. All Rigths Reserved.
                </p>
            </div>
    </footer>
</template>

<style lang="scss">
.contact-ctr{
    background: #0085A6;
    display: flex;
    align-items: center;
    color: white;
    padding: 50px 30px 20px 30px;
    .row{
        .info-contact{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .contents-grp{
                width: 90%;
                .social-network-icons{
                    border-bottom: 1px solid white;
                    padding: 10px 0;
                    .icons{
                        text-align-last: right;
                        font-size: 25px;
                        a i {
                            margin: 0 10px;
                            color: white;
                            font-size: 2rem;
                            &:hover{
                                border-bottom: 1px solid white;
                            }
                        }
            
                    }
                }
                .info-dito{
                    .row{
                        padding: 10px;
                    }
                    .menu{
                        .col{
                            a{ 
                                color: white;
                                font-weight: 500;
                            }
                        }
                    }
                    .about{
                        font-size: 12px;
                        border-bottom: 1px solid white;
                        .about-us{
                            p{ 
                                text-align: justify;
                                width: 80%;
                                font-size: 1rem;
                            }
                        }
                        .intervention{
                            .inquire{
                                display: flex;
                                align-items: center;
                                border: 1px solid white;
                                width: 70%;
                                justify-content: center;
                                margin: 15% 0;
                            }
                            p{ 
                                margin: 10px 0;
                                font-size: 1rem; 
                            }
                        }
                        
                    }
                }
                .contact{
                    .col{ 
                        font-size: 1.2rem;
                        p{
                            margin: 15px 0;
                            a{ color: white;}
                        }
                    }
                    }
            }
        }
        .form-column{
            display: flex;
            align-items: flex-end;
            form{
                height: 100%;
                display: grid;
                padding: 30px;
                border: 1px solid white;
                width: 90%;
                label{
                    margin: 0 10px;
                    font-size: 1.5rem;
                }
                .row{
                    width: 100%;
                    margin: 10px auto;
                    input{
                        border-radius: 0;
                    }
                    textarea{
                        width: 100%;
                    }
                    input, textarea{
                        background: #80C2D2;
                        &::placeholder{
                            color: white;
                            font-size: 1rem;
                            padding: 5px;
                        }
                    }
                    .btn{
                        color: white;
                        width: 30%;
                        border: 1px solid white;
                        border-radius: 0;
                        padding: 5px;
                        &:hover{
                            background: #80C2D2;
                        }
                    }
                }
            }
        }
    }

}
.footer-ctr{
    text-align-last: center;
    background-color: #80C2D2;
    p{
        margin: 10px;
        font-size: 1.2rem;
        color: white;
    }
}


// Mobile Version
@media (max-width: 768px) {
    .contact-ctr{
        padding: 0;
        .row{
            justify-content: center;
            text-align: -webkit-center;
            .info-contact{
                justify-content: center;
                .contents-grp{
                    width: 100%;
                    .contact {
                        .number-phone p a, .email{
                        font-size: 1rem;
                        }
                    }
                }
            }
            .form-column{
                justify-content: center;
                display: flex;
                margin: 20px auto;
                form{
                    width: 85%;
                    padding: 10px;
                    .row{
                        input, textarea{
                        &::placeholder{
                            font-size: 0.8rem;
                            padding: 5px;
                            }
                        }
                        .btn{ width: 50%;}
                    
                    }
                }
            }
        }
    }
    .footer-ctr p{
        font-size: 0.8rem;
    }
}
</style>