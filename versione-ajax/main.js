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
            for (var i = 0; i < disks.length; i++) {
            //     //per ogni cd recupero le info
                var context =
                    {
                        cover: disks[i].poster,
                        album: disks[i].title,
                        singer: disks[i].author,
                        genere: disks[i].genre,
                        exit: disks[i].year
                    };
            //     //usa i dati recuperati per compilare template
                var html = template(context);
            //     //inseriscilo nel container
                $('.container.cd_display').append(html);
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
