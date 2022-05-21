<script>
	import Navigation from '../components/Navigation.svelte';
	import Header from '../components/Header.svelte';
	import { caesarEncipher } from '../ciphers/caesar-cipher/caesarEncipher';
</script>

<svelte:head>
	<title>Caesar Cipher</title>
</svelte:head>

<Header />
<h1>Caesar Cipher</h1>
<Navigation />

<div>
	<p>Enter your text to encrypt here:</p>
	<textarea id="message" name="message" />
	<p>Please select a key to shift by:</p>
	<input type="number" id="key" name="key" min="0" max="25" />
	<p>Result</p>
	<textarea id="output" readonly />
	<button on:click={() => caesarEncipher(key.value, message.value)}>Encrypt</button>
</div>
