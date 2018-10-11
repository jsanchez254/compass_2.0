<template>
    <nav class = "navbar has-shadow is-primary">
    <div class = "navbar-brand">
        <a class = "navbar-item">
            <img src = "../assets/img/logoc.png">
        </a>
        <div class = "navbar-burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class = "navbar-menu">  
        <div class = "navbar-start">
            <div class = "navbar-item">
                Compass
            </div>
        </div>
        <div v-if = "logged" class =  "navbar-end">
            <div class  ="navbar-item has-dropdown is-hoverable">
                <div class = "navbar-link">
                    Jesus Sanchez
                </div> 
                <div class = "navbar-dropdown">
                    <a class = "navbar-item">
                        <sui-icon size="large" name="user circle"/>&nbsp Profile                        
                    </a>
                    <a class = "navbar-item">
                        <sui-icon size="large" name="sign out alternate" />&nbsp Sign Out
                    </a>
                </div>
            </div>
        </div>
    </div>
    </nav>
</template>

<script>
    export default{
        name: "navbar",
         data(){
            return{
                logged:false
            }
        }
    }
</script>