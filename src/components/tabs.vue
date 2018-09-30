<template>
	<ul class="tabsList">
		<li class="tablist__item"
		v-for="tab in tabs"
		:key="tab"
		>
			<router-link class="tablist__link"
			:to="tab.href"
			exact-active-class="tablist__link--active"
			>
				{{tab.name}}
			</router-link>
		</li>
	</ul>
</template>
<script>
export default {
	data() {
		return {
			tabs: [
				{name: 'About', href: "/"},
				{name: 'Blog', href: "/blog"},
				{name: 'Works', href: "/works"}
			]
		}
	}
}
</script>


<style>
	.tabsList {
		display: flex;
		margin: 0;
		padding: 0;
		background-color: #EFF0E9;
		list-style: none;
	}
	.tablist__item {
		border-right: 2px solid #fff;
	}
	.tablist__item:hover {
		background-color: lightgray;
	}
	.tablist__item--active {
		background-color: #fff;
		cursor: default;
	}
	.tablist__item--active:hover {
		background-color: #fff;
	}
	.tablist__link {
		display: block;
		padding: 20px 80px;
		transition: all 0.3s;
		cursor: pointer;
		text-transform: uppercase;
		color: gray;
		text-decoration: none;
	}
	.tablist__link--active {
		background-color: #F4F4F7;
		color: #00C9A8;
	}
</style>

