<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo4
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Reanimación neonatal 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        .bg9.p-4.brad.mb-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 El objetivo de la reanimación neonatal no solo es evitar la muerte del recién nacido, sino también evitar las secuelas neurológicas secundarias a la asfixia al momento del nacimiento. La reanimación neonatal básica evita hasta el 30 % de las muertes de recién nacidos. Aproximadamente el 10 % de los recién nacidos requieren algún tipo de ayuda para empezar a respirar al momento de nacer, de estos el 1 % requieren reanimación avanzada.  
        p(data-aos="fade-down") La reanimación de un recién nacido se divide en cinco fases que inician con el nacimiento y la evaluación inicial. Es importante trabajar con rapidez y eficacia y asegurarse de seguir los pasos para la reanimación adecuadamente. En el diagrama a continuación los rombos indican las evaluaciones y los rectángulos indican medidas necesarias que se deben tomar. #[b.t3 Las evaluaciones se repiten al final de cada fase y determinan si se continúa con la siguiente, como se presenta a continuación:]                 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='') 
 
    .titulo-sexto.color-acento-contenido(data-aos="fade-right") 
      h5 Figura 2.
      span Diagrama de reanimación neonatal
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/34.svg', alt='Diagrama de flujo para la reanimación neonatal. Describe los pasos que se deben seguir para evaluar y reanimar a un recién nacido.')            

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-acento-contenido.bgv.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Manual de Reanimación Neonatal
                  p(data-aos="fade-down").mb-0 Para mayor información sobre las acciones a tomar durante la reanimación neonatal, consultar el “#[b Manual de Reanimación Neonatal]” de la escuela Nacional de Enfermería, el cual se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.msdmanuals.com/es-co/professional/pediatr%C3%ADa/problemas-perinatales/reanimaci%C3%B3n-neonatal" target="_blank")
                    span Ver enlace
                    i.fas.fa-link         
</template>

<script>
export default {
  name: 'Tema4',
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
