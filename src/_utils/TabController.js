export default tabs => {
  const activeTab = tabs[0]

  return {
    tabs: () => tabs,
    activeTab: () => activeTab,
    setActiveTab: index => activeTab[index],
    isActiveTab: index => activeTab === tabs[index]
  }
}
