window.onload = function() {

    alert('Bienvenidos a mi sitio');

    let confirmacion = confirm('Seguro quieres avanzar?')
    let mensaje = document.querySelector('h2')
    console.log(mensaje)
    if (confirmacion === true) {
        mensaje.innerText = 'Qué alegría que quieras con tu visita por este maravilloso sitio.'

        let nombre = prompt('Decinos tu nombre por favor')
        document.querySelector('h1').innerText = 'Bienvenide ' + nombre

        let edad = prompt('Decinos tu edad')

        if (edad >= 18) {
            let i = 0;
            let hobbies = [];
            do {
                let hobby = prompt('Decinos cuáles son tus hobbies')
                hobbies.push(hobby)
                i++
            } while (i < 3)
            // = hobbiesPrompt.split(',')
            if (hobbies.includes('programacion') || hobbies.includes('programación') || hobbies.includes('programar') || hobbies.includes('Programacion') || hobbies.includes('Programación') || hobbies.includes('Programar')) {
                alert('Qué bueno que te guste la programación')
            }
            /*for (let hobby of hobbies) {
                if(/programa/gi.test(hobby))
            }
            */
            else {
                alert('Qué lástima que no te guste la programación')
            }
            let articles = document.querySelector('.hobbies');
            let lista = document.createElement('ol');
            for (let h of hobbies) {
                let item = document.createElement('li')
                item.innerHTML = hobbies[0]
                lidta.append(item)
            }

            articles.append(lista)

        } else {
            let contenidoBloqueado = document.querySelector('.container-general')
            let contenidoPermitido = document.querySelector('#accesoDenegado.contenido-bloqueado')

            contenidoBloqueado.style.display = "none"
            contenidoPermitido.style.display = "inline"
        }



    } else {
        mensaje.innerText = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio.'
    }
}