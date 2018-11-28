<template>
    <nav class = "navbar has-shadow is-primary">
    <div class = "navbar-brand">
        <a class = "navbar-item"  v-on:click = "DOM">
            <div>
                <sui-icon size="large" name="bars"/>
            </div>                        
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
        <div class =  "navbar-end">
            <div class  ="navbar-item has-dropdown is-hoverable">
                <div id = "colorcito" class = "navbar-link">
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
    import {domo} from "../assets/js/sidenav.js";
    import {openNav} from "../assets/js/sidenav.js";
    import {closeNav} from "../assets/js/sidenav.js";
    export default{
        name: "navbar",
         data(){
            return{
                logged:false,
                open: true
            }
        },
        methods:{
            DOM: function(){
                domo();
                if(this.open){
                    openNav();
                    this.open = false;
                }
                else{
                    closeNav();
                    this.open = true;
                }

                console.log("hello");
            }
        }
    }
</script>