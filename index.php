<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Validaciones con JS</title>
        <script type="text/javascript" src="js/validar.js"></script>
        <link rel="stylesheet" type="text/css" href="css/estilo.css">
        <!-- LIBRERIA SWEET -->
        <script src="librerias/sweetalert/package/dist/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="librerias/sweetalert/package/dist/sweetalert2.min.css">
        <!-- Optional: include a polyfill for ES6 Promises for IE11 -->
        <script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    </head>
    <body>
        <h1> Validaciones con Javascript </h1>
        <form action="controlador.php" method="POST" onsubmit="return validar();" >   
            <section class="form-register">
                <input type="" id="documento" class="controls" name="documento" placeholder="número de documento" />
                <br><br>
                <input type="" id="nombre" class="controls" name="nombre" placeholder="ingrese su nombre" />
                <br><br>
                <input type="" id="correo" class="controls" name="correo" placeholder="ingrese su correo" />
                <br><br>
                <input type="" id="usuario" class="controls" name="usuario" placeholder="ingrese usuario" />
                <br><br>
                <input type="password" id="contraseña" class="controls" name="" placeholder="ingrese su contraseña" />
                <br><br>
                <input type="submit" value="Enviar Datos"  />
            </section>    
        </form>

        <!-- LIBRERIA SWEET -->
        <script src="librerias/sweetalert/package/dist/sweetalert2.min.js"></script>
        <link rel="stylesheet" type="text/css" href="librerias/sweetalert/package/dist/sweetalert2.min.css">
        <!-- Optional: include a polyfill for ES6 Promises for IE11 -->
        <script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    </body>
</html>
