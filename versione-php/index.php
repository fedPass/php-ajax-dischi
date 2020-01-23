<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vetrina dischi</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
    <body>
        <header>
            <div class="container">
                <a href="#"><img id="logo" src="logo.png" alt="logo"></a>
            </div>
        </header>
        <main>
            <select id="genre_choose">
                <option value="">Scegli genere</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="metal">Metal</option>
                <option value="jazz">Jazz</option>
            </select>
            <div class="container cd_display">
                <?php include 'disks.php';
                    foreach ($disks as $song) { ?>
                        <div class="cd" data-genere="<?php echo $song['genre']?>">
                            <img src="<?php echo $song['poster'] ?>" alt="copertina album <?php echo $song['poster'] ?>">
                            <h2><?php echo $song['title'] ?></h2>
                            <span><?php echo $song['author'] ?></span>
                            <span><?php echo $song['year'] ?></span>
                        </div>
                <?php } ?>
            </div>
        </main>
        <!-- <script id="cd-template" type="text/x-handlebars-template">
            <div class="cd" data-genere="{{genere}}">
                <img src="{{cover}}" alt="copertina album {{album}}">
                <h2>{{album}}</h2>
                <span>{{singer}}</span>
                <span>{{exit}}</span>
            </div>
        </script> -->
        <script src="main.js" charset="utf-8"></script>
    </body>
</html>
