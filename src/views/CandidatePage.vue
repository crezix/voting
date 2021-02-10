<template>
<AdminPanel/>
<Candidate/>
</template>

<script>
import AdminPanel from  '@/components/AdminPanel.vue'
import Candidate from '../components/Candidate.vue'
export default {
    name:'CandidatePage',
    components:{
        Candidate,
        AdminPanel
    }
}
</script>