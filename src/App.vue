<template>
    <v-app>
        <div class="fill-height">
            <core-view />
        </div>
    </v-app>
</template>

<script>
import CoreView from './components/core/View';

export default {
    name: 'App',
    components: {
        CoreView
    },
    data: () => ({
        //
    })
};
</script>
