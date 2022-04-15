<template>
    <div class="login-container">
        <div class="login">
            <h1 class="login-title">Login</h1>
            <form class="login-form">
                <input type="email" placeholder="Email here" />
                <input type="password" placeholder="password here" />
                <button>Login</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.login {
    max-width: 450px;
    margin: 0 auto;
    .login-title {
        @include heading-text-md;
        margin-bottom: 1.5rem;
        text-align: center;
    }
    .login-form {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        input {
            @include form;
            @include body-text-md;
        }
        button {
            @include button;
            @include button-full;
            @include button-md;
            @include body-text-md;
            color: black;
        }
    }
}
</style>