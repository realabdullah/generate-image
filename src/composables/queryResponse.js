import { ref } from 'vue';

export function useQueryResponse() {
    const isOpen = ref(false);
    const singleImg = ref();

    const openModal = (imgObj) => {
        isOpen.value = !isOpen.value
        singleImg.value = imgObj
    }

    return {
        isOpen,
        singleImg,
        openModal,
    }
}