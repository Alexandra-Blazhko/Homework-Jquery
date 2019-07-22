$(document).ready(function() {
    $(".main_btna, .main_btn").on("click", function() {
      $(".overlay").fadeIn("slow");
      $(".modal").animate(
          {
              height: "toggle"
          }, 3000
      );
        });
      $(".close").on("click", function() {
        $(".overlay").fadeOut("slow");
        $(".modal").animate(
            {
                height: "toggle"
            }, 3000
        );
      });
    });