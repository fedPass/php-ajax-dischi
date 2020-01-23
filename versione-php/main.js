$(document).ready(function(){
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
