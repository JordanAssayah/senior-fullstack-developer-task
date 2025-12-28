<template>
	<div>
		<h1>Editors Page</h1>
		<p>Welcome {{ user?.username }}!</p>
	</div>
</template>

<script setup>
import { computed, watchEffect } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

const store = useStore()
const router = useRouter()

const user = computed(() => store.getters.user)

watchEffect(() => {
	const allowedRoles = ['editor', 'admin'];
	if (!user.value || !user.value.roles.some(role => allowedRoles.includes(role))) {
		router.push({ path: "/" })
	}
})
</script>
