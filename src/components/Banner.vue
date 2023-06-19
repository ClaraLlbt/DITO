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

<template>
    <div class="container-fluid banner-ctr">
        <p class="text-contact-now"><a href="tel:+33627034216"><i class="fa bi bi-telephone-forward-fill fa-beat"></i> 06 27 03 42 16</a></p>
        <div class="design-bckgrd"></div>

        <div class="row titles">    
            <div class="col-12 logo-texte">
                <img src="../assets/logo.dito.svg" width="200" height="auto" alt="Logo DITO sans texte">
            </div>
            <div class="col-12 title">
                <h1>Dépannage Informatique</h1>
            </div>

        </div>    
    </div>
    
</template>

<style lang="scss" scoped>
.banner-ctr{
    height: 600px;
    overflow: hidden;
    background: #0085A6;
    display: flex;
    align-items: center;
    justify-content: center;
    p.text-contact-now{
        z-index: 2;
        position: absolute;
        top: 13px;
        right: 80px;
        a{
            color:#0085A6 ;
            i{
                margin: 0 15px;
                color: #0085A6;
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
                filter: drop-shadow(-3px 3px 2px #232945);
                animation: rotateLogo;
                animation-duration: 2s;
                animation-iteration-count: 2;
                // animation: name duration timing-function delay iteration-count direction fill-mode;
            }
            h1{
                color: white;
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