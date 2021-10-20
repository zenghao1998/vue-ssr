<template>
    <div>
        foo
        {{ article }}
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name:'foo',
    computed: {
        ...mapState(['article'])
    }
}
</script>