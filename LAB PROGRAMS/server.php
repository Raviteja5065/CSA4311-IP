<!DOCTYPE html>
<html>

<head>
    <title>Server Response</title>
</head>

<body>

    <h1>Server Response</h1>

    <?php

        $name = $_POST["username"];

        echo "Hello, " . $name . "!";

        echo "<br>";

        echo "Your request was successfully received by the server.";

    ?>

</body>

</html>