<template>
    <div>
        <div class = "columns">
            <div class = "column is-10" id = "boxC">
                {{msg}}
            </div>
            <div class = "column is-1">
            </div>
        </div>
        <div class = "columns">
            <div class = "column is-10">
                <div class = "columns">
                    <div class = "column is-1">
                        <button v-on:click = "click()" class = "button is-success is-outlined" ><div><sui-icon size="small" name="play"/>&nbsp</div> RUN </button>
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

            </div>
        </div>
    </div>
</template>

<script>
 //import $ from "jquery";
var $ = window.jQuery = require("jquery");
    export default{
        name: "compiler",
        data(){
            return{
                msg: "hello there"
            }
        },
        methods:{
            click: function(){
                // $.get("https://compass.ucmerced.edu/pluto/date", {}, function(res){
                //     var obj = JSON.parse(res)
                //     this.msg = obj.date
                // })

                $.ajax({
                    method: "GET", 
                    data: {},
                    url: "https://compass.ucmerced.edu/pluto/datep",
                    success:  function(res){
                        console.log(res);
                    },
                    dataType: "jsonp"
                })
            }
        }
    }
</script>