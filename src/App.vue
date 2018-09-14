<template>
	<div id="app">
		<div class="container" style="padding-top: 20px">
			<div class="row">
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h3 class="card-title">Form Donasi</h3>
						</div>
						<div class="card-body">
							<list-donatur @selectedDonatur="selectedDonatur" />
							<lokasi-bencana @selectedBantuan="selectedBantuan" />
							<div class="form-group">
								<label for="">Jumlah Donasi (Rp)</label>
								<input type="number" v-model="jumlah" class="form-control">
							</div>
							<div class="form-group">
								<button class="btn btn-primary btn-sm"
									@click="submitDonasi"
									:disabled="isLoading">
									{{ isLoading ? 'Loading...':'Donasi!' }}
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h3 class="card-title">Donasi Terkumpul</h3>
						</div>
						<div class="card-body">
							<list-transaksi />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Donatur from './components/Donatur.vue'
	import Clients from './components/Clients.vue'
	import Transaksi from './components/Transaksi.vue'

	export default {
		data() {
			return {
				donatur: '',
				clients: '',
				jumlah: 0
			}
		},
		computed: {
			isLoading() {
				return this.$store.state.isLoading
			}
		},
		methods: {
			selectedDonatur(val) {
				this.donatur = val
			},
			selectedBantuan(val) {
				this.clients = val
			},
			submitDonasi() {
				this.$store.dispatch('transaksi/save_donasi', {
					id: Math.random().toString(36).substring(7),
					donatur: this.donatur,
					bantuan: this.clients,
					jumlah: this.jumlah
				})
			}
		},
		components: {
			'list-donatur': Donatur,
			'lokasi-bencana': Clients,
			'list-transaksi': Transaksi
		}
	}
</script>