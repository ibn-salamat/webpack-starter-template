declare module '@'
declare module 'pages' {
  export * from '@/pages'
}
declare module 'components' {
  export * from '@/components'
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}
declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.sass' {
  const styles: { [className: string]: string }
  export default styles
}

declare module '*.css' {
  const styles: { [className: string]: string }
  export default styles
}
