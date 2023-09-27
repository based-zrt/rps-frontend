<script>
	import * as THREE from 'three'
	import WAVES from 'vanta/dist/vanta.waves.min'

	function vanta(node) {
		const anim = WAVES({
			el: node,
			THREE: THREE,
			mouseControls: true,
			touchControls: false,
			gyroControls: true,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color: 0x161616,
			zoom: 1.0,
			waveSpeed: 0.5
		})
		return {
			destroy() {
				anim.destroy()
			}
		}
	}
</script>

<div use:vanta class="w-screen h-screen">
	<slot />
</div>
