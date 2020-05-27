//compile body of template
var template = Handlebars.compile(
  document.getElementById("hbs_section").innerHTML
);

//function for initializing slick carousel
const slickInit = () => {
  $("#slider1").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}

//method for loading and mapping JSON data to HBS template
const loadDataAndMap = async () => {
  try {
    var response = await fetch("./data/data.json");
    response = await response.json();
    var compiledData = template(response);
    document.getElementById("hbs_section").innerHTML = compiledData;
    //calling method for loading slick carousel after data binding
    slickInit();
  } catch (err) {
    console.log(err);
  }
};

loadDataAndMap();
