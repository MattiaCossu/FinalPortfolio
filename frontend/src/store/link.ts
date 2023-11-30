// store.ts
import { defineStore } from 'pinia'
import type { Link } from '@/types/Link'

export const useLinkStore = defineStore({
  id: 'menu',
  state: () => ({
    menuItems: [] as Link[], // Array per i menuItems
  }),
  actions: {
    setMenuItems(items: Link[]) {
      this.menuItems = items
    },
    addMenuItem(item: Link) {
      const exists = this.menuItems.some((el) => el.title === item.title)
      if (!exists) {
        // this.setLinkStatus(true, item.title)
        this.menuItems.push(item)
      }
    },
    removeMenuItem(item: Link) {
      const index = this.menuItems.findIndex((el) => el.title === item.title)
      if (index !== -1) {
        this.menuItems.splice(index, 1)
      }
    },
    setLinkStatus(value: boolean, title: string) {
      this.menuItems.forEach((el) => {
        if (el.title == title) {
          el.isActive = value
        }
      })
    },
  },
})
