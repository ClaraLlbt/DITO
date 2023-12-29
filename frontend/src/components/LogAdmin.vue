<script>
import axios from 'axios';
import {Notyf} from 'notyf'
import 'notyf/notyf.min.css'
export default {
    name: "logadmin",
    components(){},
    data() {
        return {
            //Données utilisateur Admin
            username: "",
            password: "",
            isAdmin: "",
        }
    },
    created() {
        this.notyf = new Notyf({
                duration: 4000,
                position: {
                    x: 'center',
                    y: 'bottom'
                }
            });
    },
    methods:{
        logAdmin(){
            axios.post('http://localhost:3000/users/isAdmin', {
                    username: this.username,
                    password: this.password
                    
                })
                .then((response) => {
                    if(response.data.isAdmin = true && username && password){
                        const msgsuccess = response.data
                        this.notyf.success(msgsuccess) 
                        sessionStorage.setItem('token', response.data.token); 
                        this.$router.push('/CRUD');
                    } 
                })
                .catch(error => {
                    const msgerror = error.response.data
                    this.notyf.error(msgerror)
                })
        },
    }
}
</script>

<template> 
    <div class="bckgd-filter"></div>  

    <div class="container log-admin-ctr">

        <div class="form">
            <div class="logo">
                <img src="../assets/dito_logo.svg" alt="">
            </div>

            <form action="">
                <div class="form-input">
                    <input type="username" id="username" name="username" v-model="username" placeholder="username" required>
                </div>
                <div class="form-input">
                    <input type="password" id="password" name="password" v-model="password" placeholder="Tapez votre mot de passe" required>
                </div>

                <button class="btn btn-form" @click="logAdmin" type="button"> Connexion </button>
            </form>
        
        </div>

    </div>    

    
</template>

<style lang="scss">
.log-admin-ctr{
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .form{
        background: linear-gradient(180deg, rgba(51,54,82,0.9640231092436975) 0%, rgba(10,131,163,0.835171568627451) 31%, rgba(233,234,236,0) 100%);
        box-shadow: 1px 1px 19px grey;
        .form-input{
            margin-bottom: 20px;
            input{
                width: 60%;
                background: none;
                border: none;
                border-bottom: 1px solid grey;
                border-radius: 15px;
                padding: 10px;
            }
        }
        button{
            margin: 15px;
        }
    }
}
</style>