<template>
    <div class="meal-box">
        <div class="meal-box-div">
            <img :src="require(`../assets/img/meals/${imageUrl}`)" alt />
            <div class="description">
                <div class="name-price">
                    <p>{{ name }}</p>
                    <p>{{ price }}</p>
                </div>
                <p
                    id="paragraph"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button id="add-cart" @click="increment">Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        name: String,
        price: String,
    },
    methods: {
        increment() {
            this.$store.state.cartItems++;
        },
    },
};
</script>

<style scoped lang="scss">
.meal-box {
    margin-bottom: 2rem;
    width: 100%;
    .meal-box-div {
        background-color: #fff;
        margin: 1rem;
        border-radius: 25px 25px 0 0;
    }
}

img {
    width: 300px;
    height: 250px;
    border-radius: 25px;
}

.description {
    padding: 1rem;
    #paragraph {
        line-height: 1.3;
    }
}

.name-price {
    display: flex;
    justify-content: space-between;
    p {
        font-size: 1.5rem;
        font-family: Lato;
        font-weight: bold;
    }
}

#add-cart {
    width: 100%;
    color: #fff;
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0;
    background-color: #f44006;
    cursor: pointer;
}
</style>