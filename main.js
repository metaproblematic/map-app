var mainVm = new Vue ({
	el: "#app",
	data: {
		message: "vue is working",
		markers: [],
	},

	methods: {
		markIt: function(event) {
			console.log(event)
			this.markers.push({
				offsetx: event.offsetX +'px',
				offsety: event.offsetY +'px',

			})
		},
		remove: function(i) {
			this.markers.splice(i, 1)
		}

	}
})

