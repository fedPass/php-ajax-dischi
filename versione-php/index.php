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
            <?php include 'disks.php';
                $genres = [];
                foreach ($disks as $album) {
                    $genre_album = $album['genre'];
                    if(!in_array($genre_album, $genres)) {
                        $genres[] = $genre_album;
                    }
                }
             ?>

            <select id="genre_choose">
                <option value="">Scegli genere</option>
                <?php foreach ($genres as $genre) { ?>
                    <option value="<?php echo $genre ?>"><?php echo $genre ?></option>
                <?php } ?>
            </select>

            <div class="container cd_display">
                <?php foreach ($disks as $album) { ?>
                    <div class="cd" data-genere="<?php echo $album['genre']?>">
                        <img src="<?php echo $album['poster'] ?>" alt="copertina album <?php echo $album['title'] ?>">
                        <h2><?php echo $album['title'] ?></h2>
                        <span><?php echo $album['author'] ?></span>
                        <span><?php echo $album['year'] ?></span>
                    </div>
                <?php } ?>
            </div>

        </main>

        <script src="main.js" charset="utf-8"></script>
    </body>
</html>
