const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
    ? `https://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg"
};

export default getImagePath;