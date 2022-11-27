import { ref } from 'vue';

export function useGetImages() {
    const status = ref('not-loaded');
    const searchQuery = ref('');
    const queryResult = ref([]);
    const resultError = ref(null);

    const fetchResults = async () => {
        try {
            status.value = 'loading';
            const requestUrl = `https://lexica.art/api/v1/search?q=${searchQuery.value}`;
            const response = await fetch(requestUrl);
            const { images } = await response.json();
            queryResult.value = images;
            status.value = 'loaded';
        } catch (err) {
            resultError.value = err.message;
            status.value = 'error';
        }
    };

    const resetAll = () => {
        status.value = 'not-loaded';
        searchQuery.value = '';
        queryResult.value = [];
        resultError.value = null;
    }

    return {
        status,
        searchQuery,
        fetchResults,
        queryResult,
        resultError,
        resetAll,
    }
}