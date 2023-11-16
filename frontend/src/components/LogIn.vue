<script>
import axios from "axios";
export default {
    name: "LogIn",
    data(){
        return {
            bloc: false,
            users : [],
            id : "",
            name: "",
            password: "",
        }
    },
    mounted(){
        const button = document.querySelector('#btn-agenda')
        button.addEventListener('click', this.logInDisplay)
    },
    methods : {
        fetchUsers(){
            axios.get('http://localhost:3000/users', {
                name: this.name,
                password : this.password
            })
            .then((response) => {
                for(let i = 0; i < response.data.length ; i++){
                    this.users = response.data[i];
                    if(this.name == response.data[i].name && this.password == response.data[i].password){
                        console.log(response.data[i])
                        this.$router.push('/GoogleCalendar');
                    } else if (this.name == response.data[i].name && this.password != response.data[i].password || this.name != response.data[i].name && this.password == response.data[i].password){
                        alert("Identifiant ou mot de passe incorrect")
                    }
                }
            })  
            .catch(error => {
                const msgerror = error.response
                console.log(msgerror);
            })
        },
        logInDisplay(){
            this.bloc = !this.bloc
        }
    }
}
</script>


<template lang="">
    <div v-show="bloc" class="container calendar-access-ctr">
        <form @submit.prevent="fetchUsers" class="login-form col-lg-6">
            <h1>Se connecter au calendrier</h1>
            <p>Vous avez pris contact avec nous et vous souhaitez consulter nos disponibilités ? Entrez les identifiants de connexion que nous vous avons fournis</p>
            <div class="input-content">
                <div class="form-input">
                    <input type="name" id="name1" name="name" v-model="name" placeholder="Identifiant">
                </div>

                <div class="form-input">
                    <input type="password" id="password" name="password" v-model="password" placeholder="Mot de passe">
                </div>

                <button class="btn btn-form" v-on:click="fetchUsers()">Connexion</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
.calendar-access-ctr{
    position: fixed;
    z-index: 2;
    top: 25%;
    right: 0;
    left: 0;
    form{
        margin: auto;
        padding: 15px;
        background: #f8f8f8;
        border-radius: 10px;
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
}
</style>