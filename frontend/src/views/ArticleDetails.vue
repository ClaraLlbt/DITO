<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue';
import Contact from '../components/Contact.vue'
import Footer from '../components/footer.vue';

export default {
  components: { Navbar, Contact, Footer },
    data() {
        return {
          articles: [],
          article: {},
          attachments: [],
          lstAttachment: "",
          switchAttachment: "",
          anotherAttachments: [],
        };
    },
    created() {
        // Chargez les détails de l'article en utilisant l'ID provenant de la route
        this.Articles();
        this.loadArticleDetails();
    },
    methods: {
      Articles(){
        axios.get('http://localhost:3000/articles/', {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => { 
              this.id = this.$route.params.id;
              
                this.articles = response.data.articles;
                
            });
      },
      loadArticleDetails() {
            // Vous devrez implémenter la logique pour charger les détails de l'article
            // en fonction de l'ID de l'article dans la route
          const articleId = this.$route.params.id;
          axios.get('http://localhost:3000/articles/' + articleId, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => {
                this.article = response.data.data;
                this.attachments = response.data.attachments;
                this.lstAttachment =  response.data.attachments[0]
            });
      },
      switchArticle(id){
        const articleId = id
        console.log(articleId); 
        this.$router.push('/article/' + articleId);
        window.location.replace('/article/' + articleId)
      },
      switchMainImg(index){
        this.lstAttachment = this.attachments[index];

      },
      getMainImagePath() {
        return this.lstAttachment.path;
      },
      returnBack(){
        this.$router.go(-1);
      }
    },
};
</script>

<template>
<div class="bckgd-filter">
    </div>
  <Navbar/>
  <div class="container details">
    <a @click="returnBack()" class="btn back"><i class="bi bi-arrow-left"></i> Retour</a>
    <div class="row attachments">
      
      <div class="card article col-10">
        <div class="card-header row">
          <div class="col-7 last-attachment bckgd" :style="{ backgroundImage: 'url(' + getMainImagePath() + ')' }"></div>
          <div class="col-5 title">
            <h1>{{ article.title }}</h1>
          </div>
          <div class="row attachments">
            <div class="col-2 attachment bckgd" v-for="(attachment, index) in attachments" v-show="attachment.id !== lstAttachment.id" :key="attachment.id" :id="attachment.id" :style="{ backgroundImage: 'url(' + attachment.path + ')' }"
              @click="switchMainImg(index)"><div class="brightness"><i class="bi bi-eye"></i></div></div>

          </div>
        </div>
        <div class="card-body">
          <p>{{ article.content }}</p>
        </div>
        <div class="card-footer row">
          <div class="col">Posté le 28 Décembre 2023</div>
          
        </div>
      </div>
      <div class="col-2 networks">
       <div class="card">
          <h2>Restons connectés !</h2>
          <div class="card-body row">
            <a class="col" href="https://www.facebook.com/dito.pro.fr"><i class="bi bi-facebook"></i></a>
            <a class="col"  href="https://www.linkedin.com/company/dito-pro/posts/?feedView=all"><i class="bi bi-linkedin"></i></a>
            <a class="col"  href="https://www.instagram.com/remy.joly.75/"><i class="bi bi-instagram"></i></a>
          </div>
       </div>
       <div class="partner">
          <h2>Vous souhaitez un site web ?</h2>
          <img src="../assets/kaladev-logo.svg" alt="logo partenaire création web">
          <div class="link col-12"><a class="btn" href="https://kaladev.fr">Contactez notre partenaire</a></div>
       </div>
      </div>

    </div>        
    
  </div>

  <div class="container another-articles">
    <h2 class="main-title-ctr"><span id="four-dot-punctuation">&#8280;</span>Nos autres articles..</h2>
    <div class="row articles">
      <div class="card col-2" v-for="(articleID) in articles" v-show="articleID.id !== article.id" :key="articleID.id" :id="articleID.id">

        <div class="card-header row">
          <div class="col-12 last-attachment bckgd" v-for="(attach, index) in articleID.attachments" v-show="index == 0" :style="{ backgroundImage: 'url(' + attach.path + ')' }"></div>  
        </div>
        <div class="card-body">
          <h3>{{ articleID.title }}</h3>
          <p>{{  articleID.content }}</p>
          <button @click="switchArticle(articleID.id)" class="btn switch">En savoir plus <i class="bi bi-play-fill"></i></button>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style lang="scss">
.container.details{
  margin: 100px auto;
  .btn.back{
    margin: 10px 0;
    i{ 
      font-size: larger;
    }
  }
  .attachments{
    margin: auto;
    position: relative;
    .bckgd{
      background-size: cover;
      background-position: center;
    }
    .card.article{
      border: none;
      background: #E5E6E7;
      border-radius: 0;
      .card-header{
        padding-bottom: 85px;
        border: none;
        .last-attachment{
          height: 500px;
        }
        .title{
          align-self: center;
          h1{
            font-family: 'League Gothic', sans-serif;
            letter-spacing: 2px;
            font-size: 40px;
            text-transform: capitalize;
            border-left: 10px solid #F76F00;
            padding: 20px 10px;
          }
        }
        .attachments{
          justify-content: flex-end;
          margin: auto;
          position: absolute;
          z-index: 3;
          left: -25px;
          bottom: 0px;
          width: 85%;
          .attachment{
            height: 150px;
            margin-right: 5px;
            
            .brightness{
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              backdrop-filter: brightness(0.5);
              display: flex;
              align-items: center;
              justify-content: center;
              i{opacity: 0;}
              &:hover{
                backdrop-filter: brightness(0.7);
                font-size: xxx-large;
                z-index: 2;
                color: orange;
                i{
                  opacity: 1;
                  transition: all 0.3s ease;
                }
              }
              &::before, &::after{
              content: '';
              height: 20px;
              width: 20px;
              position: absolute;
              transition: all .35s ease;
              opacity: 0;
              z-index: 3;
            }
            &::before{
              right:10px;
              top: 10px;
              border-top: 3px solid #F76F00;
              border-right: 3px solid #F76F00;
              transform: translate(-35px,35px);
            } 
            &::after{
              content: "";
              left: 10px;
              bottom: 10px;
              border-bottom: 3px solid #F76F00;
              border-left: 3px solid #F76F00;
              transform: translate(35px,-35px);
            }
            &:hover::before, &:hover::after{
              transform: translate(0);
              opacity: 1;
            }
            }

          }
        }
      }
      .card-body{
        font-size: larger;
      }
      .card-footer{
        background: none;
        i {
          text-align: center;
          font-size: 50px;
        }
      }
    }
    .networks{
      position: fixed;
      right: 15%;
      width: 12%;
    
      .card{ 
        border: none;
        margin-bottom: 110px;
        background: transparent;
        backdrop-filter: contrast(1) blur(18px) opacity(0.5);
        box-shadow: 0px 3px 5px 0px darkgray;
        border: none;
        h2{
          text-align: center;
          color: #F76F00;
        }
        .card-body{
          text-align: center;
          font-size: xx-large;
          a{
            color: #485665;
            i{
              text-align: center;
              font-size: xx-large;
            }
            &:hover{
              color: #F76F00;
            }
          }
        }
      }
      .partner{
        img{
          width: 100%;
        }
        .btn{    
          background: linear-gradient(57deg,#ab9c7c,#cfc09f,#ffecb3,#cfc09f);
        }
      }
    }
  }
  .article-details{
    h1{
      font-family: 'League Gothic', sans-serif;
      letter-spacing: 2px;
      font-size: 40px;
      text-transform: capitalize;
      border-left: 10px solid #F76F00;
      padding: 20px 10px;
    }
  }
}
.container.another-articles{
  margin: 100px auto;
  .main-title-ctr{
    margin: 0;
    #four-dot-punctuation{
      opacity: 1;
      margin: 10px;
    }
  }
  .articles{
    margin: auto;
    .card{
      margin-right: 10px;
      background: transparent;
      backdrop-filter: contrast(1) blur(18px) opacity(0.5);
      box-shadow: 0px 3px 5px 0px darkgray;
      border: none;
      border-radius: 0;
      .card-header{
        padding: 0;
        .last-attachment{ 
          height: 150px;
          background-size: cover;
          background-position: center;
        }
      }
      .card-body{
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h3 { 
          font-size: 20px;
          color: #F76F00;
        }
        p {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: justify;
        }
      }
    }
  }
}


</style>