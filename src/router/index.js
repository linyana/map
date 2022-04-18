import VueRouter from 'vue-router'

import Login from '../pages/Login'
import Map from '../pages/Map'

export default new VueRouter({
    routes: [
        {
            path: '/index',
            component: Map
        },
        {
            path: '/login',
            component: Login
        }
    ],

})

//捕获路由转发的错误
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}