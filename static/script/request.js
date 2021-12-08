
window.addEventListener('load', () => {
    let id = 1;
    const preloader = document.getElementById("preloader");
    const posts = document.getElementById("posts");
    const button = document.getElementById("add-post");
    button.addEventListener('click', async function (e) {
        button.disabled = true;
        const post_t = document.getElementById("one-post");
        const post = post_t.content.cloneNode(true);
        const post_title = post.querySelector("h3");
        const post_body = post.getElementById("post-body");
        preloader.classList.remove('disabled');
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
            if (response.ok) {
                let json = await response.json();
                console.log(json);
                if (Object.keys(json).length) {
                    post_title.innerHTML = json.title;
                    post_body.setAttribute('id', id);
                    post_body.innerHTML = json.body;
                    id = id + 1;
                } else {
                    alert("⚠ Something went wrong!");
                }
                preloader.classList.add('disabled');
                posts.insertBefore(post, preloader);
            } else {
                alert("⚠ Something went wrong!");
            }
            button.disabled = false;
        } catch (error) {
            alert("⚠ Something went wrong!");
            preloader.classList.add('disabled');     
            button.disabled = false;   
        }
    });
})
