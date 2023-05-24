<script setup>

</script>

<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" style="height: 6vh">
        <b-navbar-brand href="#">
            <img class="logo" src="/logo.png" alt="Friendly Paws" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <!--            <b-navbar-nav>-->
            <!--                <b-nav-item href="#">Link</b-nav-item>-->
            <!--                <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
            <!--            </b-navbar-nav>-->

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!--                <b-nav-form>-->
                <!--                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
                <!--                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
                <!--                </b-nav-form>-->

                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<style scoped>
img.logo {
    height: 6vh;
    padding: 0.5vh;
    will-change: filter;
    transition: filter 300ms;
    filter: invert(1);
}
</style>
