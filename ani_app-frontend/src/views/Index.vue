<template>
    <div>
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                    caption="Потеряли питомца?"
                    text="Моежете найти его здесь."
                    img-src="/pets/cat1.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                    caption="Нашли проавшего зверя?"
                    text="Посмотрите здесь, может это он."
                    img-src="/pets/dog2.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                    caption="Зарегистрируйтесь"
                    text="Или войдите, если есть учётная запись"
                    img-src="/pets/cat3.jpg"
            >
                <b-button-toolbar class="d-flex justify-content-center">
                    <b-button class="mx-1" variant="primary" href="#">Войти</b-button>
                    <b-button class="mx-1" variant="primary" href="#">Зарегистрироваться</b-button>
                </b-button-toolbar>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<style scoped>
div {
    max-height: calc(100vh - 6vh);
}
</style>

<script setup>
import { ref } from 'vue';

const slide = ref(0);
const sliding = ref(false);

function onSlideStart() {
    sliding.value = true;
}

function onSlideEnd() {
    sliding.value = false;
}
</script>