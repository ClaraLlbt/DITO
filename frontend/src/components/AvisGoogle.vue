<script> 
export default {
  name: "GoogleReview",
  mounted(){
    const doc = document.querySelector('.ok')
    const reviewsCtr = document.querySelector('.reviews-ctr')
    
    document.addEventListener('scroll', () => { 
      const { scrollTop, scrollHeight ,clientHeight} = document.documentElement;
      const topElementToTopViewport = reviewsCtr.getBoundingClientRect().top
                
      if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.30){
        doc.classList.add('pop');
      }
    })
  }
}
</script>

<template>
  <div class="container-fluid reviews-ctr">
    
    <div class="row reviews-row">
      <div class="main-title-ctr title-right"><span id="four-dot-punctuation">&#8280;</span><h3> Ils nous ont noté ! </h3></div>


      
      <div class="elfsight-app-faa26472-af53-4f69-bb4f-2ef9b1704887 ok" data-elfsight-app-lazy></div>
      
    </div>
  </div>
</template>
  
  
<style lang="scss">
  /* Ajoutez des styles CSS pour personnaliser l'apparence de vos avis */
.reviews-ctr{
  background: #017FA0;
  color: white;
  margin-top: 100px;
  height: 460px;
  .main-title-ctr{margin: 30px 0 0 0;}
  
  .reviews-row{
    width: 65%;
    margin: auto;
    display: flex;
    .ok{
      transform: scale(0.2);
      opacity: 0;
    }
    .ok.pop{
      transform: scale(1);
      opacity: 1;
      transition: all 1s ease-in-out;
    }
    .ok::after{
      content: "";
      position: absolute;
      height: 50px;
      bottom: 0;
      width: 100%;
      background: #017FA0;
      z-index: 100000!important;
    }
    
  }
}
//MOBILE
/*portrait*/
@media screen and (max-width: 768px) {
    /* Styles pour les écrans de 768px de largeur ou moins */
  .reviews-ctr{
    height: auto;
    margin: 0;
    .reviews-row{
      width: 100%;
      h3{
        font-size: 30px;
      }
    }
    
  }
}

</style>
  