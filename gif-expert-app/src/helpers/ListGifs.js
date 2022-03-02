
// Metodo que realiza la consulta de imagenes al API
export const listGifs = async (category) => {
    const url = "https://api.giphy.com/v1/gifs/search?";
    const api_key = "4nNjms63QLIOtODtA7c45kpUSMSweXXu";

    const request = url.concat("q=").concat(encodeURI(category))
        .concat("&limit=5&api_key=").concat(api_key);

    const response = await fetch(request);
    const { data } = await response.json();

    console.log("API: " + category);

    const images = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images.original.url
        }
    })

    return images;
}