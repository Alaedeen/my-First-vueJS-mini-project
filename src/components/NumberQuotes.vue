<template>
    <div >
        <p class="h2">Quotes Added</p>
        <div class="progress">
            <div class="progress-bar" role="progressbar" 
            :style="{width: number * 10 + '%'}" 
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{{number}}/10</div>
        </div>
    </div>
</template>
<script>
import { eventBus } from '../main'
export default {
    data() {
        return {
            number:0
        }
    },
    created() {
        eventBus.$on('quoteAdded', (numberQuotes =>{
            this.number=numberQuotes
        }))
    },
}
</script>
<style>

</style>
