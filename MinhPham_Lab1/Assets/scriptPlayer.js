var tagName : String;
var rayDistance : float = 100;
var score : int = 0;
var gameTime : float = 20.0;
var loadWaitTime : float = 3.0;
var numberOfPointsToWin : int = 5;

function Start() {
    InvokeRepeating("CountDown", 1.0, 1.0);
}

function Update () {
    if (Input.GetMouseButtonDown(0)) {
        var hit : RaycastHit;
        var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);

        if (Physics.Raycast(ray, hit, rayDistance)) {
            if (hit.transform.tag == tagName) {
                print("You hit a " + tagName);
                var enemyScript = hit.transform.GetComponent(scriptEnemy);
                enemyScript.numberOfClicks -= 1;

                if (enemyScript.numberOfClicks == 0) {
                    score += enemyScript.enemyPoint;
                }
            }

            else {
                print("This is not an enemy.");
            }
        }
    }
}

function CountDown() {
    if (--gameTime <= 0) {
        CancelInvoke("CountDown");
        // yield WaitForSeconds(loadWaitTime);
        if (score >= numberOfPointsToWin) {
            Application.LoadLevel("sceneScreenWin");
        }
        else {
            Application.LoadLevel("sceneScreenLose");
        }
    }
}

function OnGUI() {
    GUI.Label(Rect(10,10,100,20), "Score: " + score);
    GUI.Label(Rect(10,25,100,35), "Time: " + gameTime);
}