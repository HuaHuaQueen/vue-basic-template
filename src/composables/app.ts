export function useApp() {
  const app = inject('APP_INFO', {} as typeof APP_INFO)

  function getAuthor() {
    return app.author
  }

  function getVersion() {
    return app.version
  }

  function getAppName() {
    return app.name
  }

  function getDesc() {
    return app.desc
  }

  return {
    getAuthor,
    getVersion,
    getAppName,
    getDesc
  }
}
