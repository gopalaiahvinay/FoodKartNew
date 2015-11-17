Template.home.rendered = function(){

	console.log('Template Rendered');
	var scriptsArray = ['<script src="assets/js/jquery.min.js" type="text/javascript"></script>','<script src="assets/bootstrap/js/bootstrap.min.js"></script>','<script src="assets/js/jquery.placeholder.min.js"></script>','<script src="assets/js/jquery.easing.1.3.js"></script>','<script src="assets/js/device.min.js"></script>','<script src="assets/js/jquery.browser.min.js"></script>','<script src="assets/js/snap.min.js"></script>','<script src="assets/js/jquery.appear.js"></script>','<script src="assets/js/masonry.min.js"></script>','<script src="assets/plugins/owl/owl.carousel.min.js"></script>','<script src="assets/plugins/owl/init.js"></script>',
'<script src="assets/js/portfolio/imagesloaded.js"></script>','<script src="assets/js/image-box/init.js"></script>','<script src="assets/js/retina.js"></script>','<script src="assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>','<script src="assets/js/select2/select2.js"></script>','<script src="assets/js/main.js"></script>'];

	var bodyE = document.getElementsByTagName('body');
	console.log('bodyE is:', bodyE);
	_.each(scriptsArray, function(script){
		console.log('Appending:',script);
		$('body').append(script);
		console.log('Body after appending:',bodyE);
	});
};