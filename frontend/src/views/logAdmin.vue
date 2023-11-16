<script>
import LogAdmin from '../components/LogAdmin.vue';
import axios from 'axios';

export default {
    name: "logadmin",
    components: { LogAdmin },
    data() {
        return {
            revele: true,
            hidden: "",
        }
    },
    mounted() {
    },
    methods:{
        connectForm() {
            alert("Fonction personnalisée appelée depuis le parent!");
            this.revele = false;
            this.hidden = !this.hidden
            console.log(this.revele);
        },
        
    }
}
</script>

<template> 

    <!-- CONNECTER L'UTILISATEUR
    composant de connexion -->
    <LogAdmin v-if="this.revele" :connectForm="connectForm" class="logIn"/>

</template>

<style lang="scss">
.news-ctr{
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    form{
        background: linear-gradient(180deg, rgba(51,54,82,0.9640231092436975) 0%, rgba(10,131,163,0.835171568627451) 31%, rgba(233,234,236,0) 100%);
        box-shadow: 1px 1px 19px grey;
        .icon-img i{
            color: white;
            font-size: xxx-large;
        }
        .form-input{
            margin-bottom: 20px;
            width: 50%;
            margin: auto;
            input, textarea{
                width: 90%;
                background: none;
                border: none;
                border-bottom: 1px solid grey;
                border-radius: 15px;
                padding: 10px;
                &::placeholder{
                    color: white;
                }
            }
            textarea{
                backdrop-filter: brightness(0.5);
                color: white;
            }
        }
        button{
            margin: 15px;
        }
    }
}
</style>