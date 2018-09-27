<template>
    <div>
        <br/>
        <div class = "columns">
            <div class = "column is-10">
                <editor v-bind:content = "content1" v-on:change = "change" 
                v-on:paste = "paste" height="500px" theme = "twilight" lang = "c_cpp"/>
            </div>
            <div class = "column is-1">
            </div>
        </div>
        <div class = "columns">
            <div class = "column is-10">
                <div class = "columns">
                    <div class = "column is-1">
                        <button v-on:click = "display()" class = "button is-success is-outlined" ><div><sui-icon size="small" name="play"/>&nbsp</div> RUN </button>
                    </div>
                    <div class = "column is-5 is-offset-1">
                            <button class = "button is-info is-outlined"><div><sui-icon  name="chevron left"/></div></button>
                            <button class = "button is-info is-outlined"><div><sui-icon  name="chevron right"/></div></button>
                    </div>
                </div>
            </div>
        </div>
        <div class = "columns">
            <div class = "column is-10" id = "boxD">
                <span v-for="currency in contento">
                    {{currency.description}}
                    <br/>
                </span>
            </div>
        </div>
    </div>
</template>


<script>
//IMPORT AXIOS
import axios from 'axios';

import editor from "ace-vue2";
import 'brace/mode/c_cpp';
import 'brace/theme/twilight';
import 'brace/theme/chrome';

    export default{
        components: {
            editor
        },
        name: "compiler",
        data(){
            return{
                msg: "hello there",
                contento: "",
                content1: "int hello = 7"
            }
        },
        //sample using axios
        mounted(){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (
                this.contento = response.data.bpi
                ))
        },
        methods:{
            //cool function that will update variable everytime change happens
            change: function(log){
                console.log(log);
            },
            paste: function() {
                console.log('paste');
            },
            display: function(){
                //will get info from ace editor
                let code = this.$children[0].getValue();
                console.log(code);
            }
        }
    }
</script>