<script>    
    import axios from 'axios';
 
    export default {
        data() {
            return {
                data: null
            };
        },
        mounted () {
            let api_skoly = "https://services6.arcgis.com/ogJAiK65nXL1mXAW/arcgis/rest/services/Seznam_%C5%A1kol_a_%C5%A1kolsk%C3%BDch_za%C5%99%C3%ADzen%C3%AD/FeatureServer/0/query?outFields=*&where=1%3D1&f=json";
            axios.get(api_skoly).then(response => {this.data = response.data.features; console.log(response.data.features)})
         
        computed: {
        }

    },
    }
</script>
<template>
    <table>
        <tr v-for="dat in data" :key="dat.attributes.OBJECTID">
            <td>{{dat.attributes.nazev}}</td>
            <td>{{dat.attributes.ico}}</td>
            <td>{{dat.attributes.zarizeni_druh}}</td>
            <td>{{dat.attributes.nazev_okresu}}</td>
            <td>{{dat.attributes.nazev_obce}}</td>
            <td>{{dat.attributes.nazev_ulice}}</td>
            <td>č.p. {{dat.attributes.cislo_domovni}}</td>
            <td>{{dat.attributes.psc}}</td>
            <td>{{dat.attributes.www}}</td>
            <td>{{dat.attributes.x}}</td>
            <td>{{dat.attributes.y}}</td>
        </tr>
    </table>



</template>