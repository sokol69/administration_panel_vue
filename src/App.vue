<template>
	<div id="app">
		<div class="header">
			<app-header></app-header>
		</div>
		<div class="tabs">
			<tabs-list></tabs-list>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import appHeader from './components/header'
import tabsList from './components/tabs'
import about from './components/about'
export default {
	name: 'App',
	components: {
		appHeader,
		tabsList,
		about
	}
}
</script>

<style>
	* {
		outline: 0;
	}
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: Helvetica, Arial, sans-serif;
	}
	#app {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
	.content {
		flex: 1;
		background-image: url(assets/bg_panel-admin.jpg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	.subtitle {
		padding-top: 40px;
		padding-left: 35px;
		font-weight: normal;
	}
	.adminBtn {
		padding: 10px;
		border-radius: 5px;
		border: 0;
		cursor: pointer;
		transition: all 0.24s;
		background-color: #00C9A8;
		color: #fff;
	}
	.adminBtn:hover {
		background-color: #0BAD93;
	}
	.adminBtn:active {
		opacity: 0.7;
	}
	.error {
		border: 1px solid firebrick;
		outline: none;
	}
</style>
