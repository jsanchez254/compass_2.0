<template>
    <div>
        <br/>
        <div class = "columns">
            <div class = "column is-10">
                <editor height="500px" theme = "twilight" lang = "c_cpp" fontSize = "20px"> </editor>
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
                {{content}}
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

var $ = window.jQuery = require("jquery");
    export default{
        components: {
            editor
        },
        name: "compiler",
        data(){
            return{
                msg: "hello there",
                content: null
            }
        },
        //sample using axios
        mounted(){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.content = response.data))
        },
        methods:{
            click: function(){
                $.ajax({
                    method: "GET", 
                    data: {},
                    url: "https://compass.ucmerced.edu/pluto/datep",
                    success:  function(res){
                        console.log(res);
                    },
                    dataType: "jsonp"
                })
            },
            display: function(){
                //will get info from ace editor
                let code = this.$children[0].getValue();
                console.log(code);
            }
        }
    }
</script>