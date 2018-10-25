<template>
    <Compiler v-if = "pass"/>
    <LogIn v-bind:logIno = "auth" v-else/>
</template>

<script>
//IMPORT COMPONENTS INSIDE BODY
import Compiler from "./compiler";
import LogIn from "./logIn";
    export default{
        name: "container",
        components: {
            Compiler, LogIn
        },
        data(){
            return{
                pass: true
            }
        },
        methods:{
            auth: function(){
                this.pass = true;
            }

        }
    }
</script>

