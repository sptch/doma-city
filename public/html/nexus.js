
var renderer = new THREE.WebGLRenderer( { antialias: false } );

function onNexusLoad() {
	var s   = 1/nexus_obj.geometry.boundingSphere.radius;
	var target = new THREE.Vector3();
	var p = nexus_obj.geometry.boundingBox.getCenter(target).negate();

	nexus_obj.position.set(p.x*s, p.y*s, p.z*s);
	nexus_obj.scale.set(s, s, s); 
	redraw = true;
}

function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var model = getURLParameter('model') || "models/base-model.nxz";

let material = false;
/* Material customizations examples: */
//let material =  new THREE.PointsMaterial( {  size:3, color: 0x00ff00, transparent: false, opacity:0.25 } );
//let material = new THREE.MeshLambertMaterial( { color: 0xffffff }); //, vertexColors1: THREE.VertexColors } );
//let material = new THREE.MeshNormalMaterial({});

var nexus_obj = new NexusObject(model, onNexusLoad, function() { redraw = true; }, renderer, material);
scene.add(nexus_obj);

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

//	controls.handleResize();
	controls.update();
	redraw = true;
}

var redraw = true;
function animate() {
	requestAnimationFrame(animate);

	controls.update();

	if(redraw) {
		renderer.render( scene, camera );
		redraw = false;
	}
}

animate();