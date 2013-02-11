var shapeColor : Color[];
var numberOfClicks : int = 2;
var respawnWaitTime : float = 2.0;
var explosion : Transform;
var enemyPoint : int = 1;

private var storeClicks : int = 0;

function Start () {
    storeClicks = numberOfClicks;
    var startPosition = Vector3(Random.Range(-6, 6), Random.Range(-4, 4), 0);
    transform.position = startPosition;
    RandomColor();
}

function Update () {
    if (numberOfClicks <= 0) {
        if (explosion) {
            Instantiate(explosion, transform.position, transform.rotation);
        }

        if (audio.clip) {
            audio.Play();
        }

        var position = Vector3(Random.Range(-6, 6), Random.Range(-4, 4), 0);
        RespawnWaitTime();
        transform.position = position;
        numberOfClicks = storeClicks;
    }
}

function RespawnWaitTime () {
    renderer.enabled = false;
    RandomColor();
    yield WaitForSeconds(respawnWaitTime);
    renderer.enabled = true;
}

function RandomColor() {
    if (shapeColor.length > 0) {
        var newColor = Random.Range(0, shapeColor.length);
        renderer.material.color = shapeColor[newColor];
    }
}
