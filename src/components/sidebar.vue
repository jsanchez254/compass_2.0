<template lang = "html">

    <div id="mySidenav" class="sidenav">
        <aside class = "menu">
        <p class = "menu-label">
            <div class = "columns">
                <div class = "column is-2">
                    Problems
                </div>
                <div class = "column is-2 is-offset-7">
                    <div v-on:click = "closeSideVar" class = "closeButton">
                        <sui-icon size="large" name="window close"/>
                    </div>
                </div>
            </div>      
        </p>
        <ul class = "menu-list">
            <li><a>HELLO 1</a></li>
            <li><a>HELLO 2</a></li>
        </ul>
    </aside>
    </div>
  
</template>
<script>
    import {closeNav} from "../assets/js/sidenav.js";
    import $ from "jquery";
    export default{
        name: "sidebar",
        data(){
            return{

            }
        },
        methods:{
            closeSideVar(){
                closeNav();
            }
        }
    }

</script>