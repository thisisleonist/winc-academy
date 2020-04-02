// https://www.themoviedb.org/settings/api
// Changed JSLint to ES8

const API_KEY = '79c1f23d5822955801447c6490744b56';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const log = log => console.log(log);

const getData = async apiUrl => {
    try {
        const completeUrl = `${apiUrl}?api_key=${API_KEY}`;
        const res = await fetch(completeUrl,{
            method: 'GET'
        });
        const data = await res.json();
        return data;
    } catch(error) {
        log(error);
    }
};

const getMovieData = async apiUrl => {
    try {
        const completeUrl = `${apiUrl}&api_key=${API_KEY}`;
        const res = await fetch(completeUrl,{
            method: 'GET'
        });
        const data = await res.json();
        return data;
    } catch(error) {
        log(error);
    }
};
