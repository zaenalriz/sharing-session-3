<template>
    <MDBNavbar container expand="lg" bg="light" class=" d-flex justify-content-between">

        <MDBNavbarBrand>
            <MDBIcon icon="mdb" iconStyle="fab" size="2x" />
        </MDBNavbarBrand>
        <MDBNavbarToggler target="#navbarColor01" @click="collapse7 = !collapse7"></MDBNavbarToggler>
        <MDBCollapse id="navbarColor01" class="" v-model="collapse7">
            <MDBNavbarNav class="mb-2 mb-lg-0 d-flex justify-content-center w-100">
                <MDBNavbarItem class="mx-2" linkClass="link-secondary" :to="{ name: 'home' }">Home
                </MDBNavbarItem>
                <MDBNavbarItem class="mx-2">
                    <MDBDropdown class="nav-item" v-model="dropdown8">
                        <MDBDropdownToggle tag="a" class="nav-link " @click="dropdown8 = !dropdown8">Aktifitas
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem :to="{ name: 'myclass' }"> Myclass </MDBDropdownItem>
                            <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
                            <MDBDropdownItem href="#">Something else here</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavbarItem>
            </MDBNavbarNav>

        </MDBCollapse>

        <MDBNavbarNav class="mb-2 mb-lg-0 d-flex flex-row">
            <MDBNavbarItem to="#" class="me-3 me-lg-0" linkClass="link-secondary">
                <MDBIcon icon="shopping-cart"></MDBIcon>
            </MDBNavbarItem>
            <MDBNavbarItem to="#" class="me-3 me-lg-0" linkClass="link-secondary">
                <MDBIcon icon="bell" />
                <MDBBadge notification color="danger" pill>1</MDBBadge>
            </MDBNavbarItem>
            <MDBNavbarItem href="#" class="me-3 me-lg-0">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" height="22" alt=""
                    loading="lazy" />
            </MDBNavbarItem>
        </MDBNavbarNav>
    </MDBNavbar>
</template>

<script>
import {
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBBadge,
    MDBIcon,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdb-vue-ui-kit';
import { ref } from "vue";

export default {
    components: {
        MDBNavbar,
        MDBNavbarItem,
        MDBNavbarBrand,
        MDBNavbarNav,
        MDBNavbarToggler,
        MDBBadge,
        MDBIcon,
        MDBCollapse,
        MDBDropdown,
        MDBDropdownToggle,
        MDBDropdownMenu,
        MDBDropdownItem
    },
    setup() {
        const collapse7 = ref(false);
        const profile = ref(true);
        const dropdown8 = ref(false);
        return {
            collapse7,
            profile,
            dropdown8
        }
    }
};
</script>