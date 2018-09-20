<template>
    <div>
        <div class = "columns">
            <div class = "column is-10" id = "boxC">

            </div>
            <div class = "column is-1">
            </div>
        </div>
        <div class = "columns">
            <div class = "column is-10">
                <div class = "columns">
                    <div class = "column is-1">
                        <button class = "button is-success is-outlined" ><div><sui-icon size="small" name="play"/>&nbsp</div> RUN </button>
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
    export default{
        name: "compiler",
        data(){
            return{

            }
        }
    }
</script>