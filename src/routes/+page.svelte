<script>
	import SearchBar from '../components/search-bar.svelte';
	import moment from 'moment-timezone';
	const userGuessZone = moment.tz.guess();
	const userZone = moment.tz(userGuessZone);
	const name = userZone.tz() ?? '';

	const userTimeZoneName = name.replaceAll('_', ' ').replaceAll('/', ' - ');
	const GMT = Number(userZone.format('Z').replace(':00', ''));
</script>

<svelte:head>
	<title>Homepage</title>
	<meta name="description" content="Time zones preview" />
</svelte:head>

<section class="flex relative min-h-[95dvh]">
	<section id="search-section" class="flex flex-col gap-6 relative">
		<SearchBar on:found={(val) => console.log(val.detail)} />
		<section
			id="zones-box"
			class="h-[80%] border-border border p-4 rounded-lg text-secondary flex flex-col gap-2 bg-background-foreground"
		>
			<h1 class="font-bold text-xl">Time zones</h1>
			<p class="font-thin">Here you can see the time zones of different countries</p>

			<section class="flex content-between border border-border p-4 rounded-md bg-background">
				<section class="grow">
					<h2 class="font-bold text-lg">
						{userTimeZoneName}
					</h2>

					<p class="font-extralight">Time zone: GMT{GMT}</p>
				</section>
				<section class="shrink grow-0 font-thin">
					<p class="hover:text-primary">Remove</p>
				</section>
			</section>
			<section class="flex content-between border border-border p-4 rounded-md bg-background">
				<section class="grow">
					<h2 class="font-bold text-lg">Mexico</h2>
					<p class="font-extralight">Time zone: GMT-6</p>
				</section>
				<section class="shrink grow-0 font-thin">
					<p class="hover:text-primary">Remove</p>
				</section>
			</section>
		</section>
	</section>
</section>

<style lang="postcss">
</style>
