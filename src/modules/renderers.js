class Renderers {
  renderSortArrow (sortKey, sortDesc, sortId) {
    return sortKey === sortId ? (sortDesc ? '↓' : '↑') : ''
  }

  renderDp (num) {
    return num ? parseFloat(num).toFixed(2) : 0.0
  }

  renderPercent (num) {
    const percent = (num * 100).toFixed(0)
    return percent > 0 ? percent + '%' : percent + '%'
  }
}

export default new Renderers()
