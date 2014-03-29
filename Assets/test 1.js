#pragma strict
var theAngle = 0.0;
var rotateSpeed = 0.0;
var g = 9.8;
var l = 1.0;
var E = 0.0;
var m = 1.0;
var state : int;

function Start () {

	theAngle = 30 * Mathf.PI / 180;
	E = m * g * l * (1 - Mathf.Abs(Mathf.Cos(theAngle)));
	Debug.Log(E);

}

function Update () {


	transform.rotation.eulerAngles.z = theAngle * 180 / Mathf.PI;
	
	theAngle += Time.deltaTime * rotateSpeed;
	
	if ((theAngle > 0)&&(rotateSpeed > 0)) state = 1;
	else if ((theAngle > 0)&&(rotateSpeed < 0)) state = 2;
	else if ((theAngle < 0)&&(rotateSpeed < 0)) state = 3;
	else if ((theAngle < 0)&&(rotateSpeed > 0)) state = 4;

	rotateSpeed = Mathf.Sqrt(Mathf.Abs(2*E/l/l - 2*g*(1 - Mathf.Abs(Mathf.Cos(theAngle)))/l));
	
	if (theAngle > 30 * Mathf.PI / 180) state = 2;
	else if (theAngle < -30 * Mathf.PI / 180) state = 4;
	
	if (((state == 1)||(state == 4))&&(rotateSpeed<0)) rotateSpeed = -rotateSpeed;
	else if (((state == 2)||(state == 3))&&(rotateSpeed>0)) rotateSpeed = -rotateSpeed;
	

	
	Debug.Log(rotateSpeed);
	
}