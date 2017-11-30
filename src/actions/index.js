// TODO: add and export your own actions
export const SET_VIDEOS = 'SET_VIDEOS';
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY'
export const SELECTED_VIDEO = 'SELECTED_VIDEO'

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

export function fetchVideos(videos) {
  return {
    type: 'FETCH_VIDEO',
    payload: videos
  };
}
