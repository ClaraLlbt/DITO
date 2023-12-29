<script>

export default {
    name: "appFooter",
    data(){
        return{
            currentYear: ""
        }
    },
    mounted() {
        this.copyrith();
    },
    methods: {
      copyrith() {
        this.currentYear = new Date().getFullYear();
      },
    }
    
}
</script>

<template>
    <footer class="container-fluid footer-ctr">
        <div class="row">
            <p>Copyright {{this.currentYear}}@<a href="https://kaladev.fr">Kala DEV</a> - All Rigths Reserved - <router-link to="/mentions-legales">Mentions légales</router-link>
            </p>
        </div>
    </footer>

</template>

<style lang="scss">
.footer-ctr{
    text-align-last: center;
    background-color: #017FA0;
    p{
        margin: 10px;
        font-size: 1.2rem;
        color: white;
    }
}
</style>
