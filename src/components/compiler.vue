<template>
    <div>
        <br/>
        <div class = "columns">
            <div class = "column is-10">
            <div v-if = "rerender">
                <editor v-if = "this.content.slide == undefined" v-bind:content = "code"
                v-model:content = "code"  v-on:change = "change" 
                 height="500px" theme = "twilight" lang = "c_cpp"/>
            </div>
            </div>
            <div class = "column is-1">
            </div>
        </div>
        <div class = "columns">
            <div class = "column is-10">
                <div class = "columns">
                    <div class = "column is-1">
                        <button v-on:click = "handleRun()" class = "button is-success is-outlined" ><div><sui-icon size="small" name="play"/>&nbsp</div> Run </button>
                    </div>
                    <div class = "column is-5 is-offset-1">
                            <button v-on:click = "handlePreviousLesson()" class = "button is-info is-outlined"><div><sui-icon  name="chevron left"/></div></button>
                            <button v-on:click = "handleNextLesson()" class = "button is-info is-outlined"><div><sui-icon  name="chevron right"/></div></button>
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
                content: '',         //used to store content of get request for code displayed on ACE editor
                code: "",           //used to store code portion
                currentId: 0,
                runnableCode: "",
                rerender: false
            }
        },
        mounted(){
            var url = 'http://10.34.60.82:5000/presentation/' + this.currentId;
            axios.get(url)
            .then(response => (
                this.content = response.data
            ));
        },
        updated() {
            this.rerender = true;
            this.code = this.content.slides[this.currentId].code;
        },
        methods:{
            //UPDATE CODE VARIABLE STORING CONTENT OF EDITOR
            change: function(log){
                this.runnableCode = log;
            },
            //run CONTENT FROM ACE EDITOR
            handleRun: function(){
            //     axios.post('/user', {
                    
            //     })
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
            console.log(this.runnableCode);
                
            },
            //NEXT
            handleNextLesson: function(){
                if(this.currentId <= 6){
                   this.currentId+=1;
                }
                // this.fetchData();
                    console.log(this.currentId);
                   this.code = this.content.slides[this.currentId].code;
                   this.rerender = false;
                   this.runnableCode = this.code;       //update code to submit since we change code
            },
            //PREVIOUS
            handlePreviousLesson: function(){
                if(this.currentId >= 0){
                    this.currentId-=1;
                }
                this.rerender = false;
                this.runnableCode = this.code;
            },
            //FETCH LESSONS FROM SERVER
            fetchData: function(){
                var url = 'http://10.34.60.82:5000/presentation/' + this.currentId;
                axios.get(url)
                .then(response => (
                    this.content = response.data    //update code to submit since we change code
                ));
            }
        }
    }
</script>