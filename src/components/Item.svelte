<script>
    import Card from './Card.svelte';

    const url = 'https://api.thecatapi.com/v1/images/search';

    let imgurl;

    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        imgurl = data[0].url;
    })

</script>

<Card>
    <header>
        <h2>Todays cat is: </h2>
    </header>
    <div class="img-container">
        <img src={imgurl} alt='cat img' />
    </div>
</Card>

<style>
    header {
        max-width: 400px;
        margin:auto;
    }
    .img-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    img {
    max-width: 50%;
    height: auto;
    }
</style>