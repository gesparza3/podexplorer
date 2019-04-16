export const addPodcast = (title, description) => {
  return {
    type: 'ADD_PODCAST',
    title,
    description
  }
}

export const deletePodcast = id => {
  return {
    type: 'DELETE_PODCAST',
    id
  }
}
