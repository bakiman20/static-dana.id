import { createSelector } from 'reselect'

const imagesPerPage = 16
const getImages = state => state.list
const getCurrentPageIndex = state => state.currentPageIndex

export const getPartialImages = createSelector(
  [getImages, getCurrentPageIndex],
  (images, pageIndex) => {
    const startIndex = (pageIndex - 1) * imagesPerPage
    const endIndex = pageIndex * imagesPerPage
    return images.slice(startIndex, endIndex)
  }
)
