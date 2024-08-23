
    // Busca formulario y boton
    const form = document.getElementById('enviando')
    const submitButton = document.querySelector('#contact button[type="submit"]');


    form.addEventListener('submit', function(event) {
        // Previene el comportamiento por defecto del formulario
        event.preventDefault();

        // Cambia el texto del botón a "Enviando..."
        submitButton.textContent = "Enviando...";

        setTimeout(() => {
            submitButton.textContent = "¡Mensaje Enviado!";
            form.reset();
        }, 2000);
    });

//CAMBIAR IDIOMA
const botonCambiarIdioma = document.getElementById('CambiarLenguaje');
const textoCambiante = document.getElementById('textChanged');

let idiomaActual = 'EN';

botonCambiarIdioma.addEventListener('click', () => {
    if (idiomaActual === 'EN') {
        textoCambiante.innerHTML = `<h1>Bienvenido a mi portafolio</h1>
        <p>Ingeniero informático, con sólidos conocimientos en procesamiento de datos, soporte computacional y áreas relacionadas con la administración, control y gestión. </p>
        <p>Responsable, con principios morales y éticos, buena relación con línea de mando y personas a cargo. Caracterizado por la transparencia, la lealtad, la iniciativa y el liderazgo. Trabajo en equipo y me enfoco en los logros colectivos, altamente analítico, metódico y proactivo.</p>
        <p>Mi reciente capacitación en inteligencia de negocios me ha brindado una perspectiva más amplia y sólida en el campo de la toma de decisiones basada en datos. Estoy emocionado de aplicar mis conocimientos y habilidades en proyectos desafiantes, aprovechando el potencial del análisis de datos para generar ideas estratégicas y resultados significativos.</p>
        <br>
        <img src="https://skillicons.dev/icons?i=git,html,js,css,dotnet,bootstrap,github,java,mysql,aws,azure,py,postgres,docker,stackoverflow" />`;
        botonCambiarIdioma.textContent = 'ES';
        idiomaActual = 'ES';
    } else {
        textoCambiante.innerHTML = `<h1>Welcome to my portfolio</h1>
        <p>Computer engineer, with solid knowledge in data processing, computer support and areas related to administration, control and management.</p>
        <p>Responsible, with moral and ethical principles, good relationship with chain of command and people in charge. Characterized by transparency, loyalty, initiative and leadership. I work as a team and focus on collective achievements, highly analytical, methodical and proactive.</p>
        <p>My recent training in business intelligence has given me a broader and more solid perspective in the field of data-driven decision making. I am excited to apply my knowledge and skills in challenging projects, leveraging the potential of data analysis to generate strategic insights and meaningful results.</p>
        <br>
        <img src="https://skillicons.dev/icons?i=git,html,js,css,dotnet,bootstrap,github,java,mysql,aws,azure,py,postgres,docker,stackoverflow" />`;
        botonCambiarIdioma.textContent = 'EN';
        idiomaActual = 'EN';
    }
});