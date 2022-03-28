function volume() {
  var alt = parseFloat(document.getElementById('alt').value)
  var larg = parseFloat(document.getElementById('larg').value)
	var profund = parseFloat(document.getElementById('profund').value)

	var volume = alt * larg * profund

	document.getElementById('result').style.visibility = 'visible'
	document.getElementById('mostrarVolume').innerHTML = volume.toFixed(1)
}
