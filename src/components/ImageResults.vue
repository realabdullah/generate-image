<script setup>
import { useQueryResponse } from "../composables/queryResponse";

defineProps({
    status: String,
    queryResult: Array,
    resultError: String,
})

const { isOpen, singleImg, openModal } = useQueryResponse();
</script>

<template>
    <div v-if="status === 'loaded'" class="photos-container">
        <ul>
            <li @click="openModal(image)" v-for="image in queryResult" :key="image.id" class="card">
                <div class="image">
                    <div class="img">
                        <img :src="image.srcSmall">
                        <div class="overlay"></div>
                    </div>
                </div>
            </li>
            <div v-if="isOpen" class="photo-modal">
                <span @click="openModal" class="close">&times;</span>
                <div class="modal">
                    <img :src="singleImg.srcSmall">
                </div>
            </div>
        </ul>
    </div>
</template>

<style scoped>
.photos-container {
    position: absolute;
    top: 160px;
    left: 0;
    right: 0;
    margin-inline: 145px;
}

.photos-container ul {
    columns: 1;
    column-gap: 35px;
}

.photos-container .card {
    display: inline-block;
    vertical-align: top;
    margin-bottom: 20px;
    animation: card 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.photos-container .card .image {
    position: relative;
    cursor: pointer;
    transition: 0.3s;
}

.photos-container .card .image:hover {
    opacity: .8;
}

.img {
    position: relative;
}

.overlay {
    position: absolute;
    background-color: rgb(0 0 0 / 23%);
    top: 0;
    left: 0;
    bottom: 7px;
    right: 0;
    border-radius: 7px;
}

.photos-container .card img {
    width: 100%;
    border-radius: 7px;
}

@keyframes card {
    0% {
        transform: scale(0);
        transform-origin: 50% 100%;
        opacity: 1;
    }

    100% {
        transform: scale(1);
        transform-origin: 50% 100%;
        opacity: 1;
    }
}

.photo-modal {
    position: fixed;
    z-index: 1;
    padding-block: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #000000a6;
}

.modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.photo-modal .modal img {
    border-radius: 7px 7px 0 0;
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}

.photo-modal .modal img {
    animation-name: zoom;
    animation-duration: 0.6s;
}

.close {
    position: absolute;
    top: 20px;
    right: 25px;
    color: var(--darkgray);
    font-size: 2rem;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    cursor: pointer;
}

@keyframes zoom {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}

@media (max-width: 1023px) and (min-width: 768px) {
    .photos-container ul {
        columns: 2;
    }
}

@media (min-width: 1024px) {
    .photos-container ul {
        columns: 3;
    }
}

@media (max-width: 527px) {
    .photos-container {
        margin-inline: 25px;
    }

    .photo-modal .modal img {
        width: 100%;
        padding-inline: 20px;
        border-radius: 7px 7px 0 0;
        ;
    }

    .close {
        top: 5px;
        right: 15px;
    }
}
</style>