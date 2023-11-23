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
    methods:{
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
        readArticle(id){
            this.readMore = !this.readMore

            const articleId = id; 
            this.articleId = articleId

            // if(!this.modifyCard){
            //     this.modifyCard = !this.modifyCard
            // } else if(this.modifyCard){
            //     console.log(this.modifyCard);
            //     this.modifyCard = !this.modifyCard
            // }
            //Retrieve and display article by id
            axios.get('http://localhost:3000/articles/' + articleId, {
                    // headers: {
                    //     'Content-Type' : 'application/json',
                    // }
            })
            .then((res) => {
                console.log(res.data.data);
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
        closeArticle(id){
            this.readMore = !this.readMore 
        }
    }

}
</script>

<template>
    <!--// Bloc affichant les articles-->
    <div class="row articles">
        <div v-for="article in articles" :key="article.id" class="col-3 card">
            <div class="card-header">
                <img :src="article.attachment" class="card-image-top" alt="">
            </div>    
            <div class="card-body">
                <h2>{{ article.title }}</h2>
                <p class="content">{{ article.content }}</p>
            </div>  
            <a @click="readArticle(article.id)" class="btn read-more stretched-link">En savoir plus <i class="bi bi-play-fill"></i></a>
             
        </div>
    </div>

    <div v-show="readMore == true" class="row display-article">
            <div class="card article-card col-10" :id="this.articleId">
                <div class="closeBtn">
                    <button @click="closeArticle" class="btn"><i class="bi bi-x-circle"></i></button>
                </div>
                <div class="col-6 card-header">
                    <img :src="this.attachment" class="card-img" alt="">
                </div> 
                <div class="card-body col-6">
                    <h2>{{  this.title }}</h2>
                    <p class="content">{{  this.content }}</p>
                </div>
            </div>
    </div>


</template>


<style lang="scss" scoped>
.articles, .display-article{
    .card{
        background: none;
        border: none;
    }
}
.articles{
    justify-content: space-between;
    width: 70%;
    margin: auto;
    .card{
        height: fit-content;
        padding: 0;
        margin: 10px;
        &:hover{
            transform: scale(1.01);
            .card-header{
                .tools-btn .btn{ display: block; }
                img{ filter: brightness(0.5); }
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
            img{
                width: 100%;
                border: 1px black dotted;
            }
        }
        .card-body{
            padding: 10px 0;
            h2{ 
                font-family: 'League Gothic', sans-serif;
                letter-spacing: 2px;
                font-size: 50px;
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
            i{ color:#F76F00; }
        }

    }
}
.display-article{
    justify-content: center;
    position: absolute;
    top: -75px;
    .article-card{
        flex-direction: row;
        background: #E5E6E7;
        .closeBtn{
            position: absolute;
            right: 0;
            top: -20px;
            z-index: 1;
            button{font-size: xx-large;}
        }
        .card-header{
            background: white;
            display: flex;
            align-items: center;
            .card-img{ 
                width: 100%;
            }
        }
        .card-body{
            padding: 0 15px;
            h2{
                font-size: xxx-large;
                border-left: 10px solid #F76F00;
                padding-left: 10px;
            }

        }
    }
    
}
</style>