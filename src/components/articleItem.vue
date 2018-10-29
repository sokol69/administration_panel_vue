<template>
	<div class="articleItem">
		<div class="articleItem__name">
			{{article.name}}
		</div>
		<div class="articleItem__date">
			({{article.date}})
		</div>
		<button class="adminBtn delBtn articleItem__del"
		@click="openModal"
		>
			<svg class="delSvg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			width="20px" height="20px" viewBox="0 0 348.333 348.334" style="enable-background:new 0 0 348.333 348.334;"
			xml:space="preserve">
				<g>
				<path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
					c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
					c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
					l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
					L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.55968.611z"/>
				</g>
			</svg>
		</button>
		<transition name="modal">
			<modal
			v-show="showMobal"
			@openModal="openModal"
			@closeModal="closeModal"
			@confirmModal="removeArticle"
			>
			</modal>
		</transition>
	</div>
</template>

<script>
import modal from './modal'
export default {
	data() {
		return {
			showMobal: false
		}
	},
	props: {
		article: Object
	},
	methods: {
		openModal() {
			this.showMobal = !this.showMobal;
		},
		closeModal() {
			this.showMobal = false;
		},
		removeArticle() {
			this.$emit('removeArticle', this.article.id);
		}
	},
	components: {
		modal
	}
}
</script>

<style>
	.articleItem {
		position: relative;
		display: flex;
		align-items: center;
		margin-right: 40px;
		padding-top: 30px;
		padding-left: 15px;
		padding-bottom: 30px;
		border-bottom: 1px solid lightgray;
		border-radius: 5px;
	}
	.articleItem:nth-child(even) {
		background-color: rgba(155, 155, 155, 0.5);
	}
	.articleItem:last-child {
		border: 0;
	}
	.articleItem__name {
		font-style: italic;
	}
	.articleItem__date {
		padding-left: 10px;
		color: gray;
	}
	.articleItem__del {
		position: absolute;
		top: 50%;
		right: 15px;
		transform: translateY(-50%);
		
	}
</style>
