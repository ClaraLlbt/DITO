<script>
import axios from "axios";
import {Notyf} from 'notyf'
import 'notyf/notyf.min.css'
export default {
    name: "GoogleCalendar",
    data(){
        return {
            connectForm: false,
            calendar: false,
            form: true,

            username: "",
            password: "",
        }
    },
    created(){
        this.notyf = new Notyf({
            duration: 4000,
            position: {
                x: 'center',
                y: 'bottom'
            }
        });
    },
    mounted(){
        const button = document.querySelector('#btn-agenda')
        button.addEventListener('click', this.connectCtr)
    },
    methods : {
        fetchUsers(){
            axios.post('http://localhost:3000/users', {
                username: this.username,
                password: this.password,     
            })
            .then((response) => {
                if(response && this.connectForm){
                    this.connectForm = !this.connectForm
                    console.log(this.calendar);
                    this.calendar = !this.calendar
                } 
            })
            .catch(error => {
                const msgerror = error.response.data
                this.notyf.error(msgerror.error)
                console.log(msgerror.error);
            })
        },
        connectCtr(){
            this.connectForm = !this.connectForm
        },
        displayForm(){
            this.connectForm = !this.connectForm
        },
        displayCalendar(){
            this.calendar = !this.calendar
        }
    }
}
</script>


<template lang="">
    <div v-show="connectForm" class="container-fluid calendar-ctr">
        <div v-if="form" class="form">
            <form @submit.prevent="fetchUsers" class="login-form col-lg-6">
                <button @click="displayForm" class="btn btn-x"><i class="bi bi-x-circle-fill"></i></button>
                <h1>Se connecter au calendrier</h1>
                <p>Vous souhaitez consulter mes disponibilités ? Entrez les identifiants de connexion que nous vous avons fournis</p>
                <div class="input-content">
                
                <div class="form-input">
                    <input type="username" id="name1" name="name" v-model="username" placeholder="Identifiant">
                </div>

                <div class="form-input">
                    <input type="password" id="password" name="password" v-model="password" placeholder="Mot de passe">
                </div>

                <button class="btn btn-form" v-on:click="fetchUsers()">Connexion</button>
            </div>
        </form>
        </div>
    </div>
    <div v-if="calendar" class="container-fluid calendar-ctr">
        <div class="row agenda" style="text-align:center">
            <div class="col-12 col-lg-6">
                <button @click="displayCalendar" class="btn btn-x"><i class="bi bi-x-circle-fill"></i></button>

                <h1 class="title-ctr"><span>&#8280;</span> Bienvenue dans mon agenda</h1>
                <p>Contactez-moi par téléphone pour confirmer valider un RDV ensemble !</p>

                <iframe src="https://calendar.google.com/calendar/embed?src=9a05447b3ab79a20bf578c5bca5919df24256813e9e6a5ec771725febbb7d317%40group.calendar.google.com&ctz=Europe%2FParis" style="border: 0" frameborder="0" scrolling="no"></iframe>        
                
            </div>
        </div>
      
    </div>
</template>

<style lang="scss">
.calendar-ctr{
    position: fixed;
    background:  linear-gradient(180deg, rgba(51,54,82) 0%, rgba(10,131,163) 58%, rgba(233,234,236,0.8295693277310925) 100%);

    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        margin: auto;
        padding: 15px;
        background: #f8f8f8;
        border-radius: 10px;
        box-shadow: 1px 1px 19px grey;
        .btn-x{
            float: right;
            z-index: 2;
        }
        h1, p { text-align: center;}
        .input-content{
            padding: 15px;
            .form-input {
                margin: 15px;
                input{
                    width: 100%;
                    border: 0;
                    border-bottom: 1px solid black;
                    border-radius: 5px;
                    background: none;
                    &::placeholder{
                        padding-left: 10px;
                    }
                }
            }
        }
    }
    .agenda{
        width: 100%;
        justify-content: center;
        height: 60%;
        color: white;

       .btn-x{
        float: right;
        z-index: 2;
        color: white;
        top: -25px;
        font-size: x-large;
        right: -25px;
       } 
       .title-ctr{
        margin-top: 0;
       }
       iframe{
            width: 100%;
            height: 100%;
            
        }
       
    }
    
}

</style>