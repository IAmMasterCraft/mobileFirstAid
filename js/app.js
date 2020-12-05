const updateTitle = (title) => {
    $("title").text(title);
}

const loadHome = () => {
    $("body").load("./home.html");
    updateTitle("First Aid - Home");
}

/**
 * DOM Loader
 */
const loaderElement = () => {
    const loader = `
        <div class="all">
            <img src="../images/animation.svg" alt="loader" />
        </div>
    `;
    return loader;
}

/**
 * go back
 */
const goBack = () => {
    window.history.back();
}

/**
 * Routing
 */
const getRoute = () => {
    return $(location).attr("href").split("#")[1];
}

/**
 * pageLoad
 */
const loadPage = (pageName) => {
    //update title
    updateTitle(`First Aid - ${pageName.toUpperCase().replace(/-/g, " ")}`);
    //get and set nav bar
    $.get("./includes/nav_bar.html", (response) => {
        $("body").prepend(response);
        try {
            allFunction();
        } catch (error) {}
    });
    //set loader
    $("body").html(loaderElement);
    //timeout to load content
    setTimeout(() => {
        $("body").load(`./pages/${pageName}.html`, (response, status) => {
            //get and set nav bar
            $.get("./includes/nav_bar.html", (response) => {
                $("body").prepend(response);
                allFunction();
            });
            if (status === "error") {
                $("body").load("./pages/404.html", () => {
                    //get and set nav bar
                    $.get("./includes/nav_bar.html", (response) => {
                        $("body").prepend(response);
                        try {
                            allFunction();
                        } catch (error) {}
                    });
                });
            }
        });
    }, 1000);
}

/**
 * hashChange
 */
const hashChange = () => {
    try {
        const pageName = getRoute().split("/");
        loadPage(pageName[pageName.length - 1]);
    } catch (error) {
        loadPage("home");
    }

}

//fire and startup
window.onhashchange = hashChange;