function UserAction() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = xhttp.responseText;
            let my_data = JSON.parse(response)
          /*  console.log(my_data)
            console.log(my_data['data'][11]['teamInfo'][0] ['name'] )
            console.log(my_data['data'][11]['teamInfo'][1] ['name'] )
            console.log(my_data['data'][11]['score'][0]['r'] )
            console.log(my_data['data'][11]['score'][0]['w'] )
            console.log(my_data['data'][11]['score'][0]['o'] )*/

            let firstTeamName = my_data['data'][11]['teamInfo'][0] ['name'];
            //let firstTeamScore = my_data['data'][11]['score'][1]['r'];

            let secondTeamName = my_data['data'][11]['teamInfo'][1] ['name'];
            let secondTeamScore = my_data['data'][11]['score'][0]['r'];
            let secondTeamWicket = my_data['data'][11]['score'][0]['w'];
            let secondTeamOver = my_data['data'][11]['score'][0]['o'];
            let TeamSecondScoreAndWicket = secondTeamScore+"/"+secondTeamWicket;

            if (my_data['data'][11]['score'].length == 2){
                        let FirstTeamScore = my_data['data'][11]['score'][1]['r'];
                        let FirstTeamWicket = my_data['data'][11]['score'][1]['w'];
                        let FirstTeamOver = my_data['data'][11]['score'][1]['o'];
                        let TeamFirstScoreAndWicket = FirstTeamScore+"/"+FirstTeamWicket;


            }

            document.getElementById('firstTeamName').innerHTML = firstTeamName;
            document.getElementById('secondTeamName').innerHTML = secondTeamName;
            document.getElementById('secondTeamOver').innerHTML = secondTeamOver;
            document.getElementById('TeamSecondScoreAndWicket').innerHTML = TeamSecondScoreAndWicket;

            if (my_data['data'][11]['score'].length == 2){
            document.getElementById('FirstTeamOver').innerHTML = FirstTeamOver;
            document.getElementById('TeamFirstScoreAndWicket').innerHTML = TeamFirstScoreAndWicket;
            }
        }
    };
    xhttp.open("GET", "https://api.cricapi.com/v1/matches?apikey=23268182-37b8-4eda-95b9-e3df9657fcc9&offset=0", true);


    xhttp.send();

}

UserAction();

