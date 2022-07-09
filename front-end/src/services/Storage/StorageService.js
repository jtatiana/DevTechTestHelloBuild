const setData = (key, value) => {
  if (typeof value === 'object') value = JSON.stringify(value)
  localStorage.setItem(key, value)
}
const getDataByKey = (key) => {
  let data = localStorage.getItem(key)
  data = scapeData(data)
  return data
}
const removeDataByKey = (key) => {
  localStorage.removeItem(key)
}
const clearAll = () => localStorage.clear()
const toggleFav = (id) => {
  const favs = getDataByKey('favs')
  if (favs === null || favs.length === 0) {
    setData('favs', [id])
    return
  }
  const favIndex = favs.findIndex(fav => fav === id)
  if (favIndex === -1) favs.push(id)
  else favs.splice(favIndex, 1)
  setData('favs', favs)
}
const scapeData = (str) => {
  try {
    return JSON.parse(str)
  } catch (e) {
    return str
  }
}
export default {
  setData,
  getDataByKey,
  removeDataByKey,
  clearAll,
  toggleFav
}
