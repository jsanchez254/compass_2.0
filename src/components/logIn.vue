<template>
<div class = "logInBox">
    <div class = "columns">
        <div class = "column is-5-tablet is-5-desktop is-4-widescreen is-offset-2">
            <form class = "box">
                <div class = "field">
                    <label class = "label">User Name </label>
                    <input class = "input" placeholder = "Enter User Name">
                </div>
                <div class = "field">
                    <label class = "label">Password </label>
                    <input class = "input" placeholder = "Enter Password">
                </div>
                <div class = "field">
                    <button v-on:click = "logIno()" class = "button is-success">Log In</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        name: "logIn",
        props: {
            logIno: Function
        },
        data(){
            return{

            }
        }
    }

</script>

<style scoped>
    .logInBox{
        position: absolute;
        top: 250px;
        width: 100%;
    }
</style>