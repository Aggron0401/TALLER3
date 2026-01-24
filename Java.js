<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Contador JS</title>
</head>
<body>

    <h1>Contador</h1>
    <p id="contador">0</p>

    <button onclick="incrementar()">Incrementar</button>
    <button onclick="decrementar()">Decrementar</button>

    <script>
        let valor = 0;

        function incrementar() {
            valor++;
            document.getElementById("contador").innerText = valor;
        }

        function decrementar() {
            valor--;
            document.getElementById("contador").innerText = valor;
        }
    </script>

</body>
</html>