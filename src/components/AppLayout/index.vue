<template>
        <HeaderComponent />
            <div class="wrapper">
            <transition name="fade">
                <router-view></router-view>
            </transition>
    </div>
</template>

<script>
import HeaderComponent from './../layouts/header/index.vue'

export default {
    name: 'AppLayout',
    components: { HeaderComponent },
}

</script>

<style>
    body{
        margin: 0 !important;
    }
</style>