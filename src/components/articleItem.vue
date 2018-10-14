<template>
	<div class="articleItem">
		<div class="articleItem__name">
			{{article.name}}
		</div>
		<div class="articleItem__date">
			({{article.date}})
		</div>
	</div>
</template>

<script>
export default {
	props: {
		article: Object
	}
}
</script>

<style>
	.articleItem {
		display: flex;
		margin-right: 40px;
		padding-top: 20px;
		padding-left: 20px;
		padding-bottom: 20px;
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
</style>
