export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: "Waveless",
	description:
		"Beautifully designed components built with Radix UI and Tailwind CSS.",
	mainNav: [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Foo",
			href: "/",
		}
	],
	links: {
		twitter: "https://twitter.com/Atharane",
		github: "https://github.com/Atharane/waveless",
		docs: "https://ui.shadcn.com",
	},
};
