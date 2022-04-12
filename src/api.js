import axios from "axios";

const baseURL = "https://dj-questionbox.herokuapp.com/api"

export const getTheQuestions =
    axios
    .get(baseURL + `/questions`)
    .then((response) => response.data)