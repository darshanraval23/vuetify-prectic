<template>
<v-app>
    <!-- vartical navigation bar -->
    <v-card>
        <v-layout>
            <v-navigation-drawer app v-model="drawer">
                <!-- item -->
                <v-list-item>
                    <v-list-item-avatar class="pa-0">
                        <v-img src="@/assets/logo.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-title>Vuetify 2.6</v-list-item-title>
                </v-list-item>
                <!-- delimiter -->
                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item v-for="item in items" :key="item.title" link>
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

    <!-- header -->
    <v-app-bar app>
        <v-btn icon @click="drawer= !drawer">
            <v-icon>mdi-menu</v-icon>
        </v-btn>
    </v-app-bar>
    <!-- end header -->

    <!-- main content -->
    <v-main app>
        <v-container>
            <v-row no-gutters>
                <v-col cols="12" sm="6">
                    <v-hover v-slot="{ hover }">
                        <v-card :elevation="hover ? 10 :6" color="#F6F7F9" class="ma-2 pa-6">
                            <v-form>
                                <div class="text-h5 text-center">
                                    Form
                                </div>
                                <v-text-field v-model="formdata.name" :counter="10" clearable placeholder="Enter Your Name" label="Name" :rules="rules.name" required>
                                    <v-icon slot="prepend">mdi-account</v-icon>
                                </v-text-field>
                                <v-text-field label="Email" :rules="rules.email" required>
                                    <v-icon slot="prepend">mdi-email</v-icon>
                                </v-text-field>
                                {{selectdproject}}
                                <v-select v-model="selectdproject" :items="formdata.products" item-text="project" return-object single-line item-value="projectcode" label="Select Project" required>

                                </v-select>

                                <p>Select Your Hobby</p>
                                <v-checkbox label="Reading" value="reading" v-model="formdata.hobby"></v-checkbox>
                                <v-checkbox label="Writing" value="Writing" v-model="formdata.hobby"></v-checkbox>

                                <v-file-input label="Select Image" prepend-icon="mdi-cloud-upload" show-size accept="image/*,png,jpg,jpeg" multiple></v-file-input>

                                <v-radio-group label="Choose Your Gender" column>
                                    <v-radio label="Male" value="male"></v-radio>
                                    <v-radio label="Female" value="female"></v-radio>
                                </v-radio-group>
                                <v-textarea label="address" auto-grow outlined raw-height="15" counter="50" prepend-icon="mdi-map-marker">
                                </v-textarea>

                                {{isConform}}
                                <v-switch v-model="isConform" label="Switch On/Off"></v-switch>

                                <!-- <div class="row" label="Allow permiossion">
                                <p>Allow permiossion</p>
                               <v-switch v-model="ispermisstion" label="Edit" value="edit"></v-switch>
                               <v-switch v-model="ispermisstion" label="Add" value="add"></v-switch>
                               <v-switch v-model="ispermisstion" label="Delate" value="delate"></v-switch>
                               <v-switch v-model="ispermisstion" label="view" value="view"></v-switch>
                                </div> -->
                                <!-- @input="$v.name.$touch()" @blur="$v.name.$touch()"" -->
                                <v-btn @click="save" color="success">
                                    Submit
                                </v-btn>
                            </v-form>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-hover v-slot="{hover}">
                        <v-card :elevation="hover ? 10 :6" color="#F6F7F9" class="ma-2 pa-6">
                            <p class="text-h5 text-center">Autocomplete</p>
                            <v-autocomplete label="Select Your state" v-model="isSelectstate" :items="states" persistent-hint prepend-icon="mdi-city"></v-autocomplete>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    <!-- end main content -->

    <!-- footer -->
    <v-footer app>
    </v-footer>
    <!--end footer -->
</v-app>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            drawer: true,
            items: [{
                    title: 'Home',
                    icon: 'mdi-view-dashboard'
                },
                {
                    title: 'Forms',
                    icon: 'mdi-forum'
                },
            ],
            product: [
                'item1', 'item2'
            ],
            states: [
                'surat', 'ahmedabad', 'rajkot'
            ],
            isSelectstate: '',
            isConform: '',
            ispermisstion: [],
            rules: {
                name: [
                    value => !!value || 'name is required.',
                    value => value.length <= 20 || 'Max 20 characters'
                ],
                email: [
                    value => !!value || 'email is required.',
                    value => (value || '').length <= 20 || 'Max 20 characters',
                    value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail.'
                    },
                ],
                
            },
            formdata: {
                name: '',
                gender: '',
                products: [{
                        project: 'abc',
                        projectcode: '1'
                    },
                    {
                        project: 'xyz',
                        projectcode: '2'
                    },
                    {
                        project: 'ABC',
                        projectcode: '3'
                    },
                ],
                selectdproject: '',
                hobby: ''

            }
        }
    },
    methods: {
        save() {
            console.log(this.formdata)
        },
        emailError() {

        }

    }
}
</script>
