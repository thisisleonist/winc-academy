const handleData = async url => {
    return await getData(url);
};
  
getData(API_URL)
    .then(data => console.log(data.genres[0]));