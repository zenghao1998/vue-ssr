import Vue from 'vue'
import VueRouter from 'vue-router'
import baz from '@/components/baz'
import foo from '@/components/foo'
Vue.use(VueRouter)
export default function createRouter() {
    return new VueRouter({
        mode: "history",
        routes: [
            {
                path: "/",
                name: 'baz',
                component: baz
            },
            {
                path: "/foo",
                name: 'foo',
                component: foo
            }
        ]
    })
}
