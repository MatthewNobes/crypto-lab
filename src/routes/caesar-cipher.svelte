<script>
	import Navigation from '../components/Navigation.svelte';
	import Header from '../components/Header.svelte';
	const encrypt = () => {
		console.log('trigger');
	};
</script>

<svelte:head>
	<title>Caesar Cipher</title>
</svelte:head>

<Header />
<h1>Caesar Cipher</h1>
<Navigation />

<div>
	<p>Enter your text to encrypt here:</p>
	<textarea id="input" />
	<textarea id="output" readonly />
	<button on:click={encrypt}>Encrypt</button>
</div>
