$(document).ready(function(){
    // //prendi il template
    var source = $("#cd-template").html();
    var template = Handlebars.compile(source);
    // Esegui una chiamata ajax
    // Utilizza handlebars per inserire le card in pagina
    $.ajax({
        'url':'disks.php',
        'method':'GET',
        'dataType':'json',
        'success':function(data){
            display_card(data);
            fill_genre_select(data);
        },
        'error':function(err){
            alert('errore:' + err.status);
        },
    });




    // BONUS: aggiungere una tendina con i generi che permette all'utente di filtrare i dischi (evento change)
    $('#genre_choose').change(function(){
      //recupero il genere selezionato
        var genre_selected = $(this).val();
        console.log(genre_selected);
        //faccio una chiamata ajax al "db" dei dischi passandoli in get anche il genere selezionato
        $.ajax({
            'url':'disks.php',
            'method':'get',
            'data': {
                'genre' : genre_selected
            },
            'dataType' : 'json',
            'success' : function(data){
                console.log(data);
                display_card(data);
            },
            'error':function(err){
                alert('errore:' + err.status);
            },
        });

    });

    function display_card(disks) {
        $('.container.cd_display').empty();
        for (var i = 0; i < disks.length; i++) {
            var disk = disks[i];
            var context =
                {
                    cover: disk.poster,
                    album: disk.title,
                    singer: disk.author,
                    genere: disk.genre,
                    exit: disk.year
                };
            var html = template(context);
            $('.container.cd_display').append(html);
        }
    }

    function fill_genre_select(disks) {
        var genres = [];
        for (var i = 0; i < disks.length; i++) {
            //recupero il genere del disco e se non è già presente dentro genres glielo pusho
            var disk = disks[i];
            var genre = disk.genre;
            if(!genres.includes(genre)) {
                genres.push(genre);
            }
        }
        for (var i = 0; i < genres.length; i++) {
            var genre = genres[i];
            $('#genre_choose').append('<option value="' + genre + '">' + genre + '</option>')
        }
    }

});
