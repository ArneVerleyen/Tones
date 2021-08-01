<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tones Backend</title>
    <?php wp_head() ?>
    <style>
        body {background-color: #6F0B5B}
        .tones-landing {
            display: flex;
            align-items: center;
            justify-content: center;

        }
        .tones-landing img {            
            width: 70vw;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="tones-landing">
        <img src="<?php echo get_template_directory_uri().'/images/tones.png'; ?>" alt="Tones">
    </div>
    <?php wp_footer() ?>
</body>
</html>