export function Loader () {
  let isLoading = false

  return {
    loaded: (onLoaded = undefined) => {
      isLoading = false
      if (onLoaded !== undefined) { onLoaded() }
    },
    // eslint-disable-next-line no-return-assign
    loading: () => isLoading = true,
    isLoading: () => isLoading
  }
}

export function Loaders () {
  const loaders = {}
  const createLoader = id => {
    loaders[id] = Loader()
    return loaders[id]
  }
  const getLoader = id => loaders[id] ? loaders[id] : createLoader(id)

  return {
    getLoader: getLoader,
    loaded: (id, onLoaded) => getLoader(id).loaded(onLoaded),
    loading: id => getLoader(id).loading(),
    isLoading: id => getLoader(id).isLoading()
  }
}
