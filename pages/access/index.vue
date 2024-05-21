<template>
    <div>
    </div>
</template>
<script setup>
definePageMeta({
    layout:'auth'
})
const route = useRoute()
const router = useRouter()

if(router.currentRoute.value.path === '/access/' || router.currentRoute.value.path === '/access'){
    router.push('/access/login')
}

</script>