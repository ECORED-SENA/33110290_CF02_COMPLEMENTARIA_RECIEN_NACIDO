<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        .bg1.px-4.brad.mb-4(data-aos="flip-down") 
          .row.justify-content-center.align-items-center                  
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='') 
            .col.my-3    
              p.mb-0(data-aos="fade-down") La preparación de la vida extrauterina y la adecuada adaptación neonatal requiere que el recién nacido tenga los cuidados óptimos y necesarios encontrados en la Ruta Integral de Atención Materno Perinatal que define las intervenciones para la niña y el niño recién nacido.
        h5.t1(data-aos="fade-down") En el siguiente video se dan a conocer los temas que se abordarán en el desarrollo de este componente formativo:          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='') 

    .row.justify-content-center.align-items-center     
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/k1gTd2u4E8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
        figcaption Video. Atenciones al recién nacido en la RIAMP             

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
