<template>
    <div class="story-img">
        <div class="story-one-img">
            <img class="story-img2" src="../assets/img/story-img2.jpg" alt />
        </div>
        <div class="story-two-img">
            <img class="story-img1" src="../assets/img/story-img1.jpg" alt />
            <img class="story-img3" src="../assets/img/story-img3.jpg" alt />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.story-img {
    margin-top: 3rem;
    display: flex;
    padding: 0 3rem;
}

.story-two-img {
    display: flex;
    flex-direction: column;
    margin: 0 1.1rem;
    justify-content: space-evenly;
}
.story-img2,
.story-img3,
.story-img1 {
    width: 250px;
}

</style>