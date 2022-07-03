<script>
	import { caesarEncipher } from '../../ciphers/caesar-cipher/caesarEncipher';
</script>

<div class="px-3 py-2 text-justify">
	<p>Enter your text to encrypt here:</p>
	<textarea id="message" name="message" />
	<p>Please select a key to shift by:</p>
	<input type="number" id="key" name="key" min="0" max="25" />
	<p>Please note, shifting by a key greater than 25 will act as a shift from 0.</p>
	<p>Result</p>
	<textarea readonly id="ciphertext" name="ciphertext" />
	<button on:click={() => (ciphertext.value = caesarEncipher(parseInt(key.value), message.value))}
		>Encrypt</button
	>
</div>
