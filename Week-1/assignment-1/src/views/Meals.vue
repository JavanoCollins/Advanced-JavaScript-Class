<template>
    <div class="mealsVue">
        <app-nav></app-nav>
        <div class="container">
            <h1 id="pageTitle">View Our Dishes</h1>
            <div class="meal-flex">
                <app-meal-card 
                imageUrl='img-1.jpg'
                name="Lorem Ipsum"
                price="$16"
                ></app-meal-card>
                <app-meal-card 
                imageUrl='img-2.jpg'
                name="Lorem Ipsum"
                price="$16"></app-meal-card>
                <app-meal-card 
                imageUrl='img-3.jpg'
                name="Lorem Ipsum"
                price="$16"></app-meal-card>
                <app-meal-card 
                imageUrl='img-1.jpg'
                name="Lorem Ipsum"
                price="$16"
                ></app-meal-card>
            </div>
             <div class="meal-flex">
                <app-meal-card 
                imageUrl='img-4.jpg'
                name="Lorem Ipsum"
                price="$16"></app-meal-card>
                <app-meal-card 
                imageUrl='img-5.jpg'
                name="Lorem Ipsum"
                price="$16"></app-meal-card>
                <app-meal-card 
                imageUrl='img-6.jpg'
                name="Lorem Ipsum"
                price="$16"></app-meal-card>
                <app-meal-card 
                imageUrl='img-1.jpg'
                name="Lorem Ipsum"
                price="$16"
                ></app-meal-card>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "../components/Nav";
import MealCard from "../components/MealCard";
export default {
    components: {
        appNav: Nav,
        appMealCard: MealCard,
    },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
.mealsVue {
    background-color: #21282e;
    padding-bottom: 8rem;
}

#pageTitle {
    color: #f44006;
    font-family: "Dancing Script";
    text-align: center;
    font-size: 3rem;
    padding-bottom: 3rem;
}

.meal-flex {
    display: flex;
}

.container {
    margin: auto;
}

</style>