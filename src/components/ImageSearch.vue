<script setup>
import ImageResults from './ImageResults.vue';
import { useGetImages } from "../composables/getImages";

const { status, searchQuery, fetchResults, queryResult, resultError, resetAll } = useGetImages();
</script>

<template>
  <div class="search">
    <div v-if="status === 'not-loaded'" class="search-bar">
      <input v-model="searchQuery" @keyup.enter="fetchResults" type="search" name="search"
        placeholder="Generate a photo">
    </div>
    <div v-if="status === 'loading'" class="searchQ">
      <h1 v-if="searchQuery !== ''">Generating images matching <span> &#8220;{{ searchQuery }}&#8221;.</span></h1>
      <h1 v-if="searchQuery === ''">Senerating images matching an empty string <span> &#8220;😒&#8221;.</span></h1>
    </div>
    <div v-if="status === 'loaded'" class="searchQ">
      <h1>Generated images matching <span>"{{ searchQuery }}".</span></h1>
      <svg @click="resetAll" class="fas fa-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
    </div>

    <div v-if="status === 'error'" class="searchQ">
      <h1>Oops! <span>"{{ resultError }}".</span> <template v-if="searchQuery === ''">What were you expecting? 🤔</template></h1>
      <svg @click="resetAll" class="fas fa-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
    </div>
  </div>

  <ImageResults :status="status" :query-result="queryResult" />
</template>

<style scoped>
  .search {
    background: var(--lightgray);
    width: 100%;
    padding-block: 4.5rem;
    padding-inline: 5rem;
  }
  .search-bar {
    width: 100%;
    position: relative;
  }
  .search-bar input {
    width: inherit;
    font-size: 1rem;
    border-style: none;
    padding-block: 1rem;
    padding-inline: 4rem;
    outline: none;
    border-radius: 5px;
    background-color: var(--white);
    color: var(--darkgray);
    box-shadow: 5px 10px 36px -6px rgba(0,0,0,0.1);
    animation: fadeIn linear 1s;
  }
  .search-bar input::placeholder {
    color: var(--darkgray);
  }
  .search-bar .fas {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 15px;
    top: 17px;
    color: var(--darkgray);
  }
  .searchQ {
    animation: fadeIn linear 2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .searchQ .fas {
    color: var(--slategray);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .searchQ .fas:hover {
    color: var(--darkgray);
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  h1 {
    font-size: 1.875rem;
    font-weight: 600;
    color: var(--slategray);
  }
  span {
    color: var(--darkgray);
  }
  @media (max-width: 527px) {
    .search {
      padding-inline: 2rem;
    }
    h1 {
      font-size: 1.675rem;
    }
    .searchQ .fas {
      width: 15px;
      height: 15px;
      color: var(--slategray);
    }
  }
</style>