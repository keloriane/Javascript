<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css">
    <style>
        .main.container{
            padding-top: 50px;
        }
    </style>
</head>
<body>
    <div class="ui inverted fixed menu">
        <div class="header item">Tutoriel</div>
    </div>
    <div class="ui main container">
        <div class="ui cards">

            <div class="ui card">
                <div class="image">
                    <img src="http://semantic-ui.com/images/avatar2/large/kristy.png">
                </div>
                <div class="content">
                    <a class="header">Kristy</a>
                    <div class="meta">
                        <span class="date" id="futur" data-ago="<?= time() + 30 ?>">Joined in 2013</span>
                    </div>
                    <div class="description">
                        Kristy is an art director living in New York.
                    </div>
                </div>
            </div>
            <div class="ui card">
                <div class="image">
                    <img src="http://semantic-ui.com/images/avatar2/large/matthew.png">
                </div>
                <div class="content">
                    <a class="header">Matthew</a>
                    <div class="meta">
                        <span class="date" id="now" data-ago="<?= time() - 5 ?>">Joined in 2013</span>
                    </div>
                    <div class="description">
                        Kristy is an art director living in New York.
                    </div>
                </div>
            </div>
            <div class="ui card">
                <div class="image">
                    <img src="http://semantic-ui.com/images/avatar2/large/elyse.png">
                </div>
                <div class="content">
                    <a class="header">Elyse</a>
                    <div class="meta">
                        <span class="date" id="past" data-ago="<?= time() - 60 ?>">Joined in 2013</span><br>
                    </div>
                    <div class="description">
                        Kristy is an art director living in New York.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="ago.js"></script>

</body>
</html>