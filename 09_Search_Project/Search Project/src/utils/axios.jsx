import axios from "axios";

const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTg3ZDdmM2EyMGJkNTFhYzk0YjU2ZmE1MWRiM2Q0OSIsIm5iZiI6MTcyMTIxOTE0NS45ODAxNywic3ViIjoiNjY5N2I2Y2ZlNDI5MWFmNThlMjJlM2ZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.FHEtloWYfG9f2nKlOh6WojHg3WLKPv616KFajrwrOsA'
      }
})
export default instance;