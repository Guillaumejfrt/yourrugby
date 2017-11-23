// TODO: add and export your own actions
export const SET_VIDEOS = 'SET_VIDEOS';
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY'
export const SELECTED_VIDEO = 'SELECTED_VIDEO'

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBP1JC3TAzIayhHxqCFqMXORFlwT5JKsOY'

export function selectVideo(video) {
  return {
    type: SELECTED_VIDEO,
    payload: video
  }
}

export function selectCategory(category) {
  return {
    type: SELECTED_CATEGORY,
    payload: category
  }
}

export function fetchVideos(category) {
  debugger
  const youtubeSearch = (category) => {
    return (
      YTSearch({ key: API_KEY, term: category }, (videos) => {
        return videos;
      })
    )
  }

  const videos = youtubeSearch(category);

  return {
    type: SET_VIDEOS,
    payload: videos
  }
}
