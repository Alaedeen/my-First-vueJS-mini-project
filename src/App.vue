<template>
    <div class="container">
        <number-quotes></number-quotes>
        <add-quotes></add-quotes>
        <app-quotes></app-quotes>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import NumberQuotes from './components/NumberQuotes.vue'
    import AddQuotes from './components/AddQuote.vue'
    import Quotes from './components/Quotes.vue'
    import Footer from './components/Footer.vue'
    export default {
        components:{
            numberQuotes: NumberQuotes,
            addQuotes: AddQuotes,
            appQuotes: Quotes,
            appFooter: Footer
        }
    }
</script>

<style>
</style>
