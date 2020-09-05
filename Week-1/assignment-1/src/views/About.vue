<template>
    <div>
        <app-nav></app-nav>
        <div class="about-container">
            <div class="words container">
                <h1>The creative team behind <span id="name">King's Castle Cuisine</span></h1>

                <h2>Who We Are</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore voluptatum, deleniti sequi, doloribus dolorum nemo quod aperiam, culpa.</p>
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore voluptatum, deleniti sequi, doloribus dolorum nemo quod aperiam, culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur labore voluptatum, deleniti sequi, doloribus dolorum nemo quod aperiam, culpa.</p>
            </div>
            <div class="all-images">
                <div class="img-row">
                    <div>
                        <img src="../assets/img/team/img-4.png" />
                        <h3>Sonya</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div>
                        <img src="../assets/img/team/img-1.jpg" />
                        <h3>Sonya</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div>
                        <img src="../assets/img/team/img-2.jpg" />
                        <h3>Sonya</h3>
                        <p>CEO & Founder</p>
                    </div>
                </div>
                <div class="img-row-2">
                    <div>
                        <img src="../assets/img/team/img-3.jpeg" />
                        <h3>Sonya</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div>
                        <img src="../assets/img/team/img-1.jpg" />
                        <h3>Sonya</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div>
                        <img src="../assets/img/team/img-2.jpg" />
                        <h3>Sonya</h3>
                        <p>CEO & Founder</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
    components: {
        appNav: Nav,
    },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
* {
    background-color: #21282e;
}

.about-container {
    padding-bottom: 5rem;
    display: flex;
}

#name {
    color: #f44006;
    font-family: "BlackCastleMF";
    font-size: 3.8rem;
}

.words {
    width: 25%;
    padding-top: 2rem;
    color: #fff;
    h1 {
        font-size: 3.2rem;
        font-family: Lato;
    }
    h2 {
        font-family: Lato;
        padding-top: 2rem;
    }

    p {
        font-family: Lato;
        width: 75%;
        padding-top: 1rem;
    }
}

.all-images {
    overflow: hidden;
    padding-top: 2rem;
    padding-right: 9rem;
    .img-row, 
    .img-row-2 {
        display: flex;
        img {
            max-width: 300px;
        }
        div {
            text-align: center;
            color: #fff;
            font-family: Lato;
            h3 {
                font-size: 1.5rem;
                padding-top: .5rem;
            }
            p {
                font-weight: 100;
                font-size: .9rem;
            }
        }
    }
    .img-row-2 {
        padding-top: 4rem;
    }
}
</style>