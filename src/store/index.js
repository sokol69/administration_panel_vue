import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

import skills from './modules/skills'

const store = new Vuex.Store({
	modules: {
		skills
	}
});

export default store;