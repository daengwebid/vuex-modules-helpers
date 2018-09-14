<template>
    <div>
        <div class="form-group">
            <label for="">Donatur</label>
            <select @change="$emit('selectedDonatur', $event.target.value)" class="form-control">
                <option value="">Pilih Donatur</option>
                <option v-for="donatur in listDonatur" :key="donatur.name" :value="donatur.name">
                    {{ donatur.name }}
                </option>
            </select>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            listDonatur() {
                return this.$store.state.donatur.listDonatur
            }
        }
    }
</script>
