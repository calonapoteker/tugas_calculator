var a = prompt('Nilai Pertama : ')
var b = prompt('Mau "+","-","*","/" ?')
var c = prompt('Nilai Kedua   : ')
switch (b) {
    case '+':
        var jumlah = parseInt(a) + parseInt(c)
        var hasil = alert('Hasil : ' + jumlah)
        break;
    case '-':
        var kurang = parseInt(a) - parseInt(c)
        var hasil = alert('Hasil : ' + kurang)
        break;
    case '*':
        var kali = parseInt(a) * parseInt(c)
        var hasil = alert('Hasil : ' + kali)
        break;
    case '/':
        var bagi = parseInt(a) / parseInt(c)
        var hasil = alert('Hasil : ' + parseFloat(bagi))
        break;
    default:
        break;
        alert('maaf yang anda masukan salah!')
}
    