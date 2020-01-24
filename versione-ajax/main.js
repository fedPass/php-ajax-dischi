$(document).ready(function(){
    // Esegui una chiamata ajax
    // Utilizza handlebars per inserire le card in pagina
    $.ajax({
        'url':'disks.php',
        'method':'GET',
        'success':function(data){
            //recupera i dati (data è un json)
            // console.log(JSON.parse(data));
            var disks = JSON.parse(data);
            console.log(disks);
            // //prendi il template
            var source = $("#cd-template").html();
            var template = Handlebars.compile(source);
            // //per recuperare i singoli dati faccio un ciclo for sull'array
            //creo un array vuoto in cui mentre creo le card, controllo e pusho i nomi dei generi per poi creare la select
            var genres = [];
            for (var i = 0; i < disks.length; i++) {
                var disk = disks[i];
            //     //per ogni cd recupero le info
                var context =
                    {
                        cover: disk.poster,
                        album: disk.title,
                        singer: disk.author,
                        genere: disk.genre,
                        exit: disk.year
                    };
            //usa i dati recuperati per compilare template
                var html = template(context);
            //inseriscilo nel container
                $('.container.cd_display').append(html);
                //recupero il genere del disco e se non è già presente dentro genres glielo pusho
                var genre = disk.genre;
                if(!genres.includes(genre)) {
                    genres.push(genre);
                }
            }
            for (var i = 0; i < genres.length; i++) {
                var genre = genres[i];
                $('#genre_choose').append('<option value="' + genre + '">' + genre + '</option>')
            }
        },
        'error':function(err){
            alert('errore:' + err.status);
        },
    });

    // BONUS: aggiungere una tendina con i generi che permette all'utente di filtrare i dischi (evento change)
    $('#genre_choose').change(function(){
    //     //recupero il genere selezionato
        var genere_selected = $(this).val();
        console.log(genere_selected);
    //     //se non seleziono nulla mostrami tutto
        if(genere_selected == '') {
            $('.cd').fadeIn();
        } else {
            $('.cd').fadeOut();
    //         //per ogni cd devo controllare se il genere è uguale
            $('.cd').each(function(){
    //             //li cancello tutti
                $(this).fadeOut();
                var genere_album = $(this).attr('data-genere');
    //             //se è uguale a data-genere lo mostro
                if(genere_selected.toLowerCase() == genere_album.toLowerCase()) {
                    console.log('sono uguali');
                    $(this).fadeIn()
                }
            });
        }
    });

});
