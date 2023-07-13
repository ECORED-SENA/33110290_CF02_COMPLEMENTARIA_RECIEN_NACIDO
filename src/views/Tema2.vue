<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Tamizaje neonatal
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") El tamizaje neonatal se considera como un mecanismo de identificación importante de enfermedades que pueden estar presentes en las niñas y niños recién nacidos que aparentemente pueden verse sanos. Este tamizaje se realiza teniendo en cuenta unas líneas principales como son: metabólicas, endocrinas, cardiovascular, auditivas y visuales.       
        .bg9.p-4.brad(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 El objetivo del tamizaje neonatal está en identificar de manera oportuna y temprana patologías que puedan encontrarse en progreso, como secuelas o que generen limitaciones con el desarrollo de la vida extrauterina, afectando la calidad de vida del recién nacido.   
        .row.justify-content-center.align-items-center               
          .col-md-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.png', alt='') 
          .col.my-3    
            p(data-aos="fade-down").mb-0 Detectar a tiempo estas patologías en los bebés durante las primeras horas o días de vida, brindan beneficios en la salud y el adecuado desarrollo de las niñas y niños. Entre los objetivos específicos, según Vivas (2020), se encuentran: 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='') 

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-6.my-3
        .titulo-sexto.color-acento-contenido(data-aos="fade-right") 
          h5 Figura 2.
          span Objetivos específicos tamizaje neonatal
        img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='Los objetivos de un tamizaje neonatal buscan diagnosticar tratamientos, seguirlos, articular redes de apoyo y desarrollar estrategias en procesos de salud pública.')  
      .col-lg-6.my-3.bg14.p-0 
        .p-4
          p(data-aos="fade-down") Ver información ampliada sobre el Tamizaje Neonatal en Colombia, según la ley 1980 de 2019 "Por medio de la cual se crea el programa de tamizaje neonatal en Colombia".
          .row.mb-4        
            .col-auto    
              a.anexo.mb-4.mb-lg-0(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201980%20de%202019.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Ley 1980 de 2019. 
          p(data-aos="fade-down") Sumado a esto, el #[b.bgw hipotiroidismo congénito] se da por la producción insuficiente de las hormonas tiroideas presente en los tres años de vida, detectado por la elevación del valor de la hormona estimulante de la tiroides (TSH). #[b.bgw Las hormonas tiroideas tienen un papel predominante en el neurodesarrollo durante la primera infancia, por este motivo, el hipotiroidismo congénito representa la principal causa de discapacidad] intelectual prevenible. 
        img(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='') 
    .titulo-sexto.color-acento-contenido(data-aos="fade-right") 
      h5 Figura 3.
      span Mapa mental de tamizaje hipotiroidismo 
    .bg15
      img.img-a.img-t.mb-5.pt-5(data-aos="zoom-in")(src='@/assets/curso/temas/43.svg', alt='La imagen presenta un esquema de tamizaje neonatal para diagnosticar el hipotiroidismo congénito en recién nacidos prematuros.') 

      .row.justify-content-center.align-items-center.mb-4          
        .col-lg-10      
          .bg10.px-4.brad
            .row.justify-content-center.align-items-center                 
              .col-lg-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.svg', alt='') 
              .col.my-3    
                p(data-aos="fade-down").mb-0 Se debe brindar educación a los padres antes de realizar el tamizaje y de manera especial, teniendo en cuenta su importancia en la sensibilización y adecuada comprensión respecto a la oportunidad que implica realizar un diagnóstico oportuno para la niña o niño recién nacido.  

    p(data-aos="fade-down").mb-5 Para determinar el tratamiento en caso de presentarse hipotiroidismo congénito tener en cuenta:  

    .tarjeta.tarjeta-verde.p-4.mb-4(data-aos="fade-right") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Confirmación diagnóstica 
            p Se realiza mediante la medición de los niveles de TSH y de T4L en sangre periférica. El hipotiroidismo congénito se diagnostica cuando el nivel de la TSH se encuentra por encima del rango de referencia para la técnica de análisis y la edad del paciente y/o cuando el nivel de la T4L se encuentra por debajo del rango de referencia para la técnica de análisis y la edad del paciente.          
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/46.png') 
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Inicio del tratamiento 
            p Teniendo en cuenta la importancia de las hormonas tiroideas para el neurodesarrollo y la elevada tasa de formación de conexiones neuronales durante las primeras semanas de vida, el diagnóstico y el inicio del tratamiento del hipotiroidismo congénito debe ser considerado una #[b urgencia médica]. Por este motivo, el inicio del tratamiento debe ser inmediato a la confirmación diagnóstica, máximo a la mañana siguiente de esta.
            p Así mismo, puede ser iniciado cuando el resultado del tamizaje (o del retamizaje) sea > 40 mUI/L con previa toma de muestra de sangre, para la confirmación diagnóstica, momento en el cual se ajusta el tratamiento de acuerdo a la prueba diagnóstica.          
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/47.png') 
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 Tratamiento 
            p Se debe iniciar con levotiroxina 50 mcg cada día. Para esto, se debe triturar la tableta de 50 mcg del medicamento y administrarse en máximo dos centímetros de agua en las mañanas.            
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/48.png') 

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.png', alt='') 

      .col-lg-8.my-3
        p(data-aos="fade-down").mb-0 La #[b.bg1 cardiopatía compleja], por su parte, se detecta por medio de la saturación de oxígeno (pulsioximetría) pre y postductal. Las cardiopatías congénitas son las malformaciones congénitas más frecuentes y las que causan mayor mortalidad en niños menores de cinco años en Colombia. Se estima que 8 de cada 1.000 recién nacidos, nace con una cardiopatía congénita y que aproximadamente 2 o 3 de cada 1.000 nacidos vivos tienen una cardiopatía congénita compleja. Sin embargo, se considera que la verdadera incidencia puede llegar a ser más alta teniendo en cuenta que muchos óbitos fetales se pueden producir asociados a cardiopatías incompatibles con la vida. #[b.t1 En el siguiente esquema se observa un ejemplo de tamizaje neonatal de cardiopatía compleja, de acuerdo con Flórez, S., Rubiano J., Molina C., Lozada, A. y Rocha, L. (2021):]

    .titulo-sexto.color-acento-contenido(data-aos="fade-right") 
      h5 Figura 4.
      span Diagrama Tamizaje Neonatal de cardiopatía congénita 
    .bg15
      img.img-a.img-t.mb-5.pt-5(data-aos="zoom-in")(src='@/assets/curso/temas/50.svg', alt='Esquema de tamizaje neonatal de cardiopatía congénita en recién nacidos, entre las 24 a 48 horas, en lugares con altitud menor a 1.500 m.s.n.m. (metros sobre el nivel del mar).') 

      .row.justify-content-center.align-items-center.mb-4          
        .col-lg-10      
          .bg10.px-4.brad
            .row.justify-content-center.align-items-center                 
              .col-lg-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg', alt='') 
              .col.my-3    
                p(data-aos="fade-down").mb-0 Todo recién nacido con tamizaje positivo para cardiopatía congénita debe ser hospitalizado y atendido con criterio de URGENCIA, puesto que las cardiopatías congénitas susceptibles de tamizaje tienen una alta probabilidad de generar mortalidad neonatal a corto plazo.  

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/52.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ante un tamizaje positivo para cardiopatía congénita se debe garantizar la valoración completa del estado físico del niño de forma inmediata (para considerar causas adicionales de hipoxemia, incluyendo la toma de tensión arterial), la estabilización que el niño pueda requerir según su estado clínico, la valoración por cardiología pediátrica y la toma de Ecocardiograma transtorácico con Doppler a color (realizado por cardiólogo pediatra).<br> <br> Los niños y las niñas con tamizaje positivo deben ser hospitalizados en una Unidad de Cuidados Intensivos Neonatales y deben permanecer monitoreados.  

    p(data-aos="fade-down").mb-5 De manera adicional, la Guía de Práctica Clínica para la detección temprana, el diagnóstico, el tratamiento y el seguimiento de los defectos refractivos en menores de 18 años, indica que #[b.bgt2 la búsqueda activa de alteraciones visuales] en la población pediátrica sana, se debe iniciar con una evaluación en el periodo neonatal y continuar durante cada visita de crecimiento y desarrollo. De acuerdo a la misma guía, el tamizaje visual al momento del nacimiento debe ser realizado e interpretado por un profesional en neonatología, pediatría o en medicina general entrenado en las estrategias de detección de alteración visual.  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8 
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          span Métodos e Indicadores de tamización visual                   
        .tabla-a.color-acento-contenido(data-aos="fade-left") 
          table.text-center
            tbody.bgw
              tr.text-bold.text-center.bgtb1.tab-top
                td Método
                td Indicadores de remisión
              tr
                td Prueba del reflejo rojo
                td Ausente, blanco, opaco asimétrico. 
              tr
                td Inspección externa 
                td Anormalidad estructural, por ejemplo: ptosis.
              tr
                td Examen pupilar
                td Forma Irregular, tamaño desigual, pobre o inadecuada, reacción a la luz.
              tr
                td Reflejo Luminoso corneal 
                td Asimétrico o desplazado.

    .row.justify-content-center.align-items-center.mb-4                  
      .col-md-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.svg', alt='') 
      .col.my-3    
        p(data-aos="fade-down").mb-0 Ante cualquiera de los signos indicadores de remisión del examen físico, que se considere como un hallazgo positivo, el recién nacido debe ser remitido de manera inmediata a valoración por oftalmología o por oftalmología pediátrica según la disponibilidad. El tratamiento dependerá del resultado diagnóstico del tamizaje: 

    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-4.my-3.pe-0
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.png', alt='')            
      .col-lg-8.my-3.ps-0
        .tarjeta-avatar-b.mb-3(data-aos="fade-left")
          .tarjeta-avatar-b__img.img-l 
            img.img-w(src='@/assets/curso/temas/55.svg' alt='')
          .tarjeta.tarjeta--azul.text-l.bg12
            .p-4 
              p.mb-0 Los recién nacidos prematuros por el riesgo de ROP serán diagnosticados y tratados de acuerdo a los lineamientos vigentes del programa canguro.  
        .tarjeta-avatar-b.mb-3(data-aos="fade-right")
          .tarjeta-avatar-b__img.img-l 
            img.img-w(src='@/assets/curso/temas/56.svg' alt='')
          .tarjeta.tarjeta--azul.text-l.bg12
            .p-4 
              p.mb-0 Para el caso de diagnóstico de lesiones obstructivas del eje visual, el inicio del tratamiento no deberá superar los 45 días.    
        .tarjeta-avatar-b.mb-3(data-aos="fade-left")
          .tarjeta-avatar-b__img.img-l 
            img.img-w(src='@/assets/curso/temas/57.svg' alt='')
          .tarjeta.tarjeta--azul.text-l.bg12
            .p-4 
              p.mb-0 Se debe realizar la búsqueda directa de antecedentes familiares de retinoblastoma, considerando el alto porcentaje asociado a componente hereditario.  
        .tarjeta-avatar-b.mb-3(data-aos="fade-right")
          .tarjeta-avatar-b__img.img-l 
            img.img-w(src='@/assets/curso/temas/58.svg' alt='')
          .tarjeta.tarjeta--azul.text-l.bg12
            .p-4 
              p.mb-0 Para las patologías infecciosas, ROP y retinoblastoma el inicio del tratamiento debe ser inmediato. 
        .tarjeta-avatar-b.mb-3(data-aos="fade-left")
          .tarjeta-avatar-b__img.img-l 
            img.img-w(src='@/assets/curso/temas/59.svg' alt='')
          .tarjeta.tarjeta--azul.text-l.bg12
            .p-4 
              p.mb-0 En ningún caso el inicio del tratamiento superará los 3 meses del nacimiento del niño o niña.

    .row.justify-content-center.align-items-center.mb-4                  
      .col-md-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/60.png', alt='') 
      .col.my-3    
        p(data-aos="fade-down").mb-0 El #[b.bgt1 tamizaje auditivo], de otro lado, corresponde a la detección de recién nacidos con alteraciones auditivas que pueden llevar a hipoacusia, afectar su capacidad auditiva y de esta forma, amenazar el desarrollo integral del niño o la niña en el curso de la vida. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.my-3
        .bg1.px-4.brad.mb-4(data-aos="flip-down") 
          .row.justify-content-center.align-items-center
            .col.my-3    
              p.mb-0(data-aos="fade-down") La hipoacusia se define como disminución de la percepción auditiva. Es un problema de especial importancia en la infancia debido a que el desarrollo del lenguaje hablado está relacionado con la audición. La audición posibilita a los niños el aprendizaje, desarrollo intelectual y social.                            
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/61.svg', alt='') 
 
        p(data-aos="fade-down") El tamizaje auditivo neonatal es de carácter obligatorio y universal. Dadas las limitaciones del uso exclusivo de EOA, se debe preferir el uso de RATEA de rutina en todos los niños. En el caso de los recién nacidos y niños con alto riesgo de pérdida auditiva deben utilizarse de forma combinada. Un ejemplo de este tamizaje auditivo se puede observar en el esquema a continuación:         
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.png', alt='') 

    .titulo-sexto.color-acento-contenido(data-aos="fade-right") 
      h5 Figura 5.
      span Tamizaje auditivo
    .bg16.mb-5
      .row.justify-content-center.align-items-center      
        .col-lg-10    
          img.img-a.img-t.mb-5.pt-5(data-aos="zoom-in")(src='@/assets/curso/temas/63.svg', alt='Esquema de atenciones para el tamizaje auditivo en un recién nacido con alto y/o bajo riesgo de pérdida auditiva.') 

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-contenido.bgv.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Programa de Tamizaje Neonatal en Colombia
                  p(data-aos="fade-down").mb-0 Para ampliar más información sobre el tamizaje neonatal, consultar el siguiente documento del Ministerio de Salud y Protección Social “#[b Programa de Tamizaje Neonatal en Colombia, se adoptan sus Lineamientos Técnicos y Operativos y se dictan otras disposiciones] ”.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201980%20de%202019.pdf" target="_blank")
                    span Ver enlace
                    i.fas.fa-link                                            
</template>

<script>
export default {
  name: 'Tema2',
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
