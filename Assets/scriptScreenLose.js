function OnGUI() {
    GUI.Label(Rect(10, 10, 200, 200), "Thou art DEFEATED! DOOM!");
    if (GUI.Button(Rect(10, 60, 100, 50), "Restart Game")) {
        Application.LoadLevel("sceneLevel1");
    }
    if (GUI.Button(Rect(10, 130, 100, 50), "Exit Game")) {
        Application.Quit();
    }
}