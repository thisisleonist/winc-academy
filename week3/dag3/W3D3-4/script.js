const handleData = async url => {
    return data = await getData(url);
};
  
getData(API_URL).then(data => console.log(data.genres[0]));