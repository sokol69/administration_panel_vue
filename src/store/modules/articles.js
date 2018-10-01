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
	}
}

export default articles;