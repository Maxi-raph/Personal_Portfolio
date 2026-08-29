import { r as __toESM } from "../_runtime.mjs";
import { I as require_react, _ as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { p as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as SiNextdotjs, c as SiTailwindcss, d as FaGithub, i as SiJavascript, l as SiTypescript, m as FaTwitter, n as SiGit, o as SiNodedotjs, r as SiHtml5, s as SiReact, t as SiFigma, u as FaEnvelope } from "../_libs/react-icons.mjs";
import { a as AnimatedLink, i as useNav, r as TechStack } from "./router-rR48cy_p.mjs";
import { t as AnimatedButton } from "./AnimatedButton-CADEhydd.mjs";
import { t as projectsArr } from "./projectsArr-Bo2aMvh4.mjs";
import { t as ProjectCard } from "./ProjectCard-Dbg6WFah.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BsRhuOAi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FeaturedProjects = () => {
	const featuredProjects = projectsArr.filter((p) => p.featured).slice(0, 3).sort((a, b) => Number(new Date(b.createdAt).getTime()) - Number(new Date(a.createdAt).getTime()));
	const SectionRef = (0, import_react.useRef)(null);
	const [isVisible, setIsVisible] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (!SectionRef.current) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setIsVisible(true);
			});
		}, { threshold: .1 });
		observer.observe(SectionRef.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `page-wrap transition duration-1000
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`,
		ref: SectionRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent-text mb-6 text-[11px]",
				children: "// SELECTED WORK"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-between gap-4 items-center mt-2 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bold text-text-primary text-2xl md:text-3xl! lg:text-4xl!",
					children: "Featured Projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
					classes: "text-accent-primary text-xs font-bold hover:text-accent-hover hover:scale-110 transition",
					route: "/projects",
					func: () => void 0,
					children: ["All Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "inline-block ml-1",
						size: 14
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: featuredProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					title: project.title,
					img: void 0,
					id: Number(project.id),
					route: project.route,
					params: { projectId: String(Number(project?.id)) },
					stacks: project.stacks,
					desc: project.desc
				}, project.title))
			})
		]
	}) });
};
var HeroSection = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: {
			opacity: 0,
			y: 30
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `hidden md:flex gap-3 mt-34 page-wrap`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:w-[58%] lg:w-[65%]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 w-full items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block rounded-full w-2 h-2 bg-accent-primary shadow-3xl shadow-accent-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-text-muted leading-relaxed tracking-widest",
						children: "AVAILABLE FOR WORK - LAGOS, NIGERIA"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-snug max-w-xl mt-6",
					children: "I build modern, fast and beautiful web experiences."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-text-muted text-sm font-normal mt-6 max-w-md leading-relaxed",
					children: "I'm Raphael — a frontend engineer crafting smooth, accessible and pixel-perfect interfaces. I care deeply about performance, usability, and the small details that make a product feel alive."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
						classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl\r\n             transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
						route: "/projects",
						func: () => void 0,
						children: ["View Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLink, {
						classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl\r\n             transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
						route: "/about",
						func: () => void 0,
						children: "Contact Me"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1 ml-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-bold text-text-primary text-3xl",
								children: "2+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-muted text-xs",
								children: "Years experience"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-[0.1px] h-10 ml-6 mr-6 bg-text-muted" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1 ml-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-bold text-text-primary text-3xl",
								children: "30+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-muted text-xs",
								children: "Projects shipped"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-[0.1px] h-10 ml-6 mr-6 bg-text-muted" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1 ml-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-bold text-text-primary text-3xl",
								children: "2+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-muted text-xs",
								children: "Happy clients"
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:w-[44%] lg:w-[35%] pt-18 pl-14 rounded-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute -top-3 -right-2 block text-[11px] text-accent-primary\r\n            bg-background w-fit p-2 rounded-2xl border border-border-default",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2",
							children: "</>"
						}), " React · Next.js · TypeScript"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "",
						alt: "",
						className: "w-90 h-104 border border-white rounded-3xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center absolute -bottom-3 -left-2 text-[13px] text-text-primary\r\n            bg-background w-fit p-3 rounded-2xl border border-border-default",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block rounded-full w-2 h-2 mr-2\r\n              bg-success shadow-3xl shadow-accent-primary" }), " Open to opportunities"]
					})
				]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col items-center md:hidden gap-4 mt-32 page-wrap",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2  w-full justify-center sm:justify-start items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block rounded-full w-2 h-2 bg-accent-primary shadow-3xl shadow-accent-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] text-text-muted leading-relaxed tracking-widest",
					children: "AVAILABLE FOR WORK - LAGOS, NIGERIA"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative shadow-xl rounded-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute top-4 right-4 block text-[11px] text-accent-primary\r\n            bg-background w-fit p-2 rounded-2xl border border-border-default",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2",
							children: "</>"
						}), " React · Next.js · TypeScript"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "",
						alt: "",
						className: "w-90 h-80 border border-white rounded-3xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center absolute bottom-4 left-4 text-[13px] text-text-primary\r\n            bg-background w-fit p-3 rounded-2xl border border-border-default",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block rounded-full w-2 h-2 mr-2\r\n              bg-success shadow-3xl shadow-accent-primary" }), " Open to opportunities"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl sm:text-[38px] font-extrabold  text-text-primary leading-snug sm:tracking-wide max-w-xs sm:max-w-sm",
				children: "I build modern, fast and beautiful web experiences."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-text-muted text-md font-normal mt-3 max-w-sm leading-relaxed",
				children: "I'm Raphael — a frontend engineer crafting smooth, accessible and pixel-perfect interfaces. I care deeply about performance, usability, and the small details that make a product feel alive."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
					classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl\r\n             transition bg-gray-700/30 hover:bg-accent-hover text-sm",
					route: "/projects",
					func: () => void 0,
					children: ["View Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLink, {
					classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl\r\n             transition bg-gray-700/30 hover:bg-accent-hover text-sm",
					route: "/about",
					func: () => void 0,
					children: "Contact Me"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1 ml-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-bold text-text-primary text-3xl",
							children: "2+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-text-muted text-xs",
							children: "Years experience"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-[0.1px] h-10 ml-6 mr-6 bg-text-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1 ml-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-bold text-text-primary text-3xl",
							children: "30+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-text-muted text-xs",
							children: "Projects shipped"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-[0.1px] h-10 ml-6 mr-6 bg-text-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1 ml-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-bold text-text-primary text-3xl",
							children: "2+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-text-muted text-xs",
							children: "Happy clients"
						})]
					})
				]
			})
		]
	})] });
};
function HomePage() {
	const { isOpen, setIsOpen } = useNav();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `md:hidden ${isOpen && "absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto"}`,
				onClick: () => setIsOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18 mb-18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18 mb-18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "page-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-accent-text text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block mr-2",
								children: "//"
							}), " ABOUT ME"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-3xl lg:text-4xl font-bold text-text-primary max-w-md md:max-w-sm lg:max-w-md",
							children: "Good design isn't just how it looks — it's how it works, performs, and feels."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 mt-4 md:mt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-muted text-sm",
								children: "I'm Raphael Onwujekwe — a frontend engineer based in Lagos with 2+ years building fast, accessible, and carefully crafted web products. I believe the best interfaces are invisible: they guide users naturally without getting in the way."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-muted text-sm",
								children: "Currently exploring: generative UI, React Server Components, and pushing the edges of what CSS can do. When I'm not coding, I sketch UI concepts, and collect design references obsessively."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLink, {
									route: "/",
									classes: "py-2 px-4 text-xs font-semibold rounded-xl shadow-md\n              transition shadow-gray-700 shadow-md bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm",
									func: () => null,
									children: "Full Bio"
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18 mb-18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-accent-text text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block mr-2",
							children: "//"
						}), " TECH STACK"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold text-text-primary max-w-md",
						children: "Tools I work with"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {
							techStack: [
								{
									name: "HTML",
									icon: SiHtml5,
									color: "#E34F26"
								},
								{
									name: "CSS / Tailwind",
									icon: SiTailwindcss,
									color: "#06B6D4"
								},
								{
									name: "JavaScript",
									icon: SiJavascript,
									color: "#F7DF1E"
								},
								{
									name: "TypeScript",
									icon: SiTypescript,
									color: "#3178C6"
								},
								{
									name: "React",
									icon: SiReact,
									color: "#61DAFB"
								},
								{
									name: "Next.js",
									icon: SiNextdotjs,
									color: "#000000"
								},
								{
									name: "Framer Motion",
									icon: SiFigma,
									color: "#F24E1E"
								},
								{
									name: "Figma",
									icon: SiFigma,
									color: "#F24E1E"
								},
								{
									name: "Git / GitHub",
									icon: SiGit,
									color: "#F05032"
								},
								{
									name: "Node.js",
									icon: SiNodedotjs,
									color: "#339933"
								}
							],
							containerClass: `flex flex-wrap items-center gap-3 mt-9
                transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-500`,
							classes: "block bg-surface py-2 px-4 rounded-xl text-text-secondary\n                text-sm font-bold border border-text-muted shadow-gray-800 shadow-md\n                transition-all"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18 mb-18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-accent-text text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block mr-2",
									children: "//"
								}), "CONTACT"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl md:text-3xl! font-bold text-text-primary max-w-md md:max-w-sm lg:max-w-lg",
								children: "Have a project in mind? Let's build something great."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-secondary text-sm leading-6",
								children: "I'm currently open to freelance and full-time opportunities. Whether it's a new product, a UI overhaul, or a collaboration — I'd love to hear from you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:flex flex-wrap items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "",
										target: "_blank",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedButton, {
											classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl cursor-pointer\n              transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
											func: () => null,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaEnvelope, { className: "shrink-0" }), " Get In Touch"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "",
										target: "_blank",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedButton, {
											classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl cursor-pointer\n              transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
											func: () => null,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTwitter, { className: "shrink-0" }), " Twitter"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "",
										target: "_blank",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedButton, {
											classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl cursor-pointer\n              transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
											func: () => null,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGithub, { className: "shrink-0" }), " Github"]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "block md:hidden text-text-muted w-full h-0.5" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:text-end gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between md:flex-col md:justify-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-text-muted text-xs",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-text-primary text-xs",
									children: "onwujekwechibuzor@gmail.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between md:flex-col md:justify-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-text-muted text-xs",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-text-primary text-xs",
									children: "Lagos, Nigeria (Remote, OK)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between md:flex-col md:justify-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-text-muted text-xs",
									children: "Availability"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-text-primary text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block rounded-full w-2 h-2 mr-2\n              bg-success shadow-3xl shadow-accent-primary" }), " Available now"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "block md:hidden text-text-muted w-full h-0.5 mt-4" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 md:hidden w-full gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "",
								target: "_blank",
								className: "col-span-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedButton, {
									classes: "w-full flex gap-2 items-center justify-center py-2.5 px-6 rounded-xl cursor-pointer\n            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
									func: () => null,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaEnvelope, { className: "shrink-0" }), " Get In Touch"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "",
								target: "_blank",
								className: "col-span-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedButton, {
									classes: "w-full flex gap-2 items-center justify-center py-2.5 px-6 rounded-xl cursor-pointer\n            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
									func: () => null,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTwitter, { className: "shrink-0" }), " Twitter"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "",
								target: "_blank",
								className: "col-span-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedButton, {
									classes: "w-full flex gap-2 items-center justify-center py-2.5 px-6 rounded-xl cursor-pointer\n            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md",
									func: () => null,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGithub, { className: "shrink-0" }), " Github"]
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10" })
		]
	});
}
//#endregion
export { HomePage as component };
