<script>
import { computed } from '@vue/runtime-core';
import NavBarVue from "./NavBarVue.vue";
export default {
    data() {
        return {};
    },
    computed: {
        getDate() {
            return new Date().getFullYear();
        }
    },
    components: { NavBarVue }
}
</script>
<template>
    <div  class="sm:h-60 md:h-40 lg:h-32 sm:flex-1 sm:flex-col">    
        <div class="text-white bg-blue-800 h-4/6">
            <NavBarVue class="flex-col"></NavBarVue>
        </div>
        <div class="text-center bg-blue-900 text-white h-2/6 flex justify-center content-center">
            <address>
                Jan Zlesák & Jiří Stefanidis | UHK FIM | Aplikace při účasti na Hackaton KHK v roce {{getDate}}
            </address>        
        </div>
    </div>
</template>