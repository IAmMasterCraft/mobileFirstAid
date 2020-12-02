const updateTitle = (title) => {
    $("title").text(title);
}

const loadHome = () => {
    $("body").load("./home.html");
    updateTitle("First Aid &mdash; Home");
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
    $("body").load(`./pages/${pageName}.html`, (response, status) => {
        //update title
        updateTitle(`First Aid - ${pageName.toUpperCase().replace(/-/g, " ")}`);
        //get and set nav bar
        $.get("./includes/nav_bar.html", (response) => {
            $("body").prepend(response);
        });
        //get and set footer
        $.get("./includes/footer.html", (response) => {
            $("body").append(response);
        });
        //get and set navigator
        // $.get("./includes/navigator.html", (response) => {
        //     $("body").append(response);
        // });
        if (status === "error") $("body").load("./pages/404.html");
    });
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