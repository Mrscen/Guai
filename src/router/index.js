import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/login/gate'
    },
    {
        name:'gate',
        path:'/login/gate',
        component:() => import('../pages/login/gate.vue'),
    },
    {
        name:'newUser',
        path:'/login/newUser',
        component:() => import('../pages/login/newUser.vue')
    },

    // 游戏介绍部分
    {
        name:'introduction_1',
        path:'/login/introduction_1',
        component:() => import('../pages/login/introduction_1.vue')
    },
    {
        name:'introduction_2',
        path:'/login/introduction_2',
        component:() => import('../pages/login/introduction_2.vue')
    },
    {
        name:'introduction_3',
        path:'/login/introduction_3',
        component:() => import('../pages/login/introduction_3.vue')
    },
    {
        name:'introduction_4',
        path:'/login/introduction_4',
        component:() => import('../pages/login/introduction_4.vue')
    },

    {
        name:'resume',
        path:'/resume',
        component:() => import('@/pages/account/resume.vue')
    },
    {
        name:'user',
        path:'/user',
        component:() => import('../pages/user/index.vue'),
        children:[
            {
                name:'signIn',
                path:'signIn',
                component:() => import('../pages/user/signIn.vue')
            },
            {
                name:'invite',
                path:'invite',
                component:() => import('../pages/user/invite.vue')
            },
            {
                name:'information',
                path:'information',
                component:() => import('../pages/user/information.vue')
            },
            {
                name:'bag',
                path:'bag',
                component:() => import('../pages/user/bag.vue'),
                redirect:'/user/bag/outer',
                children:[
                    {
                        name:"outer",
                        path:'outer',
                        component:() => import('@/components/user/bag/Outer.vue')
                    },
                    {
                        name:"skin",
                        path:'skin',
                        component:() => import('@/components/user/bag/Skin.vue')
                    },
                    {
                        name:"shoes",
                        path:'shoes',
                        component:() => import('@/components/user/bag/Shoes.vue')
                    },
                    {
                        name:"pants",
                        path:'pants',
                        component:() => import('@/components/user/bag/Pants.vue')
                    },
                    {
                        name:"glass",
                        path:'glass',
                        component:() => import('@/components/user/bag/Glass.vue')
                    },
                    {
                        name:"hair",
                        path:'hair',
                        component:() => import('@/components/user/bag/Hair.vue')
                    },
                ]
            },
            {
                name:'addRole',
                path:'addRole',
                component:() => import('../pages/user/addRole.vue')
            }
        ]
    },
    {
        name:'community',
        path:'/community',
        component:() => import('../pages/community/index.vue'),
        redirect:'/community/moment/all',
        children:[
            {
                name:'moment',
                path:'moment',
                component:() => import('../pages/community/moment/index.vue'),
                redirect:'/community/moment/all',
                children:[
                    {
                        name:'momentAll',
                        path:'all',
                        component:() => import('../pages/community/moment/all.vue')
                    },
                    {
                        name:'momentRelevant',
                        path:'relevant',
                        component:() => import('../pages/community/moment/relevant.vue')
                    }
                ]
            },
            {
                name:'challenge',
                path:'challenge',
                component:() => import('../pages/community/challenge/index.vue'),
            },
            {
                name:'createChallenge',
                path:'createChallenge',
                component:() => import('../pages/community/challenge/createChallenge.vue')
            },
            {
                name:'check',
                path:'check',
                component:() => import('../pages/community/check/index.vue'),
                children:[
                    {
                        name:'checking',
                        path:'checking',
                        component:() => import('../pages/community/check/checking.vue')
                    },
                    {
                        name:'checked',
                        path:'checked',
                        component:() => import('../pages/community/check/checked.vue')
                    }
                ]
            }
        ]
    },
    {
        name:'rank',
        path:'/rank',
        component:() => import('../pages/rank/index.vue'),
        redirect:'/rank/overall',
        children:[
            {
                name:'overall',
                path:'overall',
                component:() => import('@/pages/rank/overall.vue')
            },
            {
                name:'progress',
                path:'progress',
                component:() => import('@/pages/rank/progress.vue')
            },
            {
                name:'treasure',
                path:'property',
                component:() => import('@/pages/rank/treasure.vue')
            },
            {
                name:'credit',
                path:'credit',
                component:() => import('@/pages/rank/credit.vue')
            },
        ]
    },
    {
        name:'market',
        path:'/market',
        meta:{user_agreement: true},
        component:() => import('../pages/market/index.vue'),
        
        // 需要同意用户条款，才允许进入市场
        beforeEnter: (to, from, next) => {
            if(to.meta.user_agreement == true){
                next()
            }
        },
        children:[
            {
                name:'digits',
                path:'digits',
                component:() => import('../pages/market/digits/index.vue')
            },
            {
                name:'house',
                path:'house',
                component:() => import('../pages/market/house/index.vue')
            },
            {
                name:'market_property',
                path:'property',
                component:() => import('../pages/market/property/index.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

// 处理重复跳转报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


export default router 