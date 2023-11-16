<script>
export default{
    name: "Banner",
    mounted(){
        this.TitlesSlider();
    },
    methods: {
        TitlesSlider(){
            const logotxt = document.querySelector('.logo-texte')
            const title = document.querySelector('.title')
            setTimeout(timeToShow, 1000);
            function timeToShow(){
                logotxt.classList.add('animation_left')
                title.classList.add('animation_right')
            }
        }
        
    }

}
</script>
<!-- DESIGN 1  -->
<!-- <template>
    <div class="container-fluid banner-ctr">
        <div class="custom-bckgd"></div>
        
        <div class="bckgd-filter">
           
        </div>
    </div>

</template>

<style lang="scss">
.banner-ctr{
    position: relative;
    height: 700px;
    background: url('../assets/icons/bckgd-custom-banner.png');
    background-size: cover;
    background-position: center;
    .bckgd-filter{
        background: url("../assets/images/particles.jpg");
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
       /* filter: brightness(0.5); */
        opacity: 10%;
        z-index: -3;
        bottom: 0;
        position: fixed;
    }
    .custom-bckgd{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('../assets/images/bckgd-home-banner.jpg');
        background-size: cover;
        background-position: bottom;
        z-index: -1;
        &::before{
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            backdrop-filter: blur(2px);
        }
    }
}
</style> -->

<!-- DESIGN 2  -->
<template>
    <div class="container-fluid banner-ctr">
        <p class="text-contact-now"><a href="tel:+33627034216"><i class="fa bi bi-telephone-forward-fill fa-beat"></i> 06 27 03 42 16</a></p>
        
        <div class="bckgd-filter">
           
        </div>

        <div class="row titles">    
            <div class="col-12 logo-texte">
                <img src="../assets/dito_logo.svg" width="400" height="400" alt="Logo DITO sans texte">
            </div>
            <div class="col-12 title">
                <h1>Votre entreprise partenaire B2B Retail</h1>
            </div>

        </div>    
    </div>
    
</template>

<style lang="scss" scoped>
.banner-ctr{
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background:  linear-gradient(180deg, rgba(51,54,82,0.9640231092436975) 0%, rgba(10,131,163,0.835171568627451) 58%, rgba(233,234,236,0) 100%);
    &::before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('../assets/images/bckgd-home-banner.jpg');
        background-position: bottom;
        z-index: -1;
    }
    .bckgd-filter{
        background: url("../assets/images/particles.jpg");
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
       /* filter: brightness(0.5); */
        opacity: 10%;
        z-index: -3;
        bottom: 0;
        position: fixed;
    }
    p.text-contact-now{
        z-index: 2;
        position: absolute;
        top: 13px;
        right: 80px;
        a{
            color:#F76F00 ;
            i{
                margin: 0 15px;
                color: #F76F00;
            }
        }   
    }
    .design-bckgrd{
        height: 100px;
    }
    .design-bckgrd::before{
        content: "";
        display: block;
        background: white;
        height: 450px;
        width: 8000px;
        position: absolute;
        z-index: 1;
        bottom: -40%;
        left: 50%;
        margin-left: -4000px;
        -webkit-transform: rotate(-8deg);
        transform: rotate(-8deg);
    }
    .titles{
        z-index: 1;
        width: 100%;
        height: 100%;
        .col-12{
            text-align-last: center;
            img{
                position: relative;
                // bottom: -50%;
                animation: rotateLogo;
                animation-duration: 2s;
                animation-iteration-count: 2;
                // animation: name duration timing-function delay iteration-count direction fill-mode;
            }
            h1{
                color: white;
                font-family: 'Montserrat', sans-serif;
            }
        }
        .col-12.logo-texte{
            align-self: self-end;
        }
        .col-12.title{
            align-self: center;

        }
        .col-12.logo-texte{
            transform: translate(-100%);
            opacity: 0;
            transition: transform 3s ease-in-out,opacity 5s ease-in-out
        }
        .col-12.logo-texte.animation_left{
            transform: translate(0%) ;
            opacity: 1;

        }
        .col-12.title{
            transform: translate(100%);
            opacity: 0;
            transition: transform 3s ease-in-out,opacity 5s ease-in-out
        }
        .col-12.title.animation_right{
            transform: translate(0%) ;
            opacity: 1;

        }
        
    }
}
// CSS animation
@keyframes rotateLogo {
    from {
    transform: rotate(1deg);
  }
  to {
    stroke-dashoffset: 0;
    transform: rotate(360deg);
  }
}

// Mobile Version
@media (max-width: 320px) {
    .banner-ctr{
        .titles{
            h1{ font-size: 1.3rem;}
        }
    }
}

@media (min-width: 321px) and (max-width: 768px) {
    .banner-ctr{
        height: 475px;
        p.text-contact-now{
            top: auto;
            right: auto;
            bottom: 0px;
            color: white;
            font-size: 17px;
            a {
                color: white;
                i{ color: white }
            }
        }
        .titles{
            img{
               bottom: -30px;
               width: 170px;
            }
            h1{ font-size: 1.5rem;}
        }
    }
}
</style>