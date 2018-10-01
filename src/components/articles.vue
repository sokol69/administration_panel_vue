<template>
	<div class="adminBlog">
		<h2 class="subtitle">Страница "Блог"</h2>
		<div class="addNode">
			<div class="addNode__title">Добавить запись</div>

			<input type="text" class="addNode__name addNode__input" placeholder="Название"
			v-model="newArticle"
			:class="{error: validation.hasError('newArticle')}"
			>
			<div class="errorMessage">
				{{ validation.firstError('newArticle') }}
			</div>
			<input type="text" class="addNode__date addNode__input" placeholder="Дата">

			<textarea class="addNode__content addNode__input" cols="30" rows="20" placeholder="Содержание"></textarea>
			<button class="adminBtn addNode__btn"
			@click="addArticle"
			>
				Добавить
			</button>
		</div>
		<ul class="articlesList">
			<li class="articlesList__item">test article</li>
		</ul>
	</div>
</template>

<script>
import { Validator } from "simple-vue-validator";
import {mapMutations} from 'vuex';
export default {
	mixins: [require("simple-vue-validator").mixin],
	validators: {
		newArticle(value) {
			return Validator.value(value).required('Поле должно быть заполнено');
		}
	},
	data() {
		return {
			newArticle: ''
		}
	},
	methods: {
		...mapMutations(['addNewArticle']),
		addArticle() {
			this.$validate().then(succes => {
				if (!succes) return;
				this.addNewArticle({
					name: this.newArticle
				});
				alert('test');
				this.newArticle = '';
				this.validation.reset();
			})
		}
	}
}
</script>

<style>
	.addNode {
		display: flex;
		flex-direction: column;
		padding-top: 20px;
		padding-left: 35px;
	}
	.addNode__title {
		padding-bottom: 20px;
		font-weight: bold;
	}
	.addNode__input {
		width: 200px;
		margin-bottom: 20px;
		padding: 10px 20px;
		border: 0;
		border-radius: 5px;
	}
	.addNode__content {
		width: 700px;
	}
	.addNode__btn {
		width: 150px;
	}
	.articlesList {
		padding-top: 20px;
		list-style: none;
	}
</style>
