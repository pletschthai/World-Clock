function updateTime() {
  //San Francisco

  let sanFranciscoElement = document.querySelector("#sfo");
  let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
  let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
  let sanFranciscoTime = moment().tz("America/Los_Angeles");

  sanFranciscoDateElement.innerHTML = sanFranciscoTime.format(
    "dddd, MMMM do, YYYY"
  );
  sanFranciscoTimeElement.innerHTML = sanFranciscoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Rio de Janeiro
  let rioElement = document.querySelector("#rj");
  let rioDateElement = document.querySelector("#rj .date");
  let rioTimeElement = rioElement.querySelector(".time");
  let rioDeJaneiroTime = moment().tz("America/Sao_Paulo");

  rioDateElement.innerHTML = rioDeJaneiroTime.format("dddd, MMMM do, YYYY");
  rioTimeElement.innerHTML = rioDeJaneiroTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Munich
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = document.querySelector("#berlin .date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTime.format("dddd, MMMM do, YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Shanghai
  let shanghaiElement = document.querySelector("#shanghai");
  let shanghaiDateElement = document.querySelector("#shanghai .date");
  let shanghaiTimeElement = shanghaiElement.querySelector(".time");
  let shanghaiTime = moment().tz("Asia/Shanghai");

  shanghaiDateElement.innerHTML = shanghaiTime.format("dddd, MMMM do, YYYY");
  shanghaiTimeElement.innerHTML = shanghaiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
