<template>
    <div>
        baz
        {{ article }}
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name:'baz',
    data(){
        return{

        }
    },
    computed: {
        ...mapState(['article'])
    },
    asyncData({ store }){
        return store.dispatch('GET_ARTICLE')
    },
    methods: {

    },
}
</script>
<style scoped>
    div{
        background: red;
    }
</style>