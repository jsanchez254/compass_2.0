<template>
    <div>
        <br/>
        <div class = "columns">
            <div class = "column is-10">
                <editor v-if = "this.content.slide == undefined"
                v-model:content = "code" v-bind:content = "this.content.slides[0].code" v-on:change = "change" 
                 height="500px" theme = "twilight" lang = "c_cpp"/>
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
                            <button v-on:click = "previousLesson()" class = "button is-info is-outlined"><div><sui-icon  name="chevron left"/></div></button>
                            <button v-on:click = "nextLesson()" class = "button is-info is-outlined"><div><sui-icon  name="chevron right"/></div></button>
                    </div>
                </div>
            </div>
        </div>
        <div class = "columns">
            <div class = "column is-10" id = "boxD">
            <span v-for = "values in content">
               {{values}} <br/>
            </span>
            </div>
        </div>
        <br/>
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
                content: '',         //used to store content of get request 
                code: "int hi = 7",       //used to store code portion
                currentId: 1
            }
        },
        mounted(){
            var url = 'http://localhost:5000/presentation/' + this.currentId;
            axios.get(url)
            .then(response => (
                this.content = response.data
            ));
            code = this.content.slides[0].code;
        },
        methods:{
            //UPDATE CODE VARIABLE STORING CONTENT OF EDITOR
            change: function(log){
                this.code = log;
            },
            //DISPLAY CONTENT FROM ACE EDITOR
            display: function(){
                
                console.log(this.content.slides[0].code);
                console.log(this.content.id);
                console.log(this.content);
                console.log(this.code);
                this.code = "hello1";
                console.log(this.code);
                
            },
            //NEXT
            nextLesson: function(){
                this.currentId+=1;
                this.fetchData();
            },
            //PREVIOUS
            previousLesson: function(){
                if(this.currentId > 1){
                    this.currentId-=1;
                }
                this.fetchData();
            },
            //FETCH LESSONS FROM SERVER
            fetchData: function(){
                var url = 'http://localhost:5000/presentation/' + this.currentId;
                axios.get(url)
                .then(response => (
                    this.content = response.data
                ));
            }
        }
    }
</script>