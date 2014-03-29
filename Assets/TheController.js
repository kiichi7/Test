#pragma strict
private var leftValue : float = 0.0;
private var rightValue : float = 0.0;
private var upValue : float = 0.0;
private var downValue : float = 0.0;
private var valueChangeSpeed : float = 5.0;

function Start () {

}

function Update () {

	if (Input.GetKey(KeyCode.A)) constantForce.force.z += valueChangeSpeed * Time.deltaTime;
	else if (Input.GetKey(KeyCode.D)) constantForce.force.z -= valueChangeSpeed * Time.deltaTime;
	else ZBackToZero ();
	
	
}

function ZBackToZero () {

	if (constantForce.force.z > 0) {
		constantForce.force.z -= valueChangeSpeed * Time.deltaTime;
		if (constantForce.force.z < 0) constantForce.force.z = 0;
	}
	else if (constantForce.force.z < 0) {
		constantForce.force.z += valueChangeSpeed * Time.deltaTime;
		if (constantForce.force.z > 0) constantForce.force.z = 0;
	}

}