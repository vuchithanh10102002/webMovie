const apiConfig = {
    baseURL: "https://api.themoviedb.org/3",
    key: "abe684651c0f85fb2222ec901f2f7c25",
    w500Image: (imgPath: String) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig