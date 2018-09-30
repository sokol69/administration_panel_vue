<template>
	<div class="about">
		<h2 class="subtitle">Страница "Обо мне"</h2>
		<skills-list
			v-for="skillType in skillsTypes"
			:key="skillType"
			:skillType="skillType"
			:skills="skills"
		>
		</skills-list>
	</div>
</template>

<script>
import skillsList from './skillsList';
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			skillsTypes: ['Frontend', 'Backend', 'Workflow']
		};
	},
	computed: {
		...mapGetters(['skills'])
	},
	methods: {
		...mapActions(['fetchSkills'])
	},
	created() {
		this.fetchSkills();
	},
	components: {
		skillsList
	}
}
</script>

<style>
	
</style>


