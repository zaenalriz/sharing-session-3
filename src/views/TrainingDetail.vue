<template>
    <div>
        <Layout>
            <div class="container my-3">
                <div class="row">
                    <MDBCard>
                        <MDBCardBody>
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="img-fluid rounded"
                                alt="..." />
                            <div class="my-2">
                                <h3 class="text-black">{{ data.title }}</h3>
                            </div>
                            <div class="mt-4">
                                <h4 class="text-black">Jadwal pelatihan</h4>
                                <div v-for="(item, i) in data.traning_sections">
                                    <p class="mb-0 fw-bold mb-1">{{ item.title }}</p>
                                    <p class="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="#febc27" class="bi bi-calendar" viewBox="0 0 16 16">
                                            <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                                            </path>
                                        </svg> {{ item.training_date }}

                                    </p>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#febc27"
                                            class="bi bi-clock" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                            </path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                            </path>
                                        </svg>
                                        {{ item.start_time }} - {{ item.finish_time }}
                                    </p>
                                </div>
                                <h4 class="text-black">Deskripsi</h4>
                                <p>{{ data.description }}</p>
                                <h4 class="text-black">Benefit</h4>
                                <p>{{ data.description_benefit }}</p>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard class="my-3">
                        <MDBTabs v-model="activeTab">
                            <!-- Tabs navs -->
                            <MDBTabNav fill tabsClasses="mb-3">
                                <div class="row w-100">
                                    <div class="col-lg-3">
                                        <MDBTabItem tabId="ex1-1" class="text-center" href="ex1-1">PreTest</MDBTabItem>
                                    </div>
                                    <div class="col-lg-3">
                                        <MDBTabItem tabId="ex1-2" class="text-center" href="ex1-2">Materi</MDBTabItem>
                                    </div>
                                    <div class="col-lg-3">
                                        <MDBTabItem tabId="ex1-3" class="text-center" href="ex1-3">Formative Test
                                        </MDBTabItem>
                                    </div>
                                    <div class="col-lg-3">
                                        <MDBTabItem tabId="ex1-4onta" class="text-center" href="ex1-4">Post Test
                                        </MDBTabItem>
                                    </div>
                                </div>
                            </MDBTabNav>
                            <!-- Tabs navs -->
                            <!-- Tabs content -->
                            <MDBTabContent>
                                <MDBTabPane tabId="ex1-1"></MDBTabPane>
                                <MDBTabPane tabId="ex1-2"></MDBTabPane>
                                <MDBTabPane tabId="ex1-3"></MDBTabPane>
                                <MDBTabPane tabId="ex1-4"></MDBTabPane>
                            </MDBTabContent>
                            <!-- Tabs content -->
                        </MDBTabs>
                    </MDBCard>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script>
import { get } from '@/Api/index.js';
import Layout from '@/views/Layout.vue';
import {
    MDBCard, MDBCardBody, MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
} from "mdb-vue-ui-kit";
export default {
    components: {
        Layout,
        MDBCard, MDBCardBody, MDBTabs,
        MDBTabNav,
        MDBTabContent,
        MDBTabItem,
        MDBTabPane,
    },
    data() {
        return {
            data: [],
            activeTab: 'ex1-1'
        }
    },
    async created() {
        const id = this.$route.params.id;
        console.log(id);
        const response = await get(`/beranda_detail/${id}?institution_id=1`);
        console.log(response);
        this.data = response;

    }
}
</script>