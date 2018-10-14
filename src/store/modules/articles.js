const articles = {
	state: {
		data: []
	},
	getters: {
		articles(state) {
			return state.data;
		}
	},
	mutations: {
		addNewArticle(state, article) {
			state.data.push(article);
		}
	},
	actions: {
		fetchArticles({state}) {
			state.data = [
				{
					"id": 1,
					"name": "Самое важное в SASS",
					"date": "26.01.2018",
					"content": "test"
				},
				{
					"id": 2,
					"name": "Самый необходимый набор Gulp плагинов",
					"date": "12.12.2017",
					"content": "test"
				},
				{
					"id": 3,
					"name": "Почему я выбрал Jade",
					"date": "5.11.2017",
					"content": "test"
				}
			]
		}
	}
};

export default articles;