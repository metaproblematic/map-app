promises.js

var firstPromise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve "A"
	}, 500)
})

.then(function(resolvedValue) {
	console.log(resolvedValue)
	return new Promise(function(resolve, reject) {

	})
})

.catch(function(rejectedValue))





var findFirstFollowers = function(followers_url) {
	var ajaxPromise = new Promise(function(resolve) {

	})





$.get("http://api.github.etc", function(data){

})