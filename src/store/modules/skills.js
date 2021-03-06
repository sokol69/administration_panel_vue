const skills = {
	state: {
		data: []
	},
	getters: {
		skills(state) {
			return state.data;
		}
	},
	mutations: {
		addNewSkill(state, skill) {
			state.data.push(skill);
		},
		deleteSkill(state, skillID) {
			state.data = state.data.filter(item => item.id !== skillID);
		}
	},
	actions: {
		fetchSkills({ state }) {
			state.data = [
				{
					"id": 1,
					"name": "Html",
					"percents": 90,
					"type": 1
				},
				{
					"id": 2,
					"name": "Css",
					"percents": 20,
					"type": 1
				},
				{
					"id": 3,
					"name": "Js",
					"percents": 30,
					"type": 1
				},
				{
					"id": 4,
					"name": "Php",
					"percents": 30,
					"type": 2
				},
				{
					"id": 5,
					"name": "MySQL",
					"percents": 30,
					"type": 2
				},
				{
					"id": 6,
					"name": "Node.js & npm",
					"percents": 30,
					"type": 2
				},
				{
					"id": 7,
					"name": "Mongo.db",
					"percents": 40,
					"type": 2
				},
				{
					"id": 8,
					"name": "Git",
					"percents": 40,
					"type": 3
				},
				{
					"id": 9,
					"name": "Gulp",
					"percents": 40,
					"type": 3
				},
				{
					"id": 10,
					"name": "Webpack",
					"percents": 10,
					"type": 3
				}
			]
		}
	}
};

export default skills;