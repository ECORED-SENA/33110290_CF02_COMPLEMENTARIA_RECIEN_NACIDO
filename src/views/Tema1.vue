<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Atención integral al recién nacido en sala de partos (adaptación neonatal)
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") La atención inmediata en sala de partos #[b.t2 requiere de un equipo multidisciplinar para aplicar las acciones necesarias en la valoración e identificación del binomio madre e hijo y sus acompañantes.] Deben tener en cuenta los cambios en el proceso fisiológico de la adaptación neonatal y la transición encontrada en la vida extrauterina para el recién nacido. 
        .bg1.p-4.brad.mb-4(data-aos="flip-down") 
          p(data-aos="fade-down") El conjunto de procedimientos encontrados para el acompañamiento y asistencia en la Ruta Integral de Atención Materno Perinatal (RIAPM) permite disminuir las posibles complicaciones de mortalidad o daños que puedan encontrarse para el desarrollo y su crecimiento. Son tenidos en cuenta en caso de ser necesarios para instaurar el tratamiento adecuado y la remisión a una institución de alta complejidad, solo si, se tiene la capacidad resolutiva y se está de acuerdo a las necesidades del recién nacido. 

          p(data-aos="fade-down").mb-0 También, es importante la aplicación del partograma encontrado en el CLAP, debido a que mejora evidentemente los resultados perinatales.          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')      

    .row.justify-content-center.align-items-center.mb-4                  
      .col-md-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='') 
      .col.my-3    
        p(data-aos="fade-down").mb-0 La atención del recién nacido en sala de partos (adaptación neonatal) requiere de una temperatura ambiente que debe estar entre 23°C y 26ºC como rango promedio. En las salas de adaptación neonatal debe estar disponible en forma impresa, en lugar visible, la información sobre el manejo del recién nacido con necesidad de reanimación neonatal. #[b.t1 Los primeros pasos de atención al recién nacido son:]     

    .tarjeta.tarjeta-verde.p-4.mb-4(data-aos="fade-right") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Secuencia de atención inicial 
            ol.lista-ul.fa-ul 
              li
                span.text-bold 1.
                p.mb-0 Posicionar al recién nacido (RN) sin hiperextender o hiperflexionar el cuello.
              li
                span.text-bold 2.
                p.mb-0 Limpiar las secreciones de la vía aérea.
              li
                span.text-bold 3.
                p.mb-0 Secar al recién nacido.  
              li
                span.text-bold 4.
                p.mb-0 Evaluar la respiración, el llanto y tono muscular.            
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/11.png') 

        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Toma de muestra de sangre de cordón 
            p La muestra de sangre de cordón umbilical se toma del segmento aislado de cordón para el procesamiento de la hemoclasificación neonatal y TSH neonatal. En caso de no ser posible la toma de muestra de sangre del cordón, se deberá realizar la toma de muestra de sangre por vena periférica del recién nacido.
            .bgw.px-4.brad
              .row.justify-content-center.align-items-center                 
                .col-lg-auto.my-3
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='') 
                .col.my-3    
                  p(data-aos="fade-down").mb-0 Se recomienda siempre tratar de tomar la muestra de sangre del cordón umbilical.            
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/12.png') 
            
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Otros aspectos
            ul.lista-ul.fa-ul 
              li 
                i.fas.fa-angle-right
                p.mb-0 Revisión de la placenta. 
              li 
                i.fas.fa-angle-right
                p.mb-0 Completar los datos de identificación del recién nacido.
              li 
                i.fas.fa-angle-right
                p.mb-0 Registrar los datos en la historia clínica.
              li 
                i.fas.fa-angle-right
                p.mb-0 Expedir el certificado de recién nacido vivo.             
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/13.png')   

    p(data-aos="fade-down").mb-5 Ahora bien, frente al #[b.bgt1 pinzamiento del cordón umbilical,] existen tres tipos de procedimiento:  

    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='')
      .col-lg-8.my-3(data-aos="fade-right") 
        AcordionA(tipo="b" clase-tarjeta="tarjeta bgad")
          .row(titulo="Pinzamiento habitual") 
            p Se indica realizar cuando hay interrupción de la palpitación de las arterias umbilicales o disminución de la ingurgitación de la vena umbilical y con perfusión satisfactoria de la piel. Generalmente se realiza a los 60 segundos luego que el niño haya salido del canal del nacimiento (vaginal o por vía abdominal).

            p Los criterios anteriores pueden demorarse en los casos en que hay circular de cordón umbilical, prolapso o procedencia de cordón umbilical, o ruptura prolongada de membranas. En estos casos, es pertinente permitir un mayor tiempo al destinado al pinzamiento habitual del cordón umbilical. 
          p(titulo="Pinzamiento inmediato") Indicado en los casos de abruptio de placenta o placenta previa sangrante. 
          .row(titulo="Pinzamiento precoz") 
            p Es el que se da antes del pinzamiento habitual indicado para los siguientes casos:
            ul.lista-ul.fa-ul 
              li 
                i.fas.fa-angle-right
                p.mb-0 Que haya riesgo de paso de anticuerpos maternos al RN, por ejemplo, en miastenia gravis, isoinmunización materno fetal no tratada.
              li 
                i.fas.fa-angle-right
                p.mb-0 Cuando haya riesgo de poliglobulia neonatal (sospecha de restricción de crecimiento intrauterino, hijos de madres toxémicas o diabéticas). 

    p(data-aos="fade-down").mb-5 Teniendo claro lo anterior, #[b.bgt1 el contacto piel a piel] del recién nacido (RN) con la madre se debe realizar inmediatamente luego del nacimiento, si las condiciones maternas lo permiten. 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Si el niño se encuentra sano, se recomienda no separarlo de la madre durante los primeros 60 minutos de vida y postergar la realización del examen físico, las profilaxis y todo el proceso de adaptación. En el caso de un nacimiento por cesárea, se debe presentar el RN a la madre y mientras termina el procedimiento quirúrgico de la madre, se pueden realizar las demás medidas de la adaptación.<br><br>Se debe promover el contacto piel a piel y el inicio de la lactancia materna lo más rápido posible. 

    p(data-aos="fade-down").mb-5 La #[b.bgt1 lactancia materna] debe iniciarse durante el contacto piel a piel si la madre puede hacerlo. #[b.bgt1 Se recomienda iniciar en la primera hora de vida del RN.] La OMS indica no iniciar o suspender la lactancia materna en los siguientes casos, de acuerdo con National Institutes of Health (NIH) (2019):
    .bg4
      .row.justify-content-center.mb-5
        .col-lg-7.p-0
          .row.justify-content-center.align-items-end.bg3.p-4.me-1.pb-0  
            .col-lg-8(data-aos="fade-down")
              ul.lista-ul.fa-ul 
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Madre en tratamiento con medicamentos contra cáncer. 
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Madre que haya recibido sustancias radioactivas.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Madre con infección por VIH.                          
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png')


      p(data-aos="fade-down").mb-5 Sumado a todo esto, debe realizarse el #[b.bgt2 examen físico completo en forma cefalocaudal.] Los puntos clave para hacer el examen físico completo del recién nacido son: 
      .row.justify-content-center.align-items-center.mb-4           
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')
        .col-lg-7.my-3
          LineaTiempoD.color-primario
            .row.justify-content-center.align-items-center(numero="1" titulo="Cabeza")
              .col-12
                p Se debe evaluar la presencia de #[i caput succedaneum cabelludo] (edema del cuero cabelludo, por lo tanto, puede sobrepasar las cisuras de los huesos del cráneo) o de #[i cefalohematomas] (hemorragia subperióstica, que está limitada a uno de los huesos del cráneo).        
            .row.justify-content-center.align-items-center(numero="2" titulo="Cara")
              .col-12
                p Evaluar el tamaño de las fontanelas anterior y posterior, evaluar la simetría facial, la posición de las orejas, la comisura palpebral, realizar evaluación ocular incluyendo el rojo retiniano y evaluar que el paladar esté íntegro.  
            .row.justify-content-center.align-items-center(numero="3" titulo="Cuello")
              .col-12
                p Evaluar la movilidad del cuello.
            .row.justify-content-center.align-items-center(numero="4" titulo="Torax")
              .col-12
                p Evaluar las clavículas, buscando si hay fracturas, evaluar la adaptación cardiopulmonar a la vida extrauterina, la presencia de signos de dificultad respiratoria y la simetría de los pulsos entre las extremidades superiores e inferiores.
            .row.justify-content-center.align-items-center(numero="5" titulo="Piel")
              .col-12
                p Evaluar el tinte ictérico en piel y mucosas. La presencia de tinte ictérico antes de las 24 horas de vida siempre es patológica y requiere estudio y manejo inmediato para evitar complicaciones y secuelas.
            .row.justify-content-center.align-items-center(numero="6" titulo="Abdomen")
              .col-12
                p Se evalúa la pared abdominal, si hay gastrosquisis o onfaloceles, masas abdominales o megalias. Se debe evaluar la permeabilidad esofágica.
            .row.justify-content-center.align-items-center(numero="7" titulo="Cadera")
              .col-12
                p Se evalúa la estabilidad de la cadera, mediante la búsqueda de signos como Barlow u Ortolani.      

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .tarjeta.color-acento-contenido.bgv.p-3(data-aos="flip-down")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/v.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4(data-aos="fade-down") Tablas de crecimiento
                    p(data-aos="fade-down").mb-0 Para más detalle le invitamos a consultar el enlace, en el cual se presentan las curvas más usadas llamadas las Curvas de Fenton. En estas imágenes se aprecia la relación de las medidas antropométricas y clasificación al RN según su peso, talla y perímetro cefálico con la edad gestacional. 
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.merckmanuals.com/es-pr/professional/pediatr%C3%ADa/problemas-perinatales/par%C3%A1metros-de-crecimiento-en-los-reci%C3%A9n-nacidos" target="_blank")
                      span Ver enlace
                      i.fas.fa-link

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") En los recién nacidos, también es necesario realizar otras pruebas para determinar el estado general del bebé, como lo son:
        .row.justify-content-start.mb-4        
          .col-auto.bg5.p-3.py-2(data-aos="flip-down")
            h5.mb-0 Escala de Apgar
        p(data-aos="fade-down") #[b.bgt2 Esta prueba permite medir la frecuencia cardíaca, la respiración, el tono muscular, los reflejos, el color de la piel del recién nacido] y ayuda al personal del hospital a ponerlo en alerta por si las respuestas del bebé son más lentas de lo normal y requiere asistencia mientras se adapta a su nueva vida fuera del útero.              
        .row.justify-content-center.align-items-center                  
          .col-md-auto.my-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='') 
          .col.my-2    
            p(data-aos="fade-down").mb-0 Se mide al minuto, a los 5 minutos y a los 10 minutos de vida. Su puntaje va sobre 10. Cada uno de los cinco ítems tiene un puntaje de cero a dos, como el ejemplo que se muestra en la siguiente tabla.
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')  

    .row.justify-content-center.mb-5     
      .col-lg-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Ejemplo valoración APGAR
        .tabla-a.color-acento-contenido(data-aos="fade-left") 
          table
            thead
              tr.bgtb1
                th(colspan='4') Sistema de Puntuación de Apgar
            tbody.bgw
              tr.text-bold.text-center.bgtb2
                td Puntuación
                td 0
                td 1
                td 2
              tr
                td Frecuencia cardíaca
                td Ausente
                td Menos de 100 latidos por minuto
                td Más de 100 latidos por minuto
              tr
                td Respiración
                td Ausente
                td Lenta, irregular, llanto débil
                td Buena, llanto fuerte
              tr
                td Tono Muscular
                td Flácido
                td Cierta flexión de brazos y piernas
                td Movimiento activo
              tr
                td Reflejo <br>(colocando una perilla succionadora en la nariz del bebé para observar su respuesta).
                td Ausente
                td Mueca
                td Mueca y tos o estornudos
              tr
                td Color
                td Azulado o pálido
                td Cuerpo rosado, manos y pies azulados
                td Completamente rosado

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3
        p(data-aos="fade-down") Clásicamente se ha descrito la mnemotécnica #[b.bgt1 FETICO] para recordar los aspectos incluidos en el Apgar:
        .row.justify-content-center.align-items-stetch         
          .col-lg-6.bg6.p-4.my-2
            ol.lista-ul.fa-ul 
              li
                span.text-bold F
                p.mb-0 Frecuencia respiratoria
              li
                span.text-bold E
                p.mb-0 Esfuerzo respiratorio
              li
                span.text-bold T
                p.mb-0 Tono muscular
              li
                span.text-bold I
                p.mb-0 Irritabilidad refleja 
              li
                span.text-bold CO
                p.mb-0 Color de la piel                    
          .col-lg-6.bg7.j.my-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')                  

      .col-lg-7.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')                  

    .row.justify-content-start.mb-4        
      .col-auto.bg5.p-3.py-2(data-aos="flip-down")
        h5.mb-0 Valoración Silverman Anderson
    p(data-aos="fade-down") Esta prueba permite evaluar la presencia o ausencia de dificultad respiratoria en los neonatos, mediante la evaluación de 5 parámetros clínicos, como se observa en la siguiente imagen: 
    .bg8
      .titulo-sexto.color-acento-contenido(data-aos="fade-right") 
        h5 Figura 1.
        span Valoración Silverman Anderson 
      img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/25.jpg', alt='La imagen presenta los cinco parámetros clínicos en la valoración Silverman Anderson, que se interpretan de acuerdo al grado de dificultad respiratoria.')  
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8                    
          .tabla-a.color-acento-contenido(data-aos="fade-left") 
            table.text-center
              tbody.bgw
                tr.text-bold.text-center.bgtb3
                  td Puntaje
                  td Interpretación
                tr
                  td 0 puntos 
                  td Sin dificultad respiratoria 
                tr
                  td ∑ 7 
                  td Con dificultad respiratoria moderada
                tr
                  td 10 puntos 
                  td Con dificultad respiratoria severa 

    .row.justify-content-start.mb-4        
      .col-auto.bg5.p-3.py-2(data-aos="flip-down")
        h5.mb-0 Profilaxis
    p(data-aos="fade-down").mb-5 Luego de los primeros 60 minutos de vida (después del contacto piel a piel del recién nacido con la madre), y en los primeros 90 minutos de vida bajo el campo visual de la madre y en una lámpara de calor radiante, se deben realizar las siguientes profilaxis:  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')     
      .col-lg-8.my-3
        ul.lista-ul.fa-ul 
          li 
            i.fas.fa-angle-right.t3
            p.mb-0 #[b.t3 Profilaxis umbilical:] con Clorhexidina o Yodopovidona.
          li 
            i.fas.fa-angle-right.t3
            p.mb-0 #[b.t3 Profilaxis ocular:] se recomienda realizar con solución oftálmica de Povidona yodada al 2,5% o al 5% (según disponibilidad), una gota en cada ojo en dosis única. Si no hay disponibilidad de Povidona iodada se puede utilizar pomada de Eritromicina al 0,5% o tetraciclina al 1%
          li 
            i.fas.fa-angle-right.t3
            p.mb-0 #[b.t3 Profilaxis de la enfermedad hemorrágica del recién nacido:] se indica aplicación de Vitamina K 1 mg IM en la región anterior del muslo en dosis única. Para los RN con peso <1.500 gramos se indica aplicar  0,5 mg IM .   
        .row.justify-content-center.align-items-center                  
          .col-md-auto.my-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='') 
          .col.my-2    
            p(data-aos="fade-down").mb-0 Ahora bien, #[b.bgtb3 durante las primeras horas de nacido] es importante vigilar la transición y adaptación del recién nacido (RN) a la vida extrauterina, evaluar la presencia de meconio y de diuresis en las #[b.bgtb3 primeras 24 horas de vida] y se debe brindar acompañamiento a la madre y al RN sobre la técnica correcta de lactancia materna. También es importante tener presente los siguientes aspectos:

    .tarjeta.tarjeta-verde.p-4.mb-5(data-aos="fade-right") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Vacunación
            p Se recomienda la aplicación de la vacuna contra Hepatitis B a los RN al nacer independiente de su peso. La vacuna BCG se debe aplicar a los RN con peso ≥ #[b 2000 gramos; si el peso es menor a 2.000 gramos, aplicar la vacuna cuando logren el peso de 2000 gramos.]          
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/29.png')

        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Paraclínicos
            p Se requiere tener los datos de la hemoclasificación de la madre y del RN para realizar detección oportuna de riesgo de ictericia por:  
            ul.lista-ul.fa-ul 
              li 
                i.fas.fa-angle-right
                p.mb-0 Incompatibilidad de grupo sanguíneo (mamá grupo sanguíneo O y RN grupo sanguíneo A, B o AB)
              li 
                i.fas.fa-angle-right
                p.mb-0 Incompatibilidad RH (mamá Rh negativo y RN con Rh positivo)
            h5 Se debe tomar a todos los RN la TSH en sangre de cordón para tamizaje de hipotiroidismo congénito. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/30.png')

        .row.justify-content-center.mt-3
          .col-11
            h4 Decisión del egreso hospitalario 
            p Los criterios de egreso hospitalario descritos son los siguientes: 
            ul.lista-ul.fa-ul 
              li 
                i.fas.fa-angle-right
                p.mb-0 RN con examen físico normal. Cuando hay alteraciones del examen físico, en algunos casos, pueden ser de seguimiento ambulatorio. 
              li 
                i.fas.fa-angle-right
                p.mb-0 RN con adecuado patrón de succión y deglución
              li 
                i.fas.fa-angle-right
                p.mb-0 RN y madre con adecuada técnica de lactancia materna.
              li 
                i.fas.fa-angle-right
                p.mb-0 Se recomienda en el caso de partos vaginales que el RN permanece hospitalizados en alojamiento conjunto con la madre hasta las 24 horas de vida y en los casos de partos por cesárea o cuando el RN tenga factores de riesgo que requieran observación, permanecer hospitalizado junto con la madre hasta las 48 horas de vida.
              li 
                i.fas.fa-angle-right
                p.mb-0 Para los casos de RN a término (entre 37 y 42 semanas de edad gestacional), con peso bajo menor a 2500 gramos y los RN pretérmino (menor a 37 semanas); y después de evaluar su riesgo metabólico, deben ser direccionados a los programas canguro para continuar su seguimiento y manejo integral.          

        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Plan de cuidado 
            p Incluye la información de cuidados y signos de alarma, según el Anexo 10 de la resolución 3280 del 2018 que muestra las recomendaciones de salida para madres, padres y cuidadores de los RN; es importante explicarles, los cuidados y los signos de alarma ante los cuales ellos deben consultar.

            h5 Todos los RN deben ser valorados luego del egreso hospitalario, entre el tercer y quinto día de vida. Debe evaluarse la pérdida fisiológica de peso, evaluar el reporte de tamizaje de hipotiroidismo congénito con la TSH en sangre de cordón, repetir la toma de las SaO2 pre y post ductales para evaluar cardiopatía compleja y realizar examen físico completo.        
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/31.png')

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-contenido.bgv.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Resolución 3280 de 2018
                  p(data-aos="fade-down").mb-0 Para conocer más sobre los cuidados del recién nacido durante las primeras 24 horas de vida, consultar la Resolución 3280 de 2018, Capítulo del Ministerio de Salud y Protección Social en la página 304. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf" target="_blank")
                    span Ver enlace
                    i.fas.fa-link            
</template>
<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
