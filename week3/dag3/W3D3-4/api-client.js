// https://www.themoviedb.org/settings/api
// Changed JSLint to ES8

const API_KEY = '79c1f23d5822955801447c6490744b56';

const log = log => console.log(log);

const getData = async apiUrl => {
    try{
        const url = `${apiUrl}?api_key=${API_KEY}`;
        const res = await fetch(url,{method: 'GET'});
        const data = await res.json();
        //log(data);
        return data;
    } catch(error) {
        //log(error);
    }
};

const getMovieData = async apiUrl => {
    try{
        const res = await fetch(`${apiUrl}&api_key=${API_KEY}`,{method: 'GET'});
        const data = await res.json();
        //log(data);
        return data;
    } catch(error) {
        //log(error);
    }
};
