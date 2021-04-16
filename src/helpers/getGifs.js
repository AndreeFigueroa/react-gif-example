
export const getGifs = async( categorie ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categorie) }&limit=10&api_key=aOCEWGaJs0xpiKrDJn6nThZVtIM0ceNk`;
    const res = await fetch( url );
    const {data} = await res.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return(gifs)
} 