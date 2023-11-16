<script>
import axios from 'axios';
import {Notyf} from 'notyf'
import 'notyf/notyf.min.css'
import Navbar from '../components/Navbar.vue';
export default {
    name: 'articles',
    components:{ Navbar },
    data(){
        return{
            articles : [],
            attachment: "",
            title: "",
            content: "",

            //ADMIN:
            isAdmin: localStorage.getItem('isAdmin'),

            createCard: false,
            modifyCard: false,
            rUsure: false,
            articleId : "",
            //creation/modification article
            newAttachment: "",
            newTitle: "",
            newContent: "",

            imgPost: "",
            newimgPost: "",

            uploadImg : "",
            image : false
        }
    },
    created() {
        this.getArticles();
        this.notyf = new Notyf({
                duration: 4000,
                position: {
                    x: 'center',
                    y: 'bottom'
                }
            });
    },
  methods: {
        displayCreateCard(){
            if(!this.createCard){
                this.createCard = !this.createCard
            } else if(this.createCard){
                console.log(this.createCard);
                this.createCard = !this.createCard
            }
        },
        createArticle(){
            const attachment = this.uploadImg
            this.attachment = attachment
            const title = this.title
            const content = this.content
            const formdata = new FormData
            formdata.append('image', attachment)
            formdata.append('title', title)
            formdata.append('content', content)
            axios.post('http://localhost:3000/articles/', formdata,{
                headers: {
                        'Content-Type' : 'multipart/form-data',
                },
                formdata
            })
            .then(response => {
                const msgsuccess = response.data
                this.notyf.success(msgsuccess) 
                this.createCard = !this.createCard
                setTimeout(function() {  
                    window.location.reload();
                }, 2000); 
                })
                .catch((error) => {
                    console.log(error);
                    const msgerror = error.response
                    console.log(msgerror);
                    this.notyf.error(msgerror.error) 
                })
        },
        // Permet de récupérer les informations d'un fichier image
        onFileSelected(event){
            this.uploadImg = event.target.files[0]
                // Cette méthode permet de créer une URL provisoire d'une image pour la prévisualiser 
            if(event.target.files.length > 0){
                this.attachment = URL.createObjectURL(event.target.files[0]);
            }
            
        },
        // Permettent de télécharger les fichiers images sur le serveur
        uploadFile(){
            this.attachment = this.$refs.uploadFile.click()
        },
        getArticles(){
            
            axios.get('http://localhost:3000/articles/', {
                    headers: {
                        'Content-Type' : 'application/json',
                    }
                })
                .then(response => {
                    this.articles = response.data;
                })
                .catch(error => {
                    const msgerror = error.response
                    console.log(msgerror.error);
                })

        },
        modifyArticle(id){
            const articleId = id; 
            this.articleId = articleId

            if(!this.modifyCard){
                this.modifyCard = !this.modifyCard
            } else if(this.modifyCard){
                console.log(this.modifyCard);
                this.modifyCard = !this.modifyCard
            }
            //Retrieve and display article by id
            axios.get('http://localhost:3000/articles/' + articleId, {
                    headers: {
                        'Content-Type' : 'application/json',
                    }
            })
            .then((res) => {
                console.log(res);
                const articleById = res.data.data
                this.attachment = articleById.attachment
                this.title = articleById.title
                this.content = articleById.content
            })
            .catch(error => {
                const msgerror = error.response
                this.notyf.success(msgerror)
            })
            
        },
        hiddenMdfCard(){
            this.modifyCard = !this.modifyCard
        },
        updateArticle() {
            const articlebyId = this.articleId
            const title = this.newTitle
            const content = this.newContent
            console.log(articlebyId);

            console.log(this.attachment , this.newTitle, this.newContent);
            const formdata = new FormData
            formdata.append('image', this.attachment)
            formdata.append('title', title)
            formdata.append('content', content)

            axios.put('http://localhost:3000/articles/' + articlebyId, formdata,{
                headers:{
                    'Content-Type' : 'application/json'
                },
                formdata
            })
            .then((response) => {
                console.log(response);
                const msgsuccess = response.data.status
                console.log(response);
                this.notyf.success(msgsuccess)   
                this.modifyCard = !this.modifyCard
                setTimeout(function() {  
                    window.location.reload();
                }, 2000); 
            })
            .catch((error) => {
                const msgserror = error.response.data
                this.notyf.err(msgserror) 
            })
            console.log(formdata);
        },
        deleteArticle(id){
            const articleId = id; 

            axios.delete('http://localhost:3000/articles/' + articleId,{
                headers:{
                    'Content-Type' : 'application/json'
                },
            })
            .then((res) =>{
                //AJOUTER UNE CONDITION DE SURETE POUR CONFIRMER A NOUVEAU LA SUPPRESSION
                if(res){
                    alert("Attention cette action est irréversible")
                }
            })
            .catch((error)=> {
                console.log(error);
            })
        },
        popUpRuSure(){
            this.rUsure = !this.rUsure
        },
        deleteAllArticles(){
            axios.delete('http://localhost:3000/articles')
                .then((res) =>{
                    const succes = res.data
                    this.notyf = succes.succes
                })
                .catch((err)=>{
                    console.log(err);
                })
        },
        leaveAccount(){
            if(this.isAdmin = true){
                localStorage.clear('isAdmin')
                const msgsuccess = "Vous êtes déconnecté"
                this.notyf.success(msgsuccess) 
                setTimeout(function() {  
                    window.location.reload();
                }, 2000); 
            }
        }
    }
}
</script>

<template >

    <Navbar/>
    <div class="bckgd-filter"></div>
    <!-- // ADMIN INTERFACE -->
    <div v-if="isAdmin" class="container-fluid admin-ctr">
        <h1>ESPACE CRUD</h1>

        <div class="row crud">
            <button @click="displayCreateCard" class="create btn col-2"><i class="bi bi-plus-circle"></i></button>
            <button @click="popUpRuSure" class="delete btn col-2"><i class="bi bi-trash3-fill"></i></button>
            <div v-if="rUsure" class="pop-up" >
                <div class="r-u-sure">
                    <span><i class="bi bi-exclamation-diamond-fill"></i></span>
                    <span>Etes-vous sûr de vouloir supprimer tous les articles ?</span>
                    <div class="row">
                        <button @click="deleteAllArticles" class="yes btn col-2"><i class="bi bi-check-lg"></i></button>
                        <button @click="popUpRuSure" class="no btn col-2"><i class="bi bi-x-lg"></i></button>
                    </div>
                </div>
            </div>
            <button @click="leaveAccount" class="leave btn col-2"><i class="bi bi-door-open"></i></button>
        </div>
        <hr>

        <div class="row articles">
            <div v-for="article in articles" :key="article.id" class="col-10 col-sm-3 card">
                <div class="card-header">
                    <img :src="article.attachment" class="card-image-top" alt="">
                    <div v-if="isAdmin" class="tools-btn">
                        <button @click="modifyArticle(article.id)" class="btn mdf-btn"><i class="bi bi-gear-fill"></i></button>
                        <button class="btn dlt-btn"  @click="deleteArticle(article.id)"><i class="bi bi-trash3-fill"></i></button>
                    </div>
                </div>
                
                <div class="card-body">
                    <h2>{{ article.title }}</h2>
                    <span class="content"> {{ article.content }}</span>
                </div>    
            </div>
        </div>

         <!-- //CREATE ARTICLE -->
     <div v-show="createCard == true" class="create-ctr container-fluid">
            <div class="card">
                <div class="closeBtn">
                    <button @click="displayCreateCard" class="btn"><i class="bi bi-x-circle"></i></button>
                </div>
                <div class="card-header">
                    <h5 class="title">Créer un nouvel article</h5>
                    
                    <div class="hdr-border"></div>
                    <div v-if="attachment == ''" class="add-img">
                        <button for="file-input"  @click="uploadFile" class="col-md-3 col-3 btn"><i class="bi bi-file-earmark-image"></i></button> 
                        <input type="file" ref="uploadFile" name="image" @change="onFileSelected"  accept="image/*" id="file-input" aria-label="Modifier ma photo de profil">
                        
                        <p>Ajouter des images</p>
                    </div>
                    <div v-if="this.attachment" class="img-post">
                        <img id="image" :src="this.attachment" alt="image du message">
                    </div>
                    <!-- <div v-if="newAttachment" v-show="newimgPost" class="img-post">
                        <img id="image" :src="newAttachment" alt="image du message">
                    </div> -->
                    <!-- <img :src="src || " class="image" alt="Photo de profil"/> -->
                </div>
                <div class="card-body">
                    <div class="row">
                        <input type="title" id="title" name="title" v-model="title" placeholder="Ajouter un titre" >
                    </div>
                    <div class="row">
                        <textarea v-model="content" class="text-to-modify" placeholder="Ecrivez votre article"></textarea>
                    </div>
                    <div class="row">
                        <button type="submit" value="Submit" class="btn" @click="createArticle()">Poster</button>
                    </div>
                </div>
            </div>
    </div>

    <!--// Bloc permettant de modifier un articles -->
    <div v-show="modifyCard == true" class="mdf-ctr container-fluid">
        <div class="card" :id="this.articleId">
            <div class="closeBtn">
                <button @click="hiddenMdfCard(this.articleId)" class="btn"><i class="bi bi-x-circle"></i></button>
            </div>
            <!-- <div v-if="attachment == ''" class="add-img">
                <button for="file-input"  @click="uploadFile" class="col-md-3 col-3 btn"><i class="bi bi-file-earmark-image"></i></button> 
                <input type="file" ref="uploadFile" name="image" @change="onFileSelected"  accept="image/*" id="file-input" aria-label="Modifier ma photo de profil">
                        
                <p>Ajouter des images</p>
            </div>
            <div v-if="this.uploadImg" class="img-post">
                <img id="image" :src="this.uploadImg" alt="image du message">
            </div> -->
            <div class="card-header">
                    <h5 class="title">Modification</h5>
                    
                    <div class="hdr-border"></div>
                    <div v-if="attachment == ''" class="add-img">
                        <button for="file-input"  @click="uploadFile" class="col-md-3 col-3 btn"><i class="bi bi-file-earmark-image"></i></button> 
                        <input type="file" ref="uploadFile" name="image" @change="onFileSelected"  accept="image/*" id="file-input" aria-label="Modifier ma photo de profil">
                        
                        <p>Ajouter des images</p>
                    </div>
                    <div v-if="this.attachment" class="img-post">
                        <img id="image" :src="this.attachment" alt="image du message">
                    </div>
                    <!-- <div v-if="newAttachment" v-show="newimgPost" class="img-post">
                        <img id="image" :src="newAttachment" alt="image du message">
                    </div> -->
                    <!-- <img :src="src || " class="image" alt="Photo de profil"/> -->
                </div>
            
            <div class="card-body">
                <div class="row">
                    <input type="title" id="title" name="title" v-model="newTitle" :placeholder="this.title" >
                </div>
                <div class="row">
                    <textarea v-model="newContent" class="text-to-modify" :placeholder="this.content"></textarea>
                </div>
                <div class="row">
                    <button type="submit" value="Submit" class="btn" :id="this.articleId" @click="updateArticle()">Enregistrer</button>
                </div>
            </div>
        </div>
    </div>

    </div>


    <!-- // CLIENT INTERFACE -->
    <div v-else class="container-fluid articles-ctr">

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

        <!--// Bloc affichant les articles-->
        <div class="row articles">
            <div v-for="article in articles" :key="article.id" class="col-3 card">
                <div class="card-header">
                    <img :src="article.attachment" class="card-image-top" alt="">
                </div>
                
                <div class="card-body">
                    <h2>{{ article.title }}</h2>
                    <span class="content"> {{ article.content }}</span>
                </div>    
            </div>
        </div>


        <div class="contact-ctr">
            <div class="row">
                <h1>Nos articles vous ont convaincu ? Contactez-nous !</h1>
                <div class="card cards col-4">
                    <span><i class="bi bi-whatsapp"></i></span>
                    <p>03665644464</p>
                </div>
                <div class="card cards col-4">
                    <span><i class="bi bi-envelope-at-fill"></i></span>
                    <p>contact@dito-pro.fr</p>
                </div>
            </div>
        </div>
    </div>




</template>


<style lang="scss">
.color-txt{
    color: #F76F00;
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
.admin-ctr, .articles-ctr{
    h1{ 
        text-align: center;
        margin: 0 auto;
        padding: 50px 0;
    }
    .articles{
        justify-content: space-evenly;
        .card{
            height: fit-content;
            border: none;
            padding: 0;
            margin: 10px;
            &:hover{
                transform: scale(1.01);
                .card-header{
                    .tools-btn .btn{ display: block;}
                    img{ 
                        filter: brightness(0.5);
                    }
                }
                
            }
            .card-header{
                padding: 0;
                .tools-btn{
                    position: absolute;
                    right: 0;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .btn{
                        font-size: xxx-large;
                        display: none;
                        i{
                            color: lightgrey;
                        }
                    }
                }
                img{
                    width: 100%;
                    border: 1px black dotted;

                }
            }
            .card-body{
                
                h2{ 
                    font-family: 'League Gothic', sans-serif;
                    letter-spacing: 2px;
                    font-size: 50px;
                    color: #F76F00;
                    text-transform: capitalize;
                 }
            }
        }
    }
}
.admin-ctr{
    .crud{
        justify-content: center;
        .create, .delete, .leave{
            text-align: center;
            i {font-size: xx-large;}          
        }
    }
    
    .create-ctr, .mdf-ctr,.pop-up{
        backdrop-filter: brightness(0.5);
        position: fixed;
        z-index: 2;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        .card{
            width: 45%;
            padding: 5px;
            overflow: hidden;
            
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
            transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            &:hover{
                transform: scale(1.02);
            }
            .closeBtn{
                position: absolute;
                right: 5px;
                z-index: 2;
                .btn{
                    font-size: xx-large;
                    color: whitesmoke;
                }
            }
            .card-header {
            height: 400px;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            background: linear-gradient(15deg, rgb(51, 54, 82) 0%, rgb(1, 127, 160) 100%);
            position: relative;
            &::before{
                content: "";
                position: absolute;
                top: 43px;
                left: 0;
                background: rgba(255, 255, 255, 0);
                height: 15px;
                width: 15px;
                border-top-left-radius: 15px;
                box-shadow: -5px -5px 0 2px white;
            
            }
            .title{
                position: absolute;
                z-index: 2;
                right: 0;
                left: 10px;
                padding-left: 25px;
                &::before,&::after {
                    position: absolute;
                    content: "";
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                    left: 0px;
                    background-color: #0F4B80;
                }
                &::before {
                    width: 18px;
                    height: 18px;
                    background-color: #0F4B80;
                }
                &::after {
                    width: 18px;
                    height: 18px;
                    animation: pulse 1s linear infinite;
                }
            }
            .hdr-border{
                border-bottom-right-radius: 10px;
                height: 40px;
                width: 80%;
                background: white;
                position: relative;
                transform: skew(-40deg);
                box-shadow: -10px -10px 0 0 white;
                top: -5px;
                left: -20px;
                border-top-left-radius: 10px;
                &::before{
                    content: "";
                    position: absolute;
                    width: 15px;
                    height: 13px;
                    top: -3px;
                    right: -16px;
                    background: rgba(255, 255, 255, 0);
                    border-top-left-radius: 10px;
                    box-shadow: -11px -5px 0 2px white;

                }
            }
            .add-img{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: grid;
                align-items: center;
                justify-content: center;
                align-content: center;
                color: white;
                .btn{
                    color: white;
                    width: 100%;
                    i{font-size: xxx-large;}
                }
                input{ display: none;}
                img{ 
                    width: 100%;
                    border-radius: 5px;
                }
                
            }
            .img-post{
                text-align: center;
                align-self: center;
                img{
                    width: 50%;
                }
            }
        }
            .card-body{
            .row{
                width: 90%;
                margin: 15px auto;
                input{
                    border: none;
                    border-bottom: 1px solid grey;
                    border-radius: 5px;
                
                }
                textarea{
                    height: 180px;
                }
            }
        }
    }
}
.create-ctr{
        
        .card-header {
            height: 400px;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            background: linear-gradient(15deg, rgb(51, 54, 82) 0%, rgb(1, 127, 160) 100%);
            position: relative;
            &::before{
                content: "";
                position: absolute;
                top: 43px;
                left: 0;
                background: rgba(255, 255, 255, 0);
                height: 15px;
                width: 15px;
                border-top-left-radius: 15px;
                box-shadow: -5px -5px 0 2px white;
            
            }
            .title{
                position: absolute;
                z-index: 2;
                right: 0;
                left: 10px;
                padding-left: 25px;
                &::before,&::after {
                    position: absolute;
                    content: "";
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                    left: 0px;
                    background-color: #0F4B80;
                }
                &::before {
                    width: 18px;
                    height: 18px;
                    background-color: #0F4B80;
                }
                &::after {
                    width: 18px;
                    height: 18px;
                    animation: pulse 1s linear infinite;
                }
            }
            .hdr-border{
                border-bottom-right-radius: 10px;
                height: 40px;
                width: 80%;
                background: white;
                position: relative;
                transform: skew(-40deg);
                box-shadow: -10px -10px 0 0 white;
                top: -5px;
                left: -20px;
                border-top-left-radius: 10px;
                &::before{
                    content: "";
                    position: absolute;
                    width: 15px;
                    height: 13px;
                    top: -3px;
                    right: -16px;
                    background: rgba(255, 255, 255, 0);
                    border-top-left-radius: 10px;
                    box-shadow: -11px -5px 0 2px white;

                }
            }
            .add-img{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: grid;
                align-items: center;
                justify-content: center;
                align-content: center;
                color: white;
                .btn{
                    color: white;
                    width: 100%;
                    i{font-size: xxx-large;}
                }
                input{ display: none;}
                img{ 
                    width: 100%;
                    border-radius: 5px;
                }
                
            }
            .img-post{
                text-align: center;
                align-self: center;
                img{
                    width: 60%;
                }
            }
        }
    }
    .pop-up .r-u-sure{
        height: 200px;
        display: grid;
        background: whitesmoke;
        padding: 15px;
        align-content: space-evenly;
        span{
            i{
                font-size: xx-large;
                color: #F76F00;
            }
            font-size: large;
            text-align: center;
        }
        .row{
            justify-content: space-evenly;
            width: 100%;
            button{
                font-size: xx-large;
            }
            button.yes:hover{
                color: #0ECF2C;
            }
            button.no:hover{
                color:#F76F00
            }

        }
    }

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
    .contact-ctr{
        height: 700px;
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
            background-color: #0F4B80;
        }
        .row {
            justify-content: space-evenly;
            .cards{
                border: none;
                border-radius: 0;
                height: 200px;
                align-items: center;
                justify-content: center;
                span, p{
                    font-size: 40px;
                }
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
                &::before{
                    content: "";
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: #0F4B80;
                    height: 100%;

                }
            }
        }
    }
}
@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>