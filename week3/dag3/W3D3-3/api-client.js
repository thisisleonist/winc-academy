// https://www.themoviedb.org/settings/api
// Changed JSLint to ES8

const API_KEY = '79c1f23d5822955801447c6490744b56';
const API_URL = 'https://api.themoviedb.org/3/genre/movie/list';

const log = log => console.log(log);

async function getData(apiUrl){
    try{
        const url = `${apiUrl}?api_key=${API_KEY}`;
        const res = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        //log(data);
        return data;
    } catch(error) {
        log(error);
    }
}
