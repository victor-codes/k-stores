import axios from "axios";

// function fetchOperation(params) {
function main() {
  axios.get(`https://k-store.free.beeceptor.com/`).then((res) => res.data);
}

function clothes() {
  axios
    .get(`https://k-store.free.beeceptor.com/clothes`)
    .then((res) => res.data);
}

function menClothes() {
  axios
    .get(`https://k-store.free.beeceptor.com/clothes/men`)
    .then((res) => res.data);
}

function womenClothes() {
  axios
    .get(`https://k-store.free.beeceptor.com/clothes/women`)
    .then((res) => res.data);
}

function shoes() {
  axios.get(`https://k-store.free.beeceptor.com/shoes`).then((res) => res.data);
}

function menShoes() {
  axios
    .get(`https://k-store.free.beeceptor.com/shoes/men`)
    .then((res) => res.data);
}

function womenShoes() {
  axios
    .get(`https://k-store.free.beeceptor.com/shoes/women`)
    .then((res) => res.data);
}
// }

export { main, clothes, menClothes, womenClothes, shoes, menShoes, womenShoes };
