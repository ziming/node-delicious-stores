import axios from "axios";
import {$} from "./bling";

function ajaxHeart(e) {
    e.preventDefault(); // prevent button submit, we going to ajax it
    // console.log('HEART ITTT!!!!!!!!!!!!!!!!');
    // console.log(this);
    axios
        .post(this.action) // this is the form tag
        .then(res => {
            const isHearted = this.heart.classList.toggle('heart__button--hearted');
            $('.heart-count').textContent = res.data.hearts.length;
            if (isHearted) {
                this.heart.classList.add('heart__button--float');
                setTimeout(() => this.heart.classList.remove('heart__button--float'), 2500);
            }
        })
        .catch(console.error);
}

export default ajaxHeart;