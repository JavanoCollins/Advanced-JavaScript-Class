<template>
    <div id="home">
        <div class="bg-img">
            <app-nav></app-nav>
            <div class="container header">
                <h3 id="welcome">Welcome To</h3>
                <h1>King's Castle</h1>
                <p id="cuisine">Cuisine</p>
                <!-- <img id="full-logo" src="../assets/img/full-logo.png" alt=""> -->
                <router-link tag="button" to="/register" title="Reservations">Book A Table</router-link>
            </div>
        </div>
        <div class="story">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa repellendus dignissimos corrupti ullam obcaecati, ad rerum nemo perferendis, aspernatur atque! Modi minus rem corporis consectetur quam nam, adipisci laudantium.</p>
            <h2>Our Founder</h2>
            <div class="our-founders container">
                <app-story-img></app-story-img>
                <div>
                    <h2 id="food-story">Food Story</h2>
                    <p id="food-story-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate ill   um atque reprehenderit aperiam est repudiandae laborum laboriosam dolores sit saepe fuga possimus, necessitatibus maiores illo impedit modi doloremque odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem voluptatibus officia magni dolore voluptate saepe vero incidunt obcaecati mollitia natus, sed neque debitis modi a omnis tenetur labore iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate tempora suscipit unde necessitatibus tempore exercitationem rerum minus nesciunt. Excepturi vel dolores maiores deserunt. Et, provident? Ab velit tempore blanditiis esse.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "../components/Nav"
import StoryImg from "../components/StoryImg";
export default {
    components: {
        appNav: Nav,
        appStoryImg: StoryImg
        
    }
};
</script>

<style scoped lang="scss">


.bg-img {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url("../assets/img/home-bg.jpg");
    min-height: 380px;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /* Needed to position the navbar */
    position: relative;
}

h1 {
    text-align: center;
    display: block;
    margin: auto;
    font-family: "BlackCastleMF";
    font-size: 9rem;
    color: #fff;
}

#full-logo {
    width: 400px;
    margin: 0 auto;
    display: block;
}

#cuisine {
    font-size: 2rem;
    font-family: Lato;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.5rem;
}

.header {
    text-align: center;
    margin: auto;
}

button {
    margin: 1.5rem;
    padding: 1rem;
    border: 0.1rem #fff solid;
    background: none;
    color: #fff;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.2s;
}

button:hover {
    background-color: #f44006;
    border: none;
    transition: all 0.2s;
}

#welcome {
    margin-top: 3rem;
    color: #f44006;
    font-family: "Dancing Script", cursive;
    font-size: 4rem;
}

/* STORY */
.story {
    background-color: #21282e;
    padding-bottom: 3rem;
    font-size: 2rem;
    margin: auto;

    .our-founders {
        display: flex;
        margin: auto;
    }

    p {
        font-size: 1.1rem;
        font-family: Lato;
        padding-top: 4rem;
        width: 50%;
        text-align: center;
        color: #fff;
        margin: auto;
        line-height: 1.5;
    }

    h2 {
        color: #f44006;
        font-family: "Dancing Script", cursive;
        font-size: 3rem;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 2rem;
    }

    #food-story {
        color: #fff;
        font-family: "Lato";
        margin-top: 3rem;
        margin-bottom: 0;
    }

    #food-story-p {
        width: 100%;
        text-align: left;
        padding-top: 2rem;
        margin: auto;
    }
}
</style>