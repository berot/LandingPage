const scroll = {
	init() {
		[].forEach.call(document.querySelectorAll('[data-behavior~=scroll-trigger]'), function(el) {
		el.addEventListener('click',function(){
			event.preventDefault()
			Velocity(document.getElementById(el.dataset["scrollTarget"]), "scroll", {duration:900,easing:"ease-in-out"});
		})	// body...
		})
	}
};
export default scroll;
