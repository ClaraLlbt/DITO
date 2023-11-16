<script>
// Importez Axios dans votre fichier
import axios from 'axios';
import moment from 'moment';
import 'moment-locale-fr'

// Définissez une fonction pour récupérer les publications Facebook
async function getFacebookPosts(accessToken) {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v15.0/me/posts?fields=id,message,created_time,attachments
      &access_token=${accessToken}`
    );
    return response.data.data; // Les données de vos publications
    
  } catch (error) {
    console.error('Erreur lors de la récupération des publications Facebook:', error);
    return [];
  }
}

// Exemple d'utilisation dans un composant Vue.js
export default {
  data() {
    return {
      facebookPosts: [
      ], // Stockez les publications ici
  }
  },
  mounted() {
    this.formatDate()
    console.log(moment.locale('en'));
    const accessToken = 'EAAPrC16TuiQBOZCLUwE1LIqhC7JZCpJbXS3oTX9W44CB2OfsvVBdrWZAWuNylRbheNXtifCH39C6TJOeyrS8YiIBqmcTZBFbSTw9GdSOmNAOZBlJ2sU13LkrAx1CpwhPgpZC48u0H2TV5K7RZAC0CZBz84gcXe0WAvczHN8SEHnSNOFF53k7xb01MZAdrSZBD1Y8cXkQTSuOqvsJWfEnNAVYNQtCRjcezhUUlEEZBrgOwZDZD'; // Remplacez par votre propre jeton d'accès
    getFacebookPosts(accessToken)
      .then((posts) => {
        console.log(posts);
        for(let i = 0; i < posts.length; i++){
            if(posts[i].message && posts[i].attachments && posts[i].attachments.data && posts[i].attachments.data[0].media && posts[i].attachments.data[0].type == 'album'){
              this.facebookPosts.push(posts[i])
            }
        } 
        console.log(this.facebookPosts);
      })
      
      .catch((error) => {
        console.error(error);
      });
    
  },
  methods:{
    formatDate(createdTime) {
      // Utilisez Moment.js pour formater la date
      return moment(createdTime).format('DD MMMM YYYY');
      
    },
  }
};

</script>


<template>
    <div class="container news-ctr">
        <div class="row" >
          <h3><span>&#8280;</span> Actualités </h3>
            <div class="card col-4" v-for="post in this.facebookPosts" :key="post.id" :id="this.facebookPosts.indexOf(post)">
                <img v-if="post.attachments && post.attachments.data && post.attachments.data[0].media && post.attachments.data[0].media.image" :src="post.attachments.data[0].media.image.src" alt="Image">
              
                <div class="card-body">
                    <p>{{ post.message }}.</p>
                </div>
                <div class="card-footer">
                    <span>{{ formatDate(post.created_time) }}</span>
                </div>
              </div>
        </div>
    </div>
</template>

<style lang="scss">
  .news-ctr{
    .row{ 
      h3{
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        span{ 
          font-size: xxx-large;
          color: #F76F00;
          font-weight: 900;
        }
      }
      .card{
        background: none;
        border: none;
      }
    }
  }
</style>


<!-- token EAAPrC16TuiQBO6aCcO7axwZCt6AFwDnZCHDC91QfZChjrij0XxhQalPBKELn0H4V601wFZCvywxJJK0EBRsKJYez63F8P2wZBCIJkcConS5GIWkoO5RVAsSHYnvnNlabG4Vm1xNIonF4ivnvDrvsZAqAwrqBpZC8v48fzEJvEnNMJRUHEtG2zHYr2AYbhvOkUph2YrI9CCHRzd5pVzCl1qYFtY0aZBO0IdRjiUOQlhTUseIdFfkKdjN1kv18FPaQogZDZD -->