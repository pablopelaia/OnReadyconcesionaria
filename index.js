const FLOTA = [
    {Marca: 'Peugeot', Modelo: '206', tipo: 'Puertas: 4', Precio: 200000},
    {Marca: 'Honda', Modelo: 'Titan', tipo: 'Cilindrada: 125c', Precio: 60000},
    {Marca: 'Peugeot', Modelo: '208', tipo: 'Puertas: 5', Precio: 250000},
    {Marca: 'Yamaha', Modelo: 'YBR', tipo: 'Cilindrada: 160c', Precio: 80500.50}]

imprimirFlota(FLOTA)
const oredenada = ordenaArreglo(FLOTA, 'Precio')
imprimirMas_Caro_Barato(oredenada)
imprimeModeloDeterminado(FLOTA, 'Y')
imprimirOrden(oredenada)


function imprimirFlota(flota){
    flota.map(v => armaCadena(v.Marca, v.Modelo, v.tipo, v.Precio))
    console.log('======================================================================')
}


function armaCadena(Marca, Modelo, tipo, Precio){
    var Str1 = 'Marca: '+Marca
    var Str2 = ' // Modelo: '+Modelo
    var Str3 = ' // '+tipo
    
    var a = convierteA(Precio)
    var b = convierteB(Precio)
    var c = convierteC(Precio)   

    var Str4 = ' // Pecios: $' + a + '.' + b + ',' + c
    
    console.log(Str1 + Str2 + Str3 + Str4)
}

function convierteA(Precio) {
    
    var a = Precio - (Precio%1000)
    a = String(a/1000)

    return a
}

function convierteB(Precio) {
    
    var b = '000'
    
    if(Precio%1000 !== 0){
        b = Precio%1000
        b = b - (b%1)
        if(b < 10){
            b = '00' + b
        }else{
            if( b < 100){
                b = '0' + b
            }
        }
        b = String(b)
    }

    return b
}

function convierteC(Precio) {
    
    var c = '00'
    if(Precio%1 !== 0){
        c = (Precio%1) * 100
        c = c - (c%1)
        if(c < 10){
            c = '0' + c
        }
        c = String(c)
    }

    return c
}


function ordenaArreglo(arreglo, key) {
    return arreglo.sort(function (a, b) {
        var x = a[key]
        var y = b[key]

        return ((x > y) ? -1 : ((x < y) ? 1 : 0))
        
    })
}


function imprimirMas_Caro_Barato(flota){
    var indice = (Object.keys(flota).length) - 1
    var cadena = 'Vehículo más caro: ' + flota[0].Marca + ' ' + flota[0].Modelo
    console.log(cadena)
    cadena = 'Vehículo más barato: ' + flota[indice].Marca + ' ' + flota[indice].Modelo
    console.log(cadena)
}


function imprimeModeloDeterminado(flota, Y){
    var res = flota.filter(e => e.Modelo.startsWith(Y))
    res = res[0]
    var precio = res.Precio
    var a = convierteA(precio)
    var b = convierteB(precio)
    var c = convierteC(precio)

    precio = '$' + a + '.' + b + ',' + c

    var imp = 'Vehículo que contiene en el modelo la letra ‘' + Y + '’: ' + res.Marca + ' ' + res.Modelo + ' ' + precio
    console.log(imp)
}

function imprimirOrden(flota) {
    console.log('======================================================================')
    console.log('Vehículos ordenados por precio de mayor a menor:')
    flota.map(e => console.log(e.Marca + ' ' + e.Modelo))
}