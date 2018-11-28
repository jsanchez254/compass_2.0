<template>
    <div>
        <br/>
        <div class = "columns">
            <div class = "column is-10">
            <h1 class = "title" >{{storeTitle}}</h1>
            <div v-if = "this.content.slides != defined && code != 1">
                <editor v-if = "rerender" v-bind:content = "code"
                v-model:content = "code"  v-on:change = "change" 
                 height="500px" theme = "chrome" lang = "c_cpp"/>
            </div>
            <h1 class = "subtitle">{{storeOtherComm}}</h1>
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
                code: 1,           //used to store code portion
                currentId: 0,
                runnableCode: "",
                rerender: true,
                storeTitle: "",
                storeOtherComm: ""
            }
        },
        mounted(){
            var url = 'http://10.34.60.82:5000/presentation/1';
            axios.get(url)
            .then(response => (
                this.content = response.data
            ));
        },
        beforeUpdate() {
             this.code = this.handleCode(this.content.slides[this.currentId].code);
        },
        updated() {
            this.rerender = true;
            this.storeTitle = this.handleTitle(this.content.slides[this.currentId].code);
            this.storeOtherComm = this.handleComment(this.content.slides[this.currentId].code);
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
                    //console.log(this.currentId);
                   this.code = this.content.slides[this.currentId].code;
                   this.rerender = false;
                   this.runnableCode = this.code;       //update code to submit since we change code
            },
            //PREVIOUS
            handlePreviousLesson: function(){
                if(this.currentId > 0){
                    this.currentId-=1;
                }
                this.rerender = false;
                this.runnableCode = this.code;
            },
            //FETCH LESSONS FROM SERVER
            fetchData: function(){
                var url = 'http://10.34.60.82:5000/presentation/1';
                axios.get(url)
                .then(response => (
                    this.content = response.data    //update code to submit since we change code
                ));
            },
            handleTitle: function(content){
                var temp = "";
                var title = "";
                //used to tell which kind of comment we are storing
                var storing = 0;
                //actual content to be stored without special comments
                var finalString = "";
                for(var i = 0; i < content.length; i++){
                    temp += content[i];
                
                    //we found something to store!
                    if(temp === '//+'){
                        storing = 1;
                        i = i + 1;
                        temp = "";
                    }

                    else if(temp == "///"){
                        temp = "";
                    }
                    //if a new line created then look if next line has something
                    else if(content[i] == "\n"){
                        temp = "";
                    }
                    //STORING TITLE
                    if(storing == 1){
                        if(content[i] == "\n"){
                            storing = 0;
                        }
                        //content of +// being stored
                        //!!!!create array of strings in case there's more of these!!!
                        else{
                            title += content[i];
                        }
                    }
                }
                return title;
            },

            handleComment: function (content){
                var temp = "";
                //used to tell which kind of comment we are storing
                var storing = 0;
                //store comment
                var storeComm = "";
                for(var i = 0; i < content.length; i++){
                    temp += content[i];
                
                    //we found something to store!
                    if(temp === '//+'){                
                        temp = "";
                    }

                    else if(temp == "///"){
                        i = i + 1;
                        storing = 2;
                        temp = "";
                    }
                    //if a new line created then look if next line has something
                    else if(content[i] == "\n"){
                        temp = "";
                    }
                    //STORE OTHER COMMENTS
                    if(storing == 2 && content[i] == "\n"){
                        //if(content[i] == "\n"){
                            storeComm += '.';
                            storing = 0;
                        }
                        //content of /// being stored
                        //!!!!create array of strings in case there's more of these!!!
                    else if(storing == 2){
                            storeComm += content[i];
                        }
                }
                
                console.log("COMMENT ", storeComm);
                return storeComm;
            },

            handleCode: function (content){
                var temp = "";
                var set = 0;
                //actual content to be stored without special comments
                var finalString = "";
                for(var i = 0; i < content.length; i++){
                    temp += content[i];
                
                    //we found something to store!
                    if(temp === '//+'){
    
                        temp = "";
                        set = 1;
                    }

                    else if(temp == "///"){
                        temp = "";
                        set = 1;
                    }
                    //if a new line created then look if next line has something
                    else if(content[i] == "\n"){
                        temp = "";
                        set = 0;
                    }

                    if((temp + content[i+1]) != "///" && (temp + content[i+1]) != "//+" ){
                        if(set === 0){
                            finalString += content[i];
                        }
                    }
                }
            
                return finalString;
            }
        }
    }
</script>