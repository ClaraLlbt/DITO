<script> 
export default {
  name: "GoogleReview",
  data() {
    return {
      reviews: [],// Initialisez la propriété reviews comme un tableau vide    
      review: {
        id : "",
        photoUrl : "",
        name : "",
        rating : "",
        text : "",
        time: ""
      }
    };
  },
  mounted(){
    this.initMapp();
  },
  methods: {
    initMapp() {
      var map = new google.maps.Map(document.getElementById('google-reviews'), {
        center: {lat: 43.144003630303715, lng: 5.912142143176594},
        zoom: 15
      });
  
      // ... (votre code existant)
      var service = new google.maps.places.PlacesService(map);
      // service.getDetails({
      //   placeId: 'ChIJg1MPnM8byRIRWegzFzenVKg',
      // }, (place, status) => {
      //   if (status === google.maps.places.PlacesServiceStatus.OK) {
      //     var reviews = place.reviews;

      //     // Affichez les avis sur votre site web
      //     for (var i = 0; i < reviews.length; i++) {
      //       var review = reviews[i];

      //       console.log(review);

      //       // Créez les éléments du DOM ici
      //       var element = document.createElement('div');
      //       element.className = 'card review';
      //       element.setAttribute(':id', reviews.indexOf(review))

      //       var textElement = document.createElement('div');
      //       textElement.className = 'review-text';
      //       textElement.textContent = review.text;

      //       element.appendChild(textElement);

      //       // Ajoutez l'élément au DOM
      //       var container = document.querySelector('.reviews-row');
      //       container.appendChild(element);
            
      //       const el = document.querySelectorAll('.review-text')
           
      //       if(review.text.length > 95){
      //         const ele = document.querySelectorAll('.card.review')
      //         console.log(ele);
      //         for(var i = 0; i < ele.length; i++){
      //           console.log(ele[i]);
      //         }
      //       }
      //     }
          
      //   }
        
        
    
          
      
      // });
      service.getDetails({
        placeId: 'ChIJg1MPnM8byRIRWegzFzenVKg',
      }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // Accédez aux avis de ce lieu
          // console.log(place.reviews);
          var reviews = place.reviews;
          this.reviews = reviews; // Affectez les avis récupérés à la propriété reviews

          
         } 
      });
    },
   
  }
}
</script>

<template>
  <div class="container-fluid reviews-ctr">
    <h1>Avis Google</h1>
    <div class="container-fluid map-ctr">
      <div id="google-reviews" style="display: none;"></div>
    </div>
    <div class="row reviews-row">
      <div v-for="review in reviews" :key="review.author_name" class="card review" :id="reviews.indexOf(review)">
        <div class="card-header">
          <div class="review-photo"><img class="img-review" :src="review.profile_photo_url" alt=""></div>
          <div class="header-info">
            <div  class="review-author">{{ review.author_name }} </div>
            <div class="review-rating">Note : {{ review.rating }}/5</div>
            <div class="rating">
              <span class="etoile_grise" title="Donner 5 étoiles">★</span>
              <span class="etoile_bleue" title="Donner 4 étoiles">★</span>
              <span class="etoile_bleue" title="Donner 3 étoiles">★</span>
              <span class="etoile_bleue" title="Donner 2 étoiles">★</span>
              <span class="etoile_bleue" title="Donner 1 étoile">★</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div id="text" class="review-text">« {{ review.text }}»</div>
        </div>
        <div class="card-footer">
          <div class="review-relative-time">{{ review.relative_time_description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
<style lang="scss">
  /* Ajoutez des styles CSS pour personnaliser l'apparence de vos avis */
.reviews-ctr{
  .reviews-row{
    display: flex;
    padding: 100px 0;
    .card.review{
      padding: 0;
      width: 15%;
      margin: 15px auto;
      .card-header {
        display: flex;
        .review-photo{
          height: 50px;
          width: 50px;
          img{ width: 100%;}
        }
        .header-info{
          padding: 5px;
        }
        
      }
      .card-body{
        overflow: hidden;
        .review-text{
          overflow: hidden;
          font-size: small;
        }
      }
     
    }
  }
}
.hey{
          background-color: cadetblue;
        }
  #google-reviews{
    height: 500px;
  }
</style>
  