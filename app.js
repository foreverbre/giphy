const $gifArea = $('#gif-area');
const $searchInput = $('#search');

//add gif
function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomId = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
            src: res.data[randomId].images.orininal.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
};
/* handle form submission: clear search box & make ajax call */
$('form').on('submit', async function (event) {
    event.preventDefault();

    let searchTearm = $searchInput.val();
    $searchInput.val('');

    const response = await axios.get('http://api.giphy.com/v1/gifs/search',
        {
            params: {
                q: searchTearm,
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        });
});
//remove 
$("#remove").on("click",function () {
    $gifArea.empty();
})