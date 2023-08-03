<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Atención del recién nacido 
    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-4.my-3
        p(data-aos="fade-down") Las principales actividades de seguimiento del recién nacido durante los primeros cinco días del egreso son:
        .bg10.p-4.brad(data-aos="fade-right")
          ol.lista-ul.fa-ul.mb-0 
            li
              span.text-bold a.
              p.mb-0 Verificar la lactancia materna y sus dificultades. 
            li
              span.text-bold b.
              p.mb-0 Lectura de los tamizajes realizados (TSH y cardiopatía congénita, auditivo y de otros errores innatos del metabolismo).
            li
              span.text-bold c.
              p.mb-0 Repetir tamizaje cardiopatía compleja con Sao2 pre y post ductales. 
            li.mb-0
              span.text-bold d.
              p.mb-0 Expedición y registro del carné único de salud infantil si no se entregó en el momento del egreso hospitalario.        
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.svg', alt='') 

      .col-lg-4.my-3(data-aos="fade-left")
        .d-grid.h-100
          .crd.bg11.brad.p-3.px-4(data-aos="fade-down")
            .crd__text
              p.mb-5 Ahora bien, es importante el seguimiento de los recién nacidos a término con bajo peso al nacer, por el riesgo de presentar problemas de desarrollo durante el seguimiento a los de 2 y 5 años y cuando son adultos. Aunque puede haber poca diferencia en el cociente de inteligencia, el desempeño escolar está afectado debido a desórdenes en la conducta, alteraciones visoespaciales, visosmotores y del aprendizaje.
              img.img-t.fr(src='@/assets/curso/temas/35.svg' alt='')       

    p(data-aos="fade-down") Con los recién nacidos de bajo peso al nacer y los niños prematuros se manejan las siguientes definiciones:

    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-4.my-3.pe-0
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='')            
      .col-lg-8.my-3.ps-0
        .tarjeta-avatar-b.mb-3(data-aos="fade-left")
          .tarjeta-avatar-b__img.img-l 
            img.img-w(src='@/assets/curso/temas/37.svg' alt='')
          .tarjeta.tarjeta--azul.text-l.bg12
            .p-4 
              p.mb-0 #[b a. RN PT] es el recién nacido que nace antes de la semana 37 de edad gestacional.  
        .tarjeta-avatar-b.mb-3(data-aos="fade-right")
          .tarjeta-avatar-b__img.img-l 
            img.img-w(src='@/assets/curso/temas/37.svg' alt='')
          .tarjeta.tarjeta--azul.text-l.bg12
            .p-4 
              p.mb-0 #[b b. RN AT] es el recién nacido que nace entre las semanas 37 y 42 de edad gestacional.   
        .tarjeta-avatar-b.mb-3(data-aos="fade-left")
          .tarjeta-avatar-b__img.img-l 
            img.img-w(src='@/assets/curso/temas/37.svg' alt='')
          .tarjeta.tarjeta--azul.text-l.bg12
            .p-3
              p.mb-0 #[b c. RN con PB] es el recién nacido con peso menor a 2500 gramos, independiente de la edad gestacional (EG) o un recién nacido con peso al nacer por debajo del percentil 10 de crecimiento o con menos de 2 DS. 
        .tarjeta-avatar-b.mb-3(data-aos="fade-right")
          .tarjeta-avatar-b__img.img-l 
            img.img-w(src='@/assets/curso/temas/37.svg' alt='')
          .tarjeta.tarjeta--azul.text-l.bg12
            .p-4 
              p.mb-0 #[b d. RNAT] con PB es el recién nacido que nace entre las semanas 37 y las 42 semanas de edad gestacional con peso menor a 2500 gramos.                                  
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/38.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los RNPT con Peso bajo para la edad gestacional (PBEG) tienen más resultados anormales del neuro desarrollo comparado con los RNAT con PBEG (24-27).  RN con BPEG con crecimiento con reatrapaje postnatal pobre, están en riesgo de tener menores IQs y más problemas psicológicos (desórdenes de conducta, problemas emocionales). Tienen puntajes bajos en lectura y matemáticas y las funciones cognoscitivas de ejecución están reducidas, sobre todo en RN que mostraron anormalidades en el flujo sanguíneo fetal de la arteria aórtica o umbilical.  

    .row.justify-content-center.align-items-center   
      .col-lg-10.bg13(data-aos="fade-left")
        .row.justify-content-center.align-items-center
          .col-lg-2.p-0
            img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg', alt='')            
          .col-lg-10.p-4.j   
            p(data-aos="fade-down").mb-0 En un estudio en EE.UU. (1995 - 1999) compararon los RN BPEG como una entidad homogénea con los RN sin BPEG, la mortalidad neonatal, la mortalidad postnatal y la mortalidad infantil fueron significativamente más altas en los RN BPEG. La magnitud de riesgo más grande se observó entre los RN con BPEG que eran prematuros.

</template>

<script>
export default {
  name: 'Tema5',
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
