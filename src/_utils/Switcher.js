export default () => {
  const [items, setItems] = React.useState({})
  const isOn = id => !!items[id]
  const switchTo = (id, isOn) => items[id] = isOn

  return {
    isOn: isOn,
    toggle: id => switchTo(id, !isOn(id)),
    switchOn: id => switchTo(id, true),
    switchOff: id => switchTo(id, false),
    items,
    setItems
  }
}
