import axios from "axios";

const BASE_URL ="https://api.themoviebd.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const  headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi  = async (url, params) => {
    try {

    }catch (err) {
        console.log(err);
        return

    }

}