<template>
	<div>
		<tr class="skillsItem">
			<td class="skillsItem__name">
				{{skill.name}}
			</td>
			<td>
				<input type="text" class="skillsItem__input"
				:value="skill.percents"
				>
			</td>
			<td class="skillsItem__units">%</td>
			<td class="skillsItem__btnWrap">
				<button class="skillsItem__btn"
				@click="removeSkill"
				>Удалить</button>
			</td>
		</tr>
	</div>
</template>

<script>
export default {
	props: {
		skill: Object
	},
	methods: {
		removeSkill() {
			this.$emit('removeSkill', this.skill.id);
		}
	}
}
</script>

<style>
	.skillsItem {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 20px;
	}
	.skillsItem__name {
		width: 120px;
		padding-right: 20px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.skillsItem__input {
		width: 40px;
		padding: 10px;
		border: 0;
		border-radius: 5px;
		text-align: center;
	}
	.skillsItem__units {
		padding-left: 10px;
	}
	.skillsItem__btnWrap {
		padding-left: 28px;
	}
	.skillsItem__btn {
		padding: 10px;
		text-align: center;
		border: 0;
		border-radius: 5px;
		background-color: #FD9156;
		color: #fff;
		transition: all 0.3s;
		cursor: pointer;
	}
	.skillsItem__btn:hover {
		background-color: #FF7922;
	}
	.skillsItem__btn:active {
		opacity: 0.7;
	}
</style>

