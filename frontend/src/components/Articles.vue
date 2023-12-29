<script>
import axios from 'axios';
import {Notyf} from 'notyf'
import 'notyf/notyf.min.css'
export default {
    name: "articles",
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
            readMore: false,

            articleId : "",
            //creation/modification article
            newAttachment: "",
            newTitle: "",
            newContent: "",

         
            lastArticle: "",
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
    mounted(){
        const newsCtr = document.querySelector('.news-ctr')
        const titleDot = document.querySelector('#four-dot-punctuation')
        document.addEventListener('scroll', () => { 
        const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
        const topElementToTopViewport = newsCtr.getBoundingClientRect().top
                    
        if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.30){
            titleDot.classList.add('popUp');
        }
        })
    },
    methods:{
        getArticles(){
            axios.get('http://localhost:3000/articles/', {
                    headers: {
                        'Content-Type' : 'application/json',
                    }
                })
                .then(response => {
                    this.articles = response.data.articles
                })
                .catch(error => {
                    const msgerror = error.response
                    console.log(msgerror.error);
                })

        },
        closeArticle(id){
            this.readMore = !this.readMore 
        }
    }

}
</script>

<template>
    <!--// Composant affichant les articles de la base de données-->
    <div class="container news-ctr">
        <div class="row actu-title" >
            <div class="main-title-ctr title-right"><span id="four-dot-punctuation">&#8280;</span><h3> Actualités </h3></div>
            <h4>Restez informé de nos projets</h4>
        
        </div>
        <div class="row articles">
            <!-- // AFFICHE LE DERNIER ARTICLE EN DATE // -->
            <div v-for="(article, index) in articles" :key="article.id" v-show="index == 0" class="col-11 col-md-5 card">
                <div class="card-header">
                    <div class="col-12 last-attachment">
                        <div class="attachment" v-for="(attachment, index) in article.attachments" v-show="index == 0" :style="{ backgroundImage: 'url(' + attachment.path + ')' }" :key="lastArticle.id"></div>
                    </div>
                    
                </div>
                <div class="card-body">
                    <h2>{{ article.title }}</h2>
                    <p class="content">{{ article.content }}</p>
                </div>  
                <router-link :to="{ name: 'ArticleDetails', params: { id: article.id } }" class="btn read-more stretched-link">En savoir plus <i class="bi bi-play-fill"></i></router-link>

            </div>

            <!-- // AFFICHE LE RESTE DE LA LISTE // -->
            <div v-for="(article, index) in articles" :key="article.id" v-show="index !== 0" class="col-5 col-md-3 card">
                <div class="card-header">
                    <div class="col-12 last-attachment">
                        <div class="attachment" v-for="(attachment, index) in article.attachments" v-show="index == 0" :style="{ backgroundImage: 'url(' + attachment.path + ')' }" :key="article.id"></div>
                    </div>
                </div>   
                <div class="card-body">
                    <h2>{{ article.title }}</h2>
                    <p class="content">{{ article.content }}</p>
                </div>  
                <router-link :to="{ name: 'ArticleDetails', params: { id: article.id } }" class="btn read-more stretched-link">En savoir plus <i class="bi bi-play-fill"></i></router-link>  
            </div>
        </div>  
    </div>
    


</template>


<style lang="scss" scoped>

.actu-title{
    h4{font-size: 33px;}
}
.articles{
    .card{
        padding: 0;
        margin: 10px;
        height: 550px;
        background: none;
        border: none;
        &:hover{
            transform: scale(1.01);
            .read-more{ 
                display: block;
                z-index: 2;
            }
            .card-header{
                .tools-btn .btn{ display: block; }
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
                    i{ color: lightgrey;}
                }
            }
                .last-attachment .attachment{
                    height: 300px;
                    background-size: cover;
                    background-position: center;
                }
                .rest-attachments{
                    width: 100%;
                    margin: 5px;
                    .attachment{
                        margin: 3px;
                        height: 115px;
                        background-size: cover;
                        background-position: center;
                    }
                }
        }
        .card-body{
            h2{ 
                font-family: 'League Gothic', sans-serif;
                letter-spacing: 2px;
                font-size: 40px;
                color: #F76F00;
                text-transform: capitalize;
            }
            p{
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: justify;
            }
        }
        .read-more{
            float: right;
            border: 1px solid lightgrey;
            border-radius: 0;
            display: none;
            i{ color:#F76F00; }
        }

    }
}

//MOBILE
/*portrait*/
@media screen and (max-width: 768px) {
    /* Styles pour les écrans de 768px de largeur ou moins */
    .articles{
        .card{
           margin: 5px auto;
            
            .card-body{
                padding: 0;
                h2{ font-size: 25px;}
            }
        }
    }
}
</style>