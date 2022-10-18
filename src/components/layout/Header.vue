<template>
<v-card>
    <v-layout>
        <v-navigation-drawer app :value="istorggle">
            <!-- item -->
            <v-list-item>
                <v-list-item-icon>
                    <v-badge bordered bottom color="deep-purple accent-4" dot offset-x="10" offset-y="10">
                        <v-avatar class="pa-0">
                            <v-img src="@/assets/logo.png"></v-img>
                        </v-avatar>
                    </v-badge>
                </v-list-item-icon>
                <v-list-item-title>Vuetify 2.6</v-list-item-title>
            </v-list-item>
            <!-- delimiter -->
            <v-divider></v-divider>

            <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" :to="item.route" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
    </v-layout>
</v-card>
<!-- vartical navigation bar -->
</template>

<script>
export default {
    name: 'HeaderComponent',

    data() {
        return {
            drawer: true,
            items: [{
                    title: 'Home',
                    icon: 'mdi-view-dashboard',
                    route: '/'
                },
                {
                    title: 'Forms',
                    icon: 'mdi-forum',
                    route: '/forms'
                },
                {
                    title: 'Typographi',
                    icon: 'mdi-forum',
                    route: '/typographi'
                },
                {
                    title: 'Calendar',
                    icon: 'mdi-calendar',
                    route: '/calendar'
                },
                {
                    title: 'slider',
                    icon: 'mdi-check',
                    route: '/slider'
                },
                {
                    title: 'table',
                    icon: 'mdi-database',
                    route: '/table'
                },
                {
                    title: 'pickers',
                    icon: 'mdi-pin',
                    route: '/pickers'
                },
            ],
        }
    },
    props: {
        istorggle: {
            // type: ,
            default: true
        }
    },
}
</script>
