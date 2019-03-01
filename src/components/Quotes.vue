<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-5 quote" v-for="(quote,index) in Quotes" :key="quote"
            @click="deleteQuotes(index, quote)">
                {{quote}}
            </div>
            
        </div>
    </div>
</template>
<script>
import { eventBus } from '../main'
export default {
    data() {
        return {
            Quotes: []
        }
    },
    created() {
        eventBus.$on('quoteChanged', (Quote =>{
           // alert(Quote)
            (this.Quotes).push(Quote)
        }))
    },methods: {
        deleteQuotes(index, quote){
            var answer = confirm("Are you sure do you want to delete this quote : " +quote)
            if (answer) {
                (this.Quotes).splice(index,1)
                 eventBus.deleteQuote()
            }
            
        }
    },
}
</script>
<style scoped>
    .quote{
        border: 1px solid #cccccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 10px;
        font-family: 'Arizonia', cursive;
        font-size: 2.5em;
    }
    .quote:hover{
        background-color: #F08080;
        cursor: pointer;
    }
</style>
