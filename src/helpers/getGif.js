export const getGifs= async(category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=s1m2CcH9qXKItVHBKg64NIu2Smy3W3ok&q=${encodeURI(category)}&limit=15&rating=R`;
    const resp =await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img =>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    });

    return gifs;
    
};