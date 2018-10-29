<template>
	<div class="adminWorks">
		<h2 class="subtitle">Страница "Мои работы"</h2>
		<div class="addWork">
			<div class="addWork__title thirdTitle">Добавить работу</div>
			<div class="addWork__inputWrap">
				<input type="text"
				class="addWork__input adminInput"
				placeholder="Название проекта"
				v-model="newWork"
				:class="{error:validation.hasError('newWork')}"
				>
				<div class="errorMessage">
					{{ validation.firstError('newWork') }}
				</div>
			</div>
			<div class="addWork__inputWrap">
				<input type="text"
				class="addWork__input adminInput"
				placeholder="Технологии"
				v-model="newWorkTech"
				:class="{error:validation.hasError('newWorkTech')}"
				>
				<div class="errorMessage">
					{{ validation.firstError('newWorkTech') }}
				</div>
			</div>
			<div class="addWork__inputWrap">
				<input type="text"
				class="addWork__input adminInput"
				placeholder="Ссылка"
				v-model="newWorkHref"
				:class="{error:validation.hasError('newWorkHref')}"
				>
				<div class="errorMessage">
					{{ validation.firstError('newWorkHref') }}
				</div>
			</div>
			<div class="addWork__inputWrap">
				<div class="file-upload">
					<label>
						<input type="file" name="file"
						@change="changeFileName">
						<span>{{ fileBtnText }}</span>
					</label>
				</div>
				<span class="fileName">{{ fileName }}</span>
			</div>
			<button class="adminBtn addWork__btn"
			@click="addWork"
			>
				Добавить
			</button>
		</div>
		<div class="worksList"
		v-if="works.length > 0"
		>
			<div class="worksList__title thirdTitle">
				Список работ:
			</div>
			<table class="worksList__table">
				<thead class="worksList__head">
					<tr>
						<th class="worksList__headItem">Название</th>
						<th class="worksList__headItem">Технологии</th>
						<th class="worksList__headItem">Ссылка</th>
						<th class="worksList__headItem"></th>
					</tr>
				</thead>
				<tbody>
					<works-item
					v-for="work in works"
					:key="work.id"
					:work="work"
					@removeWork="removeWork"
					>
					</works-item>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import worksItem from './worksItem';
import modal from './modal';
import {mapMutations, mapActions, mapGetters} from 'vuex';
import { Validator } from 'simple-vue-validator';
export default {
	mixins: [require("simple-vue-validator").mixin],
	validators: {
		newWork(value) {
			return Validator.value(value).required('Поле должно быть заполнено');
		},
		newWorkTech(value) {
			return Validator.value(value).required('Поле должно быть заполнено');
		},
		newWorkHref(value) {
			return Validator.value(value).required('Укажите ссылку').url();
		}
	},
	data() {
		return {
			newWork: '',
			newWorkTech: '',
			newWorkHref: '',
			fileName: '',
			fileBtnText: 'Выберите файл',
		}

	},
	computed: {
		...mapGetters(['works'])
	},
	methods: {
		...mapMutations(['addNewWork', 'deleteWork']),
		...mapActions(['fetchWorks']),
		addWork() {
			this.$validate().then(succes => {
				if (!succes) return;
				this.addNewWork({
					id: Math.round(Math.random() * 10000),
					name: this.newWork,
					tech: this.newWorkTech,
					href: this.newWorkHref
				});
				this.newWork = '';
				this.newWorkTech = '';
				this.newWorkHref = '';
				this.validation.reset();
			})
		},
		changeFileName() {
			let fileInput = event.target;
			if (fileInput.files.length > 0) {
				this.fileName = fileInput.files[0].name;
				this.fileBtnText = 'Заменить файл';
			} else {
				this.fileName = '';
				this.fileBtnText = 'Выберите файл';
			}
		},
		removeWork(workID) {
			this.deleteWork(workID);
		},
	},
	created() {
		this.fetchWorks();
	},
	components: {
		worksItem
	}
}
</script>

<style>
	.addWork {
		padding-left: 40px;
		padding-bottom: 30px;
		border-bottom: 1px solid lightgray;
	}
	.addWork__title {
		padding-top: 20px;
	}
	.addWork__inputWrap {
		display: flex;
		align-items: center;
		padding-bottom: 25px;
	}
	.addWork__input {
		width: 200px;
	}
	.addWork__btn {
		width: 100%;
		max-width: 242px;
		margin-top: 10px;
	}
	.file-upload {
	position: relative;
	width: 233px;
	height: 20px;
	padding: 8px 4px;
	overflow: hidden;
	background: gray;
	border-radius: 3px;
	color: #fff;
	text-align: center;
	transition: all 0.3s;
	font-size: 14px;
	}
	.file-upload:hover {
		background: lightgray;
	}
	.file-upload input[type="file"]{
		display: none;
	}
	.file-upload label {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	.file-upload span {
		line-height: 36px;
	}
	.fileName {
		padding-left: 20px;
	}
	.worksList {
		padding-top: 40px;
		padding-left: 40px;
		padding-right: 40px;
	}
	.worksList__table {
		width: 100%;
		border-bottom: 1px solid lightgray;
	}
	.worksList__head {
		margin-bottom: 10px;
		background-color: #EDEEE6;
	}
	.worksList__headItem {
		padding-top: 20px;
		padding-bottom: 20px;
		border-radius: 5px;
		color: gray;
	}
</style>
