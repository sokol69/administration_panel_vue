<template>
	<div class="worksItem">
		<div class="worksItem__name worksItem__row">
			{{work.name}}
		</div>
		<div class="worksItem__tech worksItem__row">
			{{work.tech}}
		</div>
		<div class="worksItem__href worksItem__row">
			{{work.href}}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		work: Object
	}
}
</script>

<style>
	.worksItem {
		margin-right: 40px;
		padding-top: 15px;
		padding-bottom: 5px;
		border-bottom: 1px solid lightgray;
	}
	.worksItem__row {
		padding-bottom: 10px;
	}
	.worksItem__tech {
		color: #00C9A8;
	}
	.worksItem__href {
		color: #c0c0c0;
	}
</style>
