import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default function createStore() {
    return new Vuex.Store({
        state: {
            article: '数据'
        },
        actions: {
            GET_ARTICLE({ commit }) {
                return new Promise((r) => {
                    setTimeout(() => {
                        commit('SET_ARTICLE', 'vuex数据')
                        r()
                    }, 1000);
                })
            }
        },
        mutations: {
            SET_ARTICLE(state, data) {
                state.article = data
            }
        }
    })
}
