<script>
	import moment from 'moment-timezone';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const zones = moment.tz.names();
</script>

<section id="search">
	<input
		type="search"
		id="search-bar"
		placeholder="Search any location..."
		class="outline-none px-4 py-2 rounded-lg shadow-inner border border-border w-full"
		list="locations"
		on:blur={(e) => {
			const { target } = e ?? {};
			const { value } = target ?? {};
			if (value) {
				const zone = moment.tz(value);
				const GMT = zone.format('Z').replace(':00', '');
				dispatch('found', { name: value, GMT });
			}
		}}
	/>
	<datalist id="locations">
		{#each zones as zone}
			<option>{zone}</option>
		{/each}
	</datalist>
</section>
