<template>
	<div class="skillsList">
		<h3>
			{{ skillType }}
		</h3>
		<table class="skillsList__table">
			<skills-item
			v-for="skill in skills"
			:key="skill.id"
			:skill="skill"
			v-if="checkSkillTpe(skillType) === skill.type"
			@removeSkill="removeSkill"
			>
			</skills-item>
		</table>
		<div class="addNew">
			<button class="addNew__btn adminBtn"
			@click="addSkill"
			>Добавить новый</button>
			<input type="text" class="addNew__input"
			v-model="newSkill"
			@keydown.enter="addSkill"
			:class="{error: validation.hasError('newSkill')}"
			>
			<div class="errorMessage">
				{{ validation.firstError('newSkill') }}
			</div>
		</div>
	</div>
</template>

<script>
import skillsItem from './skillsItem';
import {mapMutations} from 'vuex';
import { Validator } from "simple-vue-validator";
export default {
	mixins: [require("simple-vue-validator").mixin],
	validators: {
		newSkill(value) {
			return Validator.value(value).required('Поле должно быть заполнено');
		}
	},
	props: {
		skillType: String,
		skills: Array
	},
	data() {
		return {
			newSkill: ''
		}
	},
	methods: {
		...mapMutations(['addNewSkill', 'deleteSkill']),
		addSkill() {
			this.$validate().then(succes => {
				if (!succes) return;
				this.addNewSkill(
					{
						id: Math.round(Math.random() * 10000),
						name: this.newSkill,
						percents: 0,
						type: this.checkSkillTpe(this.skillType)
					}
				)
				this.newSkill = '';
				this.validation.reset();
			});
		},
		removeSkill(skillID) {
			this.deleteSkill(skillID);
		},
		checkSkillTpe(skillType) {
			switch (skillType) {
				case 'Frontend':
					return 1;
				case 'Backend':
					return 2;
				case 'Workflow':
					return 3;
			}
		}
	},
	components: {
		skillsItem
	}
}
</script>

<style>
	.skillsList {
		padding-top: 20px;
		padding-left: 35px;
		padding-bottom: 35px;
		border-bottom: 1px solid lightgray;
	}
	.skillsList__table {
		padding-left: 20px;
	}
	.addNew {
		display: flex;
		padding-top: 10px;
		align-items: center;
	}
	.addNew__btn {
		margin-right: 27px;
	}
	.addNew__input {
		padding: 9px;
		border: 1px solid lightgray;
		border-radius: 5px;
	}
	.errorMessage {
		padding-left: 15px;
		color: firebrick;
	}
</style>


