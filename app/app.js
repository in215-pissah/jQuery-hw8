var homeContent = `<div class="hero"></div>
        <div class="content">
          <h1>
            HOME
            <hr />
          </h1>
          <div class="productS">
            <div class="product">
               <div class="prod-image"></div>
              <div class="prod-desc">
                <h3>Big City</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
              </div>
            </div>
          </div>
        </div>`;
var aboutContent = `<div class="hero"></div>
        <div class="content">
          <h1>
            ABOUT
            <hr />
          </h1>
          <div class="productS">
            <div class="product">
              <div class="prod-image"></div>
              <div class="prod-desc">
                <h3>Big City</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
              </div>
            </div>
          </div>
        </div>`;
var productContent = `<div class="hero"></div>
        <div class="content">
          <h1>
            HOME
            <hr />
          </h1>
          <div class="productS">
            <div class="product">
              <div class="prod-image"></div>
              <div class="prod-desc">
                <h3>Big City</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
              </div>
            </div>
            <div class="product">
              <div class="prod-image"></div>
              <div class="prod-desc">
                <h3>Big City</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
              </div>
            </div>
            <div class="product">
              <div class="prod-image"></div>
              <div class="prod-desc">
                <h3>Big City</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo accusantium veritatis sint distinctio modi! Est
                  nobis mollitia assumenda. Recusandae ad quis architecto quod.
                  Voluptatibus unde asperiores quam quis vero atque explicabo
                  dolorem, eligendi, est soluta iusto eius veniam. Minima magnam
                  autem, libero officiis culpa nemo aliquam in. Maiores,
                  recusandae? Enim.
                </p>
              </div>
            </div>
          </div>
        </div>`;
var contactContent = `<div class="hero"></div>
        <div class="content">
          <h1>
            CONTACT
            <hr />
          </h1>
        </div>`;

function initListerners() {
  $("nav a").click(function (e) {
    let btnID = e.currentTarget.id;
    // let contentID = btnID + "Content";
    // $("#app").html(eval(contentID));
    loadPageContent(btnID);
    // console.log("click" + btnID);
  })
}

function loadPageContent(pageName) {
  let contentID = pageName + "Content";
  $("#app").html(eval(contentID));
};

function initApp() {
  initListerners();
}

$(document).ready(function () {
  loadPageContent("home");
  initApp();
});