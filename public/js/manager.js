$(document).ready(function() {
  //when submit button clicked, call storeMeme
  $(document).on("click", "#submit", storeMeme);

  function storeMeme(event) {
    console.log("test");

    //creates a new meme
    var meme = {
      name: $(".name")
        .val()
        .trim(),
      link: $(".link")
        .val()
        .trim(),
      lvl: $(".lvl")
        .val()
        .trim(),
      ac: $(".ac")
        .val()
        .trim(),
      attack_power: $(".attack-power")
        .val()
        .trim(),
      health_points: $(".health-points")
        .val()
        .trim(),
      cost: $(".cost")
        .val()
        .trim(),
      dice_value: $(".dice-value")
        .val()
        .trim()
    };

    //send to the post route and store in database
    $.ajax("/api/manager", {
      type: "POST",
      data: meme
    }).then(function(data) {
      console.log(data);
      alert("Meme added to database");
      location.reload();
    });
  }
});
