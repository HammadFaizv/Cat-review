<script>
	import Navbar from "./components/Navbar.svelte";
	import Item from "./components/Item.svelte";
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
</script>

<Navbar />
<main class='container'>
	<Item />
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>
