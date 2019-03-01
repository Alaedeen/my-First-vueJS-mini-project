<template>
    <div class="container" style="width : 50%">
        <p>Quote</p>
        <textarea class="form-control" rows="5" v-model="Quote"></textarea>
        <div class="center"><button class="btn btn-primary" @click="addQuote">Add Quote</button></div>
    </div>
</template>
<script>
import { eventBus } from '../main'
export default {
    data() {
        return {
            Quotes: 0,
            Quote: ''
        }
    },
    methods: {
        changeQuote(event) {
            this.Quote = event.target.value;
        },
        addQuote(){
            if (this.Quotes<=9) {
                this.Quotes++
            eventBus.AddQuote(this.Quotes)
            eventBus.changeQuote(this.Quote)
            this.Quote=''
            }else{
                alert("can't add more quotes you must delete some quotes first")
            }
            
        }
    },
    created() {
        eventBus.$on('quoteDeleted',()=>{
            this.Quotes--
            eventBus.AddQuote(this.Quotes)
        })
    },
    
}
</script>
<style scoped>
    .center{
        padding: 1em;
        text-align: center;
    }
</style>
