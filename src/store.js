import { ref } from 'vue'

export default {
    count: ref(0),
    increment: function () {
        this.count.value++
    }
}