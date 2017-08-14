<?php
// $link = mysqli_connect('localhost', 'syifaqistory_db', 'syifaqistory_db', 'syifaqistory_db');
$link = mysqli_connect('localhost', 'root', '', 'syifaqistory_db');

$sql = "SELECT * FROM guest";
$result = mysqli_query($link, $sql);

?>

<html>
    <head>
        <title>
            Data Guest Syifa & Qi Story
        </title>
        <link href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css" rel="stylesheet" />
        <link href="https://cdn.datatables.net/buttons/1.3.1/css/buttons.dataTables.min.css" rel="stylesheet" />

    </head>
    <body>

        <table id="example" class="display nowrap" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Attend ?</th>
                <th>Name</th>
                <th>Wish</th>
            </tr>
        </thead>
        <tbody>
            <?php
                while($row = mysqli_fetch_assoc($result)) {
                    $attend = $row["attend"];
                    $name = $row["name"];
                    $notes = $row["notes"];
                    echo "<tr>";

                    echo "<td>";
                    echo $attend;
                    echo "</td>";

                    echo "<td>";
                    echo $name;
                    echo "</td>";
                    
                    echo "<td>";
                    echo $notes;
                    echo "</td>";

                    echo "</tr>";
                }
            ?>
        </tbody>
    </table>

        <script src="//code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js"></script>
        <script src="//cdn.datatables.net/buttons/1.3.1/js/buttons.flash.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/pdfmake.min.js"></script>
        <script src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/vfs_fonts.js"></script>
        <script src="//cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js"></script>
        <script src="//cdn.datatables.net/buttons/1.3.1/js/buttons.print.min.js"></script>

        <script defer src="script.js"></script>
    </body>
</html>


