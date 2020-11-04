export default tabs => {
  const activeTab = tabs[0]

  return {
    activeTab: () => activeTab,
    setActiveTab: index => activeTab[index],
    isActiveTab: index => activeTab === tabs[index]
  }
}
