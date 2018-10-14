const works = {
	state: {
		data: []
	},
	getters: {
		works(state) {
			return state.data;
		}
	},
	mutations: {
		addNewWork(state, work) {
			state.data.push(work);
		}
	},
	actions: {
		fetchWorks({state}) {
			state.data = [
				{
					"id": 1,
					"name": "Landing page для магазина бургеров",
					"tech": "HTML, CSS, JavaScript",
					"href": "https://github.com/sokol69/burgers"
				},
				{
					"id": 2,
					"name": "Веб-приложение 'Геоотзыв'",
					"tech": "JavaScript, API Яндекс.карт",
					"href": "https://github.com/sokol69/burgers"
				},
				{
					"id": 3,
					"name": "Простой сайт портфолио",
					"tech": "HTML, CSS",
					"href": "https://github.com/sokol69/burgers"
				}
			]
		}
	}
};

export default works;