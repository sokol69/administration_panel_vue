<template>
	<tr class="worksItem">
		<td class="worksItem__name worksItem__row">
			{{work.name}}
		</td>
		<td class="worksItem__tech worksItem__row">
			{{work.tech}}
		</td>
		<td class="worksItem__href worksItem__row">
			<a v-bind:href="work.href"
			target="_blanc"
			>
			{{work.href}}
			</a>
		</td>
		<td class="worksItem__row worksItem__del">
			<button class="adminBtn worksItem__delBtn"
			@click="openModal"
			>
				<svg class="worksItem__delSvg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
		</td>
		<modal
		v-show="showMobal"
		@openModal="openModal"
		@closeModal="closeModal"
		@confirmModal="removeWork"
		>
		</modal>
	</tr>
</template>

<script>
import modal from './modal';
export default {
	data() {
		return {
			showMobal: false
		}
	},
	props: {
		work: Object
	},
	methods: {
		removeWork() {
			this.$emit('removeWork', this.work.id);
		},
		openModal() {
			this.showMobal = !this.showMobal;
		},
		closeModal() {
			this.showMobal = false;
		}
	},
	components: {
		modal
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
	.worksItem:nth-child(even) {
		background-color: rgba(155, 155, 155, 0.5);
	}
	.worksItem__row {
		padding-top: 15px;
		padding-bottom: 15px;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 5px;
	}
	.worksItem__tech {
		color: gray;

	}
	.worksItem__href {
		color: #c0c0c0;
	}
	.worksItem__del {
		text-align: center;
	}
	.worksItem__delBtn {
		background-color: #FD9156;
	}
	.worksItem__delBtn:hover {
		background-color: #FF7922;
	}
	.worksItem__delSvg {
		fill: #FFF
	}
</style>
