// OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
var p = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    cantidadDecimal: false,
    resultado: false
}

// OBJETO CON LOS METODOS DE LA CALCULADORA
var m = {

    inicio: function () {

        for (var i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla)
        }
    },

    oprimirTecla: function (tecla) {

        p.accion = tecla.target.getAttribute("class")
        p.digito = tecla.target.innerHTML
        m.calculadora(p.accion, p.digito)
    },

    teclado: function () {
        document.addEventListener("keydown", m.oprimir)
    },

    oprimir: function (tecla_teclado) {

        console.log(tecla_teclado.keyCode)

        if (tecla_teclado.keyCode == 48 || tecla_teclado.keyCode == 96) {
            m.teclado_calculadora("numero", 0)
        }

        else if (tecla_teclado.keyCode == 49 || tecla_teclado.keyCode == 97) {

            m.teclado_calculadora("numero", 1)
        }

        else if (tecla_teclado.keyCode == 50 || tecla_teclado.keyCode == 98) {
            m.teclado_calculadora("numero", 2)
        }

        else if (tecla_teclado.keyCode == 51 || tecla_teclado.keyCode == 99) {
            m.teclado_calculadora("numero", 3)
        }

        else if (tecla_teclado.keyCode == 52 || tecla_teclado.keyCode == 100) {
            m.teclado_calculadora("numero", 4)
        }

        else if (tecla_teclado.keyCode == 53 || tecla_teclado.keyCode == 101) {
            m.teclado_calculadora("numero", 5)
        }

        else if (tecla_teclado.keyCode == 54 || tecla_teclado.keyCode == 102) {
            m.teclado_calculadora("numero", 6)
        }

        else if (tecla_teclado.keyCode == 55 || tecla_teclado.keyCode == 103) {
            m.teclado_calculadora("numero", 7)
        }

        else if (tecla_teclado.keyCode == 56 || tecla_teclado.keyCode == 104) {
            m.teclado_calculadora("numero", 8)
        }

        else if (tecla_teclado.keyCode == 57 || tecla_teclado.keyCode == 105) {
            m.teclado_calculadora("numero", 9)
        }

        else if (tecla_teclado.keyCode == 187 || tecla_teclado.keyCode == 107) {
            m.teclado_calculadora("signo", "+")
        }

        else if (tecla_teclado.keyCode == 189 || tecla_teclado.keyCode == 109) {
            m.teclado_calculadora("signo", "-")
        }

        else if (tecla_teclado.keyCode == 88 || tecla_teclado.keyCode == 106) {
            m.teclado_calculadora("signo", "*")
        }

        else if (tecla_teclado.keyCode == 111) {
            m.teclado_calculadora("signo", "/")
        }

        else if (tecla_teclado.keyCode == 13) {
            m.teclado_calculadora("igual")
        }

        else if (tecla_teclado.keyCode == 46) {
            m.borrarCalculadora()
        }

        else {

            if (tecla_teclado.keyCode == 190 || tecla_teclado.keyCode == 110)
                m.teclado_calculadora("decimal", ".")
        }
    },

    teclado_calculadora: function (accion, digito) {

        p.accion = accion
        p.digito = digito
        m.calculadora(p.accion, p.digito)

    },

    calculadora: function (accion, digito) {

        switch (accion) {

            case "numero":

                p.cantidadSignos = 0

                if (p.operaciones.innerHTML == "0") {
                    p.operaciones.innerHTML = digito
                }
                else if (p.operaciones.innerHTML == "0.") {
                    p.operaciones.innerHTML += digito
                }
                else {

                    if (p.resultado) {

                        p.resultado = false
                        p.operaciones.innerHTML = digito
                    }
                    else {
                        p.operaciones.innerHTML += digito
                    }
                }
                break

            case "signo":

                p.cantidadSignos++

                if (p.cantidadSignos == 1) {

                    if (p.operaciones.innerHTML == 0) {
                        p.operaciones = 0
                    }
                    else {
                        p.operaciones.innerHTML += digito
                        p.cantidadDecimal = false
                        p.resultado = false
                    }

                }

                break

            case "decimal":

                if (!p.cantidadDecimal) {
                    p.operaciones.innerHTML += digito
                    p.cantidadDecimal = true
                    p.resultado = false
                }
                break

            case "igual":

                p.operaciones.innerHTML = eval(p.operaciones.innerHTML)
                p.resultado = true
                break

        }

    },
    borrarCalculadora: function () {

        p.operaciones.innerHTML = 0
    }
}

m.inicio()
m.teclado()



