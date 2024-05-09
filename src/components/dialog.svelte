<script>
	export let title = 'Insert a title here';
</script>

<section
	class="fixed w-dvw h-dvh bg-black bg-opacity-30 top-0
left-0 grid place-content-center"
	{...$$restProps}
>
	<section
		class="w-[28rem] bg-primary-foreground rounded-md h-[80dvh] flex flex-col p-4 justify-start"
	>
		<h2 class="font-semibold text-2xl text-center">{title}</h2>
		<br />
		<section class="grow">
			<slot name="content" />
		</section>
		<section class="w-full flex justify-between h-16">
			<slot name="footer" />
		</section>
	</section>
</section>
