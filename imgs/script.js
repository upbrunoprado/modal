$(document).ready(function () {

  VTempo = null;
  $(window).on("mousewheel", function(e)
  {
    // Mouse
    let VSobe = e.originalEvent.wheelDelta > 0;
    let VADiv = $(".circulo");

    if (VSobe)
    {
      if ($(VADiv[0]).attr("translateZ") >= 200) {
        /*
        if (parseFloat($("#IBackground").css("zoom")) >= 0.76)
        {
          $("#IBackground").css("zoom", $("#IBackground").css("zoom") - 0.02);
          $("#IBackground").css("top", "calc(" + $("#IBackground").css("top") + " + 12px)");
        }/* */
        for (let Vi = VADiv.length - 1; Vi >= 0; Vi--) {
          $("#IBackground").css("transform", "scale(1." + Vi + ")");

          let VDireita = Vi % 2 == 0;
          let VTranslateX = $(VADiv[Vi]).attr("translateX") != undefined ? parseInt($(VADiv[Vi]).attr("translateX")) : 0;
          let VTranslateY = $(VADiv[Vi]).attr("translateY") != undefined ? parseInt($(VADiv[Vi]).attr("translateY")) : 0;
          let VTranslateZ = $(VADiv[Vi]).attr("translateZ") != undefined ? parseInt($(VADiv[Vi]).attr("translateZ")) : 0;
          let VRotateY = $(VADiv[Vi]).attr("rotateY") != undefined ? parseInt($(VADiv[Vi]).attr("rotateY")) : 0;

          let VCss = zoomIco(VSobe, VDireita, VTranslateX, VTranslateY, VTranslateZ, VRotateY);

          $(VADiv[Vi]).attr("translateX", VCss.translateX); // Horizontal
          $(VADiv[Vi]).attr("translateY", VCss.translateY); // Vertical
          $(VADiv[Vi]).attr("translateZ", VCss.translateZ); // Tamanho
          $(VADiv[Vi]).attr("rotateY", VCss.rotateY); // Rotação
          $(VADiv[Vi]).css("transform", "translateX(" + VCss.translateX + "px) translateY(" + VCss.translateY + "px) translateZ(" + VCss.translateZ + "px) rotateY(" + VCss.rotateY + "deg)");


          // Para voltar 1 de cada vez
          if (VADiv[Vi - 1] != undefined) {
            let Vj = Vi;
            if ($(VADiv[Vi - 1]).attr("translateZ") == "1000" && VCss.translateZ >= 800)
              Vi = -1;
            else
              Vi = Vj;
          }
        }
      }
    } else {
      for (let Vi = 0; Vi < VADiv.length; Vi++) {
        if ($(VADiv[Vi]).css("display") == "block") {

          $("#IBackground").css("transform", "scale(1." + Vi + ")");

          let VDireita = Vi % 2 == 0;
          let VTranslateX = $(VADiv[Vi]).attr("translateX") != undefined ? parseInt($(VADiv[Vi]).attr("translateX")) : 0;
          let VTranslateY = $(VADiv[Vi]).attr("translateY") != undefined ? parseInt($(VADiv[Vi]).attr("translateY")) : 0;
          let VTranslateZ = $(VADiv[Vi]).attr("translateZ") != undefined ? parseInt($(VADiv[Vi]).attr("translateZ")) : 0;
          let VRotateY = $(VADiv[Vi]).attr("rotateY") != undefined ? parseInt($(VADiv[Vi]).attr("rotateY")) : 0;

          let VCss = zoomIco(VSobe, VDireita, VTranslateX, VTranslateY, VTranslateZ, VRotateY);
          //console.log('VCss', VCss)

          $(VADiv[Vi]).attr("translateX", VCss.translateX); // Horizontal
          $(VADiv[Vi]).attr("translateY", VCss.translateY); // Vertical
          $(VADiv[Vi]).attr("translateZ", VCss.translateZ); // Tamanho
          $(VADiv[Vi]).attr("rotateY", VCss.rotateY); // Rotação
          $(VADiv[Vi]).css("transform", "translateX(" + VCss.translateX + "px) translateY(" + VCss.translateY + "px) translateZ(" + VCss.translateZ + "px) rotateY(" + VCss.rotateY + "deg)");


          if (VCss.translateZ == 400 && VADiv[Vi + 1] != undefined) {
            $(VADiv[Vi + 1]).css("display", "block");
            $(VADiv[Vi + 1]).attr("translateX", 0);
            $(VADiv[Vi + 1]).attr("translateY", 0);
            $(VADiv[Vi + 1]).attr("translateZ", 0);
            $(VADiv[Vi + 1]).attr("rotateY", 0);
            $(VADiv[Vi + 1]).css("transform", "translateX(0px) translateY(0) translateZ(0) rotateY(0deg)");
          }
        }
      }
    }

  });


  $("body *").on("tap", function(e) {
    console.log("tap");
  });

  $("body *").on("taphold", function(e) {
    console.log("swipe");
  });

  $("body *").on("swipe", function(e) {
    console.log("swipe");
  });

  $("body *").on("swipeleft", function(e) {
    console.log("swipeleft");
  });

  $("body *").on("swiperight", function(e) {
    console.log("swiperight");
  });

  $("#DCloud").on("click", function(){
    window.location.href = "https://dsfadsfas.com/site";
  });

});

function zoomIco(PSobe, PDireita, PTranslateX, PTranslateY, PTranslateZ, PRotateY) {
  if (PDireita) {
    if (PSobe) {
      if (PTranslateZ > 0) {
        PTranslateX -= 90;
      }
      if (PRotateY == -100)
        PRotateY = -45;
      else if (PRotateY <= -45)
        PRotateY += 45;

      PTranslateY += 50;
      if ($(window).width() <= 700) {
        PTranslateY += 50;
      }
      if ($(window).width() <= 500) {
        PTranslateY += 50;
      }

      PTranslateZ -= 200;
    } else {
      if (PTranslateZ < 1000) {
        if (PTranslateZ >= 0) {
          PTranslateX += 90;
        }
        if (PTranslateZ >= 400) {
          if (PRotateY == -100)
            PRotateY = -90;
          else if (PRotateY > -90)
            PRotateY -= 45;
          else if(PRotateY <= -90)
            PRotateY = -100;
        }

        PTranslateY -= 50;
        if ($(window).width() <= 700) {
          PTranslateY -= 50;
        }
        if ($(window).width() <= 500) {
          PTranslateY -= 50;
        }
        PTranslateZ += 200;
      }
    }
  } else {
    if (PSobe) {
      if (PTranslateZ > 0) {
        PTranslateX += 90;
      }
      if (PRotateY == 100)
        PRotateY = 90;
      else if (PRotateY >= 45)
        PRotateY -= 45;

      PTranslateY += 50;
      if ($(window).width() <= 700) {
        PTranslateY += 50;
      }
      if ($(window).width() <= 500) {
        PTranslateY += 50;
      }
      PTranslateZ -= 200;
    } else {
      if (PTranslateZ < 1000) {
        if (PTranslateZ >= 0) {
          PTranslateX -= 90;
        }
        if (PTranslateZ >= 400) {
          if (PRotateY == 100)
            PRotateY = -90;
          else if (PRotateY < 90)
            PRotateY += 45;
          else if(PRotateY >= 90)
            PRotateY = 100;
        }
        PTranslateY -= 50;
        if ($(window).width() <= 700) {
          PTranslateY -= 50;
        }
        if ($(window).width() <= 500) {
          PTranslateY -= 50;
        }
        PTranslateZ += 200;
      }
    }
  }

  let VRetorno = {
    translateX: PTranslateX,
    translateY: PTranslateY,
    translateZ: PTranslateZ,
    rotateY: PRotateY
  };

  return VRetorno;
}