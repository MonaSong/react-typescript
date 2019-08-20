import {routeItem} from '../models/route'
import Home from '../pages/index'
import App from '../pages/App'

const routes: routeItem[] = [
    {
        path: '/',
        component: App,
        exact: true
    },
    {
        path: '/detail',
        component: Home,
    }
]

export default routes