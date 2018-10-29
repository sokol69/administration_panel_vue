<template>
	<div class="modal">
		<div class="modal__overlay"></div>
		<transition name="modalWindow">
			<div class="modal__window">
				<button class="modal__close"
				@click="closeModal">
					<svg class="modal__closeIcon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					width="10px" height="10px" viewBox="0 0 348.333 348.334" style="enable-background:new 0 0 348.333 348.334;"
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
				<div class="modal__content">Вы уверены?</div>
				<div class="modal__footer">
					<button class="adminBtn modal__btn modal__btn--del"
					@click="confirmModal"
					>
						Удалить
					</button>
					<button class="adminBtn modal__btn"
					@click="closeModal"
					>
						Отменить
					</button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	methods: {
		closeModal() {
			this.$emit('closeModal');
		},
		confirmModal() {
			this.$emit('confirmModal');
		}
		
	}
}
</script>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		z-index: 10;
	}
	.modal__overlay {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(169, 169, 169, 0.7);
		z-index: 20;
	}
	.modal__window {
		position: relative;
		z-index: 50;
		margin: auto;
		padding: 30px;
		background-color: #fff;
		border-radius: 5px;
	}
	.modal__close {
		position: absolute;
		top: 0;
		right: 0;
		padding: 10px;
		border: 0;
		background-color: transparent;
		cursor: pointer;
	}
	.modal__closeIcon {
		fill: gray;
	}
	.modal__content {
		padding-bottom: 20px;
		text-align: center;
		font-weight: bold;
		color: gray;
	}
	.modal__btn {
		width: 90px;
	}
	.modal__btn--del {
		margin-right: 20px;
		background-color: #FD9156;
	}
	.modal__btn--del:hover {
		background-color: #FF7922;
	}
</style>
