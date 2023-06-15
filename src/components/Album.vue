<script>
export default{
  name: "Album",
  data() {
    return { 
      indexValue : 0
    }
  },
  mounted(){
    this.slideShow();
    this.slideShow_2();
  },
  methods: {
    slideShow(){
      setTimeout(this.slideShow, 3500);
      var x;
      const alb1 = document.querySelectorAll(".album_1");
      const alb3 = document.querySelectorAll(".album_3");
      const alb5 = document.querySelectorAll(".album_5");
      for(x = 0; x < alb1.length && alb3.length && alb5.length; x++){
        alb1[x].style.display = "none";
        alb3[x].style.display = "none";
        alb5[x].style.display = "none";
      }
      this.indexValue++;
      if(this.indexValue > alb1.length && alb3.length && alb5.length){this.indexValue = 1}
      alb1[this.indexValue -1].style.display = "block";
      alb3[this.indexValue -1].style.display = "block";
      alb5[this.indexValue -1].style.display = "block";
    },
    slideShow_2(){
      setTimeout(this.slideShow_2, 4500);        
      var x;
      const alb2 = document.querySelectorAll(".album_2");
      const alb4 = document.querySelectorAll(".album_4");
      for(x = 0; x < alb2.length && alb4.length; x++){
        alb2[x].style.display = "none";
        alb4[x].style.display = "none";
      }
      this.indexValue++;
      if(this.indexValue > alb2.length && alb4.length){this.indexValue = 1}
      alb2[this.indexValue -1].style.display = "block";
      alb4[this.indexValue -1].style.display = "block";
    }
  }
}
</script>

<template>
  <div class="container-fluid album-ctr">
    <div class="row">
      <div class="col">
        <div class="img-1 album_1" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-2 album_1" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-3 album_1" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-4 album_1" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
      </div>
      <div class="col">
        <div class="img-5 album_2" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-6 album_2" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-7 album_2" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-8 album_2" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
      </div>
      <div class="col">
        <div class="img-9 album_3" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-10 album_3" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-12 album_3" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-13 album_3" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
      </div>
      <div class="col">
        <div class="img-14 album_4" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-15 album_4" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-16 album_4" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-17 album_4" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
      </div>
      <div class="col">
        <div class="img-18 album_5" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-19 album_5" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-20 album_5" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
        <div class="img-21 album_5" width="200" height="200" alt="Image de présentation dans un carrousel" decoding="auto"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.album-ctr{
  .col{
    width: 200px;
    height: 200px;
    text-align: center;
    overflow: hidden;
    padding: 0;
    div{
      background-size: cover;
      background-position: center;
      height: 100%;
      margin: 5px;
      
    }
    .img-1{ 
      background-image: url('../assets/images/reseau1.jpg');
    }
    .img-2{ background-image: url('../assets/images/checkpoint-action.jpg');
   }
    .img-3{ background-image: url('../assets/images/code.jpg');
   }
    .img-4{ background-image: url('../assets/images/couloirreseau.jpg');
    }
    .img-5{ background-image: url('../assets/images/reseau2.jpg');
    }
    .img-6{ background-image: url('../assets/images/informatique1.jpg');
    }
    .img-7{ background-image: url('../assets/images/diagnostic1.jpg');
    }
    .img-8{ background-image: url('../assets/images/diagnostic.jpg');
    }
    .img-9{ background-image: url('../assets/images/reparationpc1.jpg');
    }
    .img-10{ background-image: url('../assets/images/installationinformatique.jpg');
    }
    .img-11{ background-image: url('../assets/images/pcenreseau1.jpg');
    }
    .img-12{ background-image: url('../assets/images/pcenreseau1.jpg');
    }
    .img-13{ background-image: url('../assets/images/diagnostic1.jpg');
    }
    .img-14{ background-image: url('../assets/images/checkpoint.jpg');
    }
    .img-15{ background-image: url('../assets/images/informatiquegameur.jpg');
    }
    .img-16{ background-image: url('../assets/images/piece-informatique.jpg');
    }
    .img-17{ background-image: url('../assets/images/installationreseau.jpg');
    }
    .img-18{ background-image: url('../assets/images/pcenreseau.jpg');
    }
    .img-19{ background-image: url('../assets/images/reparationpc2.jpg');
    }
    .img-20{ background-image: url('../assets/images/reparationpc.jpg');
    }
    .img-21{ background-image: url('../assets/images/checkpoint-aldi.jpg');
    }

  }
}
// Keyframes CSS
@keyframes fadeIn {
  to {
    opacity: 0;
  }
  50%{
    opacity: 100%;
  }
  from{
    opacity: 0%;
  }
}
// Version mobile
@media (max-width: 768px){
  .album-ctr{
    .col{
      height: 100px;
      div{ margin: 0px;}
    }
  }
}
</style>
