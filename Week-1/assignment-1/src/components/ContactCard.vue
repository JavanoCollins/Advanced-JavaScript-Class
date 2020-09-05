<template>
    <div id="contact-card-vue">
        <h2>Feel free to shoot us a message</h2>
        <div class="contact-card">
            <img id="logo" src="../assets/img/logo.png" alt />
            <h1 id="name">King's Castle Cuisine</h1>
            <p id="number">1-888-888-8888</p>
            <p id="email">lorem@email.com</p>

            <div class="form">
                <div class="name-form form-item">
                    <p>Name:</p>
                    <input type="text" />
                </div>
                <div class="email-form form-item">
                    <p>Email:</p>
                    <input type="email" />
                </div>
                <div class="message form-item">
                    <p>Message:</p>
                    <textarea name id cols="30" rows="15"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
#contact-card-vue {
    display: flex;
    justify-content: space-between;
    color: #fff;
    #number,
    #email {
        text-align: center;
        font-family: Lato;
        font-size: 1.2rem;
        padding: 1rem 0 0 0;
    }
    h2 {
        font-family: Lato;
        text-align: left;
        font-size: 6.5rem;
        font-weight: 900;
        margin: 2rem 0;
        text-transform: uppercase;
        color: #fff;
        width: 50%;
        line-height: 1.1;
    }
}

.contact-card {
    width: 800px;
    height: auto;
    // background-color: #fff;
    margin: auto 0;
    border-radius: 10px;
    box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.75);
    padding: 2rem;

    #name {
        font-family: "BlackCastleMF";
        color: #f44006;
        font-size: 5rem;
        text-align: center;
    }

    #logo {
        width: 80px;
        padding-top: 0.5rem;
        margin: auto;
        display: block;
    }

    .form {
        p {
            font-size: 1.5rem;
            font-family: Lato;
        }

        input {
            width: 100%;
            padding: 0.8rem;
            margin: 0.5rem 0;
            border: 1.5px solid #f44006;
            font-size: 1rem;
        }

        textarea {
            width: 100%;
            border: 1.5px solid #f44006;
            padding: 0.5rem;
            font-size: 1.5rem;
        }

        .form-item {
            padding: 1rem;
        }
    }
}
</style>