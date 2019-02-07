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

    $('#button').on('click', handleAddClick);
}

function handleAddClick(){
    // let commonName = $('#commonName').val();
    // let scientificName = $('#scientificName').val();
    // console.log(commonName, scientificName);

    $.ajax({
        method: 'POST',
        url: '/new',
        data: {
            commonName: $('#commonName').val(),
            scientificName: $('#scientificName').val()
        }
    }).then(function(){
        $.ajax({
            method: 'GET',
            url: '/wolves'
        }).then(function (response) {
            $('#wolvesTableBody').empty();
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

    })

    $('#commonName').val('');
    $('#scientificName').val('');

};