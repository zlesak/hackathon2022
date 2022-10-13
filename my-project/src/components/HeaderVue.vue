<script>
import { AcademicCapIcon } from '@heroicons/vue/24/solid';
import NavBarVue from "./NavBarVue.vue";

export default {
    components:{
        AcademicCapIcon,
        NavBarVue
    }
}
</script>
<template>
    <div class="text-white flex flex-col md:flex-row content-center md:h-24 text-center md:text-left justify-between" id="headerTop"> 
        <div id="nameTop">
            <h1 class="inline font-bold font-mono text-4xl">[oupn]</h1> <AcademicCapIcon id="logoTop" class="h-16 w-16 inline"/> <h1 class="inline font-bold font-mono text-4xl">Školy</h1>  
        </div>
            <NavBarVue class="flex flex-row"></NavBarVue>
        
    </div>  
</template>