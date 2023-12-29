<script> 
export default {
  name: "GoogleMap",
  mounted(){
    this.initMapp();
  },
  methods: {
    initMapp() {
      var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 43.144003630303715, lng: 5.912142143176594},
        zoom: 15
      });
  
      // ... (votre code existant)
      var marker = new google.maps.Marker({
            position: {lat: 43.144003630303715, lng: 5.912142143176594},
            map: map,
            title: 'DITO PRO'
        });      
    
    },
   
  }
}
</script>

<template>

  <div id="googleMap" style="height: 100%; width: 100%;"></div>

</template>
  

  