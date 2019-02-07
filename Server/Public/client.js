$(document).ready(onReady);


function onReady(){
    $.ajax({
        method: 'GET',
        url: '/wolves'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let wolves = response[i];
            $('#wolvesTableBody').append(`
                <tr>
                    <td>${wolves.commonName}</td>
                    <td>${wolves.scientificName}</td>
                    
                </tr>
            `);
        }
    });

    $('#button').on('click', function (){
       let commonName = $('#commonName').val();
       let scientificName = $('#scientificName').val();
       console.log(commonName, scientificName);
    })
       
    


}