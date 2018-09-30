<template>
	<header>
		<h1 class="header__title">Панель администрирования</h1>
		<a href="javascript:void(0)" class="header__link">Вернуться на сайт</a>
	</header>
</template>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #00C9A8;
	}
	.header__title {
		margin-top: 25px;
		margin-bottom: 25px;
		margin-left: 30px;
		color: #fff;
	}
	.header__link {
		display: block;
		margin-right: 30px;
		color: #EFF0E9;
		transition: all 0.3s;
		text-decoration: none;
		border-bottom: 1px solid #EFF0E9;
	}
	.header__link:hover {
		border-bottom-color: transparent;
	}

</style>


