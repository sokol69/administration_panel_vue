<template>
	<div class="adminBlog">
		<h2 class="subtitle">Страница "Блог"</h2>
		<div class="addNode">
			<div class="addNode__title thirdTitle">Добавить запись</div>
			<div class="addNode__inputWrap">
				<input type="text" class="addNode__name addNode__input adminInput" placeholder="Название"
				v-model="newArticle"
				:class="{error: validation.hasError('newArticle')}"
				>
				<div class="errorMessage">
					{{ validation.firstError('newArticle') }}
				</div>
			</div>
			<div class="addNode__inputWrap">
				<!-- <input type="text" class="addNode__date addNode__input adminInput" placeholder="Дата (дд.мм.гг)"
				v-model="newArticleDate"
				:class="{error: validation.hasError('newArticleDate')}"
				> -->
				<masked-input class="addNode__date addNode__input adminInput"
				placeholder="Дата (дд.мм.гг)"
				v-model="newArticleDate"
				mask="11.11.1111"
				:class="{error: validation.hasError('newArticleDate')}"
				/>
				<div class="errorMessage">
					{{ validation.firstError('newArticleDate') }}
				</div>
			</div>

			<div class="addNode__inputWrap">
				<textarea class="addNode__content addNode__input adminInput" cols="30" rows="20" placeholder="Содержание"
				v-model="newArticleContent"
				:class="{error: validation.hasError('newArticleContent')}"
				>
				</textarea>
				<div class="errorMessage">
					{{ validation.firstError('newArticleContent') }}
				</div>
			</div>
		
			<button class="adminBtn addNode__btn"
			@click="addArticle"
			>
				Добавить
			</button>
		</div>
		<div class="articlesList">
			<div class="articlesList__title thirdTitle">Список статей:</div>
			<article-item
			v-for="article in articles"
			:key="article.id"
			:article="article"
			>
			</article-item>
		</div>
	</div>
</template>

<script>
import articleItem from './articleItem';
import {mapMutations, mapActions, mapGetters} from 'vuex';
import { Validator } from 'simple-vue-validator';
import MaskedInput from 'vue-masked-input'
export default {
	mixins: [require("simple-vue-validator").mixin],
	validators: {
		newArticle(value) {
			return Validator.value(value).required('Поле должно быть заполнено');
		},
		newArticleDate(value) {
			return Validator.value(value).required('Поле должно быть заполнено');
		},
		newArticleContent(value) {
			return Validator.value(value).required('Поле должно быть заполнено');
		}
	},
	props: {
		//articles: Array
	},
	data() {
		return {
			newArticle: '',
			newArticleDate: '',
			newArticleContent: ''
		}
	},
	computed: {
		...mapGetters(['articles'])
	},
	methods: {
		...mapMutations(['addNewArticle']),
		...mapActions(['fetchArticles']),
		addArticle() {
			this.$validate().then(succes => {
				if (!succes) return;
				this.addNewArticle({
					id: Math.round(Math.random() * 10000),
					name: this.newArticle,
					date: this.newArticleDate,
					content: this.newArticleContent
				});
				this.newArticle = '';
				this.newArticleDate = '';
				this.newArticleContent = '';
				this.validation.reset();
			})
		}
	},
	created() {
		this.fetchArticles();
	},
	components: {
		articleItem,
		MaskedInput
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
	.addNode__inputWrap {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
	.addNode__input {
		width: 200px;
	}
	.addNode__content {
		width: 700px;
	}
	.addNode__btn {
		width: 150px;
	}
	.articlesList {
		padding-top: 40px;
		padding-left: 30px;
		padding-bottom: 20px;
		list-style: none;
	}
	.articlesList__title {
		padding-top: 10px;
	}
	.error {
		border: 1px solid firebrick;
		outline: none;
	}
</style>
