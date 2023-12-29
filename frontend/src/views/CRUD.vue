<script>
import Navbar from '../components/Navbar.vue'

import axios from 'axios';
import {Notyf} from 'notyf'
import 'notyf/notyf.min.css'

export default {
    name: "CRUD",
    components: { Navbar },
    data() {
        return {
            token : false,
            // ARTICLES
            articles : [],
            attachments: [],

            // IMG PREVIEWS
            attachmentsQueue: [],
            deletionQueue: [],

            previewsQueue: [],
            lastImgPreview: "",
            activedAttachment: "",
            

            //ARTICLE TEMPLATE
            id: "",
            attachment: "",
            title: "",
            content: "",

            //ARTICLE(id)
            articleById: "",
            attachmentsById: [],
            titleById: "",
            contentById: "",
            lastImgById:"",
            //ADMIN:
            isAdmin: localStorage.getItem('isAdmin'),

            crtCard: false,
            mdfCard: false,
            rUsure: false,
            articleId : "",
            cardId: "",
            //creation/modification article
            updatedAttachments: [],
            updatedTitle: "",
            updatedContent: "",

            imgPost: "",
            newimgPost: "",

            uploadImg : "",
            
            image : false

        }
    },
    created() {
        const token = sessionStorage.getItem('token')
        if(token != null){
            this.token = true
        } else if(token == null){
            setTimeout(() => {
                this.redirection();
            }, 3000);
        }
        this.getArticles()
        this.notyf = new Notyf({
                duration: 4000,
                position: {
                    x: 'center',
                    y: 'bottom'
                }
            });
    },
    methods:{
        redirection(){
            this.$router.push('/') 
        },
        //----------------CRUD----------------//
        // Permet de récupérer tous les articles et de les afficher
        getArticles(){
            axios.get('http://localhost:3000/articles/', {
                headers: {
                    'Content-Type' : 'application/json',
                }
            })
            .then(response => {
                
                this.articles = response.data.articles
                this.attachments = response.data.articles.attachments
                console.log(response);
            })
            .catch(error => {
                const msgerror = error.response
                console.log(msgerror.error);
            })
        },
        // Permet de créer un nouvel article et de le stocker dans la BDD //
        createArticle() {
            const attachment = this.uploadImg;
            this.attachment = attachment;

            const title = this.title;
            const content = this.content;

            const formdata = new FormData();
            formdata.append('title', title);
            formdata.append('content', content);

            if (this.attachmentsQueue.length <= 5) {
                axios
                .post('http://localhost:3000/articles/', formdata, {
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                    },
                })
                .then((articleCreated) => {
                    const articleId = articleCreated.data.response.id;

                    // Utilisez Promise.all pour attendre toutes les requêtes asynchrones
                    const attachmentPromises = this.attachmentsQueue.map((attachment) => {
                    const attachmentFormData = new FormData();
                    attachmentFormData.append('image', attachment);
                    attachmentFormData.append('articleId', articleId);

                    return axios.post('http://localhost:3000/attachments/', attachmentFormData, {
                        headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                        },
                    });
                    });

                    Promise.all(attachmentPromises)
                    .then((responses) => {
                        // Gérez la réponse de l'envoi de l'image
                        const msgsuccess = 'Votre article a bien été posté !';
                        this.notyf.success(msgsuccess);
                        this.createCard = !this.createCard;
                        setTimeout(() => {
                        window.location.reload();
                        }, 2000);
                    })
                    .catch((attachmentErrors) => {
                        console.error(attachmentErrors);
                        const msgerror = attachmentErrors[0].response.data.error;
                        this.notyf.error(msgerror);
                    });
                })
                .catch((error) => {
                    const msgerror = error.response.data.error;
                    this.notyf.error(msgerror);
                });
            } else if (this.attachmentsQueue.length > 5) {
                alert('Vous ne pouvez ajouter que 5 images');
            }
        },

        // Récupére un article par son identifiant ID
        getArticle(id){
            const articleId = id; 
            this.articleId = articleId

            axios.get('http://localhost:3000/articles/' + articleId, {
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
            })
            .then((response) => {
                const cardID = document.getElementById(this.articleId)
                const clickRandom = document.querySelector('body')
                cardID.classList.add('show-btn')

                clickRandom.addEventListener('click', function(){
                    cardID.classList.remove('show-btn')
                })

                const articleById = response.data
                this.articleById = articleById
                console.log(articleById);

                this.attachmentsById = articleById.attachments

                this.titleById = articleById.data.title
                this.contentById = articleById.data.content
            })
            
        },
        dltQueue(id){
            const imgId = id 
            const imgHidden = document.getElementById(id)
            
            for(let i = 0; i < this.attachmentsById.length; i++){
                if(imgId === this.attachmentsById[i].id){
                    this.deletionQueue.push(this.attachmentsById[i])
                    imgHidden.setAttribute('style', 'display:none')
                }
            }
        },
        // Modifie l'article par son identifiant
        updateArticle() {
            const articleId = this.articleId
            console.log(this.articleId);
            this.updatedAttachments = this.attachmentsQueue

            if(this.updatedTitle && this.updatedContent || this.updatedTitle || this.updatedContent ){
                const formdata = new FormData
                formdata.append('title', this.updatedTitle)
                formdata.append('content', this.updatedContent)
                axios.put('http://localhost:3000/articles/' + articleId, formdata, {
                    headers:{
                        'Content-Type' : 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    formdata
               })
               .then((response) =>{
                    const msgsuccess = response.data.status
                    this.notyf.success(msgsuccess)   
                    this.modifyCard = !this.modifyCard
                    setTimeout(function() {  
                        window.location.reload();
                    }, 2000);
               })
               .then((error)=>{
                    const msgserror = error.response.data
                    this.notyf.err(msgserror) 
               })
            
            } 
            if(this.updatedAttachments.length >= 1){
                    for(let i = 0; i < this.updatedAttachments.length; i++){
                        const updatedFormData = new FormData
                        updatedFormData.append('image', this.updatedAttachments[i])
                        updatedFormData.append('articleId', articleId);

                        //AJOUTES LES NOUVELLES IMAGES DANS LA BASE DE DONNEES
                        axios.post('http://localhost:3000/attachments/', updatedFormData, {
                            headers:{
                                'Content-Type' : 'multipart/form-data',
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            }, updatedFormData
                        })
                        .then(response => {
                            console.log(response);
                        })
                        .catch((error) =>{
                            console.log(error);
                        })
                    }
            }
            if (this.deletionQueue.length >= 1){
                    for(let i = 0; i < this.deletionQueue.length; i++){
                        const deleteImgId =  this.deletionQueue[i].id
                        console.log(deleteImgId);
                        axios.delete('http://localhost:3000/attachments/' + deleteImgId, {
                            headers:{
                                'Content-Type' : 'application/json',
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            }, deleteImgId
                        })
                        .then((response) =>{
                            console.log(response);
                        })
                        .catch((error) =>{
                            console.log(error);
                        })
                    }
                   
                    
            }
        },
        // Supprime l'article par son identifiant
        deleteArticle(id){
            const articleId = id; 

            axios.delete('http://localhost:3000/articles/' + articleId,{
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            })
            .then((response) =>{
                const msgsuccess = response.data.message
                this.notyf.success(msgsuccess)
                setTimeout(function() {  
                    window.location.reload();
                }, 2000); 
                
            })
            .catch((error)=> {
                const msgerror = error.response.data
                this.notyf.error(msgerror)
            })
        },
        // Supprime tous les articles de la BDD
        deleteAllArticles(){
            axios.delete('http://localhost:3000/articles', {
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            })
                .then((response) =>{
                    const succes = response.data
                    this.notyf = succes.succes
                    setTimeout(function() {  
                        window.location.reload();
                    }, 2000); 
                })
                .catch((error)=>{
                    const msgerror = "Il n'y a aucun article a supprimer"
                    this.notyf.error(msgerror)
                    this.rUsure = !this.rUsure
                })
        },
        // Déconnecte l'utilisateur admin.
        leaveAccount(){
            localStorage.clear('token')
            const msgsuccess = "Vous êtes déconnecté"
            this.notyf.success(msgsuccess) 
            setTimeout(() => {
                this.$router.push('/actualites')
            }, 2000);   
        },


        //---------------- Affichage des formulaires CREATE/UPDATE et Pop UP de confirmation ----------------//
        // Affiche le formulaire de création d'article //
        createCard(){
            if(!this.crtCard){
                this.crtCard = !this.crtCard 
            } 
            else if(this.crtCard){
                this.previewsQueue = []
                this.crtCard = !this.crtCard
            }
        },
        // Affiche ou ferme le formulaire de modification de l'article //
        modifyCard(){
            if(!this.mdfCard){
                this.mdfCard = !this.mdfCard
            } else if(this.mdfCard){
                if(this.attachment.length > 0){
                    window.location.reload()
                }
                this.mdfCard = !this.mdfCard
            }   
        },
        // Pop up de confirmation de suppresion de TOUS les articles
        popUpRuSure(){
            this.rUsure = !this.rUsure
        },

        // ---------------- Téléchargement et affichage de fichiers images ---------------- //
        // Permet de récupérer les informations d'un fichier image
        onFileSelected(event){
            this.uploadImg = event.target.files[0]

            const imagesToDeleteCount = this.deletionQueue.length;
            const totalImagesCount = this.attachmentsById.length + this.attachmentsQueue.length - imagesToDeleteCount;
            const newImageName = this.uploadImg.name;
            
            // Vérifier si le nom de la nouvelle image n'existe pas déjà
            const isNameUnique = !(
                this.attachmentsById.some(image => image.name === newImageName) ||
                this.attachmentsQueue.some(image => image.name === newImageName)
            );
            if (totalImagesCount < 5 && isNameUnique) {
                this.attachmentsQueue.push(this.uploadImg)

            } else if (!isNameUnique) {
                const error = "Cette image existe déjà"
                const msgerror1 = error
                this.notyf.error(msgerror1)
            } else {
                // Vous n'avez plus d'emplacements disponibles
                const error = "Le nombre maximal d'images par article a été atteint (5 images maximum). "
                const msgerror = error
                this.notyf.error(msgerror)
            }
            
            // Cette méthode permet de créer une URL provisoire d'une image pour la prévisualiser 
            if(event.target.files.length > 0){
                this.previewsQueue = this.attachmentsQueue.map(file => URL.createObjectURL(file));
                console.log(this.previewsQueue);
                
                this.lastImgPreview = this.previewsQueue[0]
                 
                this.attachment = URL.createObjectURL(event.target.files[0]);
                this.newAttachment = URL.createObjectURL(event.target.files[0]);

            }
            
        },
        // Permettent de télécharger les fichiers images sur le serveur
        uploadFile(){
            this.attachment = this.$refs.uploadFile.click()
        },
        uploadNewFile(){
            this.newAttachment = this.$refs.uploadFile.click()
        },

        deleteSelectedImg(id){
            const imgId = id
            this.previewsQueue.splice(imgId, 1)
            this.attachmentsQueue.splice(imgId, 1)
            
        },
        closePreviewsImg(){
            
        }
    }
}
</script>

<template> 
    <Navbar/>
    <div class="bckgd-filter"></div>  
    
    <div v-show="!token" class="container-fluid alert-access">
        <div class="card col-lg-5">
            <div class="warning-icon"><i class="bi bi-exclamation-triangle-fill"></i></div>
            <h1>VOUS N'ETES PAS AUTORISE A ACCEDER A CETTE PAGE</h1>
            <p>Vous allez être redirigé vers la page d'accueil</p>
        </div>
    </div>
    
    <div v-show="token" class="container-fluid admin-ctr">
        <h1>ESPACE CRUD</h1>
        
        <div class="row crud">
            <button @click="createCard" class="create btn col-2"><i class="bi bi-plus-circle"></i></button>
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
        
        <!-- // Affiche tous les articles de la BDD -->
        <div class="row articles">
            <div v-for="article in articles" :key="article.id" :id="article.id" @click="getArticle(article.id)" class="col-10 col-sm-3 grid-item card">
                <div class="tools-btn">
                    <button class="btn mdf-btn" @click="modifyCard(article.id)"><i class="bi bi-gear-fill"></i></button>
                    <button class="btn dlt-btn"  @click="deleteArticle(article.id)"><i class="bi bi-trash3-fill"></i></button>
                </div>
                <div class="card-header row">
                    <div class="col-12 last-attachment">
                        <div class="attachment" v-for="(attachment, index) in article.attachments" v-show="index == 0" :style="{ backgroundImage: 'url(' + attachment.path + ')' }" :key="article.id">{{ attachments }}</div>
                    </div>
                    <div class="row rest-attachments">
                        <div class="col-3 attachment" v-for="(attachment, index) in article.attachments" v-show="index >= 1" :style="{ backgroundImage: 'url(' + attachment.path + ')' }" :key="article.id">{{ attachments }}</div>

                    </div>
                </div>
                
                <div class="card-body">
                    <h2>{{ article.title }}</h2>
                    <span class="content"> {{ article.content }}</span>
                </div>
                    
            </div>
        </div>
    </div>     

    <!-- //CREATE ARTICLE -->
    <div v-if="crtCard" class="create-ctr container-fluid">
            <div class="card">
                <div class="closeBtn">
                    <button @click="createCard" class="btn"><i class="bi bi-x-circle"></i></button>
                </div>
                <div class="card-header">
                    <h5 class="title">Créer un nouvel article</h5>
                    
                    <div class="hdr-border"></div>

                    <div class="row attachments">
                        <div class="col-3 optionsTools">
                            <button for="file-input"  @click="uploadFile" class="btn upload-btn"><i class="bi bi-plus-circle"></i></button> 
                            <input type="file" ref="uploadFile" name="image" @change="onFileSelected"  accept="image/*" id="file-input" aria-label="Modifier ma photo de profil">
                            
                            <button class="btn dlt-attachments"><i class="bi bi-trash3-fill"></i></button>
                        </div>
                        
                        <div class="col img-previews">
                            <div class="row"> 
                                <div v-for="attachPreview in previewsQueue" :id="previewsQueue.indexOf(attachPreview)" class="col-3 preview"  :style="{ backgroundImage: 'url(' + attachPreview + ')' }">
                                    <button class="btn" @click="deleteSelectedImg(previewsQueue.indexOf(attachPreview))"><i class="bi bi-x-circle"></i></button>
                                </div>         
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div class="card-body">
                    <div class="row card-line">
                        <input type="title" id="title" name="title" v-model="title" placeholder="Ajouter un titre" >
                    </div>
                    <div class="row card-line">
                        <textarea v-model="content" class="" placeholder="Ecrivez votre article"></textarea>
                    </div>
                    <div class="row card-line">
                        <button type="submit" value="Submit" class="btn" @click="createArticle()">Poster</button>
                    </div>
                </div>
            </div>
    </div>

    <!--// Bloc permettant de modifier un articles -->
    <div v-show="mdfCard" class="mdf-ctr container-fluid">
        <div class="card col-10 col-sm-10 col-md-10 col-lg-6" :id="this.articleId">
            <div class="closeBtn">
                <button @click="modifyCard(this.articleId)" class="btn"><i class="bi bi-x-circle"></i></button>
            </div>
           
            <div class="card-header">
                    <h5 class="title">Modification</h5>
                    <div class="hdr-border"></div>
                     

                    <div  class="row mdf-attachments">
                        <div class="col-3 mdf-tools">
                            <button for="file-input"  @click="uploadNewFile" class="col-md-3 col-3 btn"><i class="bi bi-plus-circle"></i></button> 
                            <input style="display: none;" type="file" ref="uploadFile" name="image" @change="onFileSelected"  accept="image/*" id="file-input" aria-label="Modifier ma photo de profil">
                       
                        </div>
                        <div class="col attachments"> 
                            <div class="row database-attachments">
                                <div class="col-3 attachment" v-for="(attachment,index) in attachmentsById" :key="index" :id="attachment.id" :style="{ backgroundImage: 'url(' + attachment.path + ')' }">
                                    <button class="btn" @click="dltQueue(attachment.id)"><i class="bi bi-x-circle"></i></button>
                                </div>
                            </div>
                            <div class="row img-previews">
                                <i v-if="previewsQueue == 0" class="bi bi-caret-up-fill icon-up"></i>
                                <i @click="closePreviewsImg" v-else-if="previewsQueue.length > 0" class="bi bi-caret-down-fill icon-down"></i>
                                <div v-for="attachPreview in previewsQueue" :id="previewsQueue.indexOf(attachPreview)" class="col-3 preview"  :style="{ backgroundImage: 'url(' + attachPreview + ')' }">
                                    <button class="btn" @click="deleteSelectedImg(previewsQueue.indexOf(attachPreview))"><i class="bi bi-x-circle"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
            <div class="card-body">
                <div class="row card-line">
                    <input type="title" id="title" name="title" v-model="updatedTitle" :placeholder="this.titleById" >
                </div>
                <div class="row card-line">
                    <textarea v-model="updatedContent" class="text-to-modify" :placeholder="this.contentById"></textarea>
                </div>
                <div class="row card-line">
                    <button type="submit" value="Submit" class="btn" :id="this.articleId" @click="updateArticle()">Enregistrer</button>
                </div>
            </div>
        </div>
    </div>

   

</template>

<style lang="scss">
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
.alert-access{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .card{
        .warning-icon{ font-size: xxx-large;}
        height: 400px;
        text-align: center;
        justify-content: center;
        color: #F76F00;
    }
}

.admin-ctr{
    h1{ 
        text-align: center;
        margin: 0 auto;
        padding: 50px 0;
    }
    .crud{
        justify-content: center;
        .create, .delete, .leave{
            text-align: center;
            i {font-size: xx-large;}          
        }
    }
    
    .articles{
        justify-content: center;
        flex-wrap: wrap;
        .card{
            overflow: hidden;
            border: none;
            padding: 0;
            margin: 3px;
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
                    i{ color: #E5E6E7; }
                    &::before{
                        font-size: medium;
                        width: max-content;
                        opacity: 0;
                        position: absolute;
                        top: 15px;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        color: #E5E6E7;
                        z-index: 3;
                    }
                    &:hover::before{
                        top: -15px;
                        opacity: 1;
                        transition: all 0.5s ease-in-out;
                    }
                }
                .mdf-btn::before{
                    content: "Modifier";
                    left: 6px;
                }
                .dlt-btn::before{
                    content: "Supprimer";
                    color: #F76F00;
                }
            }
            .card-header{
                padding: 0;
                .last-attachment .attachment{
                    height: 300px;
                    background-size: cover;
                    background-position: center;
                }
                .rest-attachments{
                    width: 100%;
                    margin: 5px;
                    .col-3.attachment{ width: 23% !important}
                    .attachment{
                        margin: 3px;
                        height: 115px;
                        background-size: cover;
                        background-position: center;
                    }
                }
            }
            .card-body{
                height: 400px;
                overflow: scroll;
                &::-webkit-scrollbar-thumb {
                    background-color: #F76F00;
                }
                &::-webkit-scrollbar{
                    width: 10px;
                }
                scrollbar-width: thin;
                h2{ 
                    font-family: 'League Gothic', sans-serif;
                    letter-spacing: 2px;
                    font-size: 50px;
                    color: #F76F00;
                    text-transform: capitalize;
                 }
            }
        }
        .card.show-btn{
            
                transform: scale(1.01);
                &::before{
                    content:"";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    backdrop-filter: brightness(0.3);
                    z-index: 1;
                }
                .tools-btn .btn{ 
                    display: block;
                    z-index: 2;
                }    
            
        }
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
            min-height: 260px;
            height: max-content;
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
            .attachments{
                margin: auto 0;
                .optionsTools{
                    input{ display: none;}
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    button{
                        font-size: xx-large;
                        color: white;
                    }
                    button:hover::before{
                        z-index: 1;
                        width: max-content;
                        position: absolute;
                        font-size: 12px;
                        bottom: -10px;
                        left: 45px;
                        backdrop-filter: brightness(0.7);
                        padding: 5px;
                        border-radius: 50px;
                    }
                    button.upload-btn:hover::before{
                        content: "Ajouter une image";
                    }
                    button.dlt-attachments:hover::before{
                        content: "Supprimer toutes les images";
                    }
                }
            }
            .img-previews{
                .preview{
                    height: 150px;
                    background-size: cover;
                    background-position: center;
                    padding: 0;
                    margin: 5px;
                    button{
                        float: right;
                        color: white;
                    }
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
                display: flex;
                justify-content: center;
                text-align: center;
                align-self: center;
                img{
                    width: 50%;
                }
                .change-img{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    height: max-content;
                    margin: auto;
                    button {
                        width: max-content;
                        backdrop-filter: brightness(0.2);
                        i {
                            font-size: xx-large;
                            color: #E5E6E7;
                        }
                    }
                    input{ display: none; }
                }
            }
            
        }
        .card-body{
            .card-line{
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

.mdf-ctr{
    .card{
        .card-header{
            .mdf-attachments{
                height: 45vh;
                .mdf-tools{
                    align-self: center;
                    text-align: center;
                    button{
                        width: auto;
                        font-size: xx-large;
                        color: white;
                    }
                }
                .attachments{
                    height: 100%;
                    .database-attachments{
                        height: 100%;
                        align-items: center;
                        justify-content: center;
                        align-content:center;
                        .attachment{
                            background-size: cover;
                            background-position: center;
                            height: 150px;
                            margin: 3px;
                        }
                    }
                    .img-previews{
                        height: max-content;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        backdrop-filter: brightness(0.3);
                        width: 100%;
                        margin: auto;
                        border-radius: 25px;
                        padding: 10px;
                        i{
                            color: white;
                            height: fit-content;
                            text-align: center;
                        }
                        .preview{
                            height: 115px;
                        }
                    }
                }
                // .attachments {
                //     display: flex;
                //     width: 100%;
                //     flex-wrap: wrap;
                //     .attachment{
                //         padding: 2px;
                //         height: 150px;
                //         background-size: cover;
                //         background-position: center;
                //     }
                // }
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


</style>