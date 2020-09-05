<template>
    <div id="contact-vue">
        <app-nav></app-nav>
        <div class="img">
            <div>
                <app-contact-card></app-contact-card>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "../components/Nav";
import ContactCard from "../components/ContactCard";
export default {
    components: {
        appNav: Nav,
        appContactCard: ContactCard,
    },
};
</script>

<style lang="scss" scoped>
#contact-vue {
    background-color: #21282e;
}

.img {
    padding: 2rem 6rem;
    // background: linear-gradient(150deg, #d4491b93, #b3320700),
        // url("../assets/img/contact/contact-img.jpg") no-repeat;

    background-size: cover;
}
</style>