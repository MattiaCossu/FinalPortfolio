import type { App, Component } from 'vue'

export async function registerGlobalComponents(app: App): Promise<void> {
  const components = import.meta.glob('../components/Base/Base*.vue')

  for (const path in components) {
    const componentModule = await components[path]()
    const component = (componentModule as { default: Component }).default
    const componentName = path
      .replace(/^.*\/(\w+)\.\w+$/, '$1')
      .replace(/\.\w+$/, '')
      .split('/')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')

    app.component(componentName, component)
  }
}
