import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/AppHome.vue'
import Whoami from '@/views/AppWhoami.vue'
import Ctf from '@/views/AppCtf.vue'
import NotFound from '@/views/NotFound.vue'
import { useLinkStore } from '@/store/link'
import { useActiveLink } from '@/composables/useActiveLink'

export function createCustomRouter(): ReturnType<typeof createRouter> {
  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Home' },
    },
    {
      path: '/ctf',
      component: Ctf,
      name: 'Ctf',
      meta: { title: 'Ctf' },
    },
    {
      path: '/about',
      component: Whoami,
      name: 'Whoami',
      meta: { title: 'Whoami' },
      beforeEnter: (to, from, next) => {
        const { getActiveLink } = useActiveLink()
        const activeLink = getActiveLink()
        if (activeLink && to.name !== activeLink) {
          next({ name: activeLink }) // Reindirizza alla route attiva
        } else {
          next() // Continua con la navigazione normale
        }
      },
      children: [
        {
          path: 'whoami',
          component: () => import('@/views/whoami/WhoamiInfo.vue'),
          name: 'WhoamiInfo',
          meta: { title: 'Whoami' },
          beforeEnter: (to, from, next) => {
            const fromTitle = from.meta.title
            const toTitle = to.meta.title
            const linkStore = useLinkStore()
            linkStore.setLinkStatus(false, fromTitle as string)
            linkStore.setLinkStatus(true, toTitle as string)
            next()
          },
        },
        {
          path: 'itts',
          component: () => import('@/views/whoami/WhoamiITTS.vue'),
          name: 'WhoamiITTS',
          meta: { title: 'Itts' },
          beforeEnter: (to, from, next) => {
            const fromTitle = from.meta.title
            const toTitle = to.meta.title
            const linkStore = useLinkStore()
            linkStore.setLinkStatus(false, fromTitle as string)
            linkStore.setLinkStatus(true, toTitle as string)
            next()
          },
        },
        {
          path: 'its',
          component: () => import('@/views/whoami/WhoamiITS.vue'),
          name: 'WhoamiITS',
          meta: { title: 'Its' },
          beforeEnter: (to, from, next) => {
            const fromTitle = from.meta.title
            const toTitle = to.meta.title
            const linkStore = useLinkStore()
            linkStore.setLinkStatus(false, fromTitle as string)
            linkStore.setLinkStatus(true, toTitle as string)
            next()
          },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
      meta: { title: 'Page not found' },
    },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes: import.meta.hot ? [] : routes,
  })

  let removeRoutes: (() => void)[] = []

  if (import.meta.hot) {
    for (const route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
  }

  if (import.meta.hot) {
    import.meta.hot?.accept('./router/routes.ts', (updatedModule) => {
      const newRoutes = (updatedModule && updatedModule.routes) as RouteRecordRaw[] | undefined

      if (newRoutes) {
        for (const removeRoute of removeRoutes) removeRoute()
        removeRoutes = []

        for (const route of newRoutes) {
          removeRoutes.push(router.addRoute(route))
        }
        router.replace('')
      }
    })
  }

  router.beforeEach((to, from, next) => {
    const title = to.meta.title
    document.title = title ? `Frontend | ${title}` : 'Frontend'
    next()
  })

  return router
}
