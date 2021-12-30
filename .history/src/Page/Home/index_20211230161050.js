import  firebase 

var liveCount = firebase.database().ref('Live Visit');
liveCount.on('value', function(snapshot) {
    document.getElementById('liveVisitCount').innerHTML = snapshot.val();
});


if (localStorage.getItem("hasVisited") == null) {
    localStorage.setItem("hasVisited", "Bruhh");
    firebase.database().ref('Live Visit').once('value').then(function(snapshot) {
        var currentCount = snapshot.val();
        firebase.database().ref('Live Visit').set(currentCount + 1);
    });
}