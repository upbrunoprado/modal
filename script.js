$(document).ready(function () {

  $(window).on("resize", function()
  {
    if ($(window).width() < 768)
    {
      $(".circulo").css("display", "none");
      $("#DContato").css("display", "block");
      $("#DContato").attr("translateX", 0);
      $("#DContato").attr("translateY", 0);
      $("#DContato").attr("translateZ", 0);
      $("#DContato").attr("rotateY", 0);
      $("#DContato").css("transform", "translateX(0px) translateY(0) translateZ(0) rotateY(0deg)");
    }
    else
    {
      $(".circulo").css("display", "none");
      $(".circulo").attr("translateX", 0);
      $(".circulo").attr("translateY", 0);
      $(".circulo").attr("translateZ", 0);
      $(".circulo").attr("rotateY", 0);
      $(".circulo").css("transform", "translateX(0px) translateY(0) translateZ(0) rotateY(0deg)");
      $("#DInfra").css("display", "block");
    }
  });

  if ($(window).width() < 768)
    $(window).trigger('resize');

  var VTempo = null;
  $(window).on("mousewheel", function(e)
  {
    if ($(window).width() >= 768)
    {
      // Mouse
      var VSobe = e.originalEvent.wheelDelta < 0;
      var VADiv = $(".circulo");

      var VCss = null;
      var VDireita = null;
      var VTranslateX = null;
      var VTranslateY = null;
      var VTranslateZ = null;
      var VRotateY = null;

      if (VSobe)
      {
        if ($(VADiv[0]).attr("translateZ") >= 200) {
          for (let Vi = VADiv.length - 1; Vi >= 0; Vi--)
          {
            if ($(window).width() >= 768)
            //$(".background").css("transform", "scale(1." + Vi + ")");
            VDireita = Vi % 2 == 0;
            VTranslateX = $(VADiv[Vi]).attr("translateX") != undefined ? parseInt($(VADiv[Vi]).attr("translateX")) : 0;
            VTranslateY = $(VADiv[Vi]).attr("translateY") != undefined ? parseInt($(VADiv[Vi]).attr("translateY")) : 0;
            VTranslateZ = $(VADiv[Vi]).attr("translateZ") != undefined ? parseInt($(VADiv[Vi]).attr("translateZ")) : 0;
            VRotateY = $(VADiv[Vi]).attr("rotateY") != undefined ? parseInt($(VADiv[Vi]).attr("rotateY")) : 0;

            VCss = zoomIco(VSobe, VDireita, VTranslateX, VTranslateY, VTranslateZ, VRotateY);

            $(VADiv[Vi]).attr("translateX", VCss.translateX); // Horizontal
            $(VADiv[Vi]).attr("translateY", VCss.translateY); // Vertical
            $(VADiv[Vi]).attr("translateZ", VCss.translateZ); // Tamanho

            $(VADiv[Vi]).attr("rotateY", VCss.rotateY); // Rotação
            $(VADiv[Vi]).css("transform", "translateX(" + VCss.translateX + "px) translateY(" + VCss.translateY + "px) translateZ(" + VCss.translateZ + "px) rotateY(" + VCss.rotateY + "deg)");

            if (VCss.translateZ <= -200)
            {
              $(VADiv[Vi + 1]).css("opacity", "0");
            }

            if (VTranslateZ == 400) {
              switch (Vi)
              {
                case 3:
                  $("#IBackground1").css("opacity", "1");
                break;
                case 6:
                  $("#IBackground2").css("opacity", "1");
                break;
              }
            }

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
      }
      else
      {
        for (let Vi = 0; Vi < VADiv.length; Vi++)
        {
          if ($(VADiv[Vi]).css("display") == "block") 
          {
            if ($(window).width() >= 768) {
              //$(".background").css("transform", "scale(1." + Vi + ")");
            }

            VDireita = Vi % 2 == 0;
            VTranslateX = $(VADiv[Vi]).attr("translateX") != undefined ? parseInt($(VADiv[Vi]).attr("translateX")) : 0;
            VTranslateY = $(VADiv[Vi]).attr("translateY") != undefined ? parseInt($(VADiv[Vi]).attr("translateY")) : 0;
            VTranslateZ = $(VADiv[Vi]).attr("translateZ") != undefined ? parseInt($(VADiv[Vi]).attr("translateZ")) : 0;
            VRotateY = $(VADiv[Vi]).attr("rotateY") != undefined ? parseInt($(VADiv[Vi]).attr("rotateY")) : 0;

            VCss = zoomIco(VSobe, VDireita, VTranslateX, VTranslateY, VTranslateZ, VRotateY);
            //console.log('VCss', VCss)

            $(VADiv[Vi]).attr("translateX", VCss.translateX); // Horizontal
            $(VADiv[Vi]).attr("translateY", VCss.translateY); // Vertical
            $(VADiv[Vi]).attr("translateZ", VCss.translateZ); // Tamanho
            $(VADiv[Vi]).attr("rotateY", VCss.rotateY); // Rotação
            $(VADiv[Vi]).css("transform", "translateX(" + VCss.translateX + "px) translateY(" + VCss.translateY + "px) translateZ(" + VCss.translateZ + "px) rotateY(" + VCss.rotateY + "deg)");

            if (VTranslateZ == 200) {
              switch (Vi)
              {
                case 3:
                  $("#IBackground1").css("opacity", "0");
                break;
                case 6:
                  $("#IBackground2").css("opacity", "0");
                break;
              }
            }

            if (VCss.translateZ == 400 && VADiv[Vi + 1] != undefined) {
              $(VADiv[Vi + 1]).css("display", "block");
              $(VADiv[Vi + 1]).css("opacity", "1");
              $(VADiv[Vi + 1]).attr("translateX", 0);
              $(VADiv[Vi + 1]).attr("translateY", 0);
              $(VADiv[Vi + 1]).attr("translateZ", 0);
              $(VADiv[Vi + 1]).attr("rotateY", 0);
              $(VADiv[Vi + 1]).css("transform", "translateX(0px) translateY(0) translateZ(0) rotateY(0deg)");
            }
          }
        }
      }
    }

  });

  $("body").on("touchstart", function(e) {
   // e.preventDefault();
   $("body").scrollLeft(0);
   $("body").scrollTop(0);
  });

  $("body").on("touchmove", function(e) {
    //e.preventDefault();
    $("body").scrollLeft(0);
    $("body").scrollTop(0);
  });

  $("body").on("tap", function(e) {
    console.log("tap");
  });

  $("body").on("taphold", function(e) {
    console.log("swipe");
  });

  $("body").on("swipe", function(e) {
    console.log("swipe");
  });

  $("body").on("swipeleft", function(e) {
    console.log("swipeleft");
  });

  $("body").on("swiperight", function(e) {
    console.log("swiperight");
  });

  $(".circulo").on("click", function(){
    if ($(this).attr("href") != undefined)
      window.location.href = $(this).attr("href");
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

  var VRetorno = {
    translateX: PTranslateX,
    translateY: PTranslateY,
    translateZ: PTranslateZ,
    rotateY: PRotateY
  };

  return VRetorno;
}