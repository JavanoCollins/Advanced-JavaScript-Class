<template>
    <div class="footer">
        <div class="container">
            <div class="footer-all">
                <div id="footer-p1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dicta corporis excepturi in amet necessitatibus, deleniti, sunt libero sapiente suscipit nemo maxime ipsa ullam reiciendis, repellat blanditiis repudiandae enim perspiciatis?</p>
                </div>
                <div id="footer-p2">
                    <h3>Site Links</h3>
                    <router-link to="/meals" tag="li">
                        <a>Meals</a>
                    </router-link>
                    <router-link to="/contact" tag="li">
                        <a>Contact</a>
                    </router-link>
                    <router-link to="/about" tag="li">
                        <a>About</a>
                    </router-link>
                    <router-link to="/register" tag="li">
                        <a>Reservation</a>
                    </router-link>
                    <button>Subscribe</button>
                </div>
                <div class="social-media">
                    <h3>Social Media</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div id="footer-rights">
                <p>All Rights Reserved, 2020</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
* {
    font-family: Lato;
}
.footer {
    background-color: #333;
    padding: 2rem 0;
}

.container {
    margin: auto;
}

#footer-rights {
    text-align: center;
    color: #fff;
    background-color: rgb(95, 95, 95);
    margin: auto;
    border-radius: 5px;
    padding: 0.5rem;
}

.footer-all {
    display: flex;
    padding: 0 0 2rem;
    color: #fff;
    margin: auto;

    div {
        width: 25%;
        margin: 0 1rem;
    }

    #footer-p2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        a {
            color: #fff;
        }

        li {
            padding: .3rem 0;
        }
        button {
            background-color: #f44006;
            padding: 0.7rem;
            margin-top: 1rem;
            border: none;
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>